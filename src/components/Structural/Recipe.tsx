import { RecipeProps } from "../../Interfaces/Recipe";

const RecipeBody = ({
  name,
  ingredients,
  steps,
  createdDate,
  username,
}: RecipeProps) => {
  return (
    <>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm mb-4">Created by: {username}</p>
          <p className="text-gray-600 text-sm mb-4">
            Date: {new Date(createdDate).toLocaleDateString()}
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Ingredients</h3>
            <ul className="list-disc list-inside">{ingredients}</ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Steps</h3>
            <div>{steps}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeBody;
