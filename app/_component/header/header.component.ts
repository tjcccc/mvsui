import { Component } from '@angular/core';

@Component({
  selector: 'mvsui-header',
  templateUrl: 'app/_component/header/header.component.html',
  styleUrls: [ 'app/_component/header/header.component.css' ]
})

export class HeaderComponent {
    headerTitle = 'MVS UI Framework, Angular2 version';
    headerDescription = 'An administration page framework for enterprise.';
}