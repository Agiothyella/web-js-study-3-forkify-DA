import state from '../models/state';
import { MODAL_DELAY_SEC } from '../config/config';

import uploadRecipe from '../models/recipe/uploadRecipe';
import ViewAddRecipe from '../views/recipe/viewAddRecipe';
import ViewRecipe from '../views/recipe/viewRecipe';
import viewBookmarks from '../views/bookmarks/viewBookmarks';

const controlAddRecipe = async function (newRecipe) {
  try {
    ViewAddRecipe.renderSpinner();

    await uploadRecipe(newRecipe);

    ViewRecipe.render(state.recipe);

    ViewAddRecipe.renderMessage();

    viewBookmarks.render(state.bookmarks);

    window.history.pushState(null, '', `#${state.recipe.id}`);

    setTimeout(function () {
      ViewAddRecipe.toggleWindow();
    }, MODAL_DELAY_SEC * 1000);
  } catch (error) {
    console.log(error);
    ViewAddRecipe.renderError(error.message);
  }
};

export default controlAddRecipe;
