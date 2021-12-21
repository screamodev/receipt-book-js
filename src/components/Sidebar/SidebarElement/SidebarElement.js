import { createElement } from '../../../libs/DOM';
import './sidebarElement.scss';

const SidebarElement = ({
  id,
  name,
  icon,
  iconAlt,
  href,
  isLink = true,
  onclick,
}) =>
  createElement(
    isLink ? 'a' : 'button',
    {
      href,
      id,
      class: 'nav-menu-element',
      onclick,
    },
    [
      createElement('span', { class: 'nav-menu-element-title' }, name),
      createElement('img', { src: icon, alt: iconAlt }),
    ]
  );

export default SidebarElement;
