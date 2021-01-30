"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseModuleComponent = void 0;
var core_1 = require("@angular/core");
var hasScrolled = false;
var timeoutHandler;
var previousHighlight;
var checking = false;
function scrollFunc() {
    if (timeoutHandler) {
        console.log('skipped');
        return;
    }
    timeoutHandler = window.setTimeout(checkHeadings, 10);
}
function checkHeadings() {
    //if (!hasScrolled) return;
    var toc = document.querySelector('#toc');
    var elms = toc === null || toc === void 0 ? void 0 : toc.getElementsByClassName('.nav-link');
    if (!elms || !(elms === null || elms === void 0 ? void 0 : elms.length))
        return;
    var smallest = -1;
    var menuItem = undefined;
    for (var index = 0; index < (elms === null || elms === void 0 ? void 0 : elms.length); index++) {
        var elm = elms[index];
        var attr = elm.getAttribute('nav-id');
        var div = document.getElementById(attr || '');
        if (!div)
            continue;
        var rect = div.getBoundingClientRect();
        if (rect.y < 0)
            continue;
        if (smallest == -1 || rect.y < smallest) {
            smallest = rect.y;
            menuItem = elm;
        }
        if (!menuItem)
            continue;
        if (previousHighlight)
            previousHighlight.classList.remove('active');
        previousHighlight = menuItem;
        menuItem.classList.add('active');
        break;
    }
    //hasScrolled = false;
    window.clearTimeout(timeoutHandler);
    timeoutHandler = undefined;
}
var CourseModuleComponent = /** @class */ (function () {
    function CourseModuleComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    CourseModuleComponent.prototype.ngOnInit = function () {
        this.course = this.dataService.selectedCourse;
        hasScrolled = true;
        document.addEventListener('scroll', scrollFunc);
        // timeoutHandler = window.setInterval(checkHeadings, 100);
    };
    CourseModuleComponent.prototype.ngOnDestroy = function () {
        document.removeEventListener('scroll', scrollFunc);
        // window.clearInterval(timeoutHandler);
    };
    __decorate([
        core_1.Input()
    ], CourseModuleComponent.prototype, "course");
    CourseModuleComponent = __decorate([
        core_1.Component({
            selector: 'app-course-module',
            templateUrl: './course-module.component.html',
            styleUrls: ['./course-module.component.css']
        })
    ], CourseModuleComponent);
    return CourseModuleComponent;
}());
exports.CourseModuleComponent = CourseModuleComponent;
