import controlRecipe from './controlRecipe';
import controlServing from './controlServing';
import controlAddBookmark from './controlAddBookmark';
import ViewRecipe from '../views/recipe/viewRecipe';

import controlSearch from './controlSearch';
import ViewSearch from '../views/search/viewSearch';

import controlPagination from './controlPagination';
import ViewPagination from '../views/search/viewPagination';

const init = function () {
  ViewRecipe.addHandlerRender(controlRecipe);
  ViewRecipe.addHandlerUpdateServing(controlServing);
  ViewRecipe.addHandlerAddBookmark(controlAddBookmark);

  ViewSearch.addHandlerSearch(controlSearch);
  ViewPagination.addHandlerClick(controlPagination);
};

init();
