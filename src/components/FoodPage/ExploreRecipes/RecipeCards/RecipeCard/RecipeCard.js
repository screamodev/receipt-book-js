import { createElement, mount } from '../../../../../libs/DOM';
import {
  CONTENT_ID,
  RECIPE_INFO_WRAPPER,
} from '../../../../../constants/elementSelectors';
import RecipeInfo from '../../../../RecipeInfo';
import './recipeCard.scss';

const RecipeCard = ({ name, description, categories, ingredients, imgUrl }) => {
  const showRecipeInfo = () => {
    const recipeInfo = document.getElementById(RECIPE_INFO_WRAPPER);
    if (recipeInfo) {
      recipeInfo.remove();
    }
    mount(
      document.getElementById(CONTENT_ID),
      RecipeInfo({ name, description, ingredients, imgUrl })
    );
  };

  return createElement(
    'div',
    { class: 'recipe-card', onclick: showRecipeInfo },
    [
      createElement('img', { src: imgUrl }),
      createElement('div', { class: 'recipe-card-info' }, [
        createElement(
          'div',
          { class: 'recipe-card-cat' },
          categories.map((catItem) =>
            createElement('div', { class: 'recipe-card-cat-item' }, catItem)
          )
        ),
        createElement('div', { class: 'recipe-card-name' }, name),
      ]),
    ]
  );
};
export default RecipeCard;
