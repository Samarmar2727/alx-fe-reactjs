
import './App.css';
import RecipeList from "./components/RecipeList";
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🧑‍🍳 My Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
