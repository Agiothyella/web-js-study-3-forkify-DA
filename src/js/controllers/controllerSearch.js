import state from '../models/state';
import getSearchPage from '../models/getSearchPage';
import loadSearchResult from '../models/loadSearchResult';

import ViewSearch from '../views/viewSearch';
import ViewSearchResult from '../views/viewSearchResult';
import ViewPagination from '../views/viewPagination';

const controllerSearch = async function () {
  try {
    const query = ViewSearch.getQuery();
    if (!query) return;
    ViewSearchResult.renderSpinner();

    await loadSearchResult(query);

    ViewSearchResult.render(getSearchPage());
    ViewPagination.render(state.search);
  } catch (err) {
    console.log(err);
  }
};

export default controllerSearch;
