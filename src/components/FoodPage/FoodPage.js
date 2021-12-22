import { createElement } from '../../libs/DOM';
import Header from './Header';
import SearchRecipes from './SearchRecipes';
import ExploreRecipes from './ExploreRecipes';
import './foodPage.scss';

const FoodPage = () =>
  createElement('div', { id: 'food-page' }, [
    Header(),
    SearchRecipes(),
    ExploreRecipes(),
  ]);

export default FoodPage;
