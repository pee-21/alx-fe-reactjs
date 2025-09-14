import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
