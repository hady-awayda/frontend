import { useState } from "react";
import { postComment } from "../../data/remote/recipes";
import { getIdFromJWT } from "../../data/local/JWTId";

const CommentForm = (id: { id: string }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postComment(id.id, title, description, rating);

    setTitle("");
    setDescription("");
    setRating(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-10 mt-20 w-full"
    >
      <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          min="0"
          max="5"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
