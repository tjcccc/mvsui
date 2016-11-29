import { Pipe, PipeTransform } from '@angular/core';
import { AsideMenu } from './aside.model';

@Pipe({
    name: 'asideLevel'
})

export class AsideLevelPipe implements PipeTransform {
    transform(value, args: number) {
        let level = args;
        return value.filter(
            asideMenu => asideMenu.level == level
        );
    }
}
