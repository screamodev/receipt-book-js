import { createElement } from '../../../../libs/DOM';
import RecipeCard from './RecipeCard';
import './recipeCards.scss';

const RecipeCards = (recipeCardsId, { recipes }) =>
  createElement(
    'div',
    { id: recipeCardsId },
    recipes.map((recipe) => RecipeCard(recipe))
  );

export default RecipeCards;
