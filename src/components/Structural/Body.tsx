import { useEffect, useState } from "react";
import { getRecipes } from "../../data/remote/recipes";
import RecipeCard from "../Cards/Recipe";
import { RecipeCardProps } from "../../Interfaces/Recipe";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
};

export default Body;
