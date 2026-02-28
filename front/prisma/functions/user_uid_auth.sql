CREATE OR REPLACE FUNCTION public.request_user_uid()
RETURNS UUID
LANGUAGE sql
STABLE
SET search_path = public, pg_catalog
AS $$
  SELECT auth.uid()::uuid;
$$;