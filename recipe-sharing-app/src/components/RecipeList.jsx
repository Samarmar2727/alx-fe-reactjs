import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-pink-800">{recipe.title}</h3>
            <p className="text-pink-700 mt-2">{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
