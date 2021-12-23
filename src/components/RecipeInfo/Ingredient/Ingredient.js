import { createElement } from '../../../libs/DOM';
import './ingredient.scss';
import ingredientIcon from '../../../assets/icons/ingredient-icon.png';

const Ingredient = (ingredientName, ingredientWeight) =>
  createElement(
    'div',
    {
      class: 'ingredient-item',
    },
    [
      createElement(
        'div',
        {
          class: 'ingredient-item-image',
        },
        createElement('img', {
          src: ingredientIcon,
          alt: 'dish',
        })
      ),
      createElement(
        'span',
        {
          class: 'ingredient-item-name',
        },
        ingredientName
      ),
      createElement(
        'span',
        {
          class: 'ingredient-item-pcs',
        },
        ingredientWeight
      ),
    ]
  );

export default Ingredient;
