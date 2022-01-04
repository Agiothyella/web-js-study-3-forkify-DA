import state from '../models/state';
import addBookmark from '../models/bookmark/addBookmark';
import removeBookmark from '../models/bookmark/removeBookmark';
import ViewRecipe from '../views/recipe/viewRecipe';

const controlAddBookmark = function () {
  if (!state.recipe.bookmarked) {
    addBookmark(state.recipe);
  } else {
    removeBookmark(state.recipe.id);
  }

  ViewRecipe.update(state.recipe);
};

export default controlAddBookmark;
