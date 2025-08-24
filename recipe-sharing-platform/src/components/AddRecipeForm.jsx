import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState(""); 
  const [errors, setErrors] = useState({}); 

  
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    const ingArr = ingredients
      .split(/,|\n/)         
      .map((s) => s.trim())
      .filter(Boolean);

    if (ingArr.length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Preparation steps are required.";
    }

    return { newErrors, ingArr };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newErrors, ingArr } = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const payload = {
      title: title.trim(),
      ingredients: ingArr,
      instructions: instructions
        .split(/\n/)
        .map((s) => s.trim())
        .filter(Boolean),
    };

    console.log("New recipe:", payload);
    alert("Recipe submitted successfully!");

    // reset
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-[#2e4d38]">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#2e4d38]/30"
          />
          {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <textarea
            placeholder="Ingredients (separate with commas or new lines)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded-lg h-24 focus:outline-none focus:ring focus:ring-[#2e4d38]/30"
          />
          {errors.ingredients && (
            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <textarea
            placeholder="Preparation Steps (one step per line)"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border rounded-lg h-32 focus:outline-none focus:ring focus:ring-[#2e4d38]/30"
          />
          {errors.instructions && (
            <p className="text-red-600 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#2e4d38] text-[#f5f5dc] py-2 rounded-lg hover:bg-[#24402f] transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
