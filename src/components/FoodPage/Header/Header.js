import { createElement } from '../../../libs/DOM';
import './Header.scss';

const Header = () => {
  const openModal = () => {
    document.getElementById('add-recipe-modal-window').style.display = 'block';
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
