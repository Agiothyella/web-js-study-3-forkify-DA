import controllerRecipe from './controllerRecipe';
import ViewRecipe from '../views/viewRecipe';

import controllerSearch from './controllerSearch';
import ViewSearch from '../views/viewSearch';

import controllerPagination from './controllerPagination';
import ViewPagination from '../views/viewPagination';

const init = function () {
  ViewRecipe.addHandlerRender(controllerRecipe);
  ViewSearch.addHandlerSearch(controllerSearch);
  ViewPagination.addHandlerClick(controllerPagination);
};

init();
