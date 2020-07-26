// customElementsを利用
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

const slottedSpan = document.querySelector("my-paragraph span");

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);

// templateを利用してDOMへ追加
const template = document.getElementById("my-paragraph");
const templateContent = template.content;
document.body.appendChild(templateContent);
