import AbstractComponent from './abstract-component';

const createPoweredByTemplate = () => {
  return (
    `<section class="powered-by">
        <h2 class="powered-by__head">Powered by</h2>
        <a class="powered-by__link" href="http://timbright.tech/">
            <img class="powered-by__avatar" src="assets/img/avatar.png" alt="avatar TimBright" width="280" height="280">
            <p class="powered-by__name">TimBright</p>
        </a>
    </section>`
  );
};

export default class PoweredBy extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createPoweredByTemplate();
  }
}