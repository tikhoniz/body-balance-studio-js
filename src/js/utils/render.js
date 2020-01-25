export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, component, place) => { // вставляет элемент в указанное место
    switch (place) {
      case RenderPosition.AFTERBEGIN:
        container.prepend(component.getElement()); // вставляет перед первым потомком
        break;
      case RenderPosition.BEFOREEND:
        container.append(component.getElement());
        break;
    }
  };

  export const getTime = () => {
    return new Date().getTime();
  }

  export const remove = (component) => {
    component.getElement().remove();
    component.removeElement();
  };

  export const replace = (newComponent, oldComponent) => {
    const parentElement = oldComponent.getElement().parentElement;
    const newElement = newComponent.getElement();
    const oldElement = oldComponent.getElement();

    const isExistElements = !!(parentElement && newElement && oldElement);

    if (isExistElements && parentElement.contains(oldElement)) {
      parentElement.replaceChild(newElement, oldElement);
    }
  };