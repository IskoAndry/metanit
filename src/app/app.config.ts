import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./not-found.component";
import { AppComponent } from './app.component';


const appRoutes: Routes =[
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "contact", redirectTo: "/about", pathMatch:"full"},
  { path: "**", redirectTo: "/" }
];




export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideClientHydration()];
  providers: [provideRouter(appRoutes)]
};
