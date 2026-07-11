import { supabase } from "@/lib/supabase";

export async function isAdmin(email: string) {
  const { data, error } = await supabase
    .from("admins")
    .select("*")
    .eq("email", email)
    .single();

  if (error) return false;

  return !!data;
}