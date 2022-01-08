import state from '../state';
import saveToLocalStorage from '../../helper/saveToLocalStorage';

const addBookmark = function (recipe) {
  state.bookmarks.unshift(recipe);

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  saveToLocalStorage('bookmarks', state.bookmarks);
};

export default addBookmark;
