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
exports.InductionModuleItem = void 0;
var courseModule_1 = require("src/courseModule");
var InductionModuleItem = /** @class */ (function (_super) {
    __extends(InductionModuleItem, _super);
    function InductionModuleItem(path) {
        var _this = _super.call(this, "Induction into Computer Science", "", path) || this;
        _this.Description = "This module introduces candidates into the concept of online study and familiarises students with " +
            "the requirements of academic study. Concepts such as plagiarism are addressed as well as academic research and writing.";
        _this.Outcomes = [
            "Become familiar with research of academic sources",
            "Understand the role of academic integrity and plagiarism",
            "Understand the requirements of online study"
        ];
        _this.Artefacts = [
            {
                Type: "PDF",
                Title: "Induction Assignment",
                Description: "A 750-word essay discussing the role of Computer Science. The essay demonstrates academic competency to reference and a command of the English language.",
                URL: "./artefacts/01.M1Induction_Assignment.pdf"
            }
        ];
        _this.Reflections = [
            {
                Title: "Plagiarism",
                Description: "In this short article, I reflect on my understanding of plagiarism before and after the induction module.",
                URL: "reflections",
                Content: "plagiarism.md"
            },
            {
                Title: "Understanding Computer Science",
                Description: "My reflections on how my work experience helped to confirm research for the induction assignment.",
                URL: "reflections",
                Content: "understanding-cs.md"
            },
            {
                Title: "e-Portfolios",
                Description: "In this short article I reflect on the concept of <strong>e-portfolios</strong> and the thoughts and opinions of fellow students.",
                URL: "reflections",
                Content: "eportfolios.md"
            },
        ];
        return _this;
    }
    return InductionModuleItem;
}(courseModule_1.CourseModuleItem));
exports.InductionModuleItem = InductionModuleItem;
