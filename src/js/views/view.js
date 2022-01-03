import iconsSvg from '../../assets/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length < 1))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `       
    <div class="spinner">
    <svg>
    <use href="${iconsSvg}#icon-loader"></use>
    </svg>
    </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._error404) {
    const markup = `        
        <div class="error">
        <div>
            <svg>
              <use href="${iconsSvg}#icon-alert-triangle"></use>
            </svg>
            </div>
          <p>${message}</p>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._success) {
    const markup = `        
        <div class="message">
        <div>
            <svg>
            <use href="${iconsSvg}#icon-smile"></use>
            </svg>
            </div>
            <p>${message}</p>
            </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, handler));
  }
}
