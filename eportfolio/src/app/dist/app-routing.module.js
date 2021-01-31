"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_component_1 = require("src/components/about/about.component");
var course_module_component_1 = require("src/components/course-module/course-module.component");
var essex_component_1 = require("src/components/essex/essex.component");
var index_component_1 = require("src/components/index/index.component");
var masters_component_1 = require("src/components/masters/masters.component");
var not_found_component_1 = require("src/components/not-found/not-found.component");
var reflections_component_1 = require("src/components/reflections/reflections.component");
var routes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'studies', component: masters_component_1.MastersComponent },
    { path: 'essex', component: essex_component_1.EssexComponent },
    { path: 'module', component: course_module_component_1.CourseModuleComponent },
    { path: "reflections", component: reflections_component_1.ReflectionsComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, routerOptions)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
