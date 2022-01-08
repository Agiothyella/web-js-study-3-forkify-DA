import state from '../state';
import { API_URL, API_KEY } from '../../config/config';

import createRecipeObject from './createRecipeObject';
import addBookmark from '../bookmark/addBookmark';
import AJAX from '../../helper/AJAX/AJAX';

const uploadRecipe = async function (newRecipe) {
  try {
    const inputDataArr = Object.entries(newRecipe);

    ///////////////////////// INGREDIENTS /////////////////////////
    ///////////////////////////////////////////////////////////////
    const ingredientsArr = inputDataArr.filter(
      entry => entry[0].startsWith('ingredient') && entry[1] !== ''
    );
    const formattedIngredients = ingredientsArr.map(ing => {
      const ingArr = ing[1].split(',').map(el => el.trim());

      if (ingArr.length !== 3)
        throw new Error(
          'Wrong ingredients format! Please use the correct format.'
        );

      const [qty, unit, description] = ingArr;
      return { quantity: qty ? +qty : null, unit, description };
    });
    ///////////////////////////////////////////////////////////////

    const recipe = {
      id: newRecipe.id,
      title: newRecipe.title,
      publisher: newRecipe.publisher,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      servings: +newRecipe.servings,
      cooking_time: +newRecipe.cookingTime,
      ingredients: formattedIngredients,
    };

    const API_Data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(API_Data);
    addBookmark(state.recipe);
    ///////////////////// CATCH //////////////////////////////////
  } catch (error) {
    throw error;
  }
};

export default uploadRecipe;
