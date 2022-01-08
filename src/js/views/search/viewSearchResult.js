import iconsSvg from '../../../assets/icons.svg';
import View from '../view';
import PreviewView from '../previewView';

class ViewSearchResult extends View {
  _parentElement = document.querySelector('.results');
  _error404 = `No recipes found for your query. Please try another one ;)`;
  _success = `Success!`;

  _generateMarkup() {
    return this._data.map(res => PreviewView.render(res, false)).join('');
  }
}

export default new ViewSearchResult();
