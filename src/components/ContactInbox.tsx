import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { inboxCopy, type Lang } from "@/lib/i18n";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export function ContactInbox({ lang }: { lang: Lang }) {
  const c = inboxCopy[lang];
  const [signedIn, setSignedIn] = useState(false);
  const [messages, setMessages] = useState<Message[] | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session);
    });
    supabase.auth.getSession().then(({ data }) => setSignedIn(!!data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!signedIn) {
      setMessages(null);
      return;
    }
    let active = true;
    supabase
      .from("contact_messages")
      .select("id,name,email,message,created_at")
      .order("created_at", { ascending: false })
      .limit(5)
      .then(({ data }) => {
        if (active) setMessages(data ?? []);
      });
    return () => {
      active = false;
    };
  }, [signedIn]);

  async function remove(id: string) {
    await supabase.from("contact_messages").delete().eq("id", id);
    setMessages((prev) => (prev ? prev.filter((m) => m.id !== id) : prev));
  }

  if (!signedIn) {
    return (
      <Link
        to="/auth"
        className="font-mono text-[10px] tracking-[0.12em] text-paper/40 transition-colors hover:text-paper/70"
      >
        {c.signIn}
      </Link>
    );
  }

  return (
    <div className="mt-12 border-t border-paper/10 pt-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="min-w-0 font-mono text-[11px] tracking-[0.18em] text-teal-soft/80 sm:tracking-[0.25em]">{c.label}</p>
        <button
          type="button"
          onClick={() => supabase.auth.signOut()}
          className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-paper/40 transition-colors hover:text-paper/70"
        >
          {c.signOut}
        </button>
      </div>

      {messages && messages.length === 0 ? (
        <p className="mt-4 text-sm text-paper/50">{c.empty}</p>
      ) : (
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {(messages ?? []).map((m) => (
            <li key={m.id} className="rounded-xl bg-paper/5 p-4 ring-1 ring-paper/10">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                <p className="min-w-0 font-serif text-lg leading-tight">{m.name}</p>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.1em] text-paper/40">
                  {new Date(m.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-0.5 break-all font-mono text-[10px] tracking-[0.08em] text-paper/50">
                {m.email}
              </p>
              <p className="mt-3 whitespace-pre-line break-words text-sm leading-relaxed text-paper/75">
                {m.message}
              </p>
              <button
                type="button"
                onClick={() => remove(m.id)}
                className="mt-3 font-mono text-[10px] tracking-[0.12em] text-paper/35 transition-colors hover:text-rose"
              >
                {c.delete}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
