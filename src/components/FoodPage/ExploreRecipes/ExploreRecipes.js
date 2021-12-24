import { createElement, mount } from '../../../libs/DOM';
import { fetchRecipes } from '../../../api/recipesApi';
import {
  EXPLORE_RECIPES_ID,
  RECIPES_CARDS_ID,
} from '../../../constants/elementSelectors';
import RecipeCards from './RecipeCards';
import './exploreRecipes.scss';

const ExploreRecipes = () => {
  fetchRecipes().then((recipes) =>
    mount(
      document.getElementById(EXPLORE_RECIPES_ID),
      RecipeCards({ id: RECIPES_CARDS_ID, recipes })
    )
  );

  return createElement('div', { id: EXPLORE_RECIPES_ID }, [
    createElement('h1', { class: 'explore-recipes-title' }, 'Explore recipes'),
  ]);
};

export default ExploreRecipes;
