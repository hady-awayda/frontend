import axios from "axios";

export async function getRecipes() {
  const { data } = await axios.get("http://localhost:80/api/recipes");
  return data.data;
}

export async function getRecipeById(id: string ) {
  const { data } = await axios.get(`http://localhost:80/api/recipes?id=${id}`);
  return data.data;
}
