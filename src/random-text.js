/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class RandomText extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <!--div class="circle">1</div-->
        <h1>A simple random string generator</h1>
        <p>A simple random string generator, you can use as password. This is a user friendly version, exclude alphabet i l o, only number 0, 1.</p>
        <p>Maybe accept user input a little later.</p>
      </div>

      <div class="card">
        <h2>{{rnd()}} </h2>
      </div>
    `;
  }

  rnd() {
        var text = "";
        var possible = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789";

        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}

window.customElements.define('random-text', RandomText);
