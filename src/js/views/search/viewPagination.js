import iconsSvg from '../../../assets/icons.svg';
import View from '../view';

class ViewPagination extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );

    if (curPage === 1 && numPages > 1) {
      return `${this._generateNextButton()}`;
    }

    if (curPage === numPages && numPages > 1) {
      return `${this._generatePrevButton()}`;
    }

    if (curPage < numPages) {
      return `
      ${this._generatePrevButton()}
      ${this._generateNextButton()}
      `;
    }

    if (curPage === 1 && numPages === 1) {
      return ` `;
    }

    return ` `;
  }

  _generatePrevButton() {
    const curPage = this._data.page;
    return `<button data-goto="${curPage - 1}" 
            class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${iconsSvg}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage - 1}</span>
            </button>`;
  }

  _generateNextButton() {
    const curPage = this._data.page;
    return `<button data-goto="${curPage + 1}"
            class="btn--inline pagination__btn--next">
              <span>Page ${curPage + 1}</span>
              <svg class="search__icon">
                <use href="${iconsSvg}#icon-arrow-right"></use>
              </svg>
            </button>`;
  }
}

export default new ViewPagination();
