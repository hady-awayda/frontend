import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import RecipePage from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/create-recipe" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
