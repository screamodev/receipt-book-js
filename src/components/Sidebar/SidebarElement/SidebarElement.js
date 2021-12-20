import { createElement } from '../../../libs/DOM';
import './sidebarElement.scss';

const BASE_URL = 'http://localhost:8080';

const SidebarElement = ({ name, icon, iconAlt, href }) => {
  window.onload = () => {
    const navMenuElement = document.querySelectorAll('.nav-menu-element');
    const currentUrl = window.location.pathname;
    const homeUrl = '/';
    const foodUrl = '/food';
    const bookmarksUrl = '/bookmarks';
    const addActiveClass = (url) => {
      navMenuElement.forEach((menuElement) => {
        if (menuElement.href === `${BASE_URL}${url}`) {
          menuElement.classList.add('active');
        }
      });
    };
    if (currentUrl === homeUrl) {
      addActiveClass('/');
    } else if (currentUrl === foodUrl) {
      addActiveClass('/food');
    } else if (currentUrl === bookmarksUrl) {
      addActiveClass('/bookmarks');
    }
  };

  return createElement(
    'a',
    {
      href: `${href}`,
      class: 'nav-menu-element',
    },
    [
      createElement('span', { class: 'nav-menu-element-title' }, name),
      createElement('img', { src: icon, alt: iconAlt }),
    ]
  );
};

export default SidebarElement;
