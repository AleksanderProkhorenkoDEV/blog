-- when execute this, in SQL editor execute /functions/user_uid
CREATE OR REPLACE FUNCTION public.request_user_uid()
RETURNS UUID
LANGUAGE sql
STABLE
SET search_path = public, pg_catalog
AS $$
  SELECT NULL::UUID; 
$$;

ALTER TABLE "Post" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Profile" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow view published posts or own posts" 
  ON "Post" 
  FOR SELECT 
  TO PUBLIC 
  USING (
    published = true 
    OR public.request_user_uid() = "authorId" 
  );

CREATE POLICY "Allow edit own post or admin" 
  ON "Post" 
  FOR UPDATE 
  TO authenticated 
  USING (
    public.request_user_uid() = "authorId"
    OR EXISTS (
      SELECT 1 FROM "Profile" p 
      WHERE p.id = public.request_user_uid() 
      AND p.role = 'ADMIN'
    )
  )
  WITH CHECK (
    public.request_user_uid() = "authorId"
    OR EXISTS (
      SELECT 1 FROM "Profile" p 
      WHERE p.id = public.request_user_uid() 
      AND p.role = 'ADMIN'
    )
  );

CREATE POLICY "Only admin can create post" 
  ON "Post" 
  FOR INSERT 
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM "Profile" p 
      WHERE p.id = public.request_user_uid() 
      AND p.role = 'ADMIN'
    )
    AND "authorId" = public.request_user_uid()
  );

CREATE POLICY "Allow delete if admin" 
  ON "Post" 
  FOR DELETE 
  TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM "Profile" p 
      WHERE p.id = public.request_user_uid() 
      AND p.role = 'ADMIN'
    )
  );

CREATE POLICY "Users can update own profile" 
  ON "Profile"
  FOR UPDATE 
  TO authenticated 
  USING ( public.request_user_uid() = id )
  WITH CHECK ( public.request_user_uid() = id );

CREATE POLICY "Anyone can view profiles" 
  ON "Profile"
  FOR SELECT 
  TO PUBLIC 
  USING (true);