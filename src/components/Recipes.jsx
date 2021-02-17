import { useState } from 'react';

const basicRecipe = {
  eggs: 3,
  chocolate: 100,
  flour: 250,
  milk: 500,
};

const additionalIngredients = {
  ...basicRecipe,
  lemon: 5,
  orange: 5,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <>
      <h2>Current Recipe:</h2>

      <button type="button" onClick={() => setRecipe(basicRecipe)}>
        Basic recipe
      </button>
      <button type="button" onClick={() => setRecipe(additionalIngredients)}>
        Additional ingredients
      </button>

      <ul>
        {Object.keys(recipe).map((ingredient) => (
          <li key={ingredient}>
            {ingredient}: {recipe[ingredient]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipes;
