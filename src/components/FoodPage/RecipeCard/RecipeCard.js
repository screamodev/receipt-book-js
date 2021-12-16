import { createElement, mount } from '../../../libs/DOM';
import './recipeCard.scss';
import RecipeInfo from '../../RecipeInfo/RecipeInfo';
import { CREATE_CONTENT_ID } from '../../../constants/elementSelectors';

const RecipeCard = ({ name, description, categories, ingredients, imgUrl }) => {
  const showRecipeInfo = () => {
    const recipeInfo = document.querySelector('.recipe-info-wrapper');
    if (recipeInfo != null) {
      recipeInfo.remove();
    }
    mount(
      document.getElementById(CREATE_CONTENT_ID),
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
