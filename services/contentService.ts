import { supabase } from "@/lib/supabase";

export async function getContent(section: string) {
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .eq("section", section)
    .single();

  if (error) throw error;

  return data;
}

export async function updateContent(
  section: string,
  content: any
) {
  const { error } = await supabase
    .from("content")
    .update({
      data: content,
      updated_at: new Date(),
    })
    .eq("section", section);

  if (error) throw error;
}