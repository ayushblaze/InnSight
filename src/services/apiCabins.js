import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error fetching cabins");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.floor(Math.random() * 10001)}-${
    newCabin.image.name
  }`.replace("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log("Path:", imagePath);

  // Create/edit cabin
  let query = supabase.from("Cabins");

  // Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  // Execute the correct query
  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error(id ? "Cabin could not be updated" : "Cabin could not be created");
  }

  // Only upload image if it's a new file (not an existing URL)
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      // Rollback if create
      if (!id) await supabase.from("Cabins").delete().eq("id", data[0].id);
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded, hence the cabin was not created/updated"
      );
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
