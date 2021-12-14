import { createElement, mount } from '../../../../libs/DOM';
import IngredientInputs from './IngredientInputs';
import './addRecipeModal.scss';
import FormInput from '../../../common/FormInput';
import FormTextarea from '../../../common/FormTextarea';
import { addRecipe, fetchRecipe } from '../../../../api/recipesApi';
import { CREATE_RECIPE_MODAL_ID } from '../../../../constants/elementSelectors';
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
      ingredients: ingredientNames.map((value, index) => ({
        [value]: ingredientPCs[index],
      })),
      imgUrl: createRecipeFormData.get('imgUrl'),
    };
    addRecipe(recipe).then(({ id }) => {
      fetchRecipe(id).then((recipeResponse) => {
        mount(
          document.getElementById('explore-recipes'),
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
              className: 'add-recipe-form-input',
              placeholder: 'Enter recipe name...',
              name: 'name',
            }),
            FormTextarea({
              className: 'add-recipe-form-input',
              placeholder: 'Enter recipe description...',
              name: 'description',
            }),
            FormInput({
              className: 'add-recipe-form-input',
              placeholder: 'Enter recipe categories...',
              name: 'categories',
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
                  [
                    createElement(
                      'li',
                      {
                        class: 'add-recipe-form-ingredients-element',
                      },
                      "Enter ingredient name and PC's"
                    ),
                    IngredientInputs(),
                  ]
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

            createElement('input', {
              class: 'add-recipe-form-input',
              placeholder: 'Enter image url...',
              name: 'imgUrl',
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
