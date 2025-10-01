import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">🍴 Recipes</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            
            {/* Navigation Link */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              View Recipe →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

