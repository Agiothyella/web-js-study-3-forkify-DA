import './sass/main.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './js/controllers/controller';

if (module.hot) {
  module.hot.accept(function (err) {
    console.log('Hot module error');
  });
}
