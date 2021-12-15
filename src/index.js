import './assets/scss/styles.scss';
import { fetchRecipes } from './api/recipesApi';
import RecipeCards from './components/FoodPage/RecipeCards';
import { mount } from './libs/DOM';
import Header from './components/FoodPage/Header/Header';
import AddRecipeModal from './components/FoodPage/Header/AddRecipeModal';
import {
  CREATE_HEADER_HOLDER_ID,
  CREATE_MAIN_ID,
  CREATE_RECIPES_ID,
} from './constants/elementSelectors';

mount(document.getElementById(CREATE_HEADER_HOLDER_ID), Header());

mount(document.getElementById(CREATE_MAIN_ID), AddRecipeModal());

fetchRecipes().then((recipes) =>
  mount(document.getElementById(CREATE_RECIPES_ID), RecipeCards({ recipes }))
);
