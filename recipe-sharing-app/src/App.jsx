import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from "./components/RecipeList";
import AddRecipeForm from './components/AddRecipeForm'


function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800"> My Recipe App 🧑‍🍳 </h1>
      <AddRecipeForm/>
      <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
    </div>  
  );
}

export default App;
