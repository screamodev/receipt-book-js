import { createElement } from '../../libs/DOM';
import './sidebar.scss';
import { SIDEBAR } from '../../constants/elementSelectors';
import menuIcon from '../../assets/icons/menu-icon.svg';
import foodIcon from '../../assets/icons/food-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
import SidebarElement from './SidebarElement';

const Sidebar = () => {
  let sidebarStatus = false;
  const sidebarItems = [
    {
      name: 'Menu',
      icon: menuIcon,
      iconAlt: 'menu-icon',
      href: '/',
    },
    {
      name: 'Food',
      icon: foodIcon,
      iconAlt: 'food-icon',
      href: '/food',
    },
    {
      name: 'Bookmarks',
      icon: bookmarkIcon,
      iconAlt: 'bookmark-icon',
      href: '/bookmarks',
    },
  ];

  const showSidebar = () => {
    const sidebar = document.getElementById(SIDEBAR);
    sidebarStatus = !sidebarStatus;
    sidebar.style.transform = `translateX(${sidebarStatus ? 0 : -50}%)`;
  };

  return createElement(
    'aside',
    { id: SIDEBAR, onclick: showSidebar },
    createElement(
      'nav',
      { class: 'nav' },
      sidebarItems.map((sidebarItem) => SidebarElement(sidebarItem))
    )
  );
};

export default Sidebar;
