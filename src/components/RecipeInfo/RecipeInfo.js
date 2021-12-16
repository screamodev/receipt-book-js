import { createElement } from '../../libs/DOM';
import './recipeInfo.scss';

const RecipeInfo = ({ name, description, ingredients, imgUrl }) =>
  createElement(
    'div',
    {
      class: 'recipe-info-wrapper',
      style: `background: url(${imgUrl}) #F7E4BB no-repeat top; background-size: 423px 318px;`,
    },
    [
      createElement(
        'button',
        { class: 'recipe-bookmark-icon' },
        createElement('img', {
          class: 'recipe-bookmark-icon-img',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bookmark_icon.svg/1024px-Bookmark_icon.svg.png',
          alt: 'bookmark-icon.png',
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
                ingredients.map((el) =>
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
                          src: 'https://icons.iconarchive.com/icons/icons8/ios7/256/Food-Cutlery-icon.png',
                          alt: 'dish.png',
                        })
                      ),
                      createElement(
                        'span',
                        {
                          class: 'ingredient-item-name',
                        },
                        Object.entries(el)[0][0]
                      ),
                      createElement(
                        'span',
                        {
                          class: 'ingredient-item-pcs',
                        },
                        Object.entries(el)[0][1]
                      ),
                    ]
                  )
                )
              ),
              createElement(
                'button',
                {
                  class: 'ingredient-button',
                },
                'View recipe'
              ),
            ]
          ),
        ]
      ),
    ]
  );

export default RecipeInfo;
