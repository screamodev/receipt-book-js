import { createElement } from '../../libs/DOM';
import './sidebar.scss';
import { SIDEBAR } from '../../constants/elementSelectors';
import menuIcon from '../../assets/icons/menu-icon.svg';
import foodIcon from '../../assets/icons/food-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
import SidebarElement from './SidebarElement';
import { BASE_URL } from '../../config';
import { BOOKMARKS_URL, FOOD_URL, MENU_URL } from '../../constants/routes';

const Sidebar = () => {
  let sidebarStatus = false;
  const sidebarItems = [
    {
      name: 'Menu',
      icon: menuIcon,
      iconAlt: 'menu-icon',
      href: '/menu',
    },
    {
      name: 'Food',
      icon: foodIcon,
      iconAlt: 'food-icon',
      href: '/',
    },
    {
      name: 'Bookmarks',
      icon: bookmarkIcon,
      iconAlt: 'bookmark-icon',
      href: '/bookmarks',
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
    if (currentUrl === MENU_URL) {
      addActiveClass(MENU_URL);
    } else if ([MENU_URL, FOOD_URL].includes(currentUrl)) {
      addActiveClass(FOOD_URL);
    } else if (currentUrl === BOOKMARKS_URL) {
      addActiveClass(BOOKMARKS_URL);
    }
  };

  const toggleSidebar = () => {
    const sidebar = document.getElementById(SIDEBAR);
    sidebarStatus = !sidebarStatus;
    sidebar.style.transform = `translateX(${sidebarStatus ? 0 : -50}%)`;
  };

  return createElement(
    'aside',
    { id: SIDEBAR, onclick: toggleSidebar },
    createElement(
      'nav',
      { class: 'nav' },
      sidebarItems.map((sidebarItem) => SidebarElement(sidebarItem))
    )
  );
};

export default Sidebar;
