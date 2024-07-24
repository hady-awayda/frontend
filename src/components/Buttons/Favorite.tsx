import { postFavorite } from "../../data/remote/recipes";

const Favorite = ({ recipeId }: { recipeId: string }) => {
  const handleAddToFavorites = async () => {
    try {
      await postFavorite(recipeId);
      alert("Recipe added to favorites successfully!");
    } catch (error: any) {
      console.error(error.message);
      alert("Failed to add recipe to favorites.");
    }
  };

  return (
    <button
      onClick={handleAddToFavorites}
      className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Star
    </button>
  );
};

export default Favorite;
