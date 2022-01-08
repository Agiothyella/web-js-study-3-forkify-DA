import controlRecipe from './controlRecipe';
import controlServing from './controlServing';
import ViewRecipe from '../views/recipe/viewRecipe';

import controlInit from './controlInit';

import controlBookmark from './controlBookmark';

import ViewBookmarks from '../views/bookmarks/viewBookmarks';
import loadFromLocalStorage from '../helper/loadFromLocalStorage';

import controlSearch from './controlSearch';
import ViewSearch from '../views/search/viewSearch';

import controlPagination from './controlPagination';
import ViewPagination from '../views/search/viewPagination';

import viewAddRecipe from '../views/recipe/viewAddRecipe';
import controlAddRecipe from './controlAddRecipe';

const loadUserState = function () {
  loadFromLocalStorage('bookmarks');
  ViewBookmarks.addHandlerRender(controlInit);
};

const init = function () {
  loadUserState();

  ViewRecipe.addHandlerRender(controlRecipe);
  ViewRecipe.addHandlerUpdateServing(controlServing);
  ViewRecipe.addHandlerBookmark(controlBookmark);

  ViewSearch.addHandlerSearch(controlSearch);
  ViewPagination.addHandlerClick(controlPagination);

  viewAddRecipe.addHandlerUpload(controlAddRecipe);
};

init();
