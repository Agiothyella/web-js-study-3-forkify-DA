import state from '../state';
import saveToLocalStorage from '../../helper/saveToLocalStorage';

const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;

  saveToLocalStorage('bookmarks', state.bookmarks);
};

export default removeBookmark;
