import { createElement } from './libs/DOM';
import FoodPage from './components/FoodPage';
import Sidebar from './components/Sidebar';
import './app.scss';

const App = () =>
  createElement('div', { id: 'page-wrapper' }, [
    createElement('main', { id: 'main' }, [
      Sidebar(),
      createElement('section', { id: 'content' }, FoodPage()),
    ]),
  ]);

export default App;
