
-- Drop all restrictive policies on site_images and recreate as permissive
DROP POLICY IF EXISTS "Admins can delete site images" ON public.site_images;
DROP POLICY IF EXISTS "Admins can insert site images" ON public.site_images;
DROP POLICY IF EXISTS "Admins can update site images" ON public.site_images;
DROP POLICY IF EXISTS "Anyone can read site images" ON public.site_images;

CREATE POLICY "Anyone can read site images"
  ON public.site_images FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert site images"
  ON public.site_images FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update site images"
  ON public.site_images FOR UPDATE
  TO authenticated
  USING (is_admin());

CREATE POLICY "Admins can delete site images"
  ON public.site_images FOR DELETE
  TO authenticated
  USING (is_admin());

-- Drop all restrictive policies on site_content and recreate as permissive
DROP POLICY IF EXISTS "Admins can delete site content" ON public.site_content;
DROP POLICY IF EXISTS "Admins can insert site content" ON public.site_content;
DROP POLICY IF EXISTS "Admins can update site content" ON public.site_content;
DROP POLICY IF EXISTS "Anyone can read site content" ON public.site_content;

CREATE POLICY "Anyone can read site content"
  ON public.site_content FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert site content"
  ON public.site_content FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update site content"
  ON public.site_content FOR UPDATE
  TO authenticated
  USING (is_admin());

CREATE POLICY "Admins can delete site content"
  ON public.site_content FOR DELETE
  TO authenticated
  USING (is_admin());
