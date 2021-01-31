"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LaunchingCSModuleItem = void 0;
var courseModule_1 = require("src/courseModule");
var LaunchingCSModuleItem = /** @class */ (function (_super) {
    __extends(LaunchingCSModuleItem, _super);
    function LaunchingCSModuleItem(path) {
        var _this = _super.call(this, "Launching into Computer Science", "", path) || this;
        _this.Description = "This module deals with aspects of computer scientists such as their roles and ethical responsibilities, computer architectures, data structures, computational algorithms and encouraging of on-going professional development.";
        _this.Tasks = [
            "Roles, skillsets, ethical responsibilities",
            "Computing architectures, practices, applications, data structures",
            "Computational theories and programming concepts",
            "Apply efficient algorithms and programming practices",
            "Professional development regarding threats, securities and global impacts"
        ];
        _this.Outcomes = [
            "Identify and explain the architecture, structure and functionality of basic components of computer system",
            "Demonstrate a critical understanding of core data structures and programming concepts, including algorithm computability",
            "Critically evaluate the functionality of different types of software, i.e., operating system, utility programs, languages and applications",
            "Critically appraise the emerging trends in the field, such as cloud computing, big data, cyber security, and the professional and ethical requirements for dealing with such contemporary computer-based technologies"
        ];
        return _this;
    }
    return LaunchingCSModuleItem;
}(courseModule_1.CourseModuleItem));
exports.LaunchingCSModuleItem = LaunchingCSModuleItem;
