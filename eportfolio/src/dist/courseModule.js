"use strict";
exports.__esModule = true;
exports.CourseModuleItem = void 0;
var CourseModuleItem = /** @class */ (function () {
    function CourseModuleItem(Title, Description, path, imageUrl) {
        if (imageUrl === void 0) { imageUrl = ''; }
        this.Title = Title;
        this.Description = Description;
        this.path = path;
        this.imageUrl = imageUrl;
        this.Outcomes = [];
        this.Tasks = [];
        this.Artefacts = [];
        this.Reflections = [];
        this.Notes = [];
        if (!this.imageUrl)
            this.imageUrl = "../assets/images/essex_logo.png";
    }
    return CourseModuleItem;
}());
exports.CourseModuleItem = CourseModuleItem;
