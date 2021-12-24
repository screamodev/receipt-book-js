import { createElement, mount } from '../../../../libs/DOM';
import { addRecipe, fetchRecipe } from '../../../../api/recipesApi';
import {
  RECIPE_FORM_INGREDIENT_HOLDER_CLASS,
  RECIPE_FORM_INGREDIENT_LIST_ID,
  RECIPE_MODAL_ID,
  RECIPES_CARDS_ID,
} from '../../../../constants/elementSelectors';
import IngredientInputs from './IngredientInputs';
import FormInput from '../../../common/FormInput';
import FormTextarea from '../../../common/FormTextarea';
import RecipeCard from '../../ExploreRecipes/RecipeCards/RecipeCard';
import './addRecipeModal.scss';

const AddRecipeModal = () => {
  const closeModal = () => {
    const modal = document.getElementById(RECIPE_MODAL_ID);
    modal.style.display = 'none';
  };

  const addIngredientInputs = (e) => {
    e.preventDefault();

    mount(
      document.getElementById(RECIPE_FORM_INGREDIENT_LIST_ID),
      IngredientInputs()
    );
  };

  const createRecipe = (e) => {
    e.preventDefault();

    const createRecipeForm = e.target;
    const createRecipeFormData = new FormData(createRecipeForm);

    const ingredientNames = createRecipeFormData.getAll('ingredientName');
    const ingredientPCs = createRecipeFormData.getAll('ingredientPC');

    const recipe = {
      name: createRecipeFormData.get('name'),
      description: createRecipeFormData.get('description'),
      categories: createRecipeFormData
        .get('categories')
        .split(',')
        .filter((word) => !!word),
      ingredients: ingredientNames.map((name, index) => ({
        name,
        weight: ingredientPCs[index],
      })),
      imgUrl: createRecipeFormData.get('imgUrl'),
    };
    addRecipe(recipe).then(({ id }) => {
      fetchRecipe(id).then((recipeResponse) => {
        mount(
          document.getElementById(RECIPES_CARDS_ID),
          RecipeCard(recipeResponse)
        );
      });
    });
    const modal = document.getElementById(RECIPE_MODAL_ID);
    modal.style.display = 'none';
    createRecipeForm.reset();
  };

  return createElement(
    'div',
    {
      id: 'add-recipe-modal-window',
    },
    createElement(
      'div',
      {
        class: 'add-recipe-modal-window-content',
      },
      [
        createElement(
          'div',
          {
            class: 'add-recipe-modal-window-close-holder',
          },
          createElement(
            'button',
            {
              class: 'add-recipe-modal-window-close',
              onclick: closeModal,
            },
            'x'
          )
        ),
        createElement(
          'form',
          { class: 'add-recipe-form', onsubmit: createRecipe },
          [
            FormInput({
              placeholder: 'Enter recipe name...',
              name: 'name',
              labelText: 'Name',
            }),
            FormTextarea({
              placeholder: 'Enter recipe description...',
              name: 'description',
              labelText: 'Description',
            }),
            FormInput({
              placeholder: 'Enter recipe categories comma separated...',
              name: 'categories',
              labelText: 'Categories',
            }),

            createElement(
              'div',
              {
                class: RECIPE_FORM_INGREDIENT_HOLDER_CLASS,
              },
              [
                createElement(
                  'ul',
                  {
                    id: 'add-recipe-form-ingredients-list',
                  },
                  IngredientInputs()
                ),
                createElement(
                  'button',
                  {
                    class: 'add-recipe-form-ingredient-add-button',
                    onclick: addIngredientInputs,
                  },
                  'Add ingredient'
                ),
              ]
            ),
            FormInput({
              placeholder: 'Enter image url...',
              name: 'imgUrl',
              labelText: 'Image url',
            }),
            createElement(
              'button',
              { class: 'add-recipe-form-button', type: 'submit' },
              'Create'
            ),
          ]
        ),
      ]
    )
  );
};

export default AddRecipeModal;
