import { createElement } from '../../../libs/DOM';
import './sidebarElement.scss';

const SidebarElement = ({ name, icon, iconAlt, href }) => {
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
