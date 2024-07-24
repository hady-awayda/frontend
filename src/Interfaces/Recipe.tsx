export interface RecipeCardProps {
  id: number;
  name: string;
  ingredients: string;
  steps: string;
  createdDate: string;
  username: string;
}
export interface RecipeProps {
  name: string;
  ingredients: string;
  steps: string;
  createdDate: string;
  username: string;
}
export interface CommentProps {
  id: string;
  title: string;
  description: string;
  rating: number;
  createdDate: string;
  username: string;
}
