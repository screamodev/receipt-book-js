import './assets/scss/styles.scss';
import { fetchRecipes } from './api/recipesApi';
import RecipeCards from './components/FoodPage/RecipeCards';
import { mount } from './libs/DOM';
import Header from './components/FoodPage/Header/Header';
import AddRecipeModal from './components/FoodPage/Header/AddRecipeModal';
import SearchRecipes from './components/FoodPage/SearchRecipes/SearchRecipes';
import Sidebar from './components/Sidebar/Sidebar';
import {
  CREATE_HEADER_HOLDER_ID,
  CREATE_MAIN_ID,
  CREATE_RECIPES_ID,
  SEARCH_RECIPES_ID,
} from './constants/elementSelectors';

mount(document.getElementById(SEARCH_RECIPES_ID), SearchRecipes());

mount(document.getElementById(CREATE_MAIN_ID), Sidebar());

mount(document.getElementById(CREATE_HEADER_HOLDER_ID), Header());

mount(document.getElementById(CREATE_MAIN_ID), AddRecipeModal());

fetchRecipes().then((recipes) =>
  mount(document.getElementById(CREATE_RECIPES_ID), RecipeCards({ recipes }))
);
