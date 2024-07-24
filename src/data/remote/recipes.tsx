import axios from "axios";

export async function getRecipes() {
  const { data } = await axios.get("http://localhost:80/api/recipes");
  return data.data;
}

export async function getRecipeById(id: string) {
  const { data } = await axios.get(`http://localhost:80/api/recipes?id=${id}`);
  return data.data;
}

export async function getComments(id: string) {
  const { data } = await axios.get(
    `http://localhost:80/api/comments?recipe_id=${id}`
  );
  return data.data;
}

export async function postComment(
  recipe_id: string,
  title: string,
  description: string,
  rating: number,
  user_id: string
) {
  try {
    console.log(`http://localhost:80/api/comments?recipe_id=${recipe_id}`);
    await axios.post(
      `http://localhost:80/api/comments?recipe_id=${recipe_id}`,
      {
        title,
        description,
        rating,
        user_id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
