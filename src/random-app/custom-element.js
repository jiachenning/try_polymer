import {PolymerElement} from '@polymer/polymer/polymer-element.js';

// Define the class for a new element called custom-element
class CustomElement extends PolymerElement {
  constructor() {
    super();
    this.textContent = 'I\'m aa custom-element.';
    console.log(this.tagName);
  }
}
// Register the new element with the browser
customElements.define('custom-element', CustomElement);
/*
  If you’re familiar with your browser’s developer tools, try printing the
  custom element’s `tagName` property to the console.
  Hint: add `console.log(this.tagName);` to the constructor method!
*/
