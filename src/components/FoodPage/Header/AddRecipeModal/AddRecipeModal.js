import { createElement, mount } from '../../../../libs/DOM';
import IngredientInputs from './IngredientInputs';
import './addRecipeModal.scss';
import FormInput from '../../../common/FormInput';
import FormTextarea from '../../../common/FormTextarea';
import { addRecipe } from '../../../../api/recipesApi';

const AddRecipeModal = () => {
  const closeModal = () => {
    const modal = document.getElementById('add-recipe-modal-window');
    modal.style.display = 'none';
  };

  const addInputs = () => {
    mount(
      document.getElementById('add-recipe-form-ingredients-list'),
      IngredientInputs()
    );
  };

  const createRecipe = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const ingredientNames = formData.getAll('ingredientName');
    const ingredientPCs = formData.getAll('ingredientPC');

    const recipe = {
      name: formData.get('name'),
      description: formData.get('description'),
      categories: formData.get('categories').split(','),
      ingredients: ingredientNames.map((value, index) => ({
        [value]: ingredientPCs[index],
      })),
      imgUrl: formData.get('imgUrl'),
    };
    addRecipe(recipe);
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
            'span',
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
                    onclick: addInputs,
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
