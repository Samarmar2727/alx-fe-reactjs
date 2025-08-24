import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mt-8 mb-12">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-[#2e4d38] mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold text-[#2e4d38] mb-3">📝 Ingredients</h2>
      <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-[#2e4d38] mb-3">👩‍🍳 Instructions</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link
        to="/"
        className="mt-6 inline-block bg-[#2e4d38] text-beige-100 px-5 py-2 rounded-lg hover:bg-[#365d43] transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
