import { CommentProps } from "../../Interfaces/Recipe";

const Comments = ({
  id,
  title,
  description,
  rating,
  createdDate,
  username,
}: CommentProps) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="px-6 py-4">
          <h4 className="text-xl font-bold text-gray-800">{title}</h4>
          <p className="text-gray-600 mb-2">{description}</p>
          <div className="flex items-center justify-between text-gray-600 text-sm">
            <span>Rating: {rating}</span>
            <span>By: {username}</span>
          </div>
          <p className="text-sm text-gray-500">
            Date: {new Date(createdDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default Comments;
