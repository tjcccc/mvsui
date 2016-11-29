import { Component } from '@angular/core';
import { NavMenu } from './navmenu';

@Component({
    moduleId: module.id,
    selector: 'mvsui-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})

export class NavComponent {
    navMenus = [
        new NavMenu("theme default", "#"),
        new NavMenu("theme sse", "#"),
        new NavMenu("theme spdb", "#"),
        new NavMenu("theme 4", "#")
    ];
}
