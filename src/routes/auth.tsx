import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";
import { inboxCopy, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Owner sign-in — C-Y. Esther LIU 劉君雅" },
      {
        name: "description",
        content:
          "Private sign-in for the site owner to read visitor messages sent from the portfolio contact form.",
      },
      { property: "og:title", content: "Owner sign-in — C-Y. Esther LIU 劉君雅" },
      {
        property: "og:description",
        content: "Private sign-in for reading visitor messages.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<Lang>("zh");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  const c = inboxCopy[lang];

  useEffect(() => {
    const stored = localStorage.getItem("cg-lang");
    if (stored === "zh" || stored === "en" || stored === "fr") setLang(stored);
  }, []);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate({ to: "/" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setNote(null);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setNote(error.message);
        else navigate({ to: "/" });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) setNote(error.message);
        else if (data.session) navigate({ to: "/" });
        else setNote(c.checkEmail);
      }
    } finally {
      setBusy(false);
    }
  }

  async function onGoogle() {
    setNote(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setNote(String(result.error));
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/" });
  }

  return (
    <div className="grid min-h-screen place-items-center bg-ink px-4 py-10 font-sans text-paper sm:px-6 sm:py-16">
      <div className="w-full max-w-sm">
        <Link
          to="/"
          className="font-mono text-[10px] tracking-[0.14em] text-paper/40 transition-colors hover:text-paper/70"
        >
          {c.back}
        </Link>
        <h1 className="mt-6 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">{c.title}</h1>
        <p className="mt-2 text-sm text-paper/55">{c.subtitle}</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-1.5 block font-mono text-[10px] tracking-[0.15em] text-paper/50">
              {c.emailField}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-paper/15 bg-paper/5 px-3 py-2.5 text-sm text-paper placeholder:text-paper/30 focus:border-teal-soft/60 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-[10px] tracking-[0.15em] text-paper/50">
              {c.passwordField}
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-paper/15 bg-paper/5 px-3 py-2.5 text-sm text-paper placeholder:text-paper/30 focus:border-teal-soft/60 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-teal px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-teal-soft hover:text-ink disabled:opacity-60"
          >
            {mode === "login" ? c.login : c.register}
          </button>
        </form>

        <button
          type="button"
          onClick={onGoogle}
          className="mt-3 w-full rounded-lg border border-paper/20 px-5 py-3 text-sm transition-colors hover:bg-paper/10"
        >
          {c.google}
        </button>

        {note ? <p className="mt-4 text-sm text-rose">{note}</p> : null}

        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
          className="mt-6 text-left font-mono text-[10px] tracking-[0.12em] text-paper/45 transition-colors hover:text-paper/80"
        >
          {mode === "login" ? c.toggleToRegister : c.toggleToLogin}
        </button>
      </div>
    </div>
  );
}
