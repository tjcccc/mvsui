import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[toggle]'
})

export class ToggleDirective {

    private el: HTMLElement;
    private toggleSwitch: boolean;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        this.toggleSwitch = false;
    }

    private toggleChildren() {

        let childrenUl = this.el.children.item(1);

        if (this.toggleSwitch == false) {
            childrenUl.setAttribute("style", "display: block");
            this.toggleSwitch = true;
        } else if (this.toggleSwitch == true) {
            childrenUl.setAttribute("style", "display: none");
            this.toggleSwitch = false;
        }

    }

    @HostListener('mousedown') onMouseDown() {
        this.toggleChildren();
    }

}
