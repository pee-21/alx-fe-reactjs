import { Link } from "react-router-dom";

// Add this at the top of HomePage return:
<div className="flex justify-center mb-8">
  <Link
    to="/add-recipe"
    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
  >
    ➕ Add New Recipe
  </Link>
</div>
