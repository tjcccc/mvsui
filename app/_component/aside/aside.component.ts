import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { InMemoryDataService } from '../../in-memory-data.service';
import { AsideMenu } from './aside.model';
import { AsideService } from './aside.service';

@Component({
    moduleId: module.id,
    selector: 'mvsui-aside',
    templateUrl: 'aside.component.html',
    styleUrls: ['aside.component.css']
})

export class AsideComponent implements OnInit {
    asideMenus: AsideMenu[];
    tempParentId: number;

    constructor(
        private router: Router,
        private asideService: AsideService
    ) {}

    getAsideMenus() {
        this.asideService.getAsideMenus().then(
            asideMenus => this.asideMenus = asideMenus
        );
    }

    ngOnInit() {
        this.getAsideMenus();
    }

}
