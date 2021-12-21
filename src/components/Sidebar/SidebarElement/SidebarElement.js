import { createElement } from '../../../libs/DOM';
import './sidebarElement.scss';
import { NAV_MENU_ELEMENT_BUTTON_ID } from '../../../constants/elementSelectors';

const SidebarElement = ({ name, icon, iconAlt, href, isLink, onclick }) =>
  createElement(
    isLink ? 'a' : 'button',
    isLink
      ? {
          href: `${href}`,
          class: 'nav-menu-element',
          onclick,
        }
      : {
          id: NAV_MENU_ELEMENT_BUTTON_ID,
          class: 'nav-menu-element',
          onclick,
        },
    [
      createElement('span', { class: 'nav-menu-element-title' }, name),
      createElement('img', { src: icon, alt: iconAlt }),
    ]
  );

export default SidebarElement;
