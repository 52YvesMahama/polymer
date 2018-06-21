/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
import './shared-styles.js';

/* Extend the base PolymerElement class */
class MyNewView2 extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        input{
          padding:8px;
          margin-top:8px;

        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Login</h1>
<label>Username</label>
        <input type="text" placeholder="username" ></input></br>
        <label>Password</label>
        <input type="password" placeholder="password" ></input></br>
        <button>login</button>
      </div>
    `;
  }
}
/* Register the new element with the browser */
window.customElements.define('my-new-view2', MyNewView2);