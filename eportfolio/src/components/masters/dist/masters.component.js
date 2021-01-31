"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MastersComponent = void 0;
var core_1 = require("@angular/core");
var InductionModuleItem_1 = require("./InductionModuleItem");
var LaunchingCSModuleItem_1 = require("./LaunchingCSModuleItem");
var MODULE_ROOT = "modules/";
var MastersComponent = /** @class */ (function () {
    function MastersComponent(dataService) {
        this.dataService = dataService;
        this.Modules = [];
    }
    MastersComponent.prototype.ngOnInit = function () {
        this.Modules.push(new InductionModuleItem_1.InductionModuleItem(MODULE_ROOT + "induction"));
        this.Modules.push(new LaunchingCSModuleItem_1.LaunchingCSModuleItem(MODULE_ROOT + "launching"));
    };
    MastersComponent.prototype.setCourse = function (data) {
        this.dataService.selectedCourse = data;
    };
    MastersComponent = __decorate([
        core_1.Component({
            selector: 'app-masters.component',
            templateUrl: './masters.component.html',
            styleUrls: ['./masters.component.css']
        })
    ], MastersComponent);
    return MastersComponent;
}());
exports.MastersComponent = MastersComponent;
