import { useEffect, useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="bg-beige-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-[#2e4d38] mb-6 text-center">
        🍲 Explore Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-200"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#2e4d38]">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
              <button className="mt-4 bg-[#2e4d38] text-beige-100 px-4 py-2 rounded-lg hover:bg-[#365d43] transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
