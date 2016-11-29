import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'mvsui-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent {
    headerTitle = 'MVS UI Framework, Angular2 version';
    headerDescription = 'An administration page framework for enterprise.';
}
