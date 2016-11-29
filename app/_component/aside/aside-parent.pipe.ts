import { Pipe, PipeTransform } from '@angular/core';
import { AsideMenu } from './aside.model';

@Pipe({
    name: 'asideParent'
})

export class AsideParentPipe implements PipeTransform {
    transform(value, arg: number) {
        let parentId = arg;
        return value.filter(
            asideMenu => asideMenu.parentId == parentId
        );
    }
}
