import { createElement } from '../../libs/DOM';
import './sidebar.scss';
import {
  NAV_MENU_ELEMENT_BUTTON_ID,
  SIDEBAR,
} from '../../constants/elementSelectors';
import menuIcon from '../../assets/icons/menu-icon.svg';
import foodIcon from '../../assets/icons/food-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
import SidebarElement from './SidebarElement';
import { BASE_URL } from '../../config';
import { BOOKMARKS_URL, FOOD_URL } from '../../constants/routes';

const Sidebar = () => {
  let sidebarStatus = false;

  const toggleSidebar = () => {
    const sidebar = document.getElementById(SIDEBAR);
    const menuElementsButton = document.getElementById(
      NAV_MENU_ELEMENT_BUTTON_ID
    );
    sidebarStatus
      ? menuElementsButton.classList.remove('active')
      : menuElementsButton.classList.add('active');

    sidebarStatus = !sidebarStatus;
    sidebar.style.transform = `translateX(${sidebarStatus ? 0 : -75}%)`;
  };

  const sidebarItems = [
    {
      name: 'Menu',
      icon: menuIcon,
      iconAlt: 'menu-icon',
      isLink: false,
      onclick: toggleSidebar,
    },
    {
      name: 'Food',
      icon: foodIcon,
      iconAlt: 'food-icon',
      href: '/',
      isLink: true,
    },
    {
      name: 'Bookmarks',
      icon: bookmarkIcon,
      iconAlt: 'bookmark-icon',
      href: '/bookmarks',
      isLink: true,
    },
  ];

  window.onload = () => {
    const navMenuElement = document.querySelectorAll('.nav-menu-element');
    const currentUrl = window.location.pathname;
    const addActiveClass = (url) => {
      navMenuElement.forEach((menuElement) => {
        if (menuElement.href === `${BASE_URL}${url}`) {
          menuElement.classList.add('active');
        }
      });
    };
    if (currentUrl === FOOD_URL) {
      addActiveClass(FOOD_URL);
    } else if (currentUrl === BOOKMARKS_URL) {
      addActiveClass(BOOKMARKS_URL);
    }
  };

  return createElement(
    'aside',
    { id: SIDEBAR },
    createElement(
      'nav',
      { class: 'nav' },
      sidebarItems.map((sidebarItem) => SidebarElement(sidebarItem))
    )
  );
};

export default Sidebar;
