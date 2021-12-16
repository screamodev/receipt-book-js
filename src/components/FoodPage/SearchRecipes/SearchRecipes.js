import { createElement, mount } from '../../../libs/DOM';
import './searchRecipes.scss';
import RecipeCard from '../RecipeCard';
import { searchRecipes } from '../../../api/recipesApi';

const SearchRecipes = () => {
  const onEnterPress = (e) => {
    const searchRecipesCards = document.getElementById('search-recipes-cards');
    const input = document.querySelector('.search-input');
    if (e.keyCode === 13) {
      if (searchRecipesCards != null) {
        searchRecipesCards.innerHTML = '';
      }
      searchRecipes(input.value).then((recipes) =>
        mount(
          searchRecipesCards,
          recipes.map((recipe) => RecipeCard(recipe))
        )
      );
    }
  };

  return createElement('div', { class: 'search-recipes-holder' }, [
    createElement('input', {
      class: 'search-input',
      placeholder: 'Search',
      onkeypress: onEnterPress,
    }),
    createElement('div', {
      id: 'search-recipes-cards',
    }),
  ]);
};

export default SearchRecipes;
