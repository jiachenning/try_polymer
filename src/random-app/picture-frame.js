import {PolymerElement, html} from "@polymer/polymer/polymer-element.js"

class PictureFrame extends PolymerElement {
	static get template() {
		return html `
		<!-- scoped css for this element -->
		<style>
		div {
			display: inline-block;
			background-color: #ccc;
			border-radius: 8px;
			padding: 4px;
		}
		</style>
		<div>
			<slot></slot>
		</div>
		`
	}
}
customElements.define('picture-frame', PictureFrame);
