import { supabase } from "@/lib/supabase";

export async function uploadFile(
  file: File,
  folder: string
) {
  const extension = file.name.split(".").pop();

  const fileName =
    `${Date.now()}.${extension}`;

  const filePath =
    `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from("portfolio")
    .upload(filePath, file, {
      upsert: true,
    });

  if (error) {
    console.error(error);
    throw error;
  }

  const { data } = supabase.storage
    .from("portfolio")
    .getPublicUrl(filePath);

  return data.publicUrl;
}