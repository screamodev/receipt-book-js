import './assets/scss/styles.scss';
import { fetchRecipes } from './api/recipesApi';
import RecipeCards from './components/FoodPage/RecipeCards';
import { mount } from './libs/DOM';

fetchRecipes().then((recipes) =>
  mount(document.getElementById('explore-recipes'), RecipeCards({ recipes }))
);
