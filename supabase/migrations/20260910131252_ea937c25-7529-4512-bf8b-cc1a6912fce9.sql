CREATE TABLE public.post_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_key text NOT NULL,
  parent_id uuid REFERENCES public.post_comments(id) ON DELETE CASCADE,
  author_name text NOT NULL,
  body text NOT NULL,
  is_owner boolean NOT NULL DEFAULT false,
  user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX post_comments_thread_idx ON public.post_comments (thread_key, created_at);

GRANT SELECT, INSERT ON public.post_comments TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.post_comments TO authenticated;
GRANT ALL ON public.post_comments TO service_role;

ALTER TABLE public.post_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read comments"
ON public.post_comments FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Anyone can post a comment"
ON public.post_comments FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(thread_key)) BETWEEN 1 AND 60
  AND length(trim(author_name)) BETWEEN 1 AND 60
  AND length(trim(body)) BETWEEN 1 AND 2000
);

CREATE POLICY "Only the site owner can delete comments"
ON public.post_comments FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE OR REPLACE FUNCTION public.set_comment_owner_flag()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.user_id := auth.uid();
  NEW.is_owner := auth.uid() IS NOT NULL AND public.has_role(auth.uid(), 'admin');
  RETURN NEW;
END;
$$;

CREATE TRIGGER post_comments_owner_flag
BEFORE INSERT ON public.post_comments
FOR EACH ROW EXECUTE FUNCTION public.set_comment_owner_flag();

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER post_comments_updated_at
BEFORE UPDATE ON public.post_comments
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();