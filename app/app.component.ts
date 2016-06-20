import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TopbarComponent } from './_component/topbar/topbar.component';
import { HeaderComponent } from './_component/header/header.component';
import { NavComponent } from './_component/nav/nav.component';
import { AsideComponent } from './_component/aside/aside.component';
import { ContainerComponent } from './_component/container/container.component';
import { FooterComponent } from './_component/footer/footer.component';

@Component({
  selector: 'mvsui',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/app.component.scss' ],
  directives: [
    ROUTER_DIRECTIVES,
    TopbarComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    ContainerComponent,
    FooterComponent
  ]
})

export class AppComponent {}