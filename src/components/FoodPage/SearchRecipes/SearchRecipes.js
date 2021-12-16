import { createElement, mount } from '../../../libs/DOM';
import './searchRecipes.scss';
import { searchRecipes } from '../../../api/recipesApi';
import RecipeCards from '../RecipeCards';
import { CREATE_SEARCH_RECIPES_CARDS } from '../../../constants/elementSelectors';

const SearchRecipes = () => {
  const handleKeyPress = (e) => {
    const ENTER_KEY = 13;
    const searchRecipesCards = document.getElementById(
      CREATE_SEARCH_RECIPES_CARDS
    );
    const input = document.getElementById('search-input');
    if (e.keyCode === ENTER_KEY) {
      if (searchRecipesCards) {
        searchRecipesCards.innerHTML = '';
      }
      searchRecipes(input.value).then((recipes) =>
        mount(searchRecipesCards, RecipeCards({ recipes }))
      );
    }
  };

  return createElement('div', { class: 'search-recipes-holder' }, [
    createElement('input', {
      id: 'search-input',
      placeholder: 'Search',
      onkeypress: handleKeyPress,
    }),
    createElement('div', {
      id: 'search-recipes-cards',
    }),
  ]);
};

export default SearchRecipes;
