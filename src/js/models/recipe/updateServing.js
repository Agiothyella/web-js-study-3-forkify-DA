import state from '../state';

const updateServing = function (newServing) {
  state.recipe.ingredients.forEach(
    ing => (ing.quantity = (ing.quantity * newServing) / state.recipe.servings)
  );
  state.recipe.servings = newServing;
};

export default updateServing;
