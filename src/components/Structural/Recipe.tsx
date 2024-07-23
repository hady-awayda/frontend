import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../data/remote/recipes";
import { RecipeCardProps } from "../../Interfaces/Recipe";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeCardProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const data = await getRecipeById(id);
          setRecipe(data);
        } catch (error: any) {
          console.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchRecipe();
    }
  }, [id]);

  console.log(recipe);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800">{recipe?.name}</h2>
            <p className="text-gray-600 text-sm mb-4">
              Created by: {recipe?.username}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Date: {new Date(recipe.createdDate).toLocaleDateString()}
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Ingredients
              </h3>
              <ul className="list-disc list-inside">{recipe?.ingredients}</ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Steps</h3>
              <div>{recipe?.steps}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
