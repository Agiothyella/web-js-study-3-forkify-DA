import state from '../models/state';
import getSearchPage from '../models/search/getSearchPage';
import loadSearchResult from '../models/search/loadSearchResult';

import ViewSearch from '../views/search/viewSearch';
import ViewSearchResult from '../views/search/viewSearchResult';
import ViewPagination from '../views/search/viewPagination';
import ViewBookmarks from '../views/bookmarks/viewBookmarks';

const controllerSearch = async function () {
  try {
    const query = ViewSearch.getQuery();
    if (!query) return;
    ViewSearchResult.renderSpinner();

    await loadSearchResult(query);

    ViewSearchResult.render(getSearchPage());
    ViewPagination.render(state.search);
    ViewBookmarks.render(state.bookmarks);
  } catch (err) {
    console.log(err);
  }
};

export default controllerSearch;
