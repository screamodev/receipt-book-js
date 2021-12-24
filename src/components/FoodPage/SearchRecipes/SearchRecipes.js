import { createElement, mount } from '../../../libs/DOM';
import { searchRecipes } from '../../../api/recipesApi';
import {
  SEARCH_INPUT,
  SEARCH_RECIPES_CARDS,
} from '../../../constants/elementSelectors';
import { ENTER_KEY } from '../../../constants/keyCodes';
import RecipeCards from '../ExploreRecipes/RecipeCards';
import './searchRecipes.scss';

const SearchRecipes = () => {
  const handleKeyPress = (e) => {
    const searchRecipesCards = document.getElementById(SEARCH_RECIPES_CARDS);
    const searchRecipesCardsHolder = document.getElementById(
      'search-recipes-holder'
    );
    const searchInput = document.getElementById(SEARCH_INPUT);
    if (e.keyCode === ENTER_KEY) {
      if (searchRecipesCards) {
        searchRecipesCards.innerHTML = '';
      }
      searchRecipes(searchInput.value).then((recipes) =>
        mount(
          searchRecipesCardsHolder,
          RecipeCards(SEARCH_RECIPES_CARDS, { recipes })
        )
      );
    }
  };

  return createElement('div', { id: 'search-recipes-holder' }, [
    createElement('input', {
      id: SEARCH_INPUT,
      placeholder: 'Search',
      onkeypress: handleKeyPress,
    }),
  ]);
};

export default SearchRecipes;
