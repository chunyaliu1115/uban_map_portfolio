import { useCallback, useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { notifyNewComment } from "@/lib/comment-notify.functions";
import { commentsCopy, type Lang } from "@/lib/i18n";
import { PostStats } from "@/components/PostStats";

type Comment = {
  id: string;
  parent_id: string | null;
  author_name: string;
  body: string;
  is_owner: boolean;
  created_at: string;
};

export function CommentBoard({ threadKey, lang }: { threadKey: string; lang: Lang }) {
  const c = commentsCopy[lang];
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyBody, setReplyBody] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editBody, setEditBody] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const notify = useServerFn(notifyNewComment);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("post_comments")
      .select("id,parent_id,author_name,body,is_owner,created_at")
      .eq("thread_key", threadKey)
      .order("created_at", { ascending: true });
    setComments((data as Comment[] | null) ?? []);
    setLoading(false);
  }, [threadKey]);

  useEffect(() => {
    setLoading(true);
    void load();
  }, [load]);

  useEffect(() => {
    let active = true;

    const check = async (uid: string | undefined) => {
      if (!uid) {
        if (active) setIsOwner(false);
        return;
      }
      const { data: admin } = await supabase.rpc("has_role", {
        _user_id: uid,
        _role: "admin",
      });
      if (active) setIsOwner(!!admin);
    };

    void supabase.auth.getSession().then(({ data }) => check(data.session?.user.id));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      void check(session?.user.id);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function submit(text: string, parentId: string | null, authorName: string) {
    if (!text.trim()) return;
    setSending(true);
    setError(null);
    const { data: inserted, error: err } = await supabase
      .from("post_comments")
      .insert({
        thread_key: threadKey,
        parent_id: parentId,
        author_name: authorName.trim().slice(0, 60) || c.anonymous,
        body: text.trim().slice(0, 2000),
      })
      .select("id")
      .maybeSingle();
    setSending(false);
    if (err) {
      setError(c.error);
      return;
    }
    if (inserted?.id) {
      void notify({ data: { commentId: inserted.id } }).catch(() => undefined);
    }
    await load();
  }

  async function remove(id: string) {
    const { error: err } = await supabase.from("post_comments").delete().eq("id", id);
    if (err) {
      setError(c.error);
      return;
    }
    await load();
  }

  async function saveEdit(id: string) {
    const text = editBody.trim().slice(0, 2000);
    if (!text) return;
    setSending(true);
    setError(null);
    const { error: err } = await supabase.from("post_comments").update({ body: text }).eq("id", id);
    setSending(false);
    if (err) {
      setError(c.error);
      return;
    }
    setEditingId(null);
    setEditBody("");
    await load();
  }

  function ownerControls(m: Comment) {
    if (!isOwner) return null;
    return (
      <>
        <button
          type="button"
          onClick={() => {
            setEditingId(editingId === m.id ? null : m.id);
            setEditBody(m.body);
          }}
          className="font-mono text-[10px] tracking-[0.12em] text-muted-ink transition-colors hover:text-teal"
        >
          {c.edit}
        </button>
        <button
          type="button"
          onClick={() => void remove(m.id)}
          className="font-mono text-[10px] tracking-[0.12em] text-muted-ink transition-colors hover:text-rose"
        >
          {c.delete}
        </button>
      </>
    );
  }

  function editor(m: Comment) {
    if (editingId !== m.id) return null;
    return (
      <div className="mt-3 grid gap-2">
        <textarea
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          rows={3}
          maxLength={2000}
          className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-[14px] outline-none focus:border-teal"
        />
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setEditBody("");
            }}
            className="font-mono text-[10px] tracking-[0.12em] text-muted-ink transition-opacity hover:opacity-70"
          >
            {c.cancel}
          </button>
          <button
            type="button"
            disabled={sending}
            onClick={() => void saveEdit(m.id)}
            className="rounded-full bg-teal px-4 py-1.5 font-mono text-[10px] tracking-[0.15em] text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
          >
            {sending ? c.sending : c.save}
          </button>
        </div>
      </div>
    );
  }

  const roots = comments.filter((m) => !m.parent_id);
  const repliesOf = (id: string) => comments.filter((m) => m.parent_id === id);

  const dateLabel = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === "zh" ? "zh-TW" : lang === "fr" ? "fr-FR" : "en-GB");

  return (
    <>
    <PostStats threadKey={threadKey} lang={lang} />
    <section className="mt-8 border-t border-line pt-8">
      <p className="font-mono text-[10px] tracking-[0.2em] text-teal">{c.eyebrow}</p>
      <h4 className="mt-2 font-serif text-xl tracking-tight sm:text-2xl">{c.heading}</h4>
      <p className="mt-1 text-[13px] text-muted-ink">{c.hint}</p>

      <div className="mt-6 space-y-5">
        {loading ? (
          <p className="font-mono text-[11px] tracking-[0.12em] text-muted-ink">{c.loading}</p>
        ) : roots.length === 0 ? (
          <p className="text-[13px] text-muted-ink">{c.empty}</p>
        ) : (
          roots.map((m) => (
            <article key={m.id} className="rounded-xl bg-teal-soft/20 p-4 ring-1 ring-line">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-[16px] leading-tight">{m.author_name}</span>
                {m.is_owner ? (
                  <span className="rounded-full bg-teal/15 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-teal">
                    {c.ownerBadge}
                  </span>
                ) : null}
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted-ink">
                  {dateLabel(m.created_at)}
                </span>
              </div>
              <p className="mt-2 whitespace-pre-line break-words text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">
                {m.body}
              </p>

              <div className="mt-2 flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setReplyTo(replyTo === m.id ? null : m.id);
                    setReplyBody("");
                  }}
                  className="font-mono text-[10px] tracking-[0.12em] text-teal transition-opacity hover:opacity-70"
                >
                  {c.reply}
                </button>
                {ownerControls(m)}
              </div>
              {editor(m)}


              {repliesOf(m.id).length > 0 ? (
                <ul className="mt-4 space-y-3 border-l border-line pl-4">
                  {repliesOf(m.id).map((r) => (
                    <li key={r.id}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-serif text-[15px] leading-tight">{r.author_name}</span>
                        {r.is_owner ? (
                          <span className="rounded-full bg-teal/15 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-teal">
                            {c.ownerBadge}
                          </span>
                        ) : null}
                        <span className="font-mono text-[10px] tracking-[0.1em] text-muted-ink">
                          {dateLabel(r.created_at)}
                        </span>
                      </div>
                      <p className="mt-1 whitespace-pre-line break-words text-justify text-[13.5px] leading-relaxed text-muted-ink sm:text-left">
                        {r.body}
                      </p>
                      <div className="mt-1 flex gap-4">{ownerControls(r)}</div>
                      {editor(r)}
                    </li>
                  ))}
                </ul>
              ) : null}

              {replyTo === m.id ? (
                <div className="mt-4 grid gap-2">
                  <textarea
                    value={replyBody}
                    onChange={(e) => setReplyBody(e.target.value)}
                    rows={3}
                    maxLength={2000}
                    placeholder={c.replyPlaceholder}
                    className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-[14px] outline-none focus:border-teal"
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      disabled={sending}
                      onClick={async () => {
                        await submit(replyBody, m.id, isOwner ? c.ownerName : name);
                        setReplyBody("");
                        setReplyTo(null);
                      }}
                      className="rounded-full bg-teal px-4 py-1.5 font-mono text-[10px] tracking-[0.15em] text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
                    >
                      {sending ? c.sending : c.send}
                    </button>
                  </div>
                </div>
              ) : null}
            </article>
          ))
        )}
      </div>

      <div className="mt-8 grid gap-3 rounded-xl bg-paper p-4 ring-1 ring-line">
        <p className="font-mono text-[10px] tracking-[0.15em] text-teal">{c.formHeading}</p>
        <input
          value={isOwner ? c.ownerName : name}
          onChange={(e) => setName(e.target.value)}
          disabled={isOwner}
          maxLength={60}
          placeholder={c.namePlaceholder}
          className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-[14px] outline-none focus:border-teal disabled:opacity-70"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          maxLength={2000}
          placeholder={c.bodyPlaceholder}
          className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-[14px] outline-none focus:border-teal"
        />
        {error ? <p className="text-[12px] text-rose">{error}</p> : null}
        <div className="flex justify-end">
          <button
            type="button"
            disabled={sending || !body.trim()}
            onClick={async () => {
              await submit(body, null, isOwner ? c.ownerName : name);
              setBody("");
            }}
            className="rounded-full bg-teal px-5 py-2 font-mono text-[10px] tracking-[0.15em] text-paper transition-opacity hover:opacity-85 disabled:opacity-40"
          >
            {sending ? c.sending : c.send}
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
