import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from "./components/SearchBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from "./components/RecipeList";
import RecipeDetails from './components/RecipeDetails'; 
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
        <header className="bg-white shadow py-6">
          <h1 className="text-4xl font-bold text-center text-pink-600">
            My Recipe App 🧑‍🍳
          </h1>
        </header>

        <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Add Recipe Form */}
            <AddRecipeForm />

            {/* Search Bar */}
            <SearchBar />

            {/* Routes */}
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
            </Routes>
          </div>

          <aside className="space-y-6">
            <FavoritesList />
            <RecommendationsList />
          </aside>
        </main>

        <footer className="text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Samarmar's Recipe App
        </footer>
      </div>
    </Router>
  );
}

export default App;
