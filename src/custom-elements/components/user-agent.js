export default class UserAgent extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const ua = navigator.userAgent;
    shadowRoot.innerHTML = ua;
  }

  connectedCallback() {
    console.log("called connectedCallback() .");
  }

  disconnectedCallback() {
    console.log("called disconnectedCallback() .");
  }

  adoptedCallback() {
    console.log("called adoptedCallback() .");
  }

  attributeChangedCallback() {
    console.log("called attributeChangedCallback() .");
  }

  observedAttributes() {
    console.log("called observedAttributes() .");
  }
}
