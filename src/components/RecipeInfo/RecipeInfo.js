import { createElement } from '../../libs/DOM';
import './recipeInfo.scss';
import bookmarkIcon from '../../assets/icons/bookmark-white-icon.png';
import ingredientIcon from '../../assets/icons/Food-Cutlery-icon.png';

const RecipeInfo = ({ name, description, ingredients, imgUrl }) =>
  createElement(
    'div',
    {
      id: 'recipe-info-wrapper',
      style: `background: url(${imgUrl}) #F7E4BB no-repeat top; background-size: 423px 318px;`,
    },
    [
      createElement(
        'button',
        { class: 'recipe-bookmark-icon' },
        createElement('img', {
          class: 'recipe-bookmark-icon-img',
          src: bookmarkIcon,
          alt: 'bookmark-icon',
        })
      ),
      createElement(
        'div',
        {
          class: 'recipe-info',
        },
        [
          createElement(
            'h2',
            {
              class: 'recipe-info-name',
            },
            name
          ),
          createElement(
            'div',
            {
              class: 'recipe-description',
            },
            description
          ),
          createElement(
            'div',
            {
              class: 'recipe-ingredients-holder',
            },
            [
              createElement(
                'h3',
                {
                  class: 'recipe-ingredients-title',
                },
                'Ingredients'
              ),
              createElement(
                'div',
                {
                  class: 'recipe-ingredients',
                },
                ingredients.map((ingredient) =>
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
                        Object.entries(ingredient)[0][0]
                      ),
                      createElement(
                        'span',
                        {
                          class: 'ingredient-item-pcs',
                        },
                        Object.entries(ingredient)[0][1]
                      ),
                    ]
                  )
                )
              ),
            ]
          ),
        ]
      ),
    ]
  );

export default RecipeInfo;
