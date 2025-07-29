 
 import {useRecipeStore} from "./recipeStore"
 import { useMemo } from "react";
 const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  const favoriteRecipes = useMemo(() => {
    return favoritesIds.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);
  }, [favoritesIds, recipes]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-pink-600 mb-3">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p className="text-sm text-gray-500">No favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="mb-3">
            <h3 className="font-medium">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
 export default FavoritesList;