import { createElement } from '../../libs/DOM';
import RecipeCard from '../RecipeCard';

const RecipeCards = ({ recipes }) =>
  createElement(
    'div',
    { class: 'recipes-cards' },
    recipes.map((recipe) => RecipeCard(recipe))
  );

export default RecipeCards;
