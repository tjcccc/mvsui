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
var topbar_component_1 = require('./_component/topbar/topbar.component');
var header_component_1 = require('./_component/header/header.component');
var nav_component_1 = require('./_component/nav/nav.component');
var aside_component_1 = require('./_component/aside/aside.component');
var container_component_1 = require('./_component/container/container.component');
var footer_component_1 = require('./_component/footer/footer.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mvsui',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.scss'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                topbar_component_1.TopbarComponent,
                header_component_1.HeaderComponent,
                nav_component_1.NavComponent,
                aside_component_1.AsideComponent,
                container_component_1.ContainerComponent,
                footer_component_1.FooterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map