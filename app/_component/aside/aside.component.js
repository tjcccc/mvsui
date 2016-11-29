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
var router_1 = require('@angular/router');
var aside_service_1 = require('./aside.service');
var AsideComponent = (function () {
    function AsideComponent(router, asideService) {
        this.router = router;
        this.asideService = asideService;
    }
    AsideComponent.prototype.getAsideMenus = function () {
        var _this = this;
        this.asideService.getAsideMenus().then(function (asideMenus) { return _this.asideMenus = asideMenus; });
    };
    AsideComponent.prototype.ngOnInit = function () {
        this.getAsideMenus();
    };
    AsideComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mvsui-aside',
            templateUrl: 'aside.component.html',
            styleUrls: ['aside.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, aside_service_1.AsideService])
    ], AsideComponent);
    return AsideComponent;
}());
exports.AsideComponent = AsideComponent;
//# sourceMappingURL=aside.component.js.map