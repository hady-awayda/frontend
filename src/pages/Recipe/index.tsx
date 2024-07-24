import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import RecipeBody from "../../components/Structural/Recipe";
import { CommentProps, RecipeProps } from "../../Interfaces/Recipe";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getRecipeById } from "../../data/remote/recipes";
import Comments from "../../components/Structural/Comments";
import CommentForm from "../../components/Cards/Comment";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeProps>();
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const data = await getRecipeById(id);
          setRecipe(data[0]);
        } catch (error: any) {
          console.error(error.message);
        }
      };

      const fetchComments = async () => {
        try {
          const data = await getComments(id);
          setComments(data);
        } catch (error: any) {
          console.error(error.message);
        }
      };

      fetchRecipe();
      fetchComments();
    }
  }, [id]);

  console.log(comments);

  return (
    <>
      <Navbar />
      {recipe ? <RecipeBody {...recipe} /> : <p>Recipe not found</p>}
      <div className="p-16">
        <h2 className="text-2xl font-bold mb-4">
          Total Comments: {comments.length}
        </h2>
        {comments.length > 0 ? (
          comments.map((comment) => <Comments key={comment.id} {...comment} />)
        ) : (
          <p>No comments</p>
        )}
        <CommentForm recipeId={id} />
      </div>
      <Footer />
    </>
  );
};

export default RecipePage;
