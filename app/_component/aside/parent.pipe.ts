import { Pipe, PipeTransform } from '@angular/core';
import { AsideComponent } from './aside.component';

@Pipe({
    name: 'parent'
})

export class ParentPipe implements PipeTransform {
    transform(value, arg: number) {
        let parent = arg;
        return value.filter(asideMenu => {
            return asideMenu.parentId == parent;
        });
    }
}