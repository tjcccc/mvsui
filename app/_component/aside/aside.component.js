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
var aside_service_1 = require('./aside.service');
var toggle_directive_1 = require('./toggle.directive');
var AsideComponent = (function () {
    function AsideComponent(asideService) {
        this.asideService = asideService;
    }
    AsideComponent.prototype.getAsideMenus = function () {
        var _this = this;
        this.asideService.getAsideMenus().then(function (asideMenus) { return _this.asideMenus = asideMenus; });
    };
    AsideComponent.prototype.ngOnInit = function () {
        this.getAsideMenus();
    };
    AsideComponent.prototype.toggleSwitch = function () {
        toggle_directive_1.ToggleDirective;
    };
    AsideComponent = __decorate([
        core_1.Component({
            selector: 'mvsui-aside',
            templateUrl: 'app/_component/aside/aside.component.html',
            styleUrls: ['app/_component/aside/aside.component.css'],
            providers: [aside_service_1.AsideService]
        }), 
        __metadata('design:paramtypes', [aside_service_1.AsideService])
    ], AsideComponent);
    return AsideComponent;
}());
exports.AsideComponent = AsideComponent;
//# sourceMappingURL=aside.component.js.map