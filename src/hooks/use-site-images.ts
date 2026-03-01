import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Fetches admin-uploaded images from the site_images table.
 * Returns a map of section_key → file_url.
 */
export function useSiteImages() {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    supabase
      .from("site_images")
      .select("section_key, file_url")
      .then(({ data }) => {
        if (data) {
          const map: Record<string, string> = {};
          for (const row of data) {
            map[row.section_key] = row.file_url;
          }
          setImages(map);
        }
      });
  }, []);

  return images;
}
