import { createElement } from '../../libs/DOM';

const RecipeCard = ({ imgUrl, name, categories }) =>
  createElement('div', { class: 'recipe-card' }, [
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
  ]);

export default RecipeCard;
