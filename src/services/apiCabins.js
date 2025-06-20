import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error fetching cabins");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
  .from('Cabins')
  .delete()
  .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
