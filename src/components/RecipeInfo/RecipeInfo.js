import { createElement } from '../../libs/DOM';
import './recipeInfo.scss';
import ingredientIcon from '../../assets/icons/ingredient-icon.png';

const RecipeInfo = ({ name, description, ingredients, imgUrl }) =>
  createElement(
    'div',
    {
      id: 'recipe-info-wrapper',
      style: `background: url(${imgUrl}) #F7E4BB no-repeat top; background-size: 423px 318px;`,
    },
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
              ingredients.map(
                ({ name: ingredientName, weight: ingredientWeight }) =>
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
                  )
              )
            ),
          ]
        ),
      ]
    )
  );

export default RecipeInfo;
