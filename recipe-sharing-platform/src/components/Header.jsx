import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-green-900 text-beige-100 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        🍴 Recipe Sharing
      </Link>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
        <Link to="/add" className="hover:text-yellow-200 transition">Add Recipe</Link>
      </nav>
    </header>
  );
}
