import state from '../models/state';
import getSearchPage from '../models/getSearchPage';

import ViewSearchResult from '../views/viewSearchResult';
import ViewPagination from '../views/viewPagination';

const controllerPagination = function (goToPage) {
  ViewSearchResult.render(getSearchPage(goToPage));
  ViewPagination.render(state.search);
};

export default controllerPagination;
