import iconsSvg from '../../../assets/icons.svg';
import View from '../view';
import PreviewView from '../previewView';

class ViewBookmarks extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _error404 = `No bookmarks yet. Find a nice recipe and bookmark it ;)`;
  _success = `Success!`;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => PreviewView.render(bookmark, false))
      .join('');
  }
}

export default new ViewBookmarks();
