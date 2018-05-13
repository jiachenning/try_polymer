import {PolymerElement, html} from "@polymer/polymer/polymer-element.js"

class NameTag extends PolymerElement {
  constructor() {
    super();

    /* set this element's owner property */
    this.owner = 'Daniel';
  }
  static get template() {
    return html`
      <!-- bind to the "owner" property -->
      This is <b>{{owner}}</b>'s name-tag element.
    `;
  }
}
customElements.define('name-tag', NameTag);
