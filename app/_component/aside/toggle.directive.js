"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ToggleDirective = (function () {
    function ToggleDirective(el) {
        this.el = el.nativeElement;
        this.toggleSwitch = false;
    }
    ToggleDirective.prototype.toggleChildren = function () {
        var childrenUl = this.el.children.item(1);
        if (this.toggleSwitch == false) {
            childrenUl.setAttribute("style", "display: block");
            this.toggleSwitch = true;
        }
        else if (this.toggleSwitch == true) {
            childrenUl.setAttribute("style", "display: none");
            this.toggleSwitch = false;
        }
    };
    ToggleDirective.prototype.onMouseDown = function () {
        this.toggleChildren();
    };
    __decorate([
        core_1.HostListener('mousedown'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ToggleDirective.prototype, "onMouseDown", null);
    ToggleDirective = __decorate([
        core_1.Directive({
            selector: '[toggle]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ToggleDirective);
    return ToggleDirective;
}());
exports.ToggleDirective = ToggleDirective;
//# sourceMappingURL=toggle.directive.js.map