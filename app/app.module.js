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
// rxjs
require('./rxjs-extensions');
// Angular2 Core Modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Route
var app_routing_module_1 = require('./app-routing.module');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
// App components
var app_component_1 = require('./app.component');
var header_component_1 = require('./_component/header/header.component');
var topbar_component_1 = require('./_component/topbar/topbar.component');
var nav_component_1 = require('./_component/nav/nav.component');
var aside_component_1 = require('./_component/aside/aside.component');
var container_component_1 = require('./_component/container/container.component');
var dashboard_component_1 = require('./_component/dashboard/dashboard.component');
var form_component_1 = require('./_component/form/form.component');
var footer_component_1 = require('./_component/footer/footer.component');
// Pipe
var aside_level_pipe_1 = require('./_component/aside/aside-level.pipe');
var aside_parent_pipe_1 = require('./_component/aside/aside-parent.pipe');
// Service
var aside_service_1 = require('./_component/aside/aside.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                topbar_component_1.TopbarComponent,
                header_component_1.HeaderComponent,
                nav_component_1.NavComponent,
                aside_component_1.AsideComponent,
                container_component_1.ContainerComponent,
                dashboard_component_1.DashboardComponent,
                form_component_1.FormComponent,
                footer_component_1.FooterComponent,
                aside_level_pipe_1.AsideLevelPipe,
                aside_parent_pipe_1.AsideParentPipe
            ],
            providers: [aside_service_1.AsideService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map