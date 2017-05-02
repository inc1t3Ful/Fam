import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD

import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'map', component: MapComponent}
=======
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './auth.service';

/*
The appRoutes array of routes describes how to navigate. Pass it to the RouterModule.forRoot method in the module imports to configure the router. Each Route maps a URL path to a component. There are no leading slashes in the path.

The order of the routes in the configuration matters and this is by design. The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.

Given this configuration, when the browser URL for this application becomes /register, the router matches that URL to the route path /register and displays the RegisterComponent after a RouterOutlet that you've placed in the host view's HTML (app.component.html).

The ** path in the last route is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page or redirecting to another route.
*/
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: PageNotFoundComponent}
>>>>>>> katakeda
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MapComponent,
    RegisterComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    ProfileComponent,
    PageNotFoundComponent,
    LoginComponent
>>>>>>> katakeda
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiu2zNzWivvQnbjTCnf0lHkqYqS8B0A7o'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
