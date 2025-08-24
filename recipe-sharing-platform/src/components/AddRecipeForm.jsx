import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields.");
      return;
    }
    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    console.log({ title, ingredients, steps });
    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />

        <textarea
          placeholder="Ingredients (separate with commas)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded-lg h-24"
        />

        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded-lg h-32"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
