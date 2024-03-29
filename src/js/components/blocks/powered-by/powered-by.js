import AbstractComponent from '../../abstract-component';

const createPoweredByTemplate = () => {
  return (
    `<article class="powered-by">
        <a class="powered-by__link" href="http://timbright.tech/">
            <img class="powered-by__avatar" src="assets/img/svg/timBright-logo.svg" alt="avatar TimBright">
        </a>
    </article>`
  );
};

export default class PoweredBy extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createPoweredByTemplate();
  }
}