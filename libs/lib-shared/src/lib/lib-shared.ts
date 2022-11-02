

export class MySharedComponent extends HTMLElement {
  public static observedAttributes = ['title'];

  attributeChangedCallback() {
    this.innerHTML = `<h1>Shared component from ${this.title}!</h1>`;
  }
}

customElements.define('my-shared-component', MySharedComponent);
