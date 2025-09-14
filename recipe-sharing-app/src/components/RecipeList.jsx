import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const list = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {list.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

