import { Component } from '@angular/core';
import { NavMenu } from './navmenu';

@Component({
  selector: 'mvsui-nav',
  templateUrl: 'app/_component/nav/nav.component.html',
  styleUrls: [ 'app/_component/nav/nav.component.css' ]
})

export class NavComponent {
    navMenus = [
        new NavMenu("theme default", "#"),
        new NavMenu("theme sse", "#"),
        new NavMenu("theme spdb", "#"),
        new NavMenu("theme 4", "#")
    ];
}