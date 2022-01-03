import viewRecipe from '../views/viewRecipe';

import loadRecipe from '../models/loadRecipe';
import state from '../models/state';

const controllerRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    viewRecipe.renderSpinner();

    await loadRecipe(id);
    viewRecipe.render(state.recipe);
  } catch (err) {
    viewRecipe.renderError();
  }
};

export default controllerRecipe;
