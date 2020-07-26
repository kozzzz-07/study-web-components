import { getTemplate } from "../../service/template.js";

class MyAlert extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    const template = document.getElementById("my-alert-template");
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

export function prepareFortemplate() {
  return getTemplate("./components/my-alert/template.html").then(
    (strTemplate) => {
      document
        .querySelector("body")
        .insertAdjacentHTML("afterbegin", strTemplate);
    }
  );
}

export function defineMyAlertElement() {
  return customElements.define("my-alert", MyAlert);
}
