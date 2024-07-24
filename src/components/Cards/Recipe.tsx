import { RecipeCardProps } from "../../Interfaces/Recipe";
import { Link } from "react-router-dom";
import Favorite from "../Buttons/Favorite";

const RecipeCard = ({
  id,
  name,
  ingredients,
  steps,
  createdDate,
  username,
}: RecipeCardProps) => {
  return (
    <>
      <div className="px-6 py-4 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-black">
        <div className="flex justify-between mb-10">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <Favorite recipeId={id} />
        </div>
        <Link to={`/recipe/${id}`} className="text-black">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Ingredients</h3>
            <ul className="list-disc list-inside">{ingredients}</ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Steps</h3>
            <div>{steps}</div>
          </div>
          <div className="flex justify-between mt-6">
            <p className="text-gray-600 text-sm mb-4">Created by: {username}</p>
            <p className="text-gray-600 text-sm mb-4">
              Date: {new Date(createdDate).toLocaleDateString()}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;
