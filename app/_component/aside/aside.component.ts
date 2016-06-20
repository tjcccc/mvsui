import { Component, OnInit, Pipe } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';
import { AsideMenu } from './aside.model';
import { AsideService } from './aside.service';
import { LevelPipe } from './level.pipe';
import { ParentPipe } from './parent.pipe';
import { ToggleDirective } from './toggle.directive';
import { DashboardComponent } from '../../_component/dashboard/dashboard.component';
import { FormComponent } from '../../_component/form/form.component';

@Component({
  selector: 'mvsui-aside',
  templateUrl: 'app/_component/aside/aside.component.html',
  styleUrls: [ 'app/_component/aside/aside.component.css' ],
  providers: [ AsideService ],
  pipes: [ LevelPipe, ParentPipe ],
  directives: [ ROUTER_DIRECTIVES, ToggleDirective ]
})

export class AsideComponent implements OnInit {

    asideMenus: AsideMenu[];

    constructor(private asideService: AsideService) {}
    
    getAsideMenus() {
        this.asideService.getAsideMenus().then(
            asideMenus => this.asideMenus = asideMenus
        );
    }

    ngOnInit() {
        this.getAsideMenus()
    }

    toggleSwitch() {
        ToggleDirective 
    }

}