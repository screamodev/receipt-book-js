import { createElement } from '../../../../libs/DOM';
import RecipeCard from './RecipeCard';
import './recipeCards.scss';

const RecipeCards = ({ recipes }) =>
  createElement(
    'div',
    { id: 'recipes-cards' },

    recipes.map((recipe) => RecipeCard(recipe))
  );

export default RecipeCards;
