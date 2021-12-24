import { createElement } from '../../../../libs/DOM';
import RecipeCard from './RecipeCard';
import './recipeCards.scss';

const RecipeCards = ({ id, recipes }) =>
  createElement(
    'div',
    { id },
    recipes.map((recipe) => RecipeCard(recipe))
  );

export default RecipeCards;
