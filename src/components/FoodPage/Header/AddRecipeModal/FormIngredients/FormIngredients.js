import { createElement } from '../../../../../libs/DOM';
import './FormIngredients.scss';
import FormInput from '../../../../common/FormInput';

const FormIngredients = () =>
  createElement(
    'li',
    {
      class: 'add-recipe-form-ingredients-element',
    },
    [
      FormInput({
        className: 'add-recipe-form-ingredients-input',
        placeholder: 'name',
      }),
      FormInput({
        className: 'add-recipe-form-ingredients-input',
        placeholder: "pc's",
      }),
    ]
  );

export default FormIngredients;
