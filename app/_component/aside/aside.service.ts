import { Injectable } from '@angular/core';

import { AsideMenu } from './aside.model';
import { ASIDEMENUS } from './aside.data';

@Injectable()
export class AsideService {
    getAsideMenus() {
        return Promise.resolve(ASIDEMENUS);
    }
}