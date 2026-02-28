-- 0002_enable_auth_wrapper: reemplaza la wrapper para que use auth.uid()
CREATE OR REPLACE FUNCTION public.request_user_uid()
RETURNS text
LANGUAGE sql
STABLE
AS $$
  SELECT auth.uid();
$$;