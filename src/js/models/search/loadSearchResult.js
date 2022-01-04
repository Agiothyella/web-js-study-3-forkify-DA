import state from '../state';
import getJSON from '../../helper/getJSON';
import { API_URL } from '../../config/config';

const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    const result = data.data.recipes;

    state.search.result = result.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });

    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export default loadSearchResult;
