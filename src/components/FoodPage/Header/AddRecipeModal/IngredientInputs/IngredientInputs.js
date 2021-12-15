import { createElement } from '../../../../../libs/DOM';
import './IngredientInputs.scss';
import FormInput from '../../../../common/FormInput';

const IngredientInputs = () => {
  const removeInputs = (e) => {
    e.target.parentElement.remove();
  };

  return createElement(
    'li',
    {
      class: 'ingredients-element',
    },
    [
      FormInput({
        className: 'ingredients-input',
        placeholder: 'name',
        name: 'ingredientName',
        labelText: 'Ingredient name',
      }),
      FormInput({
        className: 'ingredients-input',
        placeholder: "pc's",
        name: 'ingredientPC',
        labelText: 'Ingredient pc',
      }),
      createElement(
        'button',
        {
          class: 'ingredients-remove-button',
          onclick: removeInputs,
        },
        'x'
      ),
    ]
  );
};
export default IngredientInputs;
