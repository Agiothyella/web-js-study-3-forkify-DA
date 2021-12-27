const renderSpinner = function (parentEl) {
  const markup = `       
        <div class="spinner">
          <svg>
            <use href="assets/icons.svg#icon-loader"></use>
          </svg>
        </div>`;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

export default renderSpinner;
