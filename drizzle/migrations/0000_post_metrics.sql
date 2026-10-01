CREATE TABLE public.post_metrics (
  thread_key text PRIMARY KEY CHECK (length(thread_key) BETWEEN 1 AND 60),
  views integer NOT NULL DEFAULT 0,
  likes integer NOT NULL DEFAULT 0
);
GRANT SELECT ON public.post_metrics TO anon, authenticated;
GRANT ALL ON public.post_metrics TO service_role;
ALTER TABLE public.post_metrics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read metrics" ON public.post_metrics FOR SELECT TO anon, authenticated USING (true);

CREATE OR REPLACE FUNCTION public.record_post_view(_key text)
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v integer;
BEGIN
  IF length(_key) < 1 OR length(_key) > 60 THEN RAISE EXCEPTION 'invalid key'; END IF;
  INSERT INTO post_metrics(thread_key, views) VALUES (_key, 1)
  ON CONFLICT (thread_key) DO UPDATE SET views = post_metrics.views + 1
  RETURNING views INTO v;
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION public.set_post_like(_key text, _liked boolean)
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v integer;
BEGIN
  IF length(_key) < 1 OR length(_key) > 60 THEN RAISE EXCEPTION 'invalid key'; END IF;
  INSERT INTO post_metrics(thread_key, likes) VALUES (_key, CASE WHEN _liked THEN 1 ELSE 0 END)
  ON CONFLICT (thread_key) DO UPDATE SET likes = GREATEST(0, post_metrics.likes + CASE WHEN _liked THEN 1 ELSE -1 END)
  RETURNING likes INTO v;
  RETURN v;
END $$;

GRANT EXECUTE ON FUNCTION public.record_post_view(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.set_post_like(text, boolean) TO anon, authenticated;