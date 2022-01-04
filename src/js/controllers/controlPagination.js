import state from '../models/state';
import getSearchPage from '../models/search/getSearchPage';

import ViewSearchResult from '../views/search/viewSearchResult';
import ViewPagination from '../views/search/viewPagination';

const controlPagination = function (goToPage) {
  ViewSearchResult.render(getSearchPage(goToPage));
  ViewPagination.render(state.search);
};

export default controlPagination;
