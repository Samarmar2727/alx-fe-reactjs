import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const recommendations = recipes.filter(recipe => !favorites.includes(recipe.id));

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-blue-600 mb-3">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p className="text-sm text-gray-500">You’ve favorited all recipes!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="mb-3">
            <h3 className="font-medium">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
 export default RecommendationsList;