import './assets/scss/styles.scss';
import { fetchRecipes } from './api/recipesApi';
import RecipeCards from './components/FoodPage/RecipeCards';
import { mount } from './libs/DOM';
import Header from './components/FoodPage/Header/Header';
import AddRecipeModal from './components/FoodPage/Header/AddRecipeModal';
import { CREATE_RECIPES_ID } from './constants/elementSelectors';

mount(document.getElementById('header-holder'), Header());

mount(document.getElementById('main'), AddRecipeModal());

fetchRecipes().then((recipes) =>
  mount(document.getElementById(CREATE_RECIPES_ID), RecipeCards({ recipes }))
);
