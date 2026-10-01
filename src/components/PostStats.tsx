import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Lang } from "@/lib/i18n";

const copy = {
  zh: { views: "閱讀", like: "讚", liked: "已按讚" },
  en: { views: "views", like: "Like", liked: "Liked" },
  fr: { views: "lectures", like: "J'aime", liked: "Aimé" },
} as const;

export function PostStats({ threadKey, lang }: { threadKey: string; lang: Lang }) {
  const t = copy[lang] ?? copy.en;
  const [views, setViews] = useState<number | null>(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    const likeKey = `liked:${threadKey}`;
    setLiked(localStorage.getItem(likeKey) === "1");
    const viewKey = `viewed:${threadKey}`;
    (async () => {
      if (!sessionStorage.getItem(viewKey)) {
        sessionStorage.setItem(viewKey, "1");
        await supabase.rpc("record_post_view", { _key: threadKey });
      }
      const { data } = await supabase
        .from("post_metrics")
        .select("views,likes")
        .eq("thread_key", threadKey)
        .maybeSingle();
      if (!active) return;
      setViews(data?.views ?? 0);
      setLikes(data?.likes ?? 0);
    })();
    return () => {
      active = false;
    };
  }, [threadKey]);

  async function toggle() {
    if (busy) return;
    setBusy(true);
    const next = !liked;
    const { data, error } = await supabase.rpc("set_post_like", { _key: threadKey, _liked: next });
    setBusy(false);
    if (error) return;
    setLiked(next);
    setLikes(typeof data === "number" ? data : likes);
    localStorage.setItem(`liked:${threadKey}`, next ? "1" : "0");
  }

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
      <span className="font-mono text-[11px] tracking-[0.15em] text-muted-ink">
        {views === null ? "—" : views.toLocaleString()} {t.views}
      </span>
      <button
        type="button"
        onClick={() => void toggle()}
        aria-pressed={liked}
        disabled={busy}
        className={`flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] transition-colors disabled:opacity-60 ${
          liked ? "border-teal bg-teal/10 text-teal" : "border-line text-muted-ink hover:border-teal hover:text-teal"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
          <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />
        </svg>
        {liked ? t.liked : t.like} · {likes}
      </button>
    </div>
  );
}
