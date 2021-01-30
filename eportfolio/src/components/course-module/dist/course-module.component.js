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
function scrollFunc() {
    hasScrolled = true;
    console.log('scroll check warranted');
}
function checkHeadings() {
    if (!hasScrolled)
        return;
    // find the '.nav-link' closest to the top of the viewport
    var toc = document.querySelector('#toc');
    var elms = toc === null || toc === void 0 ? void 0 : toc.getElementsByClassName('.nav-link');
    console.log('found ' + (elms === null || elms === void 0 ? void 0 : elms.length) + ' elements to check');
    var smallest = -1;
    var menuItem;
    if (elms) {
        for (var index = 0; index < (elms === null || elms === void 0 ? void 0 : elms.length); index++) {
            var val = elms[index];
            var attr = val.getAttribute('s');
            var div = document.getElementById(attr || '');
            if (!div)
                continue;
            var rect = div.getBoundingClientRect();
            if (rect.y < 0)
                continue;
            if (smallest == -1 || rect.y < smallest) {
                smallest = rect.y;
                menuItem = val;
            }
        }
        if (menuItem) {
            if (previousHighlight)
                previousHighlight.classList.remove('active');
            menuItem.classList.add('active');
            previousHighlight = menuItem;
        }
    }
    hasScrolled = false;
}
var CourseModuleComponent = /** @class */ (function () {
    function CourseModuleComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    CourseModuleComponent.prototype.ngOnInit = function () {
        this.course = this.dataService.selectedCourse;
        document.addEventListener('scroll', scrollFunc);
        timeoutHandler = window.setInterval(checkHeadings, 100);
    };
    CourseModuleComponent.prototype.ngOnDestroy = function () {
        document.removeEventListener('scroll', scrollFunc);
        window.clearInterval(timeoutHandler);
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
