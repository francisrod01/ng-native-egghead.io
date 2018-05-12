import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {DetailsComponent} from './details/details.component';


const COMPONENTS: any = [
  HomeComponent,
  DashboardComponent,
  AboutComponent,
  DetailsComponent
];

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'about', component: AboutComponent }
  ] },
  { path: 'detail', component: DetailsComponent }
];

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS,
    NativeScriptModule,
    NativeScriptRouterModule
  ]
})

export class ComponentsModule { }
