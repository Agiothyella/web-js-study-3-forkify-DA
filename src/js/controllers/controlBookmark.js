import state from '../models/state';

import addBookmark from '../models/bookmark/addBookmark';
import removeBookmark from '../models/bookmark/removeBookmark';
import viewBookmarks from '../views/bookmarks/viewBookmarks';

import ViewRecipe from '../views/recipe/viewRecipe';

const controlBookmark = function () {
  if (!state.recipe.bookmarked) {
    addBookmark(state.recipe);
  } else {
    removeBookmark(state.recipe.id);
  }

  ViewRecipe.update(state.recipe);
  viewBookmarks.render(state.bookmarks);
};

export default controlBookmark;
