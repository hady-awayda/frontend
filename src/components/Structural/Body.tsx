import { useEffect, useState } from "react";
import { getRecipes } from "../../data/remote/recipes";
import RecipeCard from "../Cards/Recipe";
import { RecipeCardProps } from "../../Interfaces/Recipe";
import { Link } from "react-router-dom";

const Body = () => {
  const [data, setData] = useState<RecipeCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRecipes();
        setData(result);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link
        to="/create-recipe"
        className="text-4xl font-bold border m-8 text-white hover:text-white bg-gray-800 hover:bg-gray-600 pt-4 pl-7 px-6 pb-5 rounded-full"
      >
        Create Recipe +
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-12">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
};

export default Body;
