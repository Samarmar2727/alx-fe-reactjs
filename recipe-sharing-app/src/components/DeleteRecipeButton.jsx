import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
  const confirmed = window.confirm("Are you sure you want to delete this recipe?");
  if (confirmed) {
    deleteRecipe(id);
  }

  };

  return (
    <button onClick={handleDelete} style={{ color: "white", backgroundColor: "red", padding: "5px 10px", borderRadius: "5px", border: "none" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
