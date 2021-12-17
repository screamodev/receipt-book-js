import { createElement } from '../../libs/DOM';
import './sidebar.scss';
import { SIDEBAR } from '../../constants/elementSelectors';
import menuIcon from '../../assets/icons/menu-icon.svg';
import foodIcon from '../../assets/icons/food-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
import SidebarElement from './SidebarElement';

const Sidebar = () => {
  const sidebarItems = [
    {
      name: 'Menu',
      icon: menuIcon,
      iconAlt: 'menu-icon',
    },
    {
      name: 'Food',
      icon: foodIcon,
      iconAlt: 'food-icon',
    },
    {
      name: 'Bookmarks',
      icon: bookmarkIcon,
      iconAlt: 'bookmark-icon',
    },
  ];

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
