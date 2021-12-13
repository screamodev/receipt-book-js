import { createElement } from '../../../../libs/DOM';
import './addRecipeModal.scss';

const AddRecipeModal = () => {
  const closeModal = () => {
    document.getElementById('add-recipe-modal-window').style.display = 'none';
  };

  const addInputs = () => {
    document.getElementById('add-recipe-form-ingredients-holder').append(
      createElement(
        'li',
        {
          class: 'add-recipe-form-ingredients-element',
        },
        [
          createElement('input', {
            class: 'add-recipe-form-ingredients-input',
            placeholder: 'name',
          }),
          createElement('input', {
            class: 'add-recipe-form-ingredients-input',
            placeholder: `pc's`,
          }),
        ]
      )
    );
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
              onclick: () => {
                closeModal();
              },
            },
            'x'
          )
        ),
        createElement('form', { class: 'add-recipe-form' }, [
          createElement('input', {
            class: 'add-recipe-form-input',
            placeholder: 'Enter recipe name...',
          }),
          createElement(
            'textarea',
            {
              class: 'add-recipe-form-input',
              placeholder: 'Enter recipe description...',
            },
            ''
          ),
          createElement('input', {
            class: 'add-recipe-form-input',
            placeholder: 'Enter recipe categories...',
          }),
          createElement(
            'ul',
            {
              id: 'add-recipe-form-ingredients-holder',
            },
            [
              createElement(
                'li',
                {
                  class: 'add-recipe-form-ingredients-element',
                },
                'Enter ingredient name and PC'
              ),
              createElement(
                'li',
                {
                  class: 'add-recipe-form-add-ingredient-button',
                  onclick: addInputs,
                },
                'Add one more ingredient'
              ),
              createElement(
                'li',
                {
                  class: 'add-recipe-form-ingredients-element',
                },
                [
                  createElement('input', {
                    class: 'add-recipe-form-ingredients-input',
                    placeholder: 'name',
                  }),
                  createElement('input', {
                    class: 'add-recipe-form-ingredients-input',
                    placeholder: `pc's`,
                  }),
                ]
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
        ]),
      ]
    )
  );
};

export default AddRecipeModal;
