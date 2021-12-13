import { createElement, mount } from '../../../../libs/DOM';
import IngredientInputs from './IngredientInputs';
import './addRecipeModal.scss';
import FormInput from '../../../common/FormInput';
import FormTextarea from '../../../common/FormTextarea';

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

  const removeInputs = () => {
    const list = document.getElementById('add-recipe-form-ingredients-list');
    list.removeChild(list.lastElementChild);
  };

  const submitHandler = (e) => {
    e.preventDefault();
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
          { class: 'add-recipe-form', onsubmit: submitHandler },
          [
            FormInput({
              className: 'add-recipe-form-input',
              placeholder: 'Enter recipe name...',
            }),
            FormTextarea({
              className: 'add-recipe-form-input',
              placeholder: 'Enter recipe description...',
            }),
            FormInput({
              className: 'add-recipe-form-input',
              placeholder: 'Enter recipe categories...',
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
                  'span',
                  {
                    class: 'add-recipe-form-ingredient-add-button',
                    onclick: addInputs,
                  },
                  'Add one more ingredient'
                ),
                createElement(
                  'span',
                  {
                    class: 'add-recipe-form-ingredient-remove-button',
                    onclick: removeInputs,
                  },
                  'Remove last ingredient'
                ),
              ]
            ),

            createElement('input', {
              class: 'add-recipe-form-input',
              placeholder: 'Enter image url...',
            }),
            createElement(
              'button',
              { class: 'add-recipe-form-button' },
              'Submit'
            ),
          ]
        ),
      ]
    )
  );
};

export default AddRecipeModal;
