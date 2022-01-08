import state from '../models/state';

const loadFromLocalStorage = function (name) {
  const storage = localStorage.getItem(name);

  if (storage) state.bookmarks = JSON.parse(storage);
};

export default loadFromLocalStorage;
