import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json") // ✅ fetch local JSON
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🍲 Recipe Sharing Platform
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
