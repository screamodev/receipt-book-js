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
      }),
      FormInput({
        className: 'ingredients-input',
        placeholder: "pc's",
      }),
      createElement(
        'span',
        {
          class: 'ingredients-remove-button',
          onclick: removeInputs,
        },
        'Remove'
      ),
    ]
  );
};
export default IngredientInputs;
