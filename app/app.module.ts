import { NativeScriptRouterModule } from 'nativescript-angular/router'
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ComponentsModule, routes } from './components/components.module';
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        ComponentsModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [AppComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
