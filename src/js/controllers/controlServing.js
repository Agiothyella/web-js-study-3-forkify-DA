import state from '../models/state';

import updateServing from '../models/recipe/updateServing';
import ViewRecipe from '../views/recipe/viewRecipe';

const controllerServing = function (newServing) {
  updateServing(newServing);
  // ViewRecipe.render(state.recipe);
  ViewRecipe.update(state.recipe);
};

export default controllerServing;
