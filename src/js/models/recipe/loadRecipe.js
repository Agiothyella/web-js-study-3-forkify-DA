import state from '../state';
import { API_KEY, API_URL } from '../../config/config';
import createRecipeObject from './createRecipeObject';
import AJAX from '../../helper/AJAX/AJAX';

const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${API_KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};

export default loadRecipe;
