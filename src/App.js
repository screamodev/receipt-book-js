import { createElement } from './libs/DOM';
import FoodPage from './components/FoodPage';
import Sidebar from './components/Sidebar';
import AddRecipeModal from './components/FoodPage/Header/AddRecipeModal';
import './app.scss';

const App = () =>
  createElement('div', { id: 'page-wrapper' }, [
    createElement('main', { id: 'main' }, [
      Sidebar(),
      createElement('section', { id: 'content' }, FoodPage()),
      AddRecipeModal(),
    ]),
  ]);

export default App;
