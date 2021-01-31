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
var timeoutHandler;
var previousHighlight;
function scrollFunc() {
    if (timeoutHandler)
        return;
    timeoutHandler = window.setTimeout(checkHeadings, 20);
}
function checkHeadings() {
    var toc = document.querySelector('#toc');
    var elms = toc === null || toc === void 0 ? void 0 : toc.getElementsByClassName('.nav-link');
    if (!elms || !(elms === null || elms === void 0 ? void 0 : elms.length))
        return;
    var smallest = -1;
    var menuItem = undefined;
    for (var index = 0; index < (elms === null || elms === void 0 ? void 0 : elms.length); index++) {
        var elm = elms[index] || null;
        if (!elm)
            continue;
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
    window.clearTimeout(timeoutHandler);
    timeoutHandler = undefined;
}
// This is the important part!
var CourseModuleComponent = /** @class */ (function () {
    function CourseModuleComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    CourseModuleComponent.prototype.ngOnInit = function () {
        this.course = this.dataService.selectedCourse;
        document.addEventListener('scroll', scrollFunc);
        checkHeadings();
    };
    CourseModuleComponent.prototype.ngOnDestroy = function () {
        document.removeEventListener('scroll', scrollFunc);
    };
    CourseModuleComponent.prototype.setPiece = function (writing) {
        this.dataService.selectedWriting = writing;
    };
    CourseModuleComponent.prototype.setElemHeight = function (evt, id) {
        //evt.preventDefault();
        var elm = document.getElementById(id);
        if (!elm)
            return;
        var first = elm.hasAttribute("data-collapsed");
        var collapsed = elm.getAttribute("data-collapsed") == 'true';
        console.log("collapsed state=" + collapsed);
        if (!first || collapsed) {
            var height = elm === null || elm === void 0 ? void 0 : elm.scrollHeight;
            elm.style.height = height + "px";
            elm.style.opacity = '1';
            elm.setAttribute("data-collapsed", 'false');
        }
        else {
            elm.style.height = '0';
            elm.style.opacity = '0';
            elm.setAttribute("data-collapsed", 'true');
        }
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
