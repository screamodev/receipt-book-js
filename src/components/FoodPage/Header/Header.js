import { createElement } from '../../../libs/DOM';
import { RECIPE_MODAL_ID } from '../../../constants/elementSelectors';
import './Header.scss';

const Header = () => {
  const openModal = () => {
    document.getElementById(RECIPE_MODAL_ID).style.display = 'block';
  };

  return createElement('div', { class: 'food-page-header' }, [
    createElement('h1', { class: 'food-page-header-title' }, 'food'),
    createElement(
      'button',
      {
        class: 'food-page-header-button',
        onclick: openModal,
      },
      'Add new recipe'
    ),
  ]);
};

export default Header;
