const createElement = (tag, attributes = {}, children = null) => {
  const domElement = document.createElement(tag);

  if (attributes && typeof attributes === 'object') {
    Object.entries(attributes).forEach(([key, value]) => {
      if (typeof attributes[key] === 'function') {
        domElement[key] = attributes[key];
      } else {
        domElement.setAttribute(key, value);
      }
    });
  }
  mount(domElement, children);

  return domElement;
};

const mount = (domElement, children) => {
  Array.isArray(children)
    ? children.forEach((child) => {
        domElement.append(child);
      })
    : domElement.append(children);
};

export { createElement, mount };
