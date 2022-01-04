import state from '../models/state';

import getSearchPage from '../models/search/getSearchPage';
import loadRecipe from '../models/recipe/loadRecipe';
import ViewRecipe from '../views/recipe/viewRecipe';
import viewSearchResult from '../views/search/viewSearchResult';

const controllerRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    ViewRecipe.renderSpinner();

    viewSearchResult.update(getSearchPage());

    await loadRecipe(id);
    ViewRecipe.render(state.recipe);
  } catch (err) {
    ViewRecipe.renderError();
  }
};

export default controllerRecipe;
