"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var masters_component_1 = require("../components/masters/masters.component");
var header_component_1 = require("../components/header/header.component");
var footer_component_1 = require("../components/footer/footer.component");
var about_component_1 = require("../components/about/about.component");
var not_found_component_1 = require("../components/not-found/not-found.component");
var index_component_1 = require("../components/index/index.component");
var essex_component_1 = require("../components/essex/essex.component");
var course_module_component_1 = require("../components/course-module/course-module.component");
var dataService_1 = require("src/dataService");
var reflections_component_1 = require("../components/reflections/reflections.component");
var ngx_markdown_1 = require("ngx-markdown");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                masters_component_1.MastersComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                about_component_1.AboutComponent,
                not_found_component_1.NotFoundComponent,
                index_component_1.IndexComponent,
                essex_component_1.EssexComponent,
                course_module_component_1.CourseModuleComponent,
                reflections_component_1.ReflectionsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ngx_markdown_1.MarkdownModule.forRoot()
            ],
            providers: [dataService_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
