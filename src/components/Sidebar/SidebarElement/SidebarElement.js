import { createElement } from '../../../libs/DOM';
import './sidebarElement.scss';
import { SIDEBAR } from '../../../constants/elementSelectors';

const SidebarElement = ({ name, icon, iconAlt }) => {
  let sidebarStatus = false;

  const showSidebar = () => {
    const sidebar = document.getElementById(SIDEBAR);
    sidebarStatus = !sidebarStatus;
    sidebar.style.transform = `translateX(${sidebarStatus ? 0 : -50}%)`;
  };

  return createElement(
    'div',
    {
      class: 'nav-menu-element',
      onclick: showSidebar,
    },
    [
      createElement('span', { class: 'nav-menu-element-title' }, name),
      createElement('img', { src: icon, alt: iconAlt }),
    ]
  );
};

export default SidebarElement;
