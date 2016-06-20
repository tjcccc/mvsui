import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'level'
})

export class LevelPipe implements PipeTransform {
    transform(value, arg: number) {
        let level = arg;
        return value.filter(asideMenu => {
            return asideMenu.levelId == level;
        });
    }
}