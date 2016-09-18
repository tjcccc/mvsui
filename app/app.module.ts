import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { HeaderComponent } from './_component/header/header.component';
import { TopbarComponent } from './_component/topbar/topbar.component';
import { NavComponent } from './_component/nav/nav.component';
import { AsideComponent } from './_component/aside/aside.component';
import { ContainerComponent } from './_component/container/container.component';
import { FormComponent } from './_component/form/form.component';
import { FooterComponent } from './_component/footer/footer.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
    ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    TopbarComponent,
    NavComponent,
    AsideComponent,
    ContainerComponent,
    FormComponent,
    FooterComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }