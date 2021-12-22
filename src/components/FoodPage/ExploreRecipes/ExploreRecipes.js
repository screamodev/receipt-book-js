import { createElement, mount } from '../../../libs/DOM';
import { fetchRecipes } from '../../../api/recipesApi';
import { CREATE_RECIPES_ID } from '../../../constants/elementSelectors';
import RecipeCards from './RecipeCards';
import './exploreRecipes.scss';

const ExploreRecipes = () => {
  fetchRecipes().then((recipes) =>
    mount(document.getElementById(CREATE_RECIPES_ID), RecipeCards({ recipes }))
  );

  return createElement('div', { id: 'explore-recipes' }, [
    createElement('h1', { class: 'explore-recipes-title' }, 'Explore recipes'),
  ]);
};

export default ExploreRecipes;
