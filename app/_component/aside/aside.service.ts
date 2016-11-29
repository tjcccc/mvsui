import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AsideMenu } from './aside.model';

@Injectable()
export class AsideService {
    private headers = new Headers({'Content-Type': 'application/json'});

    // Check your createDb in in-memory-data.service.ts. That's a fake api.
    private asideMenusUrl = 'app/asideMenus';

    constructor(private http: Http) {}

    getAsideMenus(): Promise<AsideMenu[]> {
        return this.http.get(this.asideMenusUrl)
            .toPromise()
            .then(response => response.json().data as AsideMenu[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
