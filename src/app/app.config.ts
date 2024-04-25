import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./not-found.component";
import { AppComponent } from './app.component';
import {ContactComponent} from "./contact.component";

import {ItemComponent} from "./item/item.component";
import { ItemStatComponent }   from "./item.stat.component";
import { ItemDetailsComponent }   from "./item.details.component";
import { aboutGuard }   from "./about.guard";


// определение дочерних маршрутов
const itemRoutes: Routes = [
  { path: "details", component: ItemDetailsComponent},
  { path: "stat", component: ItemStatComponent},
];


const appRoutes: Routes =[
  { path: "", component: HomeComponent},

  { path: "about", component: AboutComponent, canActivate: [aboutGuard]},
  { path: "contact", component: ContactComponent },
  { path: "item/:id", component: ItemComponent},
  { path: "item/:id", component: ItemComponent, children: itemRoutes},
  // { path: "contact", redirectTo: "/about", pathMatch:"full"},
  { path: "**", redirectTo: "/" }
];


export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideClientHydration()];
  providers: [provideRouter(appRoutes)]
};
