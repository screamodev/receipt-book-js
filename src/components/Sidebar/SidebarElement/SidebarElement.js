import { createElement } from '../../../libs/DOM';
import './sidebarElement.scss';

const SidebarElement = ({ name, icon, iconAlt, href, isLink, onclick }) => {
  return createElement(
    isLink ? 'a' : 'button',
    isLink
      ? {
          href: `${href}`,
          class: 'nav-menu-element',
          onclick,
        }
      : {
          id: 'nav-menu-element-button',
          class: 'nav-menu-element',

          onclick,
        },
    [
      createElement('span', { class: 'nav-menu-element-title' }, name),
      createElement('img', { src: icon, alt: iconAlt }),
    ]
  );
};

export default SidebarElement;
