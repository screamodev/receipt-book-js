import { createElement, mount } from '../../../../libs/DOM';
import IngredientInputs from './IngredientInputs';
import './addRecipeModal.scss';
import FormInput from '../../../common/FormInput';
import FormTextarea from '../../../common/FormTextarea';
import { addRecipe, fetchRecipe } from '../../../../api/recipesApi';
import {
  CREATE_RECIPE_MODAL_ID,
  CREATE_RECIPES_ID,
} from '../../../../constants/elementSelectors';
import RecipeCard from '../../RecipeCard';

const AddRecipeModal = () => {
  const closeModal = () => {
    const modal = document.getElementById(CREATE_RECIPE_MODAL_ID);
    modal.style.display = 'none';
  };

  const addIngredientInputs = (e) => {
    e.preventDefault();

    mount(
      document.getElementById('add-recipe-form-ingredients-list'),
      IngredientInputs()
    );
  };

  const createRecipe = (e) => {
    e.preventDefault();

    const createRecipeForm = e.target;
    const createRecipeFormData = new FormData(createRecipeForm);

    const ingredientNames = createRecipeFormData.getAll('ingredientName');
    const ingredientPCs = createRecipeFormData.getAll('ingredientPC');

    const recipe = {
      name: createRecipeFormData.get('name'),
      description: createRecipeFormData.get('description'),
      categories: createRecipeFormData.get('categories').split(','),
      ingredients: ingredientNames.map((name, index) => ({
        [name]: ingredientPCs[index],
      })),
      imgUrl: createRecipeFormData.get('imgUrl'),
    };
    addRecipe(recipe).then(({ id }) => {
      fetchRecipe(id).then((recipeResponse) => {
        mount(
          document.getElementById(CREATE_RECIPES_ID),
          RecipeCard(recipeResponse)
        );
      });
    });
    const modal = document.getElementById(CREATE_RECIPE_MODAL_ID);
    modal.style.display = 'none';
  };

  return createElement(
    'div',
    {
      id: 'add-recipe-modal-window',
    },
    createElement(
      'div',
      {
        class: 'add-recipe-modal-window-content',
      },
      [
        createElement(
          'div',
          {
            class: 'add-recipe-modal-window-close-holder',
          },
          createElement(
            'button',
            {
              class: 'add-recipe-modal-window-close',
              onclick: closeModal,
            },
            'x'
          )
        ),
        createElement(
          'form',
          { class: 'add-recipe-form', onsubmit: createRecipe },
          [
            FormInput({
              className: 'default-form-input add-recipe-form-input',
              placeholder: 'Enter recipe name...',
              name: 'name',
              labelText: 'Name',
            }),
            FormTextarea({
              className: 'default-form-textarea add-recipe-form-textarea',
              placeholder: 'Enter recipe description...',
              name: 'description',
              labelText: 'Description',
            }),
            FormInput({
              className: 'default-form-input add-recipe-form-input',
              placeholder: 'Enter recipe categories comma separated...',
              name: 'categories',
              labelText: 'Categories',
            }),

            createElement(
              'div',
              {
                class: 'add-recipe-form-add-ingredient-holder',
              },
              [
                createElement(
                  'ul',
                  {
                    id: 'add-recipe-form-ingredients-list',
                  },
                  IngredientInputs()
                ),
                createElement(
                  'button',
                  {
                    class: 'add-recipe-form-ingredient-add-button',
                    onclick: addIngredientInputs,
                  },
                  'Add ingredient'
                ),
              ]
            ),
            FormInput({
              className: 'default-form-input add-recipe-form-input',
              placeholder: 'Enter image url...',
              name: 'imgUrl',
              labelText: 'Image url',
            }),
            createElement(
              'button',
              { class: 'add-recipe-form-button', type: 'submit' },
              'Submit'
            ),
          ]
        ),
      ]
    )
  );
};

export default AddRecipeModal;
