import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 bg-[#2e4d38] text-beige-50 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          🍴 Welcome to Recipe Sharing
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Discover, share, and enjoy delicious recipes from around the world.  
          Join our community of food lovers today!
        </p>
        <div className="space-x-4">
          <Link
            to="/recipes"
            className="bg-beige-200 text-[#2e4d38] px-6 py-3 rounded-lg font-semibold hover:bg-beige-300 transition"
          >
            Browse Recipes
          </Link>
          <Link
            to="/add"
            className="bg-transparent border border-beige-200 px-6 py-3 rounded-lg font-semibold hover:bg-beige-200 hover:text-[#2e4d38] transition"
          >
            Add Your Recipe
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-beige-100 text-[#2e4d38] py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">👩‍🍳 Easy Sharing</h3>
            <p>Share your favorite recipes with just a few clicks.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🌍 Global Recipes</h3>
            <p>Discover recipes from different cuisines around the world.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">⭐ Community Love</h3>
            <p>Get feedback, likes, and tips from fellow foodies.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2e4d38] text-beige-50 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Cook & Share?</h2>
        <Link
          to="/add"
          className="bg-beige-200 text-[#2e4d38] px-8 py-3 rounded-lg font-semibold hover:bg-beige-300 transition"
        >
          Add a Recipe Now
        </Link>
      </section>
    </div>
  );
}
