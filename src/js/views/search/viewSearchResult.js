import iconsSvg from '../../../assets/icons.svg';
import View from '../view';

class ViewSearchResult extends View {
  _parentElement = document.querySelector('.results');
  _error404 = `No recipes found for your query. Please try another one ;)`;
  _success = `Success!`;

  _generateMarkup() {
    return this._data.map(this._generateMarkupItems).join('');
  }

  _generateMarkupItems(res) {
    const id = window.location.hash.slice(1);

    return `
          <li class="preview">
            <a class="preview__link ${
              id === res.id ? 'preview__link--active' : ''
            }" href="#${res.id}">
              <figure class="preview__fig">
                <img src="${res.image}" alt="${res.image}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publisher}</p>
              </div>
            </a>
          </li>
          `;
  }
}

export default new ViewSearchResult();
