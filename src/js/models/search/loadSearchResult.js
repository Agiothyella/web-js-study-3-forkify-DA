import state from '../state';
import { API_KEY, API_URL } from '../../config/config';
import AJAX from '../../helper/AJAX/AJAX';

const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
    const result = data.data.recipes;

    state.search.result = result.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        key: rec.key,
      };
    });

    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export default loadSearchResult;
