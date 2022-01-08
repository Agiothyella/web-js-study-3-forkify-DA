import state from '../models/state';
import ViewBookmarks from '../views/bookmarks/viewBookmarks';

const controlInit = function () {
  ViewBookmarks.render(state.bookmarks);
};

export default controlInit;
