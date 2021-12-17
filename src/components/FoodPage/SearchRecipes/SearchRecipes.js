import { createElement, mount } from '../../../libs/DOM';
import './searchRecipes.scss';
import { searchRecipes } from '../../../api/recipesApi';
import RecipeCards from '../RecipeCards';
import {
  SEARCH_INPUT,
  SEARCH_RECIPES_CARDS,
} from '../../../constants/elementSelectors';
import { ENTER_KEY } from '../../../constants/keyCodes';

const SearchRecipes = () => {
  const handleKeyPress = (e) => {
    const searchRecipesCards = document.getElementById(SEARCH_RECIPES_CARDS);
    const searchInput = document.getElementById(SEARCH_INPUT);
    if (e.keyCode === ENTER_KEY) {
      if (searchRecipesCards) {
        searchRecipesCards.innerHTML = '';
      }
      searchRecipes(searchInput.value).then((recipes) =>
        mount(searchRecipesCards, RecipeCards({ recipes }))
      );
    }
  };

  return createElement('div', { class: 'search-recipes-holder' }, [
    createElement('input', {
      id: SEARCH_INPUT,
      placeholder: 'Search',
      onkeypress: handleKeyPress,
    }),
    createElement('div', {
      id: SEARCH_RECIPES_CARDS,
    }),
  ]);
};

export default SearchRecipes;
