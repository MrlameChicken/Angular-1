import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './serivce/route-guard.service';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'todo',component: ToDoListComponent, canActivate: [RouteGuardService]},
  {path:'login', component: LoginComponent},
  {path:'welcome', component: WelcomeComponent,canActivate: [RouteGuardService]},
  {path:'logout', component: LogoutComponent},
  {path:'**', component: ErrorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    ToDoListComponent,
    TopMenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
