import { Component } from "@angular/core";
// import { registerElement } from 'nativescript-angular/element-registry';
// registerElement('CheckBox', () => require('nativescript-checkbox').CheckBox);

import { setStatusBarColors } from "./utils/status-bar-util";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor() {
        setStatusBarColors();
    }
}
