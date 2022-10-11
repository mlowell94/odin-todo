/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/potBg.png */ "./src/assets/potBg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/xclicked.png */ "./src/assets/xclicked.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/FOT-Seurat.otf */ "./src/assets/FOT-Seurat.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-size: 16px;\n    margin: 0;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    animation: bg-slide 2s infinite linear;\n    font-family: 'FOT-Seurat Pro';\n\n    display: flex;\n    height: 100vh;\n    color: white;\n\n}\n\n.container {\n    height: 75vh;\n    width: 75vw;\n    margin: auto;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n    border: #a1b0c8 groove 4px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n}\n\n.container-top {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: #a1b0c8 groove 3px;\n    grid-column: 1/4;\n}\n\n.container-top h4 {\n    font-size: 32px;\n    margin: 0 0 0 12px;\n}\n\n.container-top img {\n    width: 115px;\n    height: 35px;\n    align-self: center;\n    margin-right: .5%;\n}\n\n.nav {\n    display: flex;\n    grid-row: 2 /3;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n    padding: 3% 3% 3% 3%;\n    background-color: #e4a4d9;\n\n    position: sticky;\n    top: 0;\n\n    overflow: hidden;\n}\n\nh5 {\n    font-size: 36px;\n    align-self: flex-start;\n    margin-left: 14%;\n    margin: 0;\n}\n\n.nav h5 {\n    font-size: 2.5vw;\n}\n\nul {\n    display: flex;\n    justify-content: flex-end;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 70%;\n\n    flex-direction: column;\n    font-size: 24px;\n    color: white\n\n}\n\nli {\n    font-size: 1.5vw;\n    transition: text-shadow .25s ease;\n    width: 500px;\n}\n\nli img {\n    width: 4vw;\n    vertical-align: middle;\n    position: relative;\n}\n\n.main {\n    background-color: white;\n    color: black;\n    position: relative;\n    overflow: overlay;\n}\n\n.marquee-sort {\n    background-color: #d4d0c8;\n    border-bottom: #a1b0c8 solid 2px;\n    height: 6%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.marquee-sort select {\n    width: 20%;\n    margin-left: 1%;\n    margin-right: 1%;\n}\n\n.marquee-sort marquee {\n    width: 65%;\n    margin: 0 auto;\n}\n\n.project-sub img {\n    position: relative;\n}\n\n.new-task {\n    display: none;\n    flex-direction: column;\n    width: 30%;\n\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    border: #a1b0c8 groove 5px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n    margin: 0 auto;\n    z-index: 2;\n    color: black;\n}\n\n.new-project {\n    display: none;\n    flex-direction: column;\n    width: 30%;\n\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    border: #a1b0c8 groove 5px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n    margin: 0 auto;\n    z-index: 2;\n    color: black;\n}\n\n.content > img {\n    margin: 1.5% 0 0 1.5%;\n}\n\n.edit-task {\n    display: none;\n    flex-direction: column;\n    width: 30%;\n\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    border: #a1b0c8 groove 5px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n    margin: 0 auto;\n    z-index: 2;\n}\n\n\n.top {\n    display: flex;\n    justify-content: space-between;\n    padding: .5% 1% .5% 1%;\n}\n\n.top h5 {\n    margin: 0;\n    color: white;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n\n    padding: 6px;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    animation: bg-slide 2s infinite linear;\n\n}\n\n.top img {\n    width: 15px;\n    height: 15px;\n    align-self: center;\n}\n\n.top h5 {\n    font-size: 24px;\n}\n\ninput {\n    width: 50%;\n    border: none;\n    padding: 0;\n    height: 2em;\n\n}\n\nlabel {\n    height: 2em;\n    width: fit-content;\n}\n\ntextarea {\n    width: 50%;\n    resize: none;\n    border: none;\n    padding: 0;\n    \n}\n\nselect {\n    width: 50%;\n    border: none;\n    padding: 0;\n    height: 2em;\n}\n\nform div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 2.5%;\n}\n\nbutton {\n    width: 50%;\n    margin: 6px auto;\n}\n\n#project {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 1fr;\n    padding: 5%;\n}\n\n#project div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project img {\n    width: 50%;\n}\n\nimg:hover {\n    cursor: pointer;\n}\n\n#project p {\n    margin: 0;\n    text-align: center;\n}\n\n.open-task {\n    display: none;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 75%;\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n    border: #a1b0c8 groove 5px;\n    background-color: #010080;\n    margin: 0 auto;\n}\n\n.task-info {\n    display: flex;\n    flex-direction: column;\n\n    padding: 6px;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    animation: bg-slide 2s infinite linear;\n}\n\n.checklist-container {\n    flex-direction: column;\n    max-height: 175px;\n    overflow: scroll;\n    overflow-x: hidden;\n\n}\n\n.checklist-container div {\n    width: 50%;\n}\n\n#checklist-entry {\n    width: 88%;\n    padding-left: 1%;\n}\n\n#task-form > button {\n    position: relative;\n    left: 63%;\n    width: 25%;\n    margin: 0;\n    margin-top: 2.5%;\n}\n\n#project-form > button {\n    position: relative;\n    left: 63%;\n    width: 25%;\n    margin: 0;\n    margin-top: 2.5%;\n}\n\n#first-label + div {\n    background: white;\n    width: 48.5%;\n}\n\n\n\n.checklist-container img {\n    right: 1.5%;\n    position: static;\n}\n\n.checklist-container > div {\n    margin: 0;\n    align-self: flex-end;\n}\n\n#first-label {\n    position: absolute;\n    left: 6px;\n}\n\n.checklist-container > div + div {\n    margin: 0;\n    justify-content: space-between;\n}\n\n#test {\n    width: auto;\n}\n\n#minus {\n    position: relative;\n    margin-left: 10%;\n    right: 0;\n}\n\n#subDiv {\n    justify-content: flex-end;\n    margin: 0;\n    width: 100%;\n}\n\n#tasks {\n    display: flex;\n    flex-direction: column;\n    padding: 0 2% 0 2%;\n\n}\n\n.task {\n    padding: 0 2% 0 2%;\n}\n\n.task-header {\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.task-head h4 {\n    margin: 0;\n}\n\n.task-content {\n    padding: 0 2% 0 2%;\n    overflow: hidden;\n}\n\n.task-content img {\n    position: relative;\n    float: right;\n    margin: 1% 0% 0% 0%;\n    right: -1.5%;\n}\n\n.task-content img + img {\n    margin-right: 2%;\n}\n\n.task-content div {\n    display: flex;\n    justify-content: space-between;\n}\n\n.unopened {\n    max-height: 0;\n    transition: max-height .5s cubic-bezier(0, 1, 0, 1);\n}\n\n.open {\n    max-height: 1000px;\n    transition: max-height .5s ease;\n}\n\n.task-header img {\n    position: absolute;\n    top: 35%;\n    right: 0;\n    transition: all ease .5s;\n}\n\n.flipped {\n    transform: rotate(180deg);\n}\n\n#active {\n    display: block;\n}\n\n#inactive {\n    display: none;\n}\n\nh4 {\n    margin-bottom: 0;\n}\n\n.check-container-main {\n    flex-direction: column;\n    position: relative;\n}\n\n.check-label {\n    position: absolute;\n}\n\n.check-container-sub {\n    flex-direction: column;\n    width: fit-content;\n    align-self: flex-end;\n    align-items: flex-end;\n    text-align: right;\n}\n\n#desc-open {\n    max-width: 210px;\n    text-align: right;\n}\n\n#notes-open {\n    max-width: 210px;\n    text-align: right;\n}\n\n.task-content > div {\n    border-bottom: dotted pink 2px;\n}\n\n\n.exit-task:hover {\n    cursor: pointer;\n}\n\n.exit-project:hover {\n    cursor: pointer;\n}\n\n.exit-edit-task:hover {\n    cursor: pointer;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n#checklist-plus:hover {\n    cursor: pointer;\n}\n\n#minus:hover {\n    cursor: pointer;\n}\n\n.exit-task:active {\n    content:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.exit-project:active {\n    content:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.exit-edit-task:active {\n    content:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#subDiv {\n    justify-content: space-between;\n    margin: 0;\n    width: 85%;\n}\n\n#newDiv {\n    width: 100%;\n}\n\n#subDiv label {\n    max-height: 4em;\n    height: auto;\n}\n\n.check-container-sub {\n    width: 200px;\n}\n\n.check-container-sub + .check-container-sub {\n    border-top: solid white 1px;\n}\n\nli:hover {\n    cursor: pointer;\n    text-shadow: 3px 3px 3px black;\n}\n\n.task-content img:hover {\n    cursor: pointer;\n}\n\nli:hover img {\n    animation: hover .75s infinite;\n}\n\n.project-sub img:hover {\n    animation: bounce .25s linear;\n}\n\n\n@keyframes bg-slide {\n    0% {\n        background-position-x: 0;\n        background-position-y: 0;\n    }\n\n    50% {\n        background-position-x: -23px;\n        background-position-y: 21px;\n    }\n\n    100% {\n        background-position-x: -46px;\n        background-position-y: 42px;\n    }\n}\n\n@keyframes hover {\n    0% {\n        top: 0;\n    }\n\n    12.5% {\n        top: -6.25%;\n    }\n\n    25% {\n        top: -12.5%;\n    }\n\n    37.5% {\n        top: -6.25%;\n    }\n\n    50% {\n        top: 0\n    }\n\n    62.5% {\n        top: 6.25%;\n    }\n\n    75% {\n        top: 12.5%;\n    }\n\n    87.5% {\n        top: 6.25%;\n    }\n\n    100% {\n        top: 0;\n    }\n}\n\n@keyframes bounce {\n    0% {\n        top: 0%;\n    }\n    50% {\n        top: -15%;\n    }\n    75% {\n        top: 0%;\n    }\n    87.5% {\n        top: -7.5%;\n    }\n    93.75% {\n        top: 0%;\n    }\n    96.875% {\n        top: -3.75%;\n    }\n    100% {\n        top: 0;\n    }\n}\n\n\n@font-face {\n    font-family: 'FOT-Seurat Pro';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n\n/*BEGIN MEDIA QUERY*/\n\n@media screen and (max-width: 1000px) {\n\n    @keyframes hover {\n        0% {\n            top: -35%;\n        }\n    \n        12.5% {\n            top: -41.25%;\n        }\n    \n        25% {\n            top: -57.5%;\n        }\n    \n        37.5% {\n            top: -41.25%;\n        }\n    \n        50% {\n            top: -35%;\n        }\n    \n        62.5% {\n            top: -29.25%;\n        }\n    \n        75% {\n            top: -23.5%;\n        }\n    \n        87.5% {\n            top: -29.25%;\n        }\n    \n        100% {\n            top: -35%;\n        }\n    }\n    \n    body {\n        font-size: 16px;\n        margin: 0;\n        background-image: none;\n        background-color: #fdd8df;\n        font-family: 'FOT-Seurat Pro';\n\n        height: auto;\n        display: block;\n    }\n\n    .container {\n        height: auto;\n        width: auto;\n        margin: auto;\n        display: block;\n        border: none;\n        background-image: none;\n    }\n\n    .container-top {\n        display: none;\n    }\n\n    .main {\n        background-color: transparent;\n    }\n\n    .nav {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-direction: row;\n\n        padding: 3% 3% 3% 3%;\n        border: #a1b0c8 groove 4px;\n        background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n\n        position: sticky;\n        top: 0;\n    }\n\n    h5 {\n        font-size: 16px;\n        margin: 0;\n    }\n\n    ul {\n        display: flex;\n        justify-content: flex-end;\n        flex-direction: row;\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n\n        color: black;\n        text-shadow: 1px 1px 3px white;\n        font-size: 12px;\n    }\n\n    li + li {\n        margin-left: 5%;\n    }\n\n    .new-task {\n        display: none;\n        flex-direction: column;\n        width: 75%;\n\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n        z-index: 2;\n    }\n\n    #task-form > button {\n        position: relative;\n        left: 60%;\n        width: fit-content;\n        margin: 0;\n        margin-top: 2.7975%;\n    }\n\n    #project-form > button {\n        position: relative;\n        left: 56%;\n        width: fit-content;\n        margin: 0;\n        margin-top: 2.5%;\n    }\n\n    .new-project {\n        display: none;\n        flex-direction: column;\n        width: 75%;\n\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n    }\n\n    .edit-task {\n        display: none;\n        flex-direction: column;\n        width: 75%;\n\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n        z-index: 2;\n    }\n\n\n    .top {\n        display: flex;\n        justify-content: space-between;\n        padding: .5% 1% .5% 1%;\n    }\n\n    .top h5 {\n        margin: 0;\n    }\n\n    form {\n        display: flex;\n        flex-direction: column;\n\n        padding: 6px;\n\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n        animation: bg-slide 2s infinite linear;\n    \n    }\n\n    .top img {\n        width: 15px;\n        height: 15px;\n        align-self: center;\n    }\n    \n    input {\n        width: 50%;\n        border: none;\n        padding: 0;\n        height: 2em;\n\n    }\n\n    .nav h5 {\n        font-size: 12px;\n    }\n\n    li {\n        font-size: 12px;\n        width: auto;\n        position: relative;\n    }\n\n    li img {\n        width: 48px;\n        vertical-align: middle;\n        position: absolute;\n        right: 50%;\n        top: -35%;\n        z-index: -1;\n    }\n\n    label {\n        height: 2em;\n        width: fit-content;\n    }\n\n    textarea {\n        width: 50%;\n        resize: none;\n        border: none;\n        padding: 0;\n        \n    }\n\n    .content > img {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n    }\n\n    select {\n        width: 50%;\n        border: none;\n        padding: 0;\n        height: 2em;\n    }\n\n    form div {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-top: 2.5%;\n    }\n\n    button {\n        width: 50%;\n        margin: 6px auto;\n    }\n\n    #project {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-auto-rows: 1fr;\n        padding: 5%;\n    }\n\n    #project div {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    #project img {\n        width: 50%;\n    }\n\n    #project p {\n        margin: 0;\n        text-align: center;\n    }\n\n    .open-task {\n        display: none;\n        flex-direction: column;\n        align-items: flex-start;\n        width: 75%;\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n    }\n\n    .task-info {\n        display: flex;\n        flex-direction: column;\n\n        padding: 6px;\n\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n        animation: bg-slide 2s infinite linear;\n    }\n\n    .checklist-container {\n        flex-direction: column;\n        max-height: 175px;\n        overflow: scroll;\n    }\n\n    .checklist-container div {\n        width: 50%;\n    }\n\n    #checklist-entry {\n        width: 88%;\n        padding-left: 1%;\n    }\n\n    #first-label + div {\n        background: white;\n        width: 50%;\n    }\n\n    .checklist-container img {\n        right: 1.5%;\n        position: static;\n    }\n\n    .checklist-container > div {\n        margin: 0;\n        align-self: flex-end;\n    }\n\n    #first-label {\n        position: absolute;\n        left: 6px;\n    }\n\n    .checklist-container > div + div {\n        margin: 0;\n        justify-content: space-between;\n    }\n\n    #test {\n        width: auto;\n    }\n\n    #minus {\n        position: relative;\n        margin-left: 10%;\n    }\n\n    #subDiv {\n        justify-content: flex-end;\n        margin: 0;\n        width: 100%;\n    }\n\n    #tasks {\n        display: flex;\n        flex-direction: column;\n        padding: 0 2% 0 2%;\n\n    }\n\n    .task {\n        padding: 0 2% 0 2%;\n    }\n\n    .task-header {\n        display: flex;\n        justify-content: space-between;\n        position: relative;\n    }\n\n    .task-head h4 {\n        margin: 0;\n    }\n\n    .task-content {\n        padding: 0 2% 0 2%;\n        overflow: hidden;\n        }\n\n    .task-content div {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .task-content img {\n        position: relative;\n        float: right;\n        margin: 1% 0% 0% 0%;\n        right: -1.5%;\n    }\n    \n    .task-content img + img {\n        margin-right: 2%;\n    }\n\n    .unopened {\n        max-height: 0;\n        transition: max-height .5s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .open {\n        max-height: 1000px;\n        transition: max-height .5s ease;\n    }\n\n    .task-header img {\n        position: absolute;\n        top: 35%;\n        right: 0;\n        transition: all ease .5s;\n    }\n\n    .flipped {\n        transform: rotate(180deg);\n    }\n\n    #active {\n        display: block;\n    }\n\n    #inactive {\n        display: none;\n    }\n    \n    h4 {\n        margin-bottom: 0;\n    }\n\n    .check-container-main {\n        flex-direction: column;\n        position: relative;\n    }\n\n    .check-label {\n        position: absolute;\n    }\n\n    .check-container-sub {\n        flex-direction: column;\n        width: fit-content;\n        align-self: flex-end;\n        align-items: flex-end;\n    }\n\n    #desc-open {\n        max-width: 210px;\n        text-align: right;\n    }\n\n    #notes-open {\n        max-width: 210px;\n        text-align: right;\n    }\n\n    .task-content > div {\n        border-bottom: dotted pink 2px;\n    }\n\n    body {\n        font-size: 12px;\n    }\n\n    #subDiv {\n        justify-content: space-between;\n        margin: 0;\n        width: 85%;\n    }\n\n    #newDiv {\n        width: 100%;\n    }\n\n    #subDiv label {\n        max-height: 4em;\n        height: auto;\n    }\n\n    .check-container-sub {\n        width: 200px;\n    }\n\n    .check-container-sub + .check-container-sub {\n        border-top: solid white 1px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    font-size: 16px;\n    margin: 0;\n    background-image: url('assets/potBg.png');\n    animation: bg-slide 2s infinite linear;\n    font-family: 'FOT-Seurat Pro';\n\n    display: flex;\n    height: 100vh;\n    color: white;\n\n}\n\n.container {\n    height: 75vh;\n    width: 75vw;\n    margin: auto;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n    border: #a1b0c8 groove 4px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n}\n\n.container-top {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: #a1b0c8 groove 3px;\n    grid-column: 1/4;\n}\n\n.container-top h4 {\n    font-size: 32px;\n    margin: 0 0 0 12px;\n}\n\n.container-top img {\n    width: 115px;\n    height: 35px;\n    align-self: center;\n    margin-right: .5%;\n}\n\n.nav {\n    display: flex;\n    grid-row: 2 /3;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n    padding: 3% 3% 3% 3%;\n    background-color: #e4a4d9;\n\n    position: sticky;\n    top: 0;\n\n    overflow: hidden;\n}\n\nh5 {\n    font-size: 36px;\n    align-self: flex-start;\n    margin-left: 14%;\n    margin: 0;\n}\n\n.nav h5 {\n    font-size: 2.5vw;\n}\n\nul {\n    display: flex;\n    justify-content: flex-end;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 70%;\n\n    flex-direction: column;\n    font-size: 24px;\n    color: white\n\n}\n\nli {\n    font-size: 1.5vw;\n    transition: text-shadow .25s ease;\n    width: 500px;\n}\n\nli img {\n    width: 4vw;\n    vertical-align: middle;\n    position: relative;\n}\n\n.main {\n    background-color: white;\n    color: black;\n    position: relative;\n    overflow: overlay;\n}\n\n.marquee-sort {\n    background-color: #d4d0c8;\n    border-bottom: #a1b0c8 solid 2px;\n    height: 6%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.marquee-sort select {\n    width: 20%;\n    margin-left: 1%;\n    margin-right: 1%;\n}\n\n.marquee-sort marquee {\n    width: 65%;\n    margin: 0 auto;\n}\n\n.project-sub img {\n    position: relative;\n}\n\n.new-task {\n    display: none;\n    flex-direction: column;\n    width: 30%;\n\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    border: #a1b0c8 groove 5px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n    margin: 0 auto;\n    z-index: 2;\n    color: black;\n}\n\n.new-project {\n    display: none;\n    flex-direction: column;\n    width: 30%;\n\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    border: #a1b0c8 groove 5px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n    margin: 0 auto;\n    z-index: 2;\n    color: black;\n}\n\n.content > img {\n    margin: 1.5% 0 0 1.5%;\n}\n\n.edit-task {\n    display: none;\n    flex-direction: column;\n    width: 30%;\n\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n\n    border: #a1b0c8 groove 5px;\n    background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n    margin: 0 auto;\n    z-index: 2;\n}\n\n\n.top {\n    display: flex;\n    justify-content: space-between;\n    padding: .5% 1% .5% 1%;\n}\n\n.top h5 {\n    margin: 0;\n    color: white;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n\n    padding: 6px;\n\n    background-image: url('assets/potBg.png');\n    animation: bg-slide 2s infinite linear;\n\n}\n\n.top img {\n    width: 15px;\n    height: 15px;\n    align-self: center;\n}\n\n.top h5 {\n    font-size: 24px;\n}\n\ninput {\n    width: 50%;\n    border: none;\n    padding: 0;\n    height: 2em;\n\n}\n\nlabel {\n    height: 2em;\n    width: fit-content;\n}\n\ntextarea {\n    width: 50%;\n    resize: none;\n    border: none;\n    padding: 0;\n    \n}\n\nselect {\n    width: 50%;\n    border: none;\n    padding: 0;\n    height: 2em;\n}\n\nform div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 2.5%;\n}\n\nbutton {\n    width: 50%;\n    margin: 6px auto;\n}\n\n#project {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 1fr;\n    padding: 5%;\n}\n\n#project div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project img {\n    width: 50%;\n}\n\nimg:hover {\n    cursor: pointer;\n}\n\n#project p {\n    margin: 0;\n    text-align: center;\n}\n\n.open-task {\n    display: none;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 75%;\n    position: fixed;\n    top: 25%;\n    left: 0;\n    right: 0;\n    text-align: center;\n    border: #a1b0c8 groove 5px;\n    background-color: #010080;\n    margin: 0 auto;\n}\n\n.task-info {\n    display: flex;\n    flex-direction: column;\n\n    padding: 6px;\n\n    background-image: url('assets/potBg.png');\n    animation: bg-slide 2s infinite linear;\n}\n\n.checklist-container {\n    flex-direction: column;\n    max-height: 175px;\n    overflow: scroll;\n    overflow-x: hidden;\n\n}\n\n.checklist-container div {\n    width: 50%;\n}\n\n#checklist-entry {\n    width: 88%;\n    padding-left: 1%;\n}\n\n#task-form > button {\n    position: relative;\n    left: 63%;\n    width: 25%;\n    margin: 0;\n    margin-top: 2.5%;\n}\n\n#project-form > button {\n    position: relative;\n    left: 63%;\n    width: 25%;\n    margin: 0;\n    margin-top: 2.5%;\n}\n\n#first-label + div {\n    background: white;\n    width: 48.5%;\n}\n\n\n\n.checklist-container img {\n    right: 1.5%;\n    position: static;\n}\n\n.checklist-container > div {\n    margin: 0;\n    align-self: flex-end;\n}\n\n#first-label {\n    position: absolute;\n    left: 6px;\n}\n\n.checklist-container > div + div {\n    margin: 0;\n    justify-content: space-between;\n}\n\n#test {\n    width: auto;\n}\n\n#minus {\n    position: relative;\n    margin-left: 10%;\n    right: 0;\n}\n\n#subDiv {\n    justify-content: flex-end;\n    margin: 0;\n    width: 100%;\n}\n\n#tasks {\n    display: flex;\n    flex-direction: column;\n    padding: 0 2% 0 2%;\n\n}\n\n.task {\n    padding: 0 2% 0 2%;\n}\n\n.task-header {\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.task-head h4 {\n    margin: 0;\n}\n\n.task-content {\n    padding: 0 2% 0 2%;\n    overflow: hidden;\n}\n\n.task-content img {\n    position: relative;\n    float: right;\n    margin: 1% 0% 0% 0%;\n    right: -1.5%;\n}\n\n.task-content img + img {\n    margin-right: 2%;\n}\n\n.task-content div {\n    display: flex;\n    justify-content: space-between;\n}\n\n.unopened {\n    max-height: 0;\n    transition: max-height .5s cubic-bezier(0, 1, 0, 1);\n}\n\n.open {\n    max-height: 1000px;\n    transition: max-height .5s ease;\n}\n\n.task-header img {\n    position: absolute;\n    top: 35%;\n    right: 0;\n    transition: all ease .5s;\n}\n\n.flipped {\n    transform: rotate(180deg);\n}\n\n#active {\n    display: block;\n}\n\n#inactive {\n    display: none;\n}\n\nh4 {\n    margin-bottom: 0;\n}\n\n.check-container-main {\n    flex-direction: column;\n    position: relative;\n}\n\n.check-label {\n    position: absolute;\n}\n\n.check-container-sub {\n    flex-direction: column;\n    width: fit-content;\n    align-self: flex-end;\n    align-items: flex-end;\n    text-align: right;\n}\n\n#desc-open {\n    max-width: 210px;\n    text-align: right;\n}\n\n#notes-open {\n    max-width: 210px;\n    text-align: right;\n}\n\n.task-content > div {\n    border-bottom: dotted pink 2px;\n}\n\n\n.exit-task:hover {\n    cursor: pointer;\n}\n\n.exit-project:hover {\n    cursor: pointer;\n}\n\n.exit-edit-task:hover {\n    cursor: pointer;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n#checklist-plus:hover {\n    cursor: pointer;\n}\n\n#minus:hover {\n    cursor: pointer;\n}\n\n.exit-task:active {\n    content:url('assets/xclicked.png');\n}\n\n.exit-project:active {\n    content:url('assets/xclicked.png');\n}\n\n.exit-edit-task:active {\n    content:url('assets/xclicked.png');\n}\n\n#subDiv {\n    justify-content: space-between;\n    margin: 0;\n    width: 85%;\n}\n\n#newDiv {\n    width: 100%;\n}\n\n#subDiv label {\n    max-height: 4em;\n    height: auto;\n}\n\n.check-container-sub {\n    width: 200px;\n}\n\n.check-container-sub + .check-container-sub {\n    border-top: solid white 1px;\n}\n\nli:hover {\n    cursor: pointer;\n    text-shadow: 3px 3px 3px black;\n}\n\n.task-content img:hover {\n    cursor: pointer;\n}\n\nli:hover img {\n    animation: hover .75s infinite;\n}\n\n.project-sub img:hover {\n    animation: bounce .25s linear;\n}\n\n\n@keyframes bg-slide {\n    0% {\n        background-position-x: 0;\n        background-position-y: 0;\n    }\n\n    50% {\n        background-position-x: -23px;\n        background-position-y: 21px;\n    }\n\n    100% {\n        background-position-x: -46px;\n        background-position-y: 42px;\n    }\n}\n\n@keyframes hover {\n    0% {\n        top: 0;\n    }\n\n    12.5% {\n        top: -6.25%;\n    }\n\n    25% {\n        top: -12.5%;\n    }\n\n    37.5% {\n        top: -6.25%;\n    }\n\n    50% {\n        top: 0\n    }\n\n    62.5% {\n        top: 6.25%;\n    }\n\n    75% {\n        top: 12.5%;\n    }\n\n    87.5% {\n        top: 6.25%;\n    }\n\n    100% {\n        top: 0;\n    }\n}\n\n@keyframes bounce {\n    0% {\n        top: 0%;\n    }\n    50% {\n        top: -15%;\n    }\n    75% {\n        top: 0%;\n    }\n    87.5% {\n        top: -7.5%;\n    }\n    93.75% {\n        top: 0%;\n    }\n    96.875% {\n        top: -3.75%;\n    }\n    100% {\n        top: 0;\n    }\n}\n\n\n@font-face {\n    font-family: 'FOT-Seurat Pro';\n    src: url('assets/FOT-Seurat.otf');\n}\n\n\n/*BEGIN MEDIA QUERY*/\n\n@media screen and (max-width: 1000px) {\n\n    @keyframes hover {\n        0% {\n            top: -35%;\n        }\n    \n        12.5% {\n            top: -41.25%;\n        }\n    \n        25% {\n            top: -57.5%;\n        }\n    \n        37.5% {\n            top: -41.25%;\n        }\n    \n        50% {\n            top: -35%;\n        }\n    \n        62.5% {\n            top: -29.25%;\n        }\n    \n        75% {\n            top: -23.5%;\n        }\n    \n        87.5% {\n            top: -29.25%;\n        }\n    \n        100% {\n            top: -35%;\n        }\n    }\n    \n    body {\n        font-size: 16px;\n        margin: 0;\n        background-image: none;\n        background-color: #fdd8df;\n        font-family: 'FOT-Seurat Pro';\n\n        height: auto;\n        display: block;\n    }\n\n    .container {\n        height: auto;\n        width: auto;\n        margin: auto;\n        display: block;\n        border: none;\n        background-image: none;\n    }\n\n    .container-top {\n        display: none;\n    }\n\n    .main {\n        background-color: transparent;\n    }\n\n    .nav {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-direction: row;\n\n        padding: 3% 3% 3% 3%;\n        border: #a1b0c8 groove 4px;\n        background-image: linear-gradient(to right, #010080, #0e3da3, #3b6dbe, #709bd2, #adc9e4);\n\n        position: sticky;\n        top: 0;\n    }\n\n    h5 {\n        font-size: 16px;\n        margin: 0;\n    }\n\n    ul {\n        display: flex;\n        justify-content: flex-end;\n        flex-direction: row;\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n\n        color: black;\n        text-shadow: 1px 1px 3px white;\n        font-size: 12px;\n    }\n\n    li + li {\n        margin-left: 5%;\n    }\n\n    .new-task {\n        display: none;\n        flex-direction: column;\n        width: 75%;\n\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n        z-index: 2;\n    }\n\n    #task-form > button {\n        position: relative;\n        left: 60%;\n        width: fit-content;\n        margin: 0;\n        margin-top: 2.7975%;\n    }\n\n    #project-form > button {\n        position: relative;\n        left: 56%;\n        width: fit-content;\n        margin: 0;\n        margin-top: 2.5%;\n    }\n\n    .new-project {\n        display: none;\n        flex-direction: column;\n        width: 75%;\n\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n    }\n\n    .edit-task {\n        display: none;\n        flex-direction: column;\n        width: 75%;\n\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n        z-index: 2;\n    }\n\n\n    .top {\n        display: flex;\n        justify-content: space-between;\n        padding: .5% 1% .5% 1%;\n    }\n\n    .top h5 {\n        margin: 0;\n    }\n\n    form {\n        display: flex;\n        flex-direction: column;\n\n        padding: 6px;\n\n        background-image: url('assets/potBg.png');\n        animation: bg-slide 2s infinite linear;\n    \n    }\n\n    .top img {\n        width: 15px;\n        height: 15px;\n        align-self: center;\n    }\n    \n    input {\n        width: 50%;\n        border: none;\n        padding: 0;\n        height: 2em;\n\n    }\n\n    .nav h5 {\n        font-size: 12px;\n    }\n\n    li {\n        font-size: 12px;\n        width: auto;\n        position: relative;\n    }\n\n    li img {\n        width: 48px;\n        vertical-align: middle;\n        position: absolute;\n        right: 50%;\n        top: -35%;\n        z-index: -1;\n    }\n\n    label {\n        height: 2em;\n        width: fit-content;\n    }\n\n    textarea {\n        width: 50%;\n        resize: none;\n        border: none;\n        padding: 0;\n        \n    }\n\n    .content > img {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n    }\n\n    select {\n        width: 50%;\n        border: none;\n        padding: 0;\n        height: 2em;\n    }\n\n    form div {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-top: 2.5%;\n    }\n\n    button {\n        width: 50%;\n        margin: 6px auto;\n    }\n\n    #project {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-auto-rows: 1fr;\n        padding: 5%;\n    }\n\n    #project div {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    #project img {\n        width: 50%;\n    }\n\n    #project p {\n        margin: 0;\n        text-align: center;\n    }\n\n    .open-task {\n        display: none;\n        flex-direction: column;\n        align-items: flex-start;\n        width: 75%;\n        position: fixed;\n        top: 25%;\n        left: 0;\n        right: 0;\n        text-align: center;\n        border: #a1b0c8 groove 5px;\n        background-color: #010080;\n        margin: 0 auto;\n    }\n\n    .task-info {\n        display: flex;\n        flex-direction: column;\n\n        padding: 6px;\n\n        background-image: url('assets/potBg.png');\n        animation: bg-slide 2s infinite linear;\n    }\n\n    .checklist-container {\n        flex-direction: column;\n        max-height: 175px;\n        overflow: scroll;\n    }\n\n    .checklist-container div {\n        width: 50%;\n    }\n\n    #checklist-entry {\n        width: 88%;\n        padding-left: 1%;\n    }\n\n    #first-label + div {\n        background: white;\n        width: 50%;\n    }\n\n    .checklist-container img {\n        right: 1.5%;\n        position: static;\n    }\n\n    .checklist-container > div {\n        margin: 0;\n        align-self: flex-end;\n    }\n\n    #first-label {\n        position: absolute;\n        left: 6px;\n    }\n\n    .checklist-container > div + div {\n        margin: 0;\n        justify-content: space-between;\n    }\n\n    #test {\n        width: auto;\n    }\n\n    #minus {\n        position: relative;\n        margin-left: 10%;\n    }\n\n    #subDiv {\n        justify-content: flex-end;\n        margin: 0;\n        width: 100%;\n    }\n\n    #tasks {\n        display: flex;\n        flex-direction: column;\n        padding: 0 2% 0 2%;\n\n    }\n\n    .task {\n        padding: 0 2% 0 2%;\n    }\n\n    .task-header {\n        display: flex;\n        justify-content: space-between;\n        position: relative;\n    }\n\n    .task-head h4 {\n        margin: 0;\n    }\n\n    .task-content {\n        padding: 0 2% 0 2%;\n        overflow: hidden;\n        }\n\n    .task-content div {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .task-content img {\n        position: relative;\n        float: right;\n        margin: 1% 0% 0% 0%;\n        right: -1.5%;\n    }\n    \n    .task-content img + img {\n        margin-right: 2%;\n    }\n\n    .unopened {\n        max-height: 0;\n        transition: max-height .5s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .open {\n        max-height: 1000px;\n        transition: max-height .5s ease;\n    }\n\n    .task-header img {\n        position: absolute;\n        top: 35%;\n        right: 0;\n        transition: all ease .5s;\n    }\n\n    .flipped {\n        transform: rotate(180deg);\n    }\n\n    #active {\n        display: block;\n    }\n\n    #inactive {\n        display: none;\n    }\n    \n    h4 {\n        margin-bottom: 0;\n    }\n\n    .check-container-main {\n        flex-direction: column;\n        position: relative;\n    }\n\n    .check-label {\n        position: absolute;\n    }\n\n    .check-container-sub {\n        flex-direction: column;\n        width: fit-content;\n        align-self: flex-end;\n        align-items: flex-end;\n    }\n\n    #desc-open {\n        max-width: 210px;\n        text-align: right;\n    }\n\n    #notes-open {\n        max-width: 210px;\n        text-align: right;\n    }\n\n    .task-content > div {\n        border-bottom: dotted pink 2px;\n    }\n\n    body {\n        font-size: 12px;\n    }\n\n    #subDiv {\n        justify-content: space-between;\n        margin: 0;\n        width: 85%;\n    }\n\n    #newDiv {\n        width: 100%;\n    }\n\n    #subDiv label {\n        max-height: 4em;\n        height: auto;\n    }\n\n    .check-container-sub {\n        width: 200px;\n    }\n\n    .check-container-sub + .check-container-sub {\n        border-top: solid white 1px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/closestTo/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/closestTo/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closestTo)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date | Number} dateToCompare - the date to compare with
 * @param {Array<Date> | Array<number>} datesArray - the array to search
 * @returns {Date | undefined} the date from the array closest to the given date or undefined if no valid value is given
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */

function closestTo(dirtyDateToCompare, dirtyDatesArray) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  if (isNaN(Number(dateToCompare))) return new Date(NaN);
  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);

    if (isNaN(Number(currentDate))) {
      result = new Date(NaN);
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < Number(minDistance)) {
      result = currentDate;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/appLogic/checkChecklistBool.js":
/*!********************************************!*\
  !*** ./src/appLogic/checkChecklistBool.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkChecklist = function(checklistItem) {
    if(checklistItem.taskFinished) {
        return "Completed!";
    } else {
        return "Incomplete";
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkChecklist);

/***/ }),

/***/ "./src/appLogic/checklistFactory.js":
/*!******************************************!*\
  !*** ./src/appLogic/checklistFactory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checklistFactory = (submittedName, isComplete) => {
    const name = submittedName;
    const taskFinished = isComplete;

    return { name, taskFinished }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checklistFactory);

/***/ }),

/***/ "./src/appLogic/projectFactory.js":
/*!****************************************!*\
  !*** ./src/appLogic/projectFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectFactory = (submittedName, submittedDate, submittedPriority ) => {

    const name = submittedName;
    const dueDate = submittedDate;
    const priority = submittedPriority;
    const tasks = [];
    return { name, dueDate, tasks, priority };
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/appLogic/projects.js":
/*!**********************************!*\
  !*** ./src/appLogic/projects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectContainer = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectContainer);

/***/ }),

/***/ "./src/appLogic/pushTasks.js":
/*!***********************************!*\
  !*** ./src/appLogic/pushTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pushTask = function(project, task) {
    
    project.tasks.push(task);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pushTask);

/***/ }),

/***/ "./src/appLogic/pushToProject.js":
/*!***************************************!*\
  !*** ./src/appLogic/pushToProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pushToProject = function(projectsArray, projectToPush) {

    projectsArray.push(projectToPush);   

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pushToProject);

/***/ }),

/***/ "./src/appLogic/taskFactory.js":
/*!*************************************!*\
  !*** ./src/appLogic/taskFactory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskFactory = (taskName, desc, dateDue, taskPriority, taskNotes, checkboxes) => {
    var name = taskName;
    var description = desc;
    var dueDate = dateDue;
    var priority = taskPriority;
    var checkbox =  checkboxes;
    var notes = taskNotes;


    return { name, description, dueDate, priority, notes, checkbox }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

/***/ }),

/***/ "./src/domManipulation/cacheDomElements.js":
/*!*************************************************!*\
  !*** ./src/domManipulation/cacheDomElements.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cachedChecks": () => (/* binding */ cachedChecks),
/* harmony export */   "cachedDom": () => (/* binding */ cachedDom),
/* harmony export */   "cachedEditChecks": () => (/* binding */ cachedEditChecks),
/* harmony export */   "cachedEditForm": () => (/* binding */ cachedEditForm),
/* harmony export */   "getLabelInput": () => (/* binding */ getLabelInput),
/* harmony export */   "getSiblingChevron": () => (/* binding */ getSiblingChevron),
/* harmony export */   "getTaskDomElements": () => (/* binding */ getTaskDomElements)
/* harmony export */ });
//  Caches DOM elements

const cachedDom = function() {
    const projectsButton = document.querySelector('#projects-button');
    const newProjectButton = document.querySelector('#new-project-button');
    const newTaskButton = document.querySelector('#new-task-button');
    const exitTask = document.querySelector('.exit-task');
    const newTaskView = document.querySelector('.new-task');
    const newProjectView = document.querySelector('.new-project');
    const editTaskView = document.querySelector('.edit-task');
    const exitEditViewButton = document.querySelector('.exit-edit-task');
    const editChecklistPlus = document.querySelector('#checklist-edit-plus');
    const editSubmitButton = document.querySelector('.edit-task-submit');
    const taskForm = document.querySelector('#task-form');
    const projectForm = document.querySelector('#project-form')
    const exitProject = document.querySelector('.exit-project');
    const submitTask = document.querySelector('.add-task');
    const submitProject = document.querySelector('.add-project');
    const content = document.querySelector('.content');
    const openTask = document.querySelector('.open-task');
    const exitActiveTask = document.querySelector('.exit-task-view');
    const checklistPlus =  document.querySelector('#checklist-plus');
    const checklistEntries = document.querySelector('.checklist-container');
    const marquee = document.querySelector('marquee');
    const sort = document.querySelector('#sort');

    return { projectsButton, newProjectButton, newTaskButton, exitTask, 
        exitProject, newTaskView, newProjectView, submitTask, submitProject, 
        taskForm, projectForm, content, exitActiveTask, openTask, checklistPlus, 
        checklistEntries, editTaskView, exitEditViewButton, editChecklistPlus, editSubmitButton, 
        marquee, sort }
}

const cachedEditForm = function() {
    const myDom = cachedDom();
    const form = myDom.editTaskView.querySelector('form');
    const name = form.querySelector('#title');
    const desc = form.querySelector('#desc');
    const date = form.querySelector('#due-date');
    const prio = form.querySelector('#priority');
    const notes = form.querySelector('#notes');
    const checks = form.querySelector('.checklist-container')

    const submitEditButton = form.querySelector('button');

    return { name, desc, date, prio, checks, notes, submitEditButton, form }
}

const cachedChecks = function() {
    const myDom = cachedDom();
    const myChecklistEntries = myDom.checklistEntries;
    const myChecks = Array.from(myChecklistEntries.querySelectorAll('#newDiv'));
    return myChecks;
}

const cachedEditChecks = function() {
    const myEdit = cachedEditForm();
    const myChecklistEntries = myEdit.checks;
    const myChecks = Array.from(myChecklistEntries.querySelectorAll('#newDiv'));
    return myChecks;
}

const getLabelInput = function(domElement) {
    const label = domElement.querySelector('label');
    const labelText = label.textContent;

    const input = domElement.querySelector('input');
    const inputBool = input.checked;

    return { labelText, inputBool };

}

const getSiblingChevron = function(parentDiv) {
    const upArrow = parentDiv.querySelector('.collapse');
    const downArrow = parentDiv.querySelector('.expand');

    return { upArrow, downArrow }
}

const getTaskDomElements = function(target) {
    const taskDiv = target.parentNode.parentNode;
    const taskIndex = taskDiv.id;
    const taskName = taskDiv.querySelector('h4');
    const taskDesc = taskDiv.querySelector('#desc-open');
    const taskPrio = taskDiv.querySelector('#priority-open');
    const taskDate = taskDiv.querySelector('#date-open');

    return { taskIndex, taskName, taskDesc, taskPrio, taskDate }
}




/***/ }),

/***/ "./src/domManipulation/divCreation.js":
/*!********************************************!*\
  !*** ./src/domManipulation/divCreation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCheckbox": () => (/* binding */ createCheckbox),
/* harmony export */   "createEditCheckbox": () => (/* binding */ createEditCheckbox),
/* harmony export */   "createProjectDeleteButton": () => (/* binding */ createProjectDeleteButton),
/* harmony export */   "createProjectDivs": () => (/* binding */ createProjectDivs),
/* harmony export */   "createTaskDivs": () => (/* binding */ createTaskDivs),
/* harmony export */   "iterateProject": () => (/* binding */ iterateProject),
/* harmony export */   "iterateTasks": () => (/* binding */ iterateTasks),
/* harmony export */   "populateEditChecks": () => (/* binding */ populateEditChecks),
/* harmony export */   "rewriteChecks": () => (/* binding */ rewriteChecks)
/* harmony export */ });
/* harmony import */ var _cacheDomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cacheDomElements */ "./src/domManipulation/cacheDomElements.js");
/* harmony import */ var _assets_book_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/book.svg */ "./src/assets/book.svg");
/* harmony import */ var _helpers_stringManip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/stringManip */ "./src/helpers/stringManip.js");
/* harmony import */ var _assets_minus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/minus.svg */ "./src/assets/minus.svg");
/* harmony import */ var _eventBinding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventBinding */ "./src/domManipulation/eventBinding.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events */ "./src/domManipulation/events.js");
/* harmony import */ var _helpers_findTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/findTask */ "./src/helpers/findTask.js");
/* harmony import */ var _assets_heart_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/heart.svg */ "./src/assets/heart.svg");
/* harmony import */ var _assets_heart2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/heart2.svg */ "./src/assets/heart2.svg");
/* harmony import */ var _appLogic_checkChecklistBool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../appLogic/checkChecklistBool */ "./src/appLogic/checkChecklistBool.js");
/* harmony import */ var _appLogic_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../appLogic/projects */ "./src/appLogic/projects.js");
/* harmony import */ var _helpers_findProject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/findProject */ "./src/helpers/findProject.js");
/* harmony import */ var _assets_trash_2_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/trash-2.svg */ "./src/assets/trash-2.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_projects_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/projects.png */ "./src/assets/projects.png");
















const createProjectDivs = function (project) {
  const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();

  const div = document.createElement('div');
  const image = document.createElement('img');
  const title = document.createElement('p');
  const priority = document.createElement('p');

  image.src = _assets_projects_png__WEBPACK_IMPORTED_MODULE_14__;
  if ((0,_helpers_stringManip__WEBPACK_IMPORTED_MODULE_2__.checkLength)(project.name)) {
    title.textContent = (0,_helpers_stringManip__WEBPACK_IMPORTED_MODULE_2__.abbreviateString)(project.name);
  } else {
    title.textContent = project.name;
  }
  priority.textContent = `Priority: ${project.priority}`;

  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(priority);
  div.classList.add('project-sub');
  myDom.content.appendChild(div);
};

const createTaskDivs = function (task) {
  const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();

  const div = document.createElement('div');
  const image = document.createElement('img');
  const title = document.createElement('p');

  image.src = _assets_book_svg__WEBPACK_IMPORTED_MODULE_1__;
  if ((0,_helpers_stringManip__WEBPACK_IMPORTED_MODULE_2__.checkLength)(task.name)) {
    title.textContent = (0,_helpers_stringManip__WEBPACK_IMPORTED_MODULE_2__.abbreviateString)(task.name);
  } else {
    title.textContent = task.name;
  }
  div.appendChild(image);
  div.appendChild(title);
  myDom.content.appendChild(div);
};

const createCheckbox = function () {
  const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();
  const myForm = myDom.newTaskView;

  const newCheckboxItemText = myForm.querySelector('#checklist-entry').value;

  const newDiv = document.createElement('div');
  const subDiv = document.createElement('div');

  newDiv.setAttribute('id', 'newDiv');
  subDiv.setAttribute('id', 'subDiv');

  const minusImg = document.createElement('img');
  minusImg.src = _assets_minus_svg__WEBPACK_IMPORTED_MODULE_3__;
  minusImg.setAttribute('id', 'minus');

  (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindRemoveCheckbox)(minusImg);

  const newCheckbox = document.createElement('input');
  const newCheckboxLabel = document.createElement('label');
  newCheckboxLabel.setAttribute('for', 'test');

  newCheckbox.type = 'checkbox';
  newCheckbox.setAttribute('id', 'test');

  newCheckboxLabel.textContent = newCheckboxItemText;

  newDiv.appendChild(newCheckbox);
  subDiv.appendChild(newCheckboxLabel);
  subDiv.appendChild(minusImg);
  newDiv.appendChild(subDiv);

  const checkContainer = myForm.querySelector('.checklist-container');

  checkContainer.appendChild(newDiv);
};

const createEditCheckbox = function () {
  const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();
  const myForm = myDom.editTaskView;

  const newCheckboxItemText = myForm.querySelector('#checklist-entry').value;

  const newDiv = document.createElement('div');
  const subDiv = document.createElement('div');

  newDiv.setAttribute('id', 'newDiv');
  subDiv.setAttribute('id', 'subDiv');

  const minusImg = document.createElement('img');
  minusImg.src = _assets_minus_svg__WEBPACK_IMPORTED_MODULE_3__;
  minusImg.setAttribute('id', 'minus');

  (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindRemoveCheckbox)(minusImg);

  const newCheckbox = document.createElement('input');
  const newCheckboxLabel = document.createElement('label');
  newCheckboxLabel.setAttribute('for', 'test');

  newCheckbox.type = 'checkbox';
  newCheckbox.setAttribute('id', 'test');

  newCheckboxLabel.textContent = newCheckboxItemText;

  newDiv.appendChild(newCheckbox);
  subDiv.appendChild(newCheckboxLabel);
  subDiv.appendChild(minusImg);
  newDiv.appendChild(subDiv);

  const checkContainer = myForm.querySelector('.checklist-container');

  checkContainer.appendChild(newDiv);
};

const populateEditChecks = function (task) {
  const myForm = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedEditForm)();
  const checkContainer = myForm.checks;
  for (let i = 0; i < task.checkbox.length; i++) {
    const newCheckboxItemText = task.checkbox[i].name;

    const newDiv = document.createElement('div');
    const subDiv = document.createElement('div');

    newDiv.setAttribute('id', 'newDiv');
    subDiv.setAttribute('id', 'subDiv');

    const minusImg = document.createElement('img');
    minusImg.src = _assets_minus_svg__WEBPACK_IMPORTED_MODULE_3__;
    minusImg.setAttribute('id', 'minus');

    (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindRemoveCheckbox)(minusImg);

    const newCheckbox = document.createElement('input');
    const newCheckboxLabel = document.createElement('label');
    newCheckboxLabel.setAttribute('for', 'test');

    newCheckbox.type = 'checkbox';
    newCheckbox.checked = task.checkbox[i].taskFinished;
    newCheckbox.setAttribute('id', 'test');

    newCheckboxLabel.textContent = newCheckboxItemText;

    newDiv.appendChild(newCheckbox);
    subDiv.appendChild(newCheckboxLabel);
    subDiv.appendChild(minusImg);
    newDiv.appendChild(subDiv);
    checkContainer.appendChild(newDiv);
  }
};

const createTaskDesc = function () {
  const descDiv = document.createElement('div');
  const descLabel = document.createElement('label');
  descLabel.setAttribute('for', 'update-desc');
  descLabel.textContent = 'Description:';
  const descText = document.createElement('span');
  descText.setAttribute('id', 'desc-open');

  descDiv.appendChild(descLabel);
  descDiv.appendChild(descText);

  return descDiv;
};

const createTaskDate = function () {
  const dateDiv = document.createElement('div');
  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'update-date');
  dateLabel.textContent = 'Due by:';
  const dateText = document.createElement('span');
  dateText.setAttribute('id', 'date-open');

  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateText);

  return dateDiv;
};

const createTaskPriority = function () {
  const priorityDiv = document.createElement('div');
  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'update-priority');
  priorityLabel.textContent = 'Priority:';
  const priorityText = document.createElement('span');
  priorityText.setAttribute('id', 'priority-open');

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityText);

  return priorityDiv;
};

const createTaskNotes = function () {
  const notesDiv = document.createElement('div');
  const notesLabel = document.createElement('label');
  notesLabel.setAttribute('for', 'update-notes');
  notesLabel.textContent = 'Notes:';
  const notesText = document.createElement('span');
  notesText.setAttribute('id', 'notes-open');

  notesDiv.appendChild(notesLabel);
  notesDiv.appendChild(notesText);

  return notesDiv;
};

const createTaskChecks = function (task) {
  const checkContainerMain = document.createElement('div');
  checkContainerMain.classList.add('check-container-main');
  const checkLabel = document.createElement('label');
  checkLabel.classList.add('check-label');
  checkLabel.textContent = 'Sub-tasks:';
  checkContainerMain.appendChild(checkLabel);
  if (task.checkbox.length == 0) {
    checkLabel.style.position = 'relative';
  }
  for (let i = 0; i < task.checkbox.length; i++) {
    const checkContainerSub = document.createElement('div');
    checkContainerSub.classList.add('check-container-sub');
    const checkName = document.createElement('span');
    const status = document.createElement('span');
    const remove = document.createElement('span');

    checkName.textContent = task.checkbox[i].name;
    status.textContent = (0,_appLogic_checkChecklistBool__WEBPACK_IMPORTED_MODULE_9__["default"])(task.checkbox[i]);
    remove.style.color = 'red';
    remove.textContent = 'Remove?';

    (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindRemoveSubtask)(remove);

    checkContainerSub.setAttribute('id', i);
    checkContainerSub.appendChild(checkName);
    checkContainerSub.appendChild(status);
    checkContainerSub.appendChild(remove);
    checkContainerMain.appendChild(checkContainerSub);
  }

  return checkContainerMain;
};

const rewriteChecks = function (task, mainContainer) {
  const checkContainerMain = mainContainer;

  for (let i = 0; i < task.checkbox.length; i++) {
    const checkContainerSub = document.createElement('div');
    checkContainerSub.classList.add('check-container-sub');
    const checkName = document.createElement('span');
    const status = document.createElement('span');
    const remove = document.createElement('span');

    checkName.textContent = task.checkbox[i].name;
    status.textContent = (0,_appLogic_checkChecklistBool__WEBPACK_IMPORTED_MODULE_9__["default"])(task.checkbox[i]);
    remove.style.color = 'red';
    remove.textContent = 'Remove?';

    (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindRemoveSubtask)(remove);

    checkContainerSub.setAttribute('id', i);
    checkContainerSub.appendChild(checkName);
    checkContainerSub.appendChild(status);
    checkContainerSub.appendChild(remove);
    checkContainerMain.appendChild(checkContainerSub);
  }
};

const createTaskEdit = function () {
  const editButton = document.createElement('img');
  editButton.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_13__;
  (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindEdit)(editButton);
  return editButton;
};

const createTaskDelete = function () {
  const deleteButton = document.createElement('img');
  deleteButton.src = _assets_trash_2_svg__WEBPACK_IMPORTED_MODULE_12__;
  (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindDelete)(deleteButton);
  return deleteButton;
};

const createNewTask = function (someTask) {
  const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const taskContent = document.createElement('div');
  taskContent.classList.add('task-content');
  taskContent.classList.add('unopened');

  const header = createTaskHeader();
  const headerText = header.querySelector('h4');
  headerText.textContent = someTask.name;
  taskDiv.appendChild(header);

  const prio = createTaskPriority();
  const prioText = prio.querySelector('span');
  prioText.textContent = someTask.priority;

  const desc = createTaskDesc();
  const descText = desc.querySelector('span');
  descText.textContent = someTask.description;

  const date = createTaskDate();
  const dateText = date.querySelector('span');
  dateText.textContent = someTask.dueDate;

  const notes = createTaskNotes();
  const notesText = notes.querySelector('span');
  notesText.textContent = someTask.notes;

  const checks = createTaskChecks(someTask);

  const editButton = createTaskEdit();

  const deleteButton = createTaskDelete();

  taskContent.appendChild(prio);
  taskContent.appendChild(desc);
  taskContent.appendChild(date);
  taskContent.appendChild(checks);
  taskContent.appendChild(notes);
  taskContent.appendChild(deleteButton);
  taskContent.appendChild(editButton);
  taskDiv.appendChild(taskContent);
  myDom.content.appendChild(taskDiv);
  return taskDiv;
};

const createTaskHeader = function () {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('task-header');
  const header = document.createElement('h4');

  const chevronDown = document.createElement('img');
  chevronDown.src = _assets_heart_svg__WEBPACK_IMPORTED_MODULE_7__;
  chevronDown.classList.add('expand');
  chevronDown.setAttribute('id', 'active');

  const chevronUp = document.createElement('img');
  chevronUp.src = _assets_heart2_svg__WEBPACK_IMPORTED_MODULE_8__;
  chevronUp.classList.add('collapse');
  chevronUp.setAttribute('id', 'inactive');

  headerDiv.appendChild(header);
  headerDiv.appendChild(chevronDown);
  (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindExpand)(chevronDown);
  (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindCollapse)(chevronUp);

  headerDiv.appendChild(chevronUp);

  return headerDiv;
};

const iterateTasks = function (project) {
  console.log(project.tasks);
  console.log(typeof (_events__WEBPACK_IMPORTED_MODULE_5__.getSortedArray));
  const newTaskCopySorted = (0,_events__WEBPACK_IMPORTED_MODULE_5__.getSortedArray)((0,_events__WEBPACK_IMPORTED_MODULE_5__.copyArray)(project.tasks));
  for (let i = 0; i < project.tasks.length; i++) {
    const newTask = createNewTask((0,_helpers_findTask__WEBPACK_IMPORTED_MODULE_6__["default"])(project, newTaskCopySorted[i].name));
    const strTwo = project.tasks.indexOf((0,_helpers_findTask__WEBPACK_IMPORTED_MODULE_6__["default"])(project, newTaskCopySorted[i].name));
    newTask.setAttribute('id', (strTwo));
  }
};

const iterateProject = function (sort) {
  for (let i = 0; i < _appLogic_projects__WEBPACK_IMPORTED_MODULE_10__["default"].length; i++) {
    console.log(sort);
    createProjectDivs((0,_helpers_findProject__WEBPACK_IMPORTED_MODULE_11__["default"])(sort[i].name));
  }
};

const createProjectDeleteButton = function () {
  const projectDeleteButton = document.createElement('img');
  projectDeleteButton.src = _assets_trash_2_svg__WEBPACK_IMPORTED_MODULE_12__;
  (0,_eventBinding__WEBPACK_IMPORTED_MODULE_4__.bindProjectDelete)(projectDeleteButton);
  return projectDeleteButton;
};




/***/ }),

/***/ "./src/domManipulation/eventBinding.js":
/*!*********************************************!*\
  !*** ./src/domManipulation/eventBinding.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindCollapse": () => (/* binding */ bindCollapse),
/* harmony export */   "bindDelete": () => (/* binding */ bindDelete),
/* harmony export */   "bindEdit": () => (/* binding */ bindEdit),
/* harmony export */   "bindEventsMain": () => (/* binding */ bindEventsMain),
/* harmony export */   "bindExpand": () => (/* binding */ bindExpand),
/* harmony export */   "bindProjectDelete": () => (/* binding */ bindProjectDelete),
/* harmony export */   "bindProjectEvents": () => (/* binding */ bindProjectEvents),
/* harmony export */   "bindRemoveCheckbox": () => (/* binding */ bindRemoveCheckbox),
/* harmony export */   "bindRemoveSubtask": () => (/* binding */ bindRemoveSubtask)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/domManipulation/events.js");
/* harmony import */ var _cacheDomElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cacheDomElements */ "./src/domManipulation/cacheDomElements.js");
/* harmony import */ var _helpers_getP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getP */ "./src/helpers/getP.js");
/* harmony import */ var _helpers_findProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/findProject */ "./src/helpers/findProject.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ "./src/domManipulation/render.js");
/* harmony import */ var _divCreation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./divCreation */ "./src/domManipulation/divCreation.js");
/* harmony import */ var _globalVariable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globalVariable */ "./src/domManipulation/globalVariable.js");
/* harmony import */ var _appLogic_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../appLogic/projects */ "./src/appLogic/projects.js");
/* harmony import */ var _helpers_dumpElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/dumpElement */ "./src/helpers/dumpElement.js");










const bindEventsMain = () => {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();

    myDom.projectsButton.addEventListener('click', function() {
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.projectsButtonEvent)();
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.changeViewProject)();
    })

    myDom.newProjectButton.addEventListener('click', function() {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.newProjectButtonEvent)();
    });

    myDom.newTaskButton.addEventListener('click', function() {
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.newTaskButtonEvent)();
    });

    myDom.exitProject.addEventListener('click', function() {
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.exitProjectView)();
    })

    myDom.exitTask.addEventListener('click', function() {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.exitTaskView)();
    })

    myDom.submitProject.addEventListener('click', function(e) {
        e.preventDefault();
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.submitProject)();
    })

    myDom.submitTask.addEventListener('click', function(e) {
        e.preventDefault();
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.submitTask)();
    })

    myDom.checklistPlus.addEventListener('click', function() {
        ;(0,_divCreation__WEBPACK_IMPORTED_MODULE_5__.createCheckbox)();
    })

    myDom.editChecklistPlus.addEventListener('click', function() {
        ;(0,_divCreation__WEBPACK_IMPORTED_MODULE_5__.createEditCheckbox)();
    })

    myDom.exitEditViewButton.addEventListener('click', function(e) {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.exitEditView)();
    })

    myDom.editSubmitButton.addEventListener('click', function(e) {
        e.preventDefault();
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.submitEdit)(e.target);
    })

    myDom.sort.addEventListener('click', function() {
        if(myDom.content.id == 'project') {
            (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderProject)();
        } else if(myDom.content.id == 'task') {
            (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(_appLogic_projects__WEBPACK_IMPORTED_MODULE_7__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_6__["default"].current]);
        }
    })
}

const bindProjectEvents = function() {
    const myContent = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)().content;
    const myProjects = Array.from(myContent.querySelectorAll('div'));
    for(let i = 0; i < myProjects.length; i++) {
        myProjects[i].addEventListener('click', function() {
            const projectName = (0,_helpers_getP__WEBPACK_IMPORTED_MODULE_2__["default"])(myProjects[i]);
            const actualProject = (0,_helpers_findProject__WEBPACK_IMPORTED_MODULE_3__["default"])(projectName);
            _globalVariable__WEBPACK_IMPORTED_MODULE_6__["default"].current = _appLogic_projects__WEBPACK_IMPORTED_MODULE_7__["default"].indexOf(actualProject); // Use myProjects.indexOf -OR- projectContainer.indexOf
            console.log(_globalVariable__WEBPACK_IMPORTED_MODULE_6__["default"].current);
            (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(actualProject);
        })
    }
}

const bindRemoveCheckbox = function(minusButton) {
    minusButton.addEventListener('click', function(e) {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.removeCheckbox)(e.target.parentNode.parentNode);
    })
}

const bindRemoveSubtask = function(minusButton) {
    minusButton.addEventListener('click', function(e) {
        const label = e.target.parentNode.parentNode.querySelector('label');
        const main = e.target.parentNode.parentNode;
        const taskIndex = e.target.parentNode.parentNode.parentNode.parentNode.id; // gives task id

        const selfIndex = e.target.parentNode.id;

        _appLogic_projects__WEBPACK_IMPORTED_MODULE_7__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_6__["default"].current].tasks[taskIndex].checkbox.splice(selfIndex, 1);
        if(_appLogic_projects__WEBPACK_IMPORTED_MODULE_7__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_6__["default"].current].tasks[taskIndex].checkbox.length == 0) {
            label.style.position = 'relative';
        }
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.removeCheckbox)(e.target.parentNode);
        (0,_helpers_dumpElement__WEBPACK_IMPORTED_MODULE_8__.dumpChecklist)(main);
        (0,_divCreation__WEBPACK_IMPORTED_MODULE_5__.rewriteChecks)(_appLogic_projects__WEBPACK_IMPORTED_MODULE_7__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_6__["default"].current].tasks[taskIndex], main);
        (0,_events__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_appLogic_projects__WEBPACK_IMPORTED_MODULE_7__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_6__["default"].current]);
    })
}

const bindEdit = function(editButton) {
    editButton.addEventListener('click', function(e) {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.editTask)(e.target);
    })
}

const bindExpand = function(element) {
    element.addEventListener('click', function() {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.expandTask)(element);
    })
}

const bindCollapse = function(element) {
    element.addEventListener('click', function() {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.closeTask)(element);
    })
}

const bindDelete = function(element) {
    element.addEventListener('click', function(e) {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(e.target);
    })
}

const bindProjectDelete = function(element) {
    element.addEventListener('click', function(e) {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_0__.deleteProject)();
    })
}



/***/ }),

/***/ "./src/domManipulation/events.js":
/*!***************************************!*\
  !*** ./src/domManipulation/events.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeViewProject": () => (/* binding */ changeViewProject),
/* harmony export */   "changeViewTask": () => (/* binding */ changeViewTask),
/* harmony export */   "closeOpenTask": () => (/* binding */ closeOpenTask),
/* harmony export */   "closeTask": () => (/* binding */ closeTask),
/* harmony export */   "copyArray": () => (/* binding */ copyArray),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "exitEditView": () => (/* binding */ exitEditView),
/* harmony export */   "exitProjectView": () => (/* binding */ exitProjectView),
/* harmony export */   "exitTaskView": () => (/* binding */ exitTaskView),
/* harmony export */   "expandTask": () => (/* binding */ expandTask),
/* harmony export */   "getSortedArray": () => (/* binding */ getSortedArray),
/* harmony export */   "newProjectButtonEvent": () => (/* binding */ newProjectButtonEvent),
/* harmony export */   "newTaskButtonEvent": () => (/* binding */ newTaskButtonEvent),
/* harmony export */   "populateProjectMarquee": () => (/* binding */ populateProjectMarquee),
/* harmony export */   "populateTaskMarquee": () => (/* binding */ populateTaskMarquee),
/* harmony export */   "projectsButtonEvent": () => (/* binding */ projectsButtonEvent),
/* harmony export */   "removeCheckbox": () => (/* binding */ removeCheckbox),
/* harmony export */   "submitEdit": () => (/* binding */ submitEdit),
/* harmony export */   "submitProject": () => (/* binding */ submitProject),
/* harmony export */   "submitTask": () => (/* binding */ submitTask),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/domManipulation/render.js");
/* harmony import */ var _cacheDomElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cacheDomElements */ "./src/domManipulation/cacheDomElements.js");
/* harmony import */ var _helpers_dumpElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dumpElement */ "./src/helpers/dumpElement.js");
/* harmony import */ var _helpers_populateProjectSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/populateProjectSelect */ "./src/helpers/populateProjectSelect.js");
/* harmony import */ var _appLogic_projectFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appLogic/projectFactory */ "./src/appLogic/projectFactory.js");
/* harmony import */ var _appLogic_pushToProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appLogic/pushToProject */ "./src/appLogic/pushToProject.js");
/* harmony import */ var _appLogic_taskFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appLogic/taskFactory */ "./src/appLogic/taskFactory.js");
/* harmony import */ var _helpers_findProject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/findProject */ "./src/helpers/findProject.js");
/* harmony import */ var _appLogic_pushTasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../appLogic/pushTasks */ "./src/appLogic/pushTasks.js");
/* harmony import */ var _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../appLogic/projects */ "./src/appLogic/projects.js");
/* harmony import */ var _helpers_checklistBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/checklistBuilder */ "./src/helpers/checklistBuilder.js");
/* harmony import */ var _globalVariable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globalVariable */ "./src/domManipulation/globalVariable.js");
/* harmony import */ var _divCreation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./divCreation */ "./src/domManipulation/divCreation.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/closestTo/index.js");















const projectsButtonEvent = function() {
  (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderProject)();
  _globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current = '';
}

const newTaskButtonEvent = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();

    myDom.newTaskView.style.display = 'block';
    (0,_helpers_dumpElement__WEBPACK_IMPORTED_MODULE_2__.dumpSelect)();
    (0,_helpers_populateProjectSelect__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

const newProjectButtonEvent = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();

    myDom.newProjectView.style.display = 'block'
}

const submitProject = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();

    const newProject = (0,_appLogic_projectFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(myDom.projectForm.querySelector('#title').value, 
    myDom.projectForm.querySelector('#due-date').value,
    myDom.projectForm.querySelector('#priority').value)
    
    ;(0,_appLogic_pushToProject__WEBPACK_IMPORTED_MODULE_5__["default"])(_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"], newProject);
    const localStorageProject = JSON.stringify(newProject);
    const newKey = String(_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].length - 1);
    localStorage.setItem(newKey, localStorageProject);
    myDom.content.setAttribute('id', 'project')
    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.renderProject)();

    exitProjectView();
    populateProjectMarquee();
    myDom.projectForm.reset();
}

const updateStorage = function(project) {
    const projectIndex = String(_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].indexOf(project));
    const stringedProject = JSON.stringify(project);
    localStorage.setItem(projectIndex, stringedProject);
}

const orderStorage = function() {
    for(let i = 0; i < _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].length; i++) {
        updateStorage(_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][i]);
    }
}

const submitTask = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    const name = myDom.taskForm.querySelector('#title').value;
    const desc = myDom.taskForm.querySelector('#desc').value;
    const dateDue = myDom.taskForm.querySelector('#due-date').value;
    const priority = myDom.taskForm.querySelector('#priority').value;
    const notes = myDom.taskForm.querySelector('#notes').value;
    const assocProject = myDom.taskForm.querySelector("#project-select").value;
    const cashedCheques = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedChecks)();
    const newArray = (0,_helpers_checklistBuilder__WEBPACK_IMPORTED_MODULE_10__["default"])(cashedCheques);
    const newTask = (0,_appLogic_taskFactory__WEBPACK_IMPORTED_MODULE_6__["default"])(name, desc, dateDue, priority, notes, newArray);
    const project = (0,_helpers_findProject__WEBPACK_IMPORTED_MODULE_7__["default"])(assocProject);
    (0,_appLogic_pushTasks__WEBPACK_IMPORTED_MODULE_8__["default"])(project, newTask);

    updateStorage(project);


    if(myDom.content.id == 'task') {
        if(assocProject == _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current].name) {
            (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project);
            populateTaskMarquee();
        }
    }

    exitTaskView();
    (0,_helpers_dumpElement__WEBPACK_IMPORTED_MODULE_2__.dumpChecklistEdit)(myDom.checklistEntries);
    myDom.taskForm.reset();
}

const closeOpenTask = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();

    myDom.openTask.style.display = 'none';
}

const exitProjectView = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();

    myDom.newProjectView.style.display = "none";
}

const exitTaskView = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();

    myDom.newTaskView.style.display = 'none';
}

const exitEditView = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    myDom.editTaskView.style.display = 'none';
}

const removeCheckbox = function(item) {
    item.remove();
}

const changeViewTask = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    myDom.content.setAttribute('id', 'task')
}

const changeViewProject = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    myDom.content.setAttribute('id', 'project')
}

const expandTask = function(element) {
    const chevrons = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.getSiblingChevron)(element.parentNode);
    const upArrow = chevrons.upArrow;
    const taskContent = element.parentNode.nextSibling;

    element.classList.add('flipped');
    taskContent.classList.replace('unopened', 'open');


    if(upArrow.classList.contains('flipped')) {
        upArrow.classList.remove('flipped');
    }

    setTimeout(function() {
        element.setAttribute('id', 'inactive');
        upArrow.setAttribute('id', 'active');
    }, 250)
}

const closeTask = function(element) {
    const chevrons = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.getSiblingChevron)(element.parentNode);
    const downArrow = chevrons.downArrow;
    const taskContent = element.parentNode.nextSibling;

    element.classList.add('flipped');
    taskContent.classList.replace('open', 'unopened');

    downArrow.classList.remove('flipped')

    setTimeout(function() {
        element.setAttribute('id', 'inactive');
        downArrow.setAttribute('id', 'active');
    }, 250)
}

const editTask = function(target) {

    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    myDom.editTaskView.style.display = 'block';

    const myEdit = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedEditForm)();
    const currentTaskDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.getTaskDomElements)(target);
    const currentTask = _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current].tasks[currentTaskDom.taskIndex]
    myEdit.name.value = currentTask.name;
    myEdit.desc.value = currentTask.description;
    myEdit.date.value = currentTask.dueDate;
    myEdit.prio.value = currentTask.priority;
    myEdit.notes.value = currentTask.notes;
    myEdit.submitEditButton.setAttribute('id', currentTaskDom.taskIndex)
    ;(0,_divCreation__WEBPACK_IMPORTED_MODULE_12__.populateEditChecks)(currentTask);
    
}

const submitEdit = function(target) {
    const myEdit = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedEditForm)();

    const myId = target.id;
    const curProject = _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current];
    const curTask = curProject.tasks[myId];

    curTask.name = myEdit.name.value;
    curTask.description = myEdit.desc.value;
    curTask.date = myEdit.date.value;
    curTask.priority = myEdit.prio.value;
    curTask.notes = myEdit.notes.value;
    curTask.checkbox = (0,_helpers_checklistBuilder__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedEditChecks)());

    updateStorage(curProject);

    exitEditView();
    (0,_helpers_dumpElement__WEBPACK_IMPORTED_MODULE_2__.dumpChecklistEdit)(myEdit.checks);
    myEdit.form.reset();

    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(curProject);
}

const deleteTask = function(target) {
    const curProject = _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current];
    const curTask = target.parentNode.parentNode.id
    curProject.tasks.splice(curTask, 1);
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(curProject);
    updateStorage(curProject);
} 

const deleteProject = function() {
    const lastKey = String(_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].length - 1);
    localStorage.removeItem(lastKey);
    _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].splice(_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current, 1);
    orderStorage();
    projectsButtonEvent();
    populateProjectMarquee();
    changeViewProject();
}

const populateProjectMarquee = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    const today = new Date();
    const projectDateArray = [];

    if(_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].length == 0) {
        myDom.marquee.textContent = 'Nothing to do! Take a break :)'
        myDom.marquee.style.color = 'black';
    }

    for(let i = 0; i < _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].length; i++) {
        const tempDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])((_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][i].dueDate))
        if((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(tempDate)) {
            const projectName = _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][i].name;
            const projectDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(tempDate, today);
            const marqueeText = 'Overdue: ' + projectName + ', due ' + projectDate + ' ago.';
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'red';
            return;
        } else {
            projectDateArray.push(tempDate);
        }
    }

    const soonest = JSON.stringify((0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(today, projectDateArray));
    for(let i = 0; i < _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].length; i++) {
        if(JSON.stringify(projectDateArray[i]) == soonest){
            const projectName = _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][i].name;
            const dueDate = projectDateArray[i];
            const projectDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(dueDate, today);
            const marqueeText = 'Upcoming: ' + projectName + ', due in ' + projectDate + '.'
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'black';
            return;
        }
    }
}

const populateTaskMarquee = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    const today = new Date();
    const taskDateArray = [];

    if(_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current].tasks.length == 0) {
        myDom.marquee.textContent = 'Nothing to do! Take a break :)'
        myDom.marquee.style.color = 'black';
        return;
    }

    for(let i = 0; i < _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current].tasks.length; i++) {
        const tempDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])((_appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current].tasks[i].dueDate))
        if((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(tempDate)) {
            const taskName = _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current].tasks[i].name;
            const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(tempDate, today);
            const marqueeText = 'Overdue: ' + taskName + ', due ' + taskDate + ' ago.';
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'red';
            return;
        } else {
            taskDateArray.push(tempDate);
        }
    }

    const soonest = JSON.stringify((0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(today, taskDateArray));
    for(let i = 0; i < _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"].length; i++) {
        if(JSON.stringify(taskDateArray[i]) == soonest){
            const taskName = _appLogic_projects__WEBPACK_IMPORTED_MODULE_9__["default"][_globalVariable__WEBPACK_IMPORTED_MODULE_11__["default"].current].tasks[i].name;
            const dueDate = taskDateArray[i];
            const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(dueDate, today);
            const marqueeText = 'Upcoming: ' + taskName + ', due in ' + taskDate + '.'
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'black';
            return;
        }
    }
}

const getSortValue = function() {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.cachedDom)();
    return myDom.sort.value;
}

const copyArray = function(someArray) {
    const copiedArray = [];
    for(let i = 0; i < someArray.length; i++) {
        copiedArray.push(someArray[i])
    }
    return copiedArray;
}

const getSortedArray = function(someArray) {
    const sortMethod = getSortValue();
    console.log(sortMethod);
    switch(sortMethod) {
        case 'alphabet-a':
            return someArray.sort((a, b) => a.name - b.name);
        case 'alphabet-z':
            return someArray.reverse((a, b) => a.name - b.name);
        case 'priority-one':
            return someArray.reverse((a, b) => a.priority - b.priority);
        case 'priority-two':
            return someArray.sort((a, b) => a.priority - b.priority);
        case 'date-one':
            return someArray.sort((a, b) => a.dueDate - b.dueDate);
        case 'date-two':
            return someArray.reverse((a, b) => a.dueDate - b.dueDate);
    }
}






/***/ }),

/***/ "./src/domManipulation/globalVariable.js":
/*!***********************************************!*\
  !*** ./src/domManipulation/globalVariable.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var currentProject = {
    current : '',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentProject);

/***/ }),

/***/ "./src/domManipulation/init.js":
/*!*************************************!*\
  !*** ./src/domManipulation/init.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appLogic_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/projects */ "./src/appLogic/projects.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/domManipulation/events.js");



const init = function() {
    if(Object.keys(localStorage).length == 0) {
        return null;
    }
    for(let i = 0; i < localStorage.length; i++ ) {
        console.log(localStorage[i]);
        const parsedString = JSON.parse(localStorage[i]);
        _appLogic_projects__WEBPACK_IMPORTED_MODULE_0__["default"].push(parsedString);
    }
    (0,_events__WEBPACK_IMPORTED_MODULE_1__.populateProjectMarquee)();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./src/domManipulation/render.js":
/*!***************************************!*\
  !*** ./src/domManipulation/render.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProject": () => (/* binding */ renderProject),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _appLogic_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/projects */ "./src/appLogic/projects.js");
/* harmony import */ var _helpers_dumpElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dumpElement */ "./src/helpers/dumpElement.js");
/* harmony import */ var _domManipulation_divCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domManipulation/divCreation */ "./src/domManipulation/divCreation.js");
/* harmony import */ var _domManipulation_eventBinding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domManipulation/eventBinding */ "./src/domManipulation/eventBinding.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./src/domManipulation/events.js");
/* harmony import */ var _cacheDomElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cacheDomElements */ "./src/domManipulation/cacheDomElements.js");








const renderProject = function() {
    (0,_helpers_dumpElement__WEBPACK_IMPORTED_MODULE_1__.dumpContent)();
    const newProjectCopySorted = (0,_events__WEBPACK_IMPORTED_MODULE_4__.getSortedArray)((0,_events__WEBPACK_IMPORTED_MODULE_4__.copyArray)(_appLogic_projects__WEBPACK_IMPORTED_MODULE_0__["default"]));
    console.log(_appLogic_projects__WEBPACK_IMPORTED_MODULE_0__["default"]);
    console.log(newProjectCopySorted);
    (0,_domManipulation_divCreation__WEBPACK_IMPORTED_MODULE_2__.iterateProject)(newProjectCopySorted);
    (0,_events__WEBPACK_IMPORTED_MODULE_4__.populateProjectMarquee)();
    (0,_domManipulation_eventBinding__WEBPACK_IMPORTED_MODULE_3__.bindProjectEvents)();
}

const renderTasks = function(project) {
    const myDom = (0,_cacheDomElements__WEBPACK_IMPORTED_MODULE_5__.cachedDom)();
    const deleteButton = (0,_domManipulation_divCreation__WEBPACK_IMPORTED_MODULE_2__.createProjectDeleteButton)();
    (0,_helpers_dumpElement__WEBPACK_IMPORTED_MODULE_1__.dumpContent)();
    (0,_events__WEBPACK_IMPORTED_MODULE_4__.changeViewTask)();
    (0,_domManipulation_divCreation__WEBPACK_IMPORTED_MODULE_2__.iterateTasks)(project);
    (0,_events__WEBPACK_IMPORTED_MODULE_4__.populateTaskMarquee)();
    myDom.content.appendChild(deleteButton)
 }



/***/ }),

/***/ "./src/helpers/checklistBuilder.js":
/*!*****************************************!*\
  !*** ./src/helpers/checklistBuilder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appLogic_checklistFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/checklistFactory */ "./src/appLogic/checklistFactory.js");
/* harmony import */ var _domManipulation_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulation/cacheDomElements */ "./src/domManipulation/cacheDomElements.js");



const checklistbuilder = function(element) {
    const checklistArray = []
    for(let i = 0; i < element.length; i++) {
        let temp = (0,_domManipulation_cacheDomElements__WEBPACK_IMPORTED_MODULE_1__.getLabelInput)(element[i]);
        let newCheck = (0,_appLogic_checklistFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(temp.labelText, temp.inputBool);
        checklistArray.push(newCheck);
    }
    return checklistArray;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checklistbuilder);

/***/ }),

/***/ "./src/helpers/dumpElement.js":
/*!************************************!*\
  !*** ./src/helpers/dumpElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dumpChecklist": () => (/* binding */ dumpChecklist),
/* harmony export */   "dumpChecklistEdit": () => (/* binding */ dumpChecklistEdit),
/* harmony export */   "dumpContent": () => (/* binding */ dumpContent),
/* harmony export */   "dumpSelect": () => (/* binding */ dumpSelect)
/* harmony export */ });
/* harmony import */ var _domManipulation_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulation/cacheDomElements */ "./src/domManipulation/cacheDomElements.js");


const dumpSelect = function() {
    const myDom = (0,_domManipulation_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();
    const selector = myDom.taskForm.querySelector('#project-select');
    while(selector.hasChildNodes()) {
        selector.removeChild(selector.firstChild);
    }
}

const dumpContent = function() {
    const myDom = (0,_domManipulation_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();
    while(myDom.content.hasChildNodes()) {
        myDom.content.removeChild(myDom.content.firstChild);
    }
}

const dumpChecklist = function(checklist) {
    const children = checklist.querySelectorAll('.check-container-sub');
    children.forEach(child => {
        child.remove();
    })
}

const dumpChecklistEdit = function(checklist) {
    const children = checklist.querySelectorAll('#newDiv');
    children.forEach(child => {
        child.remove();
    })
}



/***/ }),

/***/ "./src/helpers/findProject.js":
/*!************************************!*\
  !*** ./src/helpers/findProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appLogic_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/projects */ "./src/appLogic/projects.js");


const findProject = function(projectTitle) {
    return _appLogic_projects__WEBPACK_IMPORTED_MODULE_0__["default"].find(project => project.name === projectTitle);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findProject); 


/***/ }),

/***/ "./src/helpers/findTask.js":
/*!*********************************!*\
  !*** ./src/helpers/findTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const findTask = function(project, taskName) {
    return project.tasks.find(task => task.name === taskName);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findTask);

/***/ }),

/***/ "./src/helpers/getP.js":
/*!*****************************!*\
  !*** ./src/helpers/getP.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getP = function(div) {
    const projectTitle = div.querySelector('p');
    return projectTitle.textContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getP);

/***/ }),

/***/ "./src/helpers/populateProjectSelect.js":
/*!**********************************************!*\
  !*** ./src/helpers/populateProjectSelect.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulation_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulation/cacheDomElements */ "./src/domManipulation/cacheDomElements.js");
/* harmony import */ var _appLogic_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appLogic/projects */ "./src/appLogic/projects.js");



const createSelect = function(projectTitle) {
    const newOption = document.createElement('option')
    newOption.value = projectTitle;
    newOption.textContent = projectTitle;
    return newOption;
}

const populateProjectSelect = function() {
    const myDom = (0,_domManipulation_cacheDomElements__WEBPACK_IMPORTED_MODULE_0__.cachedDom)();
    const selector = myDom.taskForm.querySelector('#project-select');
    for(let i = 0; i < _appLogic_projects__WEBPACK_IMPORTED_MODULE_1__["default"].length; i++) {
        let tempOption = createSelect(_appLogic_projects__WEBPACK_IMPORTED_MODULE_1__["default"][i].name);
        selector.appendChild(tempOption);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateProjectSelect);

/***/ }),

/***/ "./src/helpers/stringManip.js":
/*!************************************!*\
  !*** ./src/helpers/stringManip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abbreviateString": () => (/* binding */ abbreviateString),
/* harmony export */   "checkLength": () => (/* binding */ checkLength)
/* harmony export */ });
const checkLength = function(someString) {
    return someString.length > 20;
}

const abbreviateString = function(someString) {
    const dots = '...';
    const slice = someString.slice(0, 17);
    return (slice+dots);
}



/***/ }),

/***/ "./src/assets/FOT-Seurat.otf":
/*!***********************************!*\
  !*** ./src/assets/FOT-Seurat.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "165359aca5b9772aec2d.otf";

/***/ }),

/***/ "./src/assets/book.svg":
/*!*****************************!*\
  !*** ./src/assets/book.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1eb461c1714bea41b70d.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17316df5f2dd50ce6915.svg";

/***/ }),

/***/ "./src/assets/heart.svg":
/*!******************************!*\
  !*** ./src/assets/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21b97c05f981445ac94f.svg";

/***/ }),

/***/ "./src/assets/heart2.svg":
/*!*******************************!*\
  !*** ./src/assets/heart2.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ffe8ad6507902364195.svg";

/***/ }),

/***/ "./src/assets/minus.svg":
/*!******************************!*\
  !*** ./src/assets/minus.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3be346f22d3182a7b39.svg";

/***/ }),

/***/ "./src/assets/potBg.png":
/*!******************************!*\
  !*** ./src/assets/potBg.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1648a663fe593e14b78.png";

/***/ }),

/***/ "./src/assets/projects.png":
/*!*********************************!*\
  !*** ./src/assets/projects.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6779316dc75ba2f780fb.png";

/***/ }),

/***/ "./src/assets/trash-2.svg":
/*!********************************!*\
  !*** ./src/assets/trash-2.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28f7697063642f76bd0f.svg";

/***/ }),

/***/ "./src/assets/xclicked.png":
/*!*********************************!*\
  !*** ./src/assets/xclicked.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c72faa22d264227228e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManipulation_eventBinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation/eventBinding */ "./src/domManipulation/eventBinding.js");
/* harmony import */ var _domManipulation_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation/render */ "./src/domManipulation/render.js");
/* harmony import */ var _domManipulation_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulation/init */ "./src/domManipulation/init.js");





(0,_domManipulation_init__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_domManipulation_eventBinding__WEBPACK_IMPORTED_MODULE_1__.bindEventsMain)();
(0,_domManipulation_render__WEBPACK_IMPORTED_MODULE_2__.renderProject)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxZQUFZLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsU0FBUyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxhQUFhLFlBQVksWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFB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LFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7O0FDdExpQztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJDO0FBQ1A7QUFDZjs7QUFFMUMsaUVBQUk7QUFDSiw2RUFBYztBQUNkLHNFQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jbG9zZXN0VG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2FwcExvZ2ljL2NoZWNrQ2hlY2tsaXN0Qm9vbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9zcmMvYXBwTG9naWMvY2hlY2tsaXN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9zcmMvYXBwTG9naWMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2FwcExvZ2ljL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL3NyYy9hcHBMb2dpYy9wdXNoVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2FwcExvZ2ljL3B1c2hUb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2FwcExvZ2ljL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL3NyYy9kb21NYW5pcHVsYXRpb24vY2FjaGVEb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9zcmMvZG9tTWFuaXB1bGF0aW9uL2RpdkNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL3NyYy9kb21NYW5pcHVsYXRpb24vZXZlbnRCaW5kaW5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL3NyYy9kb21NYW5pcHVsYXRpb24vZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL3NyYy9kb21NYW5pcHVsYXRpb24vZ2xvYmFsVmFyaWFibGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2RvbU1hbmlwdWxhdGlvbi9pbml0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL3NyYy9kb21NYW5pcHVsYXRpb24vcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC8uL3NyYy9oZWxwZXJzL2NoZWNrbGlzdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2hlbHBlcnMvZHVtcEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2hlbHBlcnMvZmluZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2hlbHBlcnMvZmluZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2hlbHBlcnMvZ2V0UC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9zcmMvaGVscGVycy9wb3B1bGF0ZVByb2plY3RTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0Ly4vc3JjL2hlbHBlcnMvc3RyaW5nTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC10ZXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXRlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9wb3RCZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMveGNsaWNrZWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiYXNzZXRzL0ZPVC1TZXVyYXQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGFuaW1hdGlvbjogYmctc2xpZGUgMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBmb250LWZhbWlseTogJ0ZPVC1TZXVyYXQgUHJvJztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NXZoO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMTAwODAsICMwZTNkYTMsICMzYjZkYmUsICM3MDliZDIsICNhZGM5ZTQpO1xcbn1cXG5cXG4uY29udGFpbmVyLXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogI2ExYjBjOCBncm9vdmUgM3B4O1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG5cXG4uY29udGFpbmVyLXRvcCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xcbn1cXG5cXG4uY29udGFpbmVyLXRvcCBpbWcge1xcbiAgICB3aWR0aDogMTE1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC41JTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtcm93OiAyIC8zO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICBwYWRkaW5nOiAzJSAzJSAzJSAzJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0YTRkOTtcXG5cXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2IGg1IHtcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiA3MCU7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlXFxuXFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG4gICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgLjI1cyBlYXNlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbmxpIGltZyB7XFxuICAgIHdpZHRoOiA0dnc7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBvdmVybGF5O1xcbn1cXG5cXG4ubWFycXVlZS1zb3J0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDBjODtcXG4gICAgYm9yZGVyLWJvdHRvbTogI2ExYjBjOCBzb2xpZCAycHg7XFxuICAgIGhlaWdodDogNiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5tYXJxdWVlLXNvcnQgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xcbn1cXG5cXG4ubWFycXVlZS1zb3J0IG1hcnF1ZWUge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnByb2plY3Qtc3ViIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAjYTFiMGM4IGdyb292ZSA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxMDA4MCwgIzBlM2RhMywgIzNiNmRiZSwgIzcwOWJkMiwgI2FkYzllNCk7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAzMCU7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMTAwODAsICMwZTNkYTMsICMzYjZkYmUsICM3MDliZDIsICNhZGM5ZTQpO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgei1pbmRleDogMjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGVudCA+IGltZyB7XFxuICAgIG1hcmdpbjogMS41JSAwIDAgMS41JTtcXG59XFxuXFxuLmVkaXQtdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAzMCU7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMTAwODAsICMwZTNkYTMsICMzYjZkYmUsICM3MDliZDIsICNhZGM5ZTQpO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuXFxuLnRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogLjUlIDElIC41JSAxJTtcXG59XFxuXFxuLnRvcCBoNSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgcGFkZGluZzogNnB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBhbmltYXRpb246IGJnLXNsaWRlIDJzIGluZmluaXRlIGxpbmVhcjtcXG5cXG59XFxuXFxuLnRvcCBpbWcge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b3AgaDUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG5cXG59XFxuXFxubGFiZWwge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIuNSU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogNnB4IGF1dG87XFxufVxcblxcbiNwcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgcGFkZGluZzogNSU7XFxufVxcblxcbiNwcm9qZWN0IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3Blbi10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDgwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIHBhZGRpbmc6IDZweDtcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYW5pbWF0aW9uOiBiZy1zbGlkZSAycyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LWhlaWdodDogMTc1cHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG59XFxuXFxuLmNoZWNrbGlzdC1jb250YWluZXIgZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI2NoZWNrbGlzdC1lbnRyeSB7XFxuICAgIHdpZHRoOiA4OCU7XFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbiN0YXNrLWZvcm0gPiBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDYzJTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA2MyU7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMi41JTtcXG59XFxuXFxuI2ZpcnN0LWxhYmVsICsgZGl2IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHdpZHRoOiA0OC41JTtcXG59XFxuXFxuXFxuXFxuLmNoZWNrbGlzdC1jb250YWluZXIgaW1nIHtcXG4gICAgcmlnaHQ6IDEuNSU7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyID4gZGl2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuI2ZpcnN0LWxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA2cHg7XFxufVxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyID4gZGl2ICsgZGl2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0ZXN0IHtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNtaW51cyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbiNzdWJEaXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuXFxufVxcblxcbi50YXNrIHtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2staGVhZCBoNCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY29udGVudCBpbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAxJSAwJSAwJSAwJTtcXG4gICAgcmlnaHQ6IC0xLjUlO1xcbn1cXG5cXG4udGFzay1jb250ZW50IGltZyArIGltZyB7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcbi50YXNrLWNvbnRlbnQgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udW5vcGVuZWQge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC41cyBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSk7XFxufVxcblxcbi5vcGVuIHtcXG4gICAgbWF4LWhlaWdodDogMTAwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC41cyBlYXNlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG59XFxuXFxuLmZsaXBwZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4jYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNpbmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmg0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmNoZWNrLWNvbnRhaW5lci1tYWluIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2hlY2stbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5jaGVjay1jb250YWluZXItc3ViIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2Rlc2Mtb3BlbiB7XFxuICAgIG1heC13aWR0aDogMjEwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jbm90ZXMtb3BlbiB7XFxuICAgIG1heC13aWR0aDogMjEwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGFzay1jb250ZW50ID4gZGl2IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIHBpbmsgMnB4O1xcbn1cXG5cXG5cXG4uZXhpdC10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhpdC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhpdC1lZGl0LXRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NoZWNrbGlzdC1wbHVzOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWludXM6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leGl0LXRhc2s6YWN0aXZlIHtcXG4gICAgY29udGVudDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uZXhpdC1wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGNvbnRlbnQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLmV4aXQtZWRpdC10YXNrOmFjdGl2ZSB7XFxuICAgIGNvbnRlbnQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuI3N1YkRpdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4jbmV3RGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzdWJEaXYgbGFiZWwge1xcbiAgICBtYXgtaGVpZ2h0OiA0ZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNoZWNrLWNvbnRhaW5lci1zdWIge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5jaGVjay1jb250YWluZXItc3ViICsgLmNoZWNrLWNvbnRhaW5lci1zdWIge1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCB3aGl0ZSAxcHg7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2s7XFxufVxcblxcbi50YXNrLWNvbnRlbnQgaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saTpob3ZlciBpbWcge1xcbiAgICBhbmltYXRpb246IGhvdmVyIC43NXMgaW5maW5pdGU7XFxufVxcblxcbi5wcm9qZWN0LXN1YiBpbWc6aG92ZXIge1xcbiAgICBhbmltYXRpb246IGJvdW5jZSAuMjVzIGxpbmVhcjtcXG59XFxuXFxuXFxuQGtleWZyYW1lcyBiZy1zbGlkZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMDtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjNweDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMjFweDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTQ2cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDQycHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBob3ZlciB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgfVxcblxcbiAgICAxMi41JSB7XFxuICAgICAgICB0b3A6IC02LjI1JTtcXG4gICAgfVxcblxcbiAgICAyNSUge1xcbiAgICAgICAgdG9wOiAtMTIuNSU7XFxuICAgIH1cXG5cXG4gICAgMzcuNSUge1xcbiAgICAgICAgdG9wOiAtNi4yNSU7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIHRvcDogMFxcbiAgICB9XFxuXFxuICAgIDYyLjUlIHtcXG4gICAgICAgIHRvcDogNi4yNSU7XFxuICAgIH1cXG5cXG4gICAgNzUlIHtcXG4gICAgICAgIHRvcDogMTIuNSU7XFxuICAgIH1cXG5cXG4gICAgODcuNSUge1xcbiAgICAgICAgdG9wOiA2LjI1JTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogMCU7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRvcDogLTE1JTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgICB0b3A6IC03LjUlO1xcbiAgICB9XFxuICAgIDkzLjc1JSB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxuICAgIDk2Ljg3NSUge1xcbiAgICAgICAgdG9wOiAtMy43NSU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG59XFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRk9ULVNldXJhdCBQcm8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcblxcbi8qQkVHSU4gTUVESUEgUVVFUlkqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcbiAgICBAa2V5ZnJhbWVzIGhvdmVyIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICB0b3A6IC0zNSU7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgMTIuNSUge1xcbiAgICAgICAgICAgIHRvcDogLTQxLjI1JTtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAyNSUge1xcbiAgICAgICAgICAgIHRvcDogLTU3LjUlO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIDM3LjUlIHtcXG4gICAgICAgICAgICB0b3A6IC00MS4yNSU7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgNTAlIHtcXG4gICAgICAgICAgICB0b3A6IC0zNSU7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgNjIuNSUge1xcbiAgICAgICAgICAgIHRvcDogLTI5LjI1JTtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICA3NSUge1xcbiAgICAgICAgICAgIHRvcDogLTIzLjUlO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIDg3LjUlIHtcXG4gICAgICAgICAgICB0b3A6IC0yOS4yNSU7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgdG9wOiAtMzUlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkOGRmO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGT1QtU2V1cmF0IFBybyc7XFxuXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItdG9wIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgLm5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgICAgICBwYWRkaW5nOiAzJSAzJSAzJSAzJTtcXG4gICAgICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDEwMDgwLCAjMGUzZGEzLCAjM2I2ZGJlLCAjNzA5YmQyLCAjYWRjOWU0KTtcXG5cXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG5cXG4gICAgaDUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgbGkgKyBsaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIH1cXG5cXG4gICAgLm5ldy10YXNrIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG5cXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMjUlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgYm9yZGVyOiAjYTFiMGM4IGdyb292ZSA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDgwO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuXFxuICAgICN0YXNrLWZvcm0gPiBidXR0b24ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogNjAlO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMi43OTc1JTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdC1mb3JtID4gYnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGxlZnQ6IDU2JTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIuNSU7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1wcm9qZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG5cXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMjUlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgYm9yZGVyOiAjYTFiMGM4IGdyb292ZSA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDgwO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmVkaXQtdGFzayB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDI1JTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDA4MDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcblxcbiAgICAudG9wIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBwYWRkaW5nOiAuNSUgMSUgLjUlIDElO1xcbiAgICB9XFxuXFxuICAgIC50b3AgaDUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICAgICAgYW5pbWF0aW9uOiBiZy1zbGlkZSAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIFxcbiAgICB9XFxuXFxuICAgIC50b3AgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGhlaWdodDogMmVtO1xcblxcbiAgICB9XFxuXFxuICAgIC5uYXYgaDUge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIGxpIGltZyB7XFxuICAgICAgICB3aWR0aDogNDhweDtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogNTAlO1xcbiAgICAgICAgdG9wOiAtMzUlO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgdGV4dGFyZWEge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuY29udGVudCA+IGltZyB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGhlaWdodDogMmVtO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMi41JTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIG1hcmdpbjogNnB4IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3Qge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgICAgICAgcGFkZGluZzogNSU7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3QgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdCBpbWcge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdCBwIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAub3Blbi10YXNrIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAyNSU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6ICNhMWIwYzggZ3Jvb3ZlIDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTAwODA7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgfVxcblxcbiAgICAudGFzay1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgcGFkZGluZzogNnB4O1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgICAgIGFuaW1hdGlvbjogYmctc2xpZGUgMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2xpc3QtY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNzVweDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrbGlzdC1jb250YWluZXIgZGl2IHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgI2NoZWNrbGlzdC1lbnRyeSB7XFxuICAgICAgICB3aWR0aDogODglO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxJTtcXG4gICAgfVxcblxcbiAgICAjZmlyc3QtbGFiZWwgKyBkaXYge1xcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2xpc3QtY29udGFpbmVyIGltZyB7XFxuICAgICAgICByaWdodDogMS41JTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrbGlzdC1jb250YWluZXIgPiBkaXYge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgI2ZpcnN0LWxhYmVsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgfVxcblxcbiAgICAuY2hlY2tsaXN0LWNvbnRhaW5lciA+IGRpdiArIGRpdiB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgI3Rlc3Qge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI21pbnVzIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG5cXG4gICAgI3N1YkRpdiB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMCAyJSAwIDIlO1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgfVxcblxcbiAgICAudGFzay1oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAudGFzay1oZWFkIGg0IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAudGFzay1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgIC50YXNrLWNvbnRlbnQgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY29udGVudCBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgbWFyZ2luOiAxJSAwJSAwJSAwJTtcXG4gICAgICAgIHJpZ2h0OiAtMS41JTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRhc2stY29udGVudCBpbWcgKyBpbWcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gICAgfVxcblxcbiAgICAudW5vcGVuZWQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjVzIGN1YmljLWJlemllcigwLCAxLCAwLCAxKTtcXG4gICAgfVxcblxcbiAgICAub3BlbiB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC41cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWhlYWRlciBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzNSU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG4gICAgfVxcblxcbiAgICAuZmxpcHBlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB9XFxuXFxuICAgICNhY3RpdmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgI2luYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGg0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrLWNvbnRhaW5lci1tYWluIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrLWxhYmVsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAuY2hlY2stY29udGFpbmVyLXN1YiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgI2Rlc2Mtb3BlbiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgI25vdGVzLW9wZW4ge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyMTBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWNvbnRlbnQgPiBkaXYge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIHBpbmsgMnB4O1xcbiAgICB9XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgICNzdWJEaXYge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgfVxcblxcbiAgICAjbmV3RGl2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNzdWJEaXYgbGFiZWwge1xcbiAgICAgICAgbWF4LWhlaWdodDogNGVtO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5jaGVjay1jb250YWluZXItc3ViIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfVxcblxcbiAgICAuY2hlY2stY29udGFpbmVyLXN1YiArIC5jaGVjay1jb250YWluZXItc3ViIHtcXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIHdoaXRlIDFweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCx5REFBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLDZCQUE2Qjs7SUFFN0IsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQix3RkFBd0Y7QUFDNUY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1Qjs7SUFFdkIsb0JBQW9CO0lBQ3BCLHlCQUF5Qjs7SUFFekIsZ0JBQWdCO0lBQ2hCLE1BQU07O0lBRU4sZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVOztJQUVWLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Y7O0FBRUo7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTs7SUFFVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCOztJQUVsQiwwQkFBMEI7SUFDMUIsd0ZBQXdGO0lBQ3hGLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTs7SUFFVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCOztJQUVsQiwwQkFBMEI7SUFDMUIsd0ZBQXdGO0lBQ3hGLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTs7SUFFVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCOztJQUVsQiwwQkFBMEI7SUFDMUIsd0ZBQXdGO0lBQ3hGLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLFlBQVk7O0lBRVoseURBQXlDO0lBQ3pDLHNDQUFzQzs7QUFFMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXOztBQUVmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLFlBQVk7O0lBRVoseURBQXlDO0lBQ3pDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLCtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLCtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLDRCQUE0QjtRQUM1QiwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksTUFBTTtJQUNWOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLE1BQU07SUFDVjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLE9BQU87SUFDWDtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxNQUFNO0lBQ1Y7QUFDSjs7O0FBR0E7SUFDSSw2QkFBNkI7SUFDN0IsNENBQWlDO0FBQ3JDOzs7QUFHQSxvQkFBb0I7O0FBRXBCOztJQUVJO1FBQ0k7WUFDSSxTQUFTO1FBQ2I7O1FBRUE7WUFDSSxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksV0FBVztRQUNmOztRQUVBO1lBQ0ksWUFBWTtRQUNoQjs7UUFFQTtZQUNJLFNBQVM7UUFDYjs7UUFFQTtZQUNJLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksU0FBUztRQUNiO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsNkJBQTZCOztRQUU3QixZQUFZO1FBQ1osY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCxZQUFZO1FBQ1osc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLG1CQUFtQjs7UUFFbkIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQix3RkFBd0Y7O1FBRXhGLGdCQUFnQjtRQUNoQixNQUFNO0lBQ1Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVzs7UUFFWCxZQUFZO1FBQ1osOEJBQThCO1FBQzlCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixVQUFVOztRQUVWLGVBQWU7UUFDZixRQUFRO1FBQ1IsT0FBTztRQUNQLFFBQVE7UUFDUixrQkFBa0I7O1FBRWxCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixVQUFVOztRQUVWLGVBQWU7UUFDZixRQUFRO1FBQ1IsT0FBTztRQUNQLFFBQVE7UUFDUixrQkFBa0I7O1FBRWxCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsVUFBVTs7UUFFVixlQUFlO1FBQ2YsUUFBUTtRQUNSLE9BQU87UUFDUCxRQUFRO1FBQ1Isa0JBQWtCOztRQUVsQiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxVQUFVO0lBQ2Q7OztJQUdBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCOztRQUV0QixZQUFZOztRQUVaLHlEQUF5QztRQUN6QyxzQ0FBc0M7O0lBRTFDOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXOztJQUVmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZO1FBQ1osVUFBVTs7SUFFZDs7SUFFQTtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsT0FBTztJQUNYOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsbUJBQW1CO1FBQ25CLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksU0FBUztRQUNULGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLFVBQVU7UUFDVixlQUFlO1FBQ2YsUUFBUTtRQUNSLE9BQU87UUFDUCxRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7O1FBRXRCLFlBQVk7O1FBRVoseURBQXlDO1FBQ3pDLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksU0FBUztRQUNULG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixTQUFTO1FBQ1QsV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixrQkFBa0I7O0lBRXRCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCOztJQUVKO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbURBQW1EO0lBQ3ZEOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsUUFBUTtRQUNSLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDhCQUE4QjtRQUM5QixTQUFTO1FBQ1QsVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9wb3RCZy5wbmcnKTtcXG4gICAgYW5pbWF0aW9uOiBiZy1zbGlkZSAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnRk9ULVNldXJhdCBQcm8nO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDc1dmg7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gICAgYm9yZGVyOiAjYTFiMGM4IGdyb292ZSA0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxMDA4MCwgIzBlM2RhMywgIzNiNmRiZSwgIzcwOWJkMiwgI2FkYzllNCk7XFxufVxcblxcbi5jb250YWluZXItdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItYm90dG9tOiAjYTFiMGM4IGdyb292ZSAzcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcblxcbi5jb250YWluZXItdG9wIGg0IHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBtYXJnaW46IDAgMCAwIDEycHg7XFxufVxcblxcbi5jb250YWluZXItdG9wIGltZyB7XFxuICAgIHdpZHRoOiAxMTVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogLjUlO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1yb3c6IDIgLzM7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIHBhZGRpbmc6IDMlIDMlIDMlIDMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRhNGQ5O1xcblxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5uYXYgaDUge1xcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDcwJTtcXG5cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGVcXG5cXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAuMjVzIGVhc2U7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxubGkgaW1nIHtcXG4gICAgd2lkdGg6IDR2dztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5tYXJxdWVlLXNvcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMGM4O1xcbiAgICBib3JkZXItYm90dG9tOiAjYTFiMGM4IHNvbGlkIDJweDtcXG4gICAgaGVpZ2h0OiA2JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLm1hcnF1ZWUtc29ydCBzZWxlY3Qge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogMSU7XFxuICAgIG1hcmdpbi1yaWdodDogMSU7XFxufVxcblxcbi5tYXJxdWVlLXNvcnQgbWFycXVlZSB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1zdWIgaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMzAlO1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXI6ICNhMWIwYzggZ3Jvb3ZlIDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDEwMDgwLCAjMGUzZGEzLCAjM2I2ZGJlLCAjNzA5YmQyLCAjYWRjOWU0KTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAjYTFiMGM4IGdyb292ZSA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxMDA4MCwgIzBlM2RhMywgIzNiNmRiZSwgIzcwOWJkMiwgI2FkYzllNCk7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250ZW50ID4gaW1nIHtcXG4gICAgbWFyZ2luOiAxLjUlIDAgMCAxLjUlO1xcbn1cXG5cXG4uZWRpdC10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAjYTFiMGM4IGdyb292ZSA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxMDA4MCwgIzBlM2RhMywgIzNiNmRiZSwgIzcwOWJkMiwgI2FkYzllNCk7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG5cXG4udG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAuNSUgMSUgLjUlIDElO1xcbn1cXG5cXG4udG9wIGg1IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBwYWRkaW5nOiA2cHg7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL3BvdEJnLnBuZycpO1xcbiAgICBhbmltYXRpb246IGJnLXNsaWRlIDJzIGluZmluaXRlIGxpbmVhcjtcXG5cXG59XFxuXFxuLnRvcCBpbWcge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b3AgaDUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG5cXG59XFxuXFxubGFiZWwge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIuNSU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogNnB4IGF1dG87XFxufVxcblxcbiNwcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgcGFkZGluZzogNSU7XFxufVxcblxcbiNwcm9qZWN0IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3Blbi10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDgwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIHBhZGRpbmc6IDZweDtcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvcG90QmcucG5nJyk7XFxuICAgIGFuaW1hdGlvbjogYmctc2xpZGUgMnMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC1oZWlnaHQ6IDE3NXB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxufVxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyIGRpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbiNjaGVja2xpc3QtZW50cnkge1xcbiAgICB3aWR0aDogODglO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4jdGFzay1mb3JtID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA2MyU7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMi41JTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNjMlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDIuNSU7XFxufVxcblxcbiNmaXJzdC1sYWJlbCArIGRpdiB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB3aWR0aDogNDguNSU7XFxufVxcblxcblxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyIGltZyB7XFxuICAgIHJpZ2h0OiAxLjUlO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbiNmaXJzdC1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNnB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWNvbnRhaW5lciA+IGRpdiArIGRpdiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGVzdCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jbWludXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4jc3ViRGl2IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Rhc2tzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMCAyJSAwIDIlO1xcblxcbn1cXG5cXG4udGFzayB7XFxuICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWhlYWQgaDQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWNvbnRlbnQgaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogMSUgMCUgMCUgMCU7XFxuICAgIHJpZ2h0OiAtMS41JTtcXG59XFxuXFxuLnRhc2stY29udGVudCBpbWcgKyBpbWcge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG5cXG4udGFzay1jb250ZW50IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnVub3BlbmVkIHtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuNXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAsIDEpO1xcbn1cXG5cXG4ub3BlbiB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuNXMgZWFzZTtcXG59XFxuXFxuLnRhc2staGVhZGVyIGltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxufVxcblxcbi5mbGlwcGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuI2FjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oNCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jaGVjay1jb250YWluZXItbWFpbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrLWxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyLXN1YiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNkZXNjLW9wZW4ge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI25vdGVzLW9wZW4ge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2stY29udGVudCA+IGRpdiB7XFxuICAgIGJvcmRlci1ib3R0b206IGRvdHRlZCBwaW5rIDJweDtcXG59XFxuXFxuXFxuLmV4aXQtdGFzazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4aXQtcHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4aXQtZWRpdC10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjaGVja2xpc3QtcGx1czpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21pbnVzOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhpdC10YXNrOmFjdGl2ZSB7XFxuICAgIGNvbnRlbnQ6dXJsKCdhc3NldHMveGNsaWNrZWQucG5nJyk7XFxufVxcblxcbi5leGl0LXByb2plY3Q6YWN0aXZlIHtcXG4gICAgY29udGVudDp1cmwoJ2Fzc2V0cy94Y2xpY2tlZC5wbmcnKTtcXG59XFxuXFxuLmV4aXQtZWRpdC10YXNrOmFjdGl2ZSB7XFxuICAgIGNvbnRlbnQ6dXJsKCdhc3NldHMveGNsaWNrZWQucG5nJyk7XFxufVxcblxcbiNzdWJEaXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuI25ld0RpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc3ViRGl2IGxhYmVsIHtcXG4gICAgbWF4LWhlaWdodDogNGVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jaGVjay1jb250YWluZXItc3ViIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyLXN1YiArIC5jaGVjay1jb250YWluZXItc3ViIHtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgd2hpdGUgMXB4O1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IGJsYWNrO1xcbn1cXG5cXG4udGFzay1jb250ZW50IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGk6aG92ZXIgaW1nIHtcXG4gICAgYW5pbWF0aW9uOiBob3ZlciAuNzVzIGluZmluaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1zdWIgaW1nOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjI1cyBsaW5lYXI7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgYmctc2xpZGUge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDA7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIzcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIxcHg7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC00NnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0MnB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaG92ZXIge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG5cXG4gICAgMTIuNSUge1xcbiAgICAgICAgdG9wOiAtNi4yNSU7XFxuICAgIH1cXG5cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTEyLjUlO1xcbiAgICB9XFxuXFxuICAgIDM3LjUlIHtcXG4gICAgICAgIHRvcDogLTYuMjUlO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICB0b3A6IDBcXG4gICAgfVxcblxcbiAgICA2Mi41JSB7XFxuICAgICAgICB0b3A6IDYuMjUlO1xcbiAgICB9XFxuXFxuICAgIDc1JSB7XFxuICAgICAgICB0b3A6IDEyLjUlO1xcbiAgICB9XFxuXFxuICAgIDg3LjUlIHtcXG4gICAgICAgIHRvcDogNi4yNSU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0b3A6IC0xNSU7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRvcDogMCU7XFxuICAgIH1cXG4gICAgODcuNSUge1xcbiAgICAgICAgdG9wOiAtNy41JTtcXG4gICAgfVxcbiAgICA5My43NSUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICA5Ni44NzUlIHtcXG4gICAgICAgIHRvcDogLTMuNzUlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICB9XFxufVxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0ZPVC1TZXVyYXQgUHJvJztcXG4gICAgc3JjOiB1cmwoJ2Fzc2V0cy9GT1QtU2V1cmF0Lm90ZicpO1xcbn1cXG5cXG5cXG4vKkJFR0lOIE1FRElBIFFVRVJZKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG5cXG4gICAgQGtleWZyYW1lcyBob3ZlciB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgdG9wOiAtMzUlO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIDEyLjUlIHtcXG4gICAgICAgICAgICB0b3A6IC00MS4yNSU7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgMjUlIHtcXG4gICAgICAgICAgICB0b3A6IC01Ny41JTtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAzNy41JSB7XFxuICAgICAgICAgICAgdG9wOiAtNDEuMjUlO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIDUwJSB7XFxuICAgICAgICAgICAgdG9wOiAtMzUlO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIDYyLjUlIHtcXG4gICAgICAgICAgICB0b3A6IC0yOS4yNSU7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgNzUlIHtcXG4gICAgICAgICAgICB0b3A6IC0yMy41JTtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICA4Ny41JSB7XFxuICAgICAgICAgICAgdG9wOiAtMjkuMjUlO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRvcDogLTM1JTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4gICAgYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDhkZjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRk9ULVNldXJhdCBQcm8nO1xcblxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyLXRvcCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tYWluIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIC5uYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICAgICAgcGFkZGluZzogMyUgMyUgMyUgMyU7XFxuICAgICAgICBib3JkZXI6ICNhMWIwYzggZ3Jvb3ZlIDRweDtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxMDA4MCwgIzBlM2RhMywgIzNiNmRiZSwgIzcwOWJkMiwgI2FkYzllNCk7XFxuXFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIGg1IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIGxpICsgbGkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICB9XFxuXFxuICAgIC5uZXctdGFzayB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDI1JTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDA4MDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcbiAgICAjdGFzay1mb3JtID4gYnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGxlZnQ6IDYwJTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIuNzk3NSU7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3QtZm9ybSA+IGJ1dHRvbiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBsZWZ0OiA1NiU7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyLjUlO1xcbiAgICB9XFxuXFxuICAgIC5uZXctcHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDI1JTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDA4MDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0LXRhc2sge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogNzUlO1xcblxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAyNSU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICBib3JkZXI6ICNhMWIwYzggZ3Jvb3ZlIDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTAwODA7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG5cXG5cXG4gICAgLnRvcCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgcGFkZGluZzogLjUlIDElIC41JSAxJTtcXG4gICAgfVxcblxcbiAgICAudG9wIGg1IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAgcGFkZGluZzogNnB4O1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvcG90QmcucG5nJyk7XFxuICAgICAgICBhbmltYXRpb246IGJnLXNsaWRlIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgLnRvcCBpbWcge1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxuXFxuICAgIH1cXG5cXG4gICAgLm5hdiBoNSB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgbGkgaW1nIHtcXG4gICAgICAgIHdpZHRoOiA0OHB4O1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiA1MCU7XFxuICAgICAgICB0b3A6IC0zNSU7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgfVxcblxcbiAgICBsYWJlbCB7XFxuICAgICAgICBoZWlnaHQ6IDJlbTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5jb250ZW50ID4gaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgc2VsZWN0IHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgIH1cXG5cXG4gICAgZm9ybSBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyLjUlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgbWFyZ2luOiA2cHggYXV0bztcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1JTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdCBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0IGltZyB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0IHAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5vcGVuLXRhc2sge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDI1JTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlcjogI2ExYjBjOCBncm9vdmUgNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDA4MDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9wb3RCZy5wbmcnKTtcXG4gICAgICAgIGFuaW1hdGlvbjogYmctc2xpZGUgMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2xpc3QtY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNzVweDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrbGlzdC1jb250YWluZXIgZGl2IHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgI2NoZWNrbGlzdC1lbnRyeSB7XFxuICAgICAgICB3aWR0aDogODglO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxJTtcXG4gICAgfVxcblxcbiAgICAjZmlyc3QtbGFiZWwgKyBkaXYge1xcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2xpc3QtY29udGFpbmVyIGltZyB7XFxuICAgICAgICByaWdodDogMS41JTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrbGlzdC1jb250YWluZXIgPiBkaXYge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgI2ZpcnN0LWxhYmVsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgfVxcblxcbiAgICAuY2hlY2tsaXN0LWNvbnRhaW5lciA+IGRpdiArIGRpdiB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgI3Rlc3Qge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI21pbnVzIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIH1cXG5cXG4gICAgI3N1YkRpdiB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2tzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMCAyJSAwIDIlO1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgfVxcblxcbiAgICAudGFzay1oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAudGFzay1oZWFkIGg0IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAudGFzay1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgIC50YXNrLWNvbnRlbnQgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY29udGVudCBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgbWFyZ2luOiAxJSAwJSAwJSAwJTtcXG4gICAgICAgIHJpZ2h0OiAtMS41JTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRhc2stY29udGVudCBpbWcgKyBpbWcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gICAgfVxcblxcbiAgICAudW5vcGVuZWQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjVzIGN1YmljLWJlemllcigwLCAxLCAwLCAxKTtcXG4gICAgfVxcblxcbiAgICAub3BlbiB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC41cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWhlYWRlciBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzNSU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG4gICAgfVxcblxcbiAgICAuZmxpcHBlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB9XFxuXFxuICAgICNhY3RpdmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgI2luYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGg0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrLWNvbnRhaW5lci1tYWluIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrLWxhYmVsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAuY2hlY2stY29udGFpbmVyLXN1YiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgI2Rlc2Mtb3BlbiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgI25vdGVzLW9wZW4ge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyMTBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWNvbnRlbnQgPiBkaXYge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIHBpbmsgMnB4O1xcbiAgICB9XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgICNzdWJEaXYge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgfVxcblxcbiAgICAjbmV3RGl2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNzdWJEaXYgbGFiZWwge1xcbiAgICAgICAgbWF4LWhlaWdodDogNGVtO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5jaGVjay1jb250YWluZXItc3ViIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfVxcblxcbiAgICAuY2hlY2stY29udGFpbmVyLXN1YiArIC5jaGVjay1jb250YWluZXItc3ViIHtcXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIHdoaXRlIDFweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpO1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXG59O1xudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY2xvc2VzdFRvXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiBhIGRhdGUgZnJvbSB0aGUgYXJyYXkgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiBhIGRhdGUgZnJvbSB0aGUgYXJyYXkgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGUgfCBOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7QXJyYXk8RGF0ZT4gfCBBcnJheTxudW1iZXI+fSBkYXRlc0FycmF5IC0gdGhlIGFycmF5IHRvIHNlYXJjaFxuICogQHJldHVybnMge0RhdGUgfCB1bmRlZmluZWR9IHRoZSBkYXRlIGZyb20gdGhlIGFycmF5IGNsb3Nlc3QgdG8gdGhlIGdpdmVuIGRhdGUgb3IgdW5kZWZpbmVkIGlmIG5vIHZhbGlkIHZhbHVlIGlzIGdpdmVuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRhdGUgaXMgY2xvc2VyIHRvIDYgU2VwdGVtYmVyIDIwMTU6IDEgSmFudWFyeSAyMDAwIG9yIDEgSmFudWFyeSAyMDMwP1xuICogY29uc3QgZGF0ZVRvQ29tcGFyZSA9IG5ldyBEYXRlKDIwMTUsIDgsIDYpXG4gKiBjb25zdCByZXN1bHQgPSBjbG9zZXN0VG8oZGF0ZVRvQ29tcGFyZSwgW1xuICogICBuZXcgRGF0ZSgyMDAwLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAzMCwgMCwgMSlcbiAqIF0pXG4gKiAvLz0+IFR1ZSBKYW4gMDEgMjAzMCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb3Nlc3RUbyhkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5RGF0ZXNBcnJheSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgaWYgKGlzTmFOKE51bWJlcihkYXRlVG9Db21wYXJlKSkpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgdGltZVRvQ29tcGFyZSA9IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xuICB2YXIgZGF0ZXNBcnJheTsgLy8gYGRpcnR5RGF0ZXNBcnJheWAgaXMgdW5kZWZpbmVkIG9yIG51bGxcblxuICBpZiAoZGlydHlEYXRlc0FycmF5ID09IG51bGwpIHtcbiAgICBkYXRlc0FycmF5ID0gW107IC8vIGBkaXJ0eURhdGVzQXJyYXlgIGlzIEFycmF5LCBTZXQgb3IgTWFwLCBvciBvYmplY3Qgd2l0aCBjdXN0b20gYGZvckVhY2hgIG1ldGhvZFxuICB9IGVsc2UgaWYgKHR5cGVvZiBkaXJ0eURhdGVzQXJyYXkuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRhdGVzQXJyYXkgPSBkaXJ0eURhdGVzQXJyYXk7IC8vIElmIGBkaXJ0eURhdGVzQXJyYXlgIGlzIEFycmF5LWxpa2UgT2JqZWN0LCBjb252ZXJ0IHRvIEFycmF5LiBPdGhlcndpc2UsIG1ha2UgaXQgZW1wdHkgQXJyYXlcbiAgfSBlbHNlIHtcbiAgICBkYXRlc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGlydHlEYXRlc0FycmF5KTtcbiAgfVxuXG4gIHZhciByZXN1bHQ7XG4gIHZhciBtaW5EaXN0YW5jZTtcbiAgZGF0ZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChkaXJ0eURhdGUpIHtcbiAgICB2YXIgY3VycmVudERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICAgIGlmIChpc05hTihOdW1iZXIoY3VycmVudERhdGUpKSkge1xuICAgICAgcmVzdWx0ID0gbmV3IERhdGUoTmFOKTtcbiAgICAgIG1pbkRpc3RhbmNlID0gTmFOO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRpbWVUb0NvbXBhcmUgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IGRpc3RhbmNlIDwgTnVtYmVyKG1pbkRpc3RhbmNlKSkge1xuICAgICAgcmVzdWx0ID0gY3VycmVudERhdGU7XG4gICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICB2YXIgcmVzdWx0OyAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG5cbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBkYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247IC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZTtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gYXNzaWduKGNsb25lT2JqZWN0KG9wdGlvbnMpLCB7XG4gICAgYWRkU3VmZml4OiBCb29sZWFuKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRTdWZmaXgpLFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb25cbiAgfSk7XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzOyAvLyAwIHVwIHRvIDIgbWluc1xuXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIDAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcblxuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTsgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG5cbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7IC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY2hlY2tDaGVja2xpc3QgPSBmdW5jdGlvbihjaGVja2xpc3RJdGVtKSB7XG4gICAgaWYoY2hlY2tsaXN0SXRlbS50YXNrRmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVkIVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIkluY29tcGxldGVcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrQ2hlY2tsaXN0OyIsImNvbnN0IGNoZWNrbGlzdEZhY3RvcnkgPSAoc3VibWl0dGVkTmFtZSwgaXNDb21wbGV0ZSkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBzdWJtaXR0ZWROYW1lO1xuICAgIGNvbnN0IHRhc2tGaW5pc2hlZCA9IGlzQ29tcGxldGU7XG5cbiAgICByZXR1cm4geyBuYW1lLCB0YXNrRmluaXNoZWQgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAgY2hlY2tsaXN0RmFjdG9yeTsiLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChzdWJtaXR0ZWROYW1lLCBzdWJtaXR0ZWREYXRlLCBzdWJtaXR0ZWRQcmlvcml0eSApID0+IHtcblxuICAgIGNvbnN0IG5hbWUgPSBzdWJtaXR0ZWROYW1lO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBzdWJtaXR0ZWREYXRlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gc3VibWl0dGVkUHJpb3JpdHk7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICByZXR1cm4geyBuYW1lLCBkdWVEYXRlLCB0YXNrcywgcHJpb3JpdHkgfTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3Rvcnk7IiwiY29uc3QgcHJvamVjdENvbnRhaW5lciA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Q29udGFpbmVyOyIsImNvbnN0IHB1c2hUYXNrID0gZnVuY3Rpb24ocHJvamVjdCwgdGFzaykge1xuICAgIFxuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBwdXNoVGFzazsiLCJjb25zdCBwdXNoVG9Qcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdHNBcnJheSwgcHJvamVjdFRvUHVzaCkge1xuXG4gICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3RUb1B1c2gpOyAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHB1c2hUb1Byb2plY3Q7IiwiY29uc3QgdGFza0ZhY3RvcnkgPSAodGFza05hbWUsIGRlc2MsIGRhdGVEdWUsIHRhc2tQcmlvcml0eSwgdGFza05vdGVzLCBjaGVja2JveGVzKSA9PiB7XG4gICAgdmFyIG5hbWUgPSB0YXNrTmFtZTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHZhciBkdWVEYXRlID0gZGF0ZUR1ZTtcbiAgICB2YXIgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgdmFyIGNoZWNrYm94ID0gIGNoZWNrYm94ZXM7XG4gICAgdmFyIG5vdGVzID0gdGFza05vdGVzO1xuXG5cbiAgICByZXR1cm4geyBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2JveCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5OyIsIi8vICBDYWNoZXMgRE9NIGVsZW1lbnRzXG5cbmNvbnN0IGNhY2hlZERvbSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWJ1dHRvbicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1idXR0b24nKTtcbiAgICBjb25zdCBleGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0LXRhc2snKTtcbiAgICBjb25zdCBuZXdUYXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgZWRpdFRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzaycpO1xuICAgIGNvbnN0IGV4aXRFZGl0Vmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0LWVkaXQtdGFzaycpO1xuICAgIGNvbnN0IGVkaXRDaGVja2xpc3RQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrbGlzdC1lZGl0LXBsdXMnKTtcbiAgICBjb25zdCBlZGl0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1zdWJtaXQnKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKVxuICAgIGNvbnN0IGV4aXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQtcHJvamVjdCcpO1xuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3Qgb3BlblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi10YXNrJyk7XG4gICAgY29uc3QgZXhpdEFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdC10YXNrLXZpZXcnKTtcbiAgICBjb25zdCBjaGVja2xpc3RQbHVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2xpc3QtcGx1cycpO1xuICAgIGNvbnN0IGNoZWNrbGlzdEVudHJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1hcnF1ZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYXJxdWVlJyk7XG4gICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0Jyk7XG5cbiAgICByZXR1cm4geyBwcm9qZWN0c0J1dHRvbiwgbmV3UHJvamVjdEJ1dHRvbiwgbmV3VGFza0J1dHRvbiwgZXhpdFRhc2ssIFxuICAgICAgICBleGl0UHJvamVjdCwgbmV3VGFza1ZpZXcsIG5ld1Byb2plY3RWaWV3LCBzdWJtaXRUYXNrLCBzdWJtaXRQcm9qZWN0LCBcbiAgICAgICAgdGFza0Zvcm0sIHByb2plY3RGb3JtLCBjb250ZW50LCBleGl0QWN0aXZlVGFzaywgb3BlblRhc2ssIGNoZWNrbGlzdFBsdXMsIFxuICAgICAgICBjaGVja2xpc3RFbnRyaWVzLCBlZGl0VGFza1ZpZXcsIGV4aXRFZGl0Vmlld0J1dHRvbiwgZWRpdENoZWNrbGlzdFBsdXMsIGVkaXRTdWJtaXRCdXR0b24sIFxuICAgICAgICBtYXJxdWVlLCBzb3J0IH1cbn1cblxuY29uc3QgY2FjaGVkRWRpdEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuICAgIGNvbnN0IGZvcm0gPSBteURvbS5lZGl0VGFza1ZpZXcucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgIGNvbnN0IGRlc2MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJyk7XG4gICAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgY29uc3QgcHJpbyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgY29uc3Qgbm90ZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuICAgIGNvbnN0IGNoZWNrcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1jb250YWluZXInKVxuXG4gICAgY29uc3Qgc3VibWl0RWRpdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbiAgICByZXR1cm4geyBuYW1lLCBkZXNjLCBkYXRlLCBwcmlvLCBjaGVja3MsIG5vdGVzLCBzdWJtaXRFZGl0QnV0dG9uLCBmb3JtIH1cbn1cblxuY29uc3QgY2FjaGVkQ2hlY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbXlEb20gPSBjYWNoZWREb20oKTtcbiAgICBjb25zdCBteUNoZWNrbGlzdEVudHJpZXMgPSBteURvbS5jaGVja2xpc3RFbnRyaWVzO1xuICAgIGNvbnN0IG15Q2hlY2tzID0gQXJyYXkuZnJvbShteUNoZWNrbGlzdEVudHJpZXMucXVlcnlTZWxlY3RvckFsbCgnI25ld0RpdicpKTtcbiAgICByZXR1cm4gbXlDaGVja3M7XG59XG5cbmNvbnN0IGNhY2hlZEVkaXRDaGVja3MgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBteUVkaXQgPSBjYWNoZWRFZGl0Rm9ybSgpO1xuICAgIGNvbnN0IG15Q2hlY2tsaXN0RW50cmllcyA9IG15RWRpdC5jaGVja3M7XG4gICAgY29uc3QgbXlDaGVja3MgPSBBcnJheS5mcm9tKG15Q2hlY2tsaXN0RW50cmllcy5xdWVyeVNlbGVjdG9yQWxsKCcjbmV3RGl2JykpO1xuICAgIHJldHVybiBteUNoZWNrcztcbn1cblxuY29uc3QgZ2V0TGFiZWxJbnB1dCA9IGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICBjb25zdCBsYWJlbFRleHQgPSBsYWJlbC50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IGlucHV0Qm9vbCA9IGlucHV0LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4geyBsYWJlbFRleHQsIGlucHV0Qm9vbCB9O1xuXG59XG5cbmNvbnN0IGdldFNpYmxpbmdDaGV2cm9uID0gZnVuY3Rpb24ocGFyZW50RGl2KSB7XG4gICAgY29uc3QgdXBBcnJvdyA9IHBhcmVudERpdi5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2UnKTtcbiAgICBjb25zdCBkb3duQXJyb3cgPSBwYXJlbnREaXYucXVlcnlTZWxlY3RvcignLmV4cGFuZCcpO1xuXG4gICAgcmV0dXJuIHsgdXBBcnJvdywgZG93bkFycm93IH1cbn1cblxuY29uc3QgZ2V0VGFza0RvbUVsZW1lbnRzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY29uc3QgdGFza0RpdiA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGFza0luZGV4ID0gdGFza0Rpdi5pZDtcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignaDQnKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignI2Rlc2Mtb3BlbicpO1xuICAgIGNvbnN0IHRhc2tQcmlvID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktb3BlbicpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1vcGVuJyk7XG5cbiAgICByZXR1cm4geyB0YXNrSW5kZXgsIHRhc2tOYW1lLCB0YXNrRGVzYywgdGFza1ByaW8sIHRhc2tEYXRlIH1cbn1cblxuXG5leHBvcnQgeyBjYWNoZWREb20sIGNhY2hlZENoZWNrcywgZ2V0TGFiZWxJbnB1dCwgZ2V0U2libGluZ0NoZXZyb24sIGdldFRhc2tEb21FbGVtZW50cywgY2FjaGVkRWRpdEZvcm0sIGNhY2hlZEVkaXRDaGVja3MgfTsiLCJpbXBvcnQgeyBjYWNoZWREb20sIGNhY2hlZEVkaXRGb3JtIH0gZnJvbSAnLi9jYWNoZURvbUVsZW1lbnRzJztcbmltcG9ydCBib29rcyBmcm9tICcuLi9hc3NldHMvYm9vay5zdmcnO1xuaW1wb3J0IHsgY2hlY2tMZW5ndGgsIGFiYnJldmlhdGVTdHJpbmcgfSBmcm9tICcuLi9oZWxwZXJzL3N0cmluZ01hbmlwJztcbmltcG9ydCBtaW51cyBmcm9tICcuLi9hc3NldHMvbWludXMuc3ZnJztcbmltcG9ydCB7XG4gIGJpbmRDb2xsYXBzZSwgYmluZEVkaXQsIGJpbmRFeHBhbmQsIGJpbmRSZW1vdmVDaGVja2JveCwgYmluZFJlbW92ZVN1YnRhc2ssIGJpbmREZWxldGUsIGJpbmRQcm9qZWN0RGVsZXRlLFxufSBmcm9tICcuL2V2ZW50QmluZGluZyc7XG5pbXBvcnQgeyBjb3B5QXJyYXksIGdldFNvcnRlZEFycmF5IH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IGZpbmRUYXNrIGZyb20gJy4uL2hlbHBlcnMvZmluZFRhc2snO1xuaW1wb3J0IGRvd25BcnJvdyBmcm9tICcuLi9hc3NldHMvaGVhcnQuc3ZnJztcbmltcG9ydCB1cEFycm93IGZyb20gJy4uL2Fzc2V0cy9oZWFydDIuc3ZnJztcbmltcG9ydCBjaGVja0NoZWNrbGlzdCBmcm9tICcuLi9hcHBMb2dpYy9jaGVja0NoZWNrbGlzdEJvb2wnO1xuaW1wb3J0IHByb2plY3RDb250YWluZXIgZnJvbSAnLi4vYXBwTG9naWMvcHJvamVjdHMnO1xuaW1wb3J0IGZpbmRQcm9qZWN0IGZyb20gJy4uL2hlbHBlcnMvZmluZFByb2plY3QnO1xuaW1wb3J0IHRyYXNoY2FuIGZyb20gJy4uL2Fzc2V0cy90cmFzaC0yLnN2Zyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuLi9hc3NldHMvZWRpdC5zdmcnO1xuaW1wb3J0IHByb2plY3RJbWFnZSBmcm9tICcuLi9hc3NldHMvcHJvamVjdHMucG5nJztcblxuY29uc3QgY3JlYXRlUHJvamVjdERpdnMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgaW1hZ2Uuc3JjID0gcHJvamVjdEltYWdlO1xuICBpZiAoY2hlY2tMZW5ndGgocHJvamVjdC5uYW1lKSkge1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYWJicmV2aWF0ZVN0cmluZyhwcm9qZWN0Lm5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICB9XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3QucHJpb3JpdHl9YDtcblxuICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBkaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zdWInKTtcbiAgbXlEb20uY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0RpdnMgPSBmdW5jdGlvbiAodGFzaykge1xuICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBpbWFnZS5zcmMgPSBib29rcztcbiAgaWYgKGNoZWNrTGVuZ3RoKHRhc2submFtZSkpIHtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGFiYnJldmlhdGVTdHJpbmcodGFzay5uYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgfVxuICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBteURvbS5jb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVDaGVja2JveCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbXlEb20gPSBjYWNoZWREb20oKTtcbiAgY29uc3QgbXlGb3JtID0gbXlEb20ubmV3VGFza1ZpZXc7XG5cbiAgY29uc3QgbmV3Q2hlY2tib3hJdGVtVGV4dCA9IG15Rm9ybS5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWVudHJ5JykudmFsdWU7XG5cbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld0RpdicpO1xuICBzdWJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJEaXYnKTtcblxuICBjb25zdCBtaW51c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtaW51c0ltZy5zcmMgPSBtaW51cztcbiAgbWludXNJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdtaW51cycpO1xuXG4gIGJpbmRSZW1vdmVDaGVja2JveChtaW51c0ltZyk7XG5cbiAgY29uc3QgbmV3Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBuZXdDaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbmV3Q2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0ZXN0Jyk7XG5cbiAgbmV3Q2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gIG5ld0NoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCAndGVzdCcpO1xuXG4gIG5ld0NoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBuZXdDaGVja2JveEl0ZW1UZXh0O1xuXG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdDaGVja2JveCk7XG4gIHN1YkRpdi5hcHBlbmRDaGlsZChuZXdDaGVja2JveExhYmVsKTtcbiAgc3ViRGl2LmFwcGVuZENoaWxkKG1pbnVzSW1nKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG5cbiAgY29uc3QgY2hlY2tDb250YWluZXIgPSBteUZvcm0ucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1jb250YWluZXInKTtcblxuICBjaGVja0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xufTtcblxuY29uc3QgY3JlYXRlRWRpdENoZWNrYm94ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuICBjb25zdCBteUZvcm0gPSBteURvbS5lZGl0VGFza1ZpZXc7XG5cbiAgY29uc3QgbmV3Q2hlY2tib3hJdGVtVGV4dCA9IG15Rm9ybS5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWVudHJ5JykudmFsdWU7XG5cbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld0RpdicpO1xuICBzdWJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJEaXYnKTtcblxuICBjb25zdCBtaW51c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtaW51c0ltZy5zcmMgPSBtaW51cztcbiAgbWludXNJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdtaW51cycpO1xuXG4gIGJpbmRSZW1vdmVDaGVja2JveChtaW51c0ltZyk7XG5cbiAgY29uc3QgbmV3Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBuZXdDaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbmV3Q2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0ZXN0Jyk7XG5cbiAgbmV3Q2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gIG5ld0NoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCAndGVzdCcpO1xuXG4gIG5ld0NoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBuZXdDaGVja2JveEl0ZW1UZXh0O1xuXG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdDaGVja2JveCk7XG4gIHN1YkRpdi5hcHBlbmRDaGlsZChuZXdDaGVja2JveExhYmVsKTtcbiAgc3ViRGl2LmFwcGVuZENoaWxkKG1pbnVzSW1nKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG5cbiAgY29uc3QgY2hlY2tDb250YWluZXIgPSBteUZvcm0ucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1jb250YWluZXInKTtcblxuICBjaGVja0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xufTtcblxuY29uc3QgcG9wdWxhdGVFZGl0Q2hlY2tzID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgY29uc3QgbXlGb3JtID0gY2FjaGVkRWRpdEZvcm0oKTtcbiAgY29uc3QgY2hlY2tDb250YWluZXIgPSBteUZvcm0uY2hlY2tzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2suY2hlY2tib3gubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXdDaGVja2JveEl0ZW1UZXh0ID0gdGFzay5jaGVja2JveFtpXS5uYW1lO1xuXG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBuZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsICduZXdEaXYnKTtcbiAgICBzdWJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJEaXYnKTtcblxuICAgIGNvbnN0IG1pbnVzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWludXNJbWcuc3JjID0gbWludXM7XG4gICAgbWludXNJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdtaW51cycpO1xuXG4gICAgYmluZFJlbW92ZUNoZWNrYm94KG1pbnVzSW1nKTtcblxuICAgIGNvbnN0IG5ld0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBuZXdDaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdDaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rlc3QnKTtcblxuICAgIG5ld0NoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIG5ld0NoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNoZWNrYm94W2ldLnRhc2tGaW5pc2hlZDtcbiAgICBuZXdDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rlc3QnKTtcblxuICAgIG5ld0NoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBuZXdDaGVja2JveEl0ZW1UZXh0O1xuXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0NoZWNrYm94KTtcbiAgICBzdWJEaXYuYXBwZW5kQ2hpbGQobmV3Q2hlY2tib3hMYWJlbCk7XG4gICAgc3ViRGl2LmFwcGVuZENoaWxkKG1pbnVzSW1nKTtcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICBjaGVja0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrRGVzYyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXBkYXRlLWRlc2MnKTtcbiAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG4gIGNvbnN0IGRlc2NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkZXNjVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2Mtb3BlbicpO1xuXG4gIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjVGV4dCk7XG5cbiAgcmV0dXJuIGRlc2NEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXBkYXRlLWRhdGUnKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBieTonO1xuICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGF0ZVRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLW9wZW4nKTtcblxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZVRleHQpO1xuXG4gIHJldHVybiBkYXRlRGl2O1xufTtcblxuY29uc3QgY3JlYXRlVGFza1ByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1cGRhdGUtcHJpb3JpdHknKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LW9wZW4nKTtcblxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcblxuICByZXR1cm4gcHJpb3JpdHlEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrTm90ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VwZGF0ZS1ub3RlcycpO1xuICBub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ05vdGVzOic7XG4gIGNvbnN0IG5vdGVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbm90ZXNUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMtb3BlbicpO1xuXG4gIG5vdGVzRGl2LmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICBub3Rlc0Rpdi5hcHBlbmRDaGlsZChub3Rlc1RleHQpO1xuXG4gIHJldHVybiBub3Rlc0Rpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tDaGVja3MgPSBmdW5jdGlvbiAodGFzaykge1xuICBjb25zdCBjaGVja0NvbnRhaW5lck1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hlY2tDb250YWluZXJNYWluLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWNvbnRhaW5lci1tYWluJyk7XG4gIGNvbnN0IGNoZWNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjaGVja0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWxhYmVsJyk7XG4gIGNoZWNrTGFiZWwudGV4dENvbnRlbnQgPSAnU3ViLXRhc2tzOic7XG4gIGNoZWNrQ29udGFpbmVyTWFpbi5hcHBlbmRDaGlsZChjaGVja0xhYmVsKTtcbiAgaWYgKHRhc2suY2hlY2tib3gubGVuZ3RoID09IDApIHtcbiAgICBjaGVja0xhYmVsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2suY2hlY2tib3gubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lclN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrQ29udGFpbmVyU3ViLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWNvbnRhaW5lci1zdWInKTtcbiAgICBjb25zdCBjaGVja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGNoZWNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2suY2hlY2tib3hbaV0ubmFtZTtcbiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBjaGVja0NoZWNrbGlzdCh0YXNrLmNoZWNrYm94W2ldKTtcbiAgICByZW1vdmUuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICByZW1vdmUudGV4dENvbnRlbnQgPSAnUmVtb3ZlPyc7XG5cbiAgICBiaW5kUmVtb3ZlU3VidGFzayhyZW1vdmUpO1xuXG4gICAgY2hlY2tDb250YWluZXJTdWIuc2V0QXR0cmlidXRlKCdpZCcsIGkpO1xuICAgIGNoZWNrQ29udGFpbmVyU3ViLmFwcGVuZENoaWxkKGNoZWNrTmFtZSk7XG4gICAgY2hlY2tDb250YWluZXJTdWIuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgICBjaGVja0NvbnRhaW5lclN1Yi5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIGNoZWNrQ29udGFpbmVyTWFpbi5hcHBlbmRDaGlsZChjaGVja0NvbnRhaW5lclN1Yik7XG4gIH1cblxuICByZXR1cm4gY2hlY2tDb250YWluZXJNYWluO1xufTtcblxuY29uc3QgcmV3cml0ZUNoZWNrcyA9IGZ1bmN0aW9uICh0YXNrLCBtYWluQ29udGFpbmVyKSB7XG4gIGNvbnN0IGNoZWNrQ29udGFpbmVyTWFpbiA9IG1haW5Db250YWluZXI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLmNoZWNrYm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hlY2tDb250YWluZXJTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0NvbnRhaW5lclN1Yi5jbGFzc0xpc3QuYWRkKCdjaGVjay1jb250YWluZXItc3ViJyk7XG4gICAgY29uc3QgY2hlY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBjaGVja05hbWUudGV4dENvbnRlbnQgPSB0YXNrLmNoZWNrYm94W2ldLm5hbWU7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gY2hlY2tDaGVja2xpc3QodGFzay5jaGVja2JveFtpXSk7XG4gICAgcmVtb3ZlLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgcmVtb3ZlLnRleHRDb250ZW50ID0gJ1JlbW92ZT8nO1xuXG4gICAgYmluZFJlbW92ZVN1YnRhc2socmVtb3ZlKTtcblxuICAgIGNoZWNrQ29udGFpbmVyU3ViLnNldEF0dHJpYnV0ZSgnaWQnLCBpKTtcbiAgICBjaGVja0NvbnRhaW5lclN1Yi5hcHBlbmRDaGlsZChjaGVja05hbWUpO1xuICAgIGNoZWNrQ29udGFpbmVyU3ViLmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gICAgY2hlY2tDb250YWluZXJTdWIuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICBjaGVja0NvbnRhaW5lck1haW4uYXBwZW5kQ2hpbGQoY2hlY2tDb250YWluZXJTdWIpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrRWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBlZGl0QnV0dG9uLnNyYyA9IGVkaXQ7XG4gIGJpbmRFZGl0KGVkaXRCdXR0b24pO1xuICByZXR1cm4gZWRpdEJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tEZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkZWxldGVCdXR0b24uc3JjID0gdHJhc2hjYW47XG4gIGJpbmREZWxldGUoZGVsZXRlQnV0dG9uKTtcbiAgcmV0dXJuIGRlbGV0ZUJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbiAoc29tZVRhc2spIHtcbiAgY29uc3QgbXlEb20gPSBjYWNoZWREb20oKTtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTtcbiAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndW5vcGVuZWQnKTtcblxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVUYXNrSGVhZGVyKCk7XG4gIGNvbnN0IGhlYWRlclRleHQgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignaDQnKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IHNvbWVUYXNrLm5hbWU7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBwcmlvID0gY3JlYXRlVGFza1ByaW9yaXR5KCk7XG4gIGNvbnN0IHByaW9UZXh0ID0gcHJpby5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIHByaW9UZXh0LnRleHRDb250ZW50ID0gc29tZVRhc2sucHJpb3JpdHk7XG5cbiAgY29uc3QgZGVzYyA9IGNyZWF0ZVRhc2tEZXNjKCk7XG4gIGNvbnN0IGRlc2NUZXh0ID0gZGVzYy5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGRlc2NUZXh0LnRleHRDb250ZW50ID0gc29tZVRhc2suZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGF0ZSA9IGNyZWF0ZVRhc2tEYXRlKCk7XG4gIGNvbnN0IGRhdGVUZXh0ID0gZGF0ZS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGRhdGVUZXh0LnRleHRDb250ZW50ID0gc29tZVRhc2suZHVlRGF0ZTtcblxuICBjb25zdCBub3RlcyA9IGNyZWF0ZVRhc2tOb3RlcygpO1xuICBjb25zdCBub3Rlc1RleHQgPSBub3Rlcy5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIG5vdGVzVGV4dC50ZXh0Q29udGVudCA9IHNvbWVUYXNrLm5vdGVzO1xuXG4gIGNvbnN0IGNoZWNrcyA9IGNyZWF0ZVRhc2tDaGVja3Moc29tZVRhc2spO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVUYXNrRWRpdCgpO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZVRhc2tEZWxldGUoKTtcblxuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChwcmlvKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChjaGVja3MpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgbXlEb20uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgcmV0dXJuIHRhc2tEaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrSGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG5cbiAgY29uc3QgY2hldnJvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2hldnJvbkRvd24uc3JjID0gZG93bkFycm93O1xuICBjaGV2cm9uRG93bi5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgY2hldnJvbkRvd24uc2V0QXR0cmlidXRlKCdpZCcsICdhY3RpdmUnKTtcblxuICBjb25zdCBjaGV2cm9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2hldnJvblVwLnNyYyA9IHVwQXJyb3c7XG4gIGNoZXZyb25VcC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xuICBjaGV2cm9uVXAuc2V0QXR0cmlidXRlKCdpZCcsICdpbmFjdGl2ZScpO1xuXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY2hldnJvbkRvd24pO1xuICBiaW5kRXhwYW5kKGNoZXZyb25Eb3duKTtcbiAgYmluZENvbGxhcHNlKGNoZXZyb25VcCk7XG5cbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGNoZXZyb25VcCk7XG5cbiAgcmV0dXJuIGhlYWRlckRpdjtcbn07XG5cbmNvbnN0IGl0ZXJhdGVUYXNrcyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnNvbGUubG9nKHByb2plY3QudGFza3MpO1xuICBjb25zb2xlLmxvZyh0eXBlb2YgKGdldFNvcnRlZEFycmF5KSk7XG4gIGNvbnN0IG5ld1Rhc2tDb3B5U29ydGVkID0gZ2V0U29ydGVkQXJyYXkoY29weUFycmF5KHByb2plY3QudGFza3MpKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZU5ld1Rhc2soZmluZFRhc2socHJvamVjdCwgbmV3VGFza0NvcHlTb3J0ZWRbaV0ubmFtZSkpO1xuICAgIGNvbnN0IHN0clR3byA9IHByb2plY3QudGFza3MuaW5kZXhPZihmaW5kVGFzayhwcm9qZWN0LCBuZXdUYXNrQ29weVNvcnRlZFtpXS5uYW1lKSk7XG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgKHN0clR3bykpO1xuICB9XG59O1xuXG5jb25zdCBpdGVyYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChzb3J0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdENvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnNvbGUubG9nKHNvcnQpO1xuICAgIGNyZWF0ZVByb2plY3REaXZzKGZpbmRQcm9qZWN0KHNvcnRbaV0ubmFtZSkpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0RGVsZXRlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHByb2plY3REZWxldGVCdXR0b24uc3JjID0gdHJhc2hjYW47XG4gIGJpbmRQcm9qZWN0RGVsZXRlKHByb2plY3REZWxldGVCdXR0b24pO1xuICByZXR1cm4gcHJvamVjdERlbGV0ZUJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3REaXZzLCBjcmVhdGVUYXNrRGl2cywgY3JlYXRlQ2hlY2tib3gsIGl0ZXJhdGVUYXNrcywgcmV3cml0ZUNoZWNrcyxcbiAgcG9wdWxhdGVFZGl0Q2hlY2tzLCBjcmVhdGVFZGl0Q2hlY2tib3gsIGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24sIGl0ZXJhdGVQcm9qZWN0LFxufTtcbiIsImltcG9ydCB7IHByb2plY3RzQnV0dG9uRXZlbnQsIG5ld1Rhc2tCdXR0b25FdmVudCwgbmV3UHJvamVjdEJ1dHRvbkV2ZW50LCBcbiAgICBzdWJtaXRQcm9qZWN0LCBzdWJtaXRUYXNrLCBleGl0UHJvamVjdFZpZXcsIGV4aXRUYXNrVmlldywgcmVtb3ZlQ2hlY2tib3gsIGNoYW5nZVZpZXdQcm9qZWN0LCBleHBhbmRUYXNrLCBjbG9zZVRhc2ssIGVkaXRUYXNrLCBcbiAgICBzdWJtaXRFZGl0LCBleGl0RWRpdFZpZXcsIGRlbGV0ZVRhc2ssIGRlbGV0ZVByb2plY3QsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBjYWNoZWREb20gfSBmcm9tICcuL2NhY2hlRG9tRWxlbWVudHMnO1xuaW1wb3J0IGdldFAgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0UFwiO1xuaW1wb3J0IGZpbmRQcm9qZWN0IGZyb20gJy4uL2hlbHBlcnMvZmluZFByb2plY3QnO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCwgcmVuZGVyVGFza3MgfSBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgeyBjcmVhdGVDaGVja2JveCwgY3JlYXRlRWRpdENoZWNrYm94LCByZXdyaXRlQ2hlY2tzIH0gZnJvbSAnLi9kaXZDcmVhdGlvbic7XG5pbXBvcnQgY3VycmVudFByb2plY3QgZnJvbSAnLi9nbG9iYWxWYXJpYWJsZSc7XG5pbXBvcnQgcHJvamVjdENvbnRhaW5lciBmcm9tICcuLi9hcHBMb2dpYy9wcm9qZWN0cyc7XG5pbXBvcnQgeyBkdW1wQ2hlY2tsaXN0IH0gZnJvbSAnLi4vaGVscGVycy9kdW1wRWxlbWVudCc7XG5cbmNvbnN0IGJpbmRFdmVudHNNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG5cbiAgICBteURvbS5wcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9qZWN0c0J1dHRvbkV2ZW50KCk7XG4gICAgICAgIGNoYW5nZVZpZXdQcm9qZWN0KCk7XG4gICAgfSlcblxuICAgIG15RG9tLm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbkV2ZW50KCk7XG4gICAgfSk7XG5cbiAgICBteURvbS5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5ld1Rhc2tCdXR0b25FdmVudCgpO1xuICAgIH0pO1xuXG4gICAgbXlEb20uZXhpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZXhpdFByb2plY3RWaWV3KCk7XG4gICAgfSlcblxuICAgIG15RG9tLmV4aXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGV4aXRUYXNrVmlldygpO1xuICAgIH0pXG5cbiAgICBteURvbS5zdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdFByb2plY3QoKTtcbiAgICB9KVxuXG4gICAgbXlEb20uc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRUYXNrKCk7XG4gICAgfSlcblxuICAgIG15RG9tLmNoZWNrbGlzdFBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3JlYXRlQ2hlY2tib3goKTtcbiAgICB9KVxuXG4gICAgbXlEb20uZWRpdENoZWNrbGlzdFBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3JlYXRlRWRpdENoZWNrYm94KCk7XG4gICAgfSlcblxuICAgIG15RG9tLmV4aXRFZGl0Vmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZXhpdEVkaXRWaWV3KCk7XG4gICAgfSlcblxuICAgIG15RG9tLmVkaXRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3VibWl0RWRpdChlLnRhcmdldCk7XG4gICAgfSlcblxuICAgIG15RG9tLnNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYobXlEb20uY29udGVudC5pZCA9PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmKG15RG9tLmNvbnRlbnQuaWQgPT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0Q29udGFpbmVyW2N1cnJlbnRQcm9qZWN0LmN1cnJlbnRdKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGJpbmRQcm9qZWN0RXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbXlDb250ZW50ID0gY2FjaGVkRG9tKCkuY29udGVudDtcbiAgICBjb25zdCBteVByb2plY3RzID0gQXJyYXkuZnJvbShteUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG15UHJvamVjdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0UChteVByb2plY3RzW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdHVhbFByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5jdXJyZW50ID0gcHJvamVjdENvbnRhaW5lci5pbmRleE9mKGFjdHVhbFByb2plY3QpOyAvLyBVc2UgbXlQcm9qZWN0cy5pbmRleE9mIC1PUi0gcHJvamVjdENvbnRhaW5lci5pbmRleE9mXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC5jdXJyZW50KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKGFjdHVhbFByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgYmluZFJlbW92ZUNoZWNrYm94ID0gZnVuY3Rpb24obWludXNCdXR0b24pIHtcbiAgICBtaW51c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmVtb3ZlQ2hlY2tib3goZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9KVxufVxuXG5jb25zdCBiaW5kUmVtb3ZlU3VidGFzayA9IGZ1bmN0aW9uKG1pbnVzQnV0dG9uKSB7XG4gICAgbWludXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IG1haW4gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7IC8vIGdpdmVzIHRhc2sgaWRcblxuICAgICAgICBjb25zdCBzZWxmSW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXJbY3VycmVudFByb2plY3QuY3VycmVudF0udGFza3NbdGFza0luZGV4XS5jaGVja2JveC5zcGxpY2Uoc2VsZkluZGV4LCAxKTtcbiAgICAgICAgaWYocHJvamVjdENvbnRhaW5lcltjdXJyZW50UHJvamVjdC5jdXJyZW50XS50YXNrc1t0YXNrSW5kZXhdLmNoZWNrYm94Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ2hlY2tib3goZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIGR1bXBDaGVja2xpc3QobWFpbik7XG4gICAgICAgIHJld3JpdGVDaGVja3MocHJvamVjdENvbnRhaW5lcltjdXJyZW50UHJvamVjdC5jdXJyZW50XS50YXNrc1t0YXNrSW5kZXhdLCBtYWluKTtcbiAgICAgICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0Q29udGFpbmVyW2N1cnJlbnRQcm9qZWN0LmN1cnJlbnRdKTtcbiAgICB9KVxufVxuXG5jb25zdCBiaW5kRWRpdCA9IGZ1bmN0aW9uKGVkaXRCdXR0b24pIHtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlZGl0VGFzayhlLnRhcmdldCk7XG4gICAgfSlcbn1cblxuY29uc3QgYmluZEV4cGFuZCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGV4cGFuZFRhc2soZWxlbWVudCk7XG4gICAgfSlcbn1cblxuY29uc3QgYmluZENvbGxhcHNlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xvc2VUYXNrKGVsZW1lbnQpO1xuICAgIH0pXG59XG5cbmNvbnN0IGJpbmREZWxldGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZGVsZXRlVGFzayhlLnRhcmdldCk7XG4gICAgfSlcbn1cblxuY29uc3QgYmluZFByb2plY3REZWxldGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7IGJpbmRFdmVudHNNYWluLCBiaW5kUHJvamVjdEV2ZW50cywgYmluZFJlbW92ZUNoZWNrYm94LCBcbiAgICBiaW5kRXhwYW5kLCBiaW5kQ29sbGFwc2UsIGJpbmRSZW1vdmVTdWJ0YXNrLCBiaW5kRWRpdCwgYmluZERlbGV0ZSwgYmluZFByb2plY3REZWxldGUgfTsiLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0LCByZW5kZXJUYXNrcyB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IHsgY2FjaGVkQ2hlY2tzLCBjYWNoZWREb20sIGNhY2hlZEVkaXRDaGVja3MsIGNhY2hlZEVkaXRGb3JtLCBnZXRTaWJsaW5nQ2hldnJvbiwgZ2V0VGFza0RvbUVsZW1lbnRzIH0gZnJvbSBcIi4vY2FjaGVEb21FbGVtZW50c1wiO1xuaW1wb3J0IHsgZHVtcENoZWNrbGlzdEVkaXQsIGR1bXBTZWxlY3QgfSBmcm9tICcuLi9oZWxwZXJzL2R1bXBFbGVtZW50JztcbmltcG9ydCBwb3B1bGF0ZVByb2plY3RTZWxlY3QgZnJvbSBcIi4uL2hlbHBlcnMvcG9wdWxhdGVQcm9qZWN0U2VsZWN0XCI7XG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4uL2FwcExvZ2ljL3Byb2plY3RGYWN0b3J5XCI7XG5pbXBvcnQgcHVzaFRvUHJvamVjdCBmcm9tIFwiLi4vYXBwTG9naWMvcHVzaFRvUHJvamVjdFwiO1xuaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuLi9hcHBMb2dpYy90YXNrRmFjdG9yeVwiO1xuaW1wb3J0IGZpbmRQcm9qZWN0IGZyb20gXCIuLi9oZWxwZXJzL2ZpbmRQcm9qZWN0XCI7XG5pbXBvcnQgcHVzaFRhc2sgZnJvbSBcIi4uL2FwcExvZ2ljL3B1c2hUYXNrc1wiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lciBmcm9tIFwiLi4vYXBwTG9naWMvcHJvamVjdHNcIjtcbmltcG9ydCBjaGVja2xpc3RidWlsZGVyIGZyb20gXCIuLi9oZWxwZXJzL2NoZWNrbGlzdEJ1aWxkZXJcIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVFZGl0Q2hlY2tzIH0gZnJvbSBcIi4vZGl2Q3JlYXRpb25cIjtcbmltcG9ydCB7IGlzUGFzdCwgcGFyc2VJU08sIGZvcm1hdERpc3RhbmNlLCBjbG9zZXN0VG8gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgcHJvamVjdHNCdXR0b25FdmVudCA9IGZ1bmN0aW9uKCkge1xuICByZW5kZXJQcm9qZWN0KCk7XG4gIGN1cnJlbnRQcm9qZWN0LmN1cnJlbnQgPSAnJztcbn1cblxuY29uc3QgbmV3VGFza0J1dHRvbkV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbXlEb20gPSBjYWNoZWREb20oKTtcblxuICAgIG15RG9tLm5ld1Rhc2tWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGR1bXBTZWxlY3QoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RTZWxlY3QoKTtcbn1cblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbkV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbXlEb20gPSBjYWNoZWREb20oKTtcblxuICAgIG15RG9tLm5ld1Byb2plY3RWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59XG5cbmNvbnN0IHN1Ym1pdFByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KG15RG9tLnByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlLCBcbiAgICBteURvbS5wcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZSxcbiAgICBteURvbS5wcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSlcbiAgICBcbiAgICBwdXNoVG9Qcm9qZWN0KHByb2plY3RDb250YWluZXIsIG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3QgPSBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KTtcbiAgICBjb25zdCBuZXdLZXkgPSBTdHJpbmcocHJvamVjdENvbnRhaW5lci5sZW5ndGggLSAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdLZXksIGxvY2FsU3RvcmFnZVByb2plY3QpO1xuICAgIG15RG9tLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0JylcbiAgICByZW5kZXJQcm9qZWN0KCk7XG5cbiAgICBleGl0UHJvamVjdFZpZXcoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RNYXJxdWVlKCk7XG4gICAgbXlEb20ucHJvamVjdEZvcm0ucmVzZXQoKTtcbn1cblxuY29uc3QgdXBkYXRlU3RvcmFnZSA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBTdHJpbmcocHJvamVjdENvbnRhaW5lci5pbmRleE9mKHByb2plY3QpKTtcbiAgICBjb25zdCBzdHJpbmdlZFByb2plY3QgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0SW5kZXgsIHN0cmluZ2VkUHJvamVjdCk7XG59XG5cbmNvbnN0IG9yZGVyU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UocHJvamVjdENvbnRhaW5lcltpXSk7XG4gICAgfVxufVxuXG5jb25zdCBzdWJtaXRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbXlEb20gPSBjYWNoZWREb20oKTtcbiAgICBjb25zdCBuYW1lID0gbXlEb20udGFza0Zvcm0ucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzYyA9IG15RG9tLnRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZUR1ZSA9IG15RG9tLnRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gbXlEb20udGFza0Zvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBteURvbS50YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKS52YWx1ZTtcbiAgICBjb25zdCBhc3NvY1Byb2plY3QgPSBteURvbS50YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3Qtc2VsZWN0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGNhc2hlZENoZXF1ZXMgPSBjYWNoZWRDaGVja3MoKTtcbiAgICBjb25zdCBuZXdBcnJheSA9IGNoZWNrbGlzdGJ1aWxkZXIoY2FzaGVkQ2hlcXVlcyk7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KG5hbWUsIGRlc2MsIGRhdGVEdWUsIHByaW9yaXR5LCBub3RlcywgbmV3QXJyYXkpO1xuICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChhc3NvY1Byb2plY3QpO1xuICAgIHB1c2hUYXNrKHByb2plY3QsIG5ld1Rhc2spO1xuXG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0KTtcblxuXG4gICAgaWYobXlEb20uY29udGVudC5pZCA9PSAndGFzaycpIHtcbiAgICAgICAgaWYoYXNzb2NQcm9qZWN0ID09IHByb2plY3RDb250YWluZXJbY3VycmVudFByb2plY3QuY3VycmVudF0ubmFtZSkge1xuICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVRhc2tNYXJxdWVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGl0VGFza1ZpZXcoKTtcbiAgICBkdW1wQ2hlY2tsaXN0RWRpdChteURvbS5jaGVja2xpc3RFbnRyaWVzKTtcbiAgICBteURvbS50YXNrRm9ybS5yZXNldCgpO1xufVxuXG5jb25zdCBjbG9zZU9wZW5UYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbXlEb20gPSBjYWNoZWREb20oKTtcblxuICAgIG15RG9tLm9wZW5UYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmNvbnN0IGV4aXRQcm9qZWN0VmlldyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG5cbiAgICBteURvbS5uZXdQcm9qZWN0Vmlldy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmNvbnN0IGV4aXRUYXNrVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG5cbiAgICBteURvbS5uZXdUYXNrVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5jb25zdCBleGl0RWRpdFZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuICAgIG15RG9tLmVkaXRUYXNrVmlldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5jb25zdCByZW1vdmVDaGVja2JveCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xufVxuXG5jb25zdCBjaGFuZ2VWaWV3VGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG4gICAgbXlEb20uY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2snKVxufVxuXG5jb25zdCBjaGFuZ2VWaWV3UHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG4gICAgbXlEb20uY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnKVxufVxuXG5jb25zdCBleHBhbmRUYXNrID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGNvbnN0IGNoZXZyb25zID0gZ2V0U2libGluZ0NoZXZyb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICBjb25zdCB1cEFycm93ID0gY2hldnJvbnMudXBBcnJvdztcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGVsZW1lbnQucGFyZW50Tm9kZS5uZXh0U2libGluZztcblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxpcHBlZCcpO1xuICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5yZXBsYWNlKCd1bm9wZW5lZCcsICdvcGVuJyk7XG5cblxuICAgIGlmKHVwQXJyb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwcGVkJykpIHtcbiAgICAgICAgdXBBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwcGVkJyk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luYWN0aXZlJyk7XG4gICAgICAgIHVwQXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdhY3RpdmUnKTtcbiAgICB9LCAyNTApXG59XG5cbmNvbnN0IGNsb3NlVGFzayA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGV2cm9ucyA9IGdldFNpYmxpbmdDaGV2cm9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgY29uc3QgZG93bkFycm93ID0gY2hldnJvbnMuZG93bkFycm93O1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmbGlwcGVkJyk7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LnJlcGxhY2UoJ29wZW4nLCAndW5vcGVuZWQnKTtcblxuICAgIGRvd25BcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwcGVkJylcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdpbmFjdGl2ZScpO1xuICAgICAgICBkb3duQXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdhY3RpdmUnKTtcbiAgICB9LCAyNTApXG59XG5cbmNvbnN0IGVkaXRUYXNrID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cbiAgICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuICAgIG15RG9tLmVkaXRUYXNrVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGNvbnN0IG15RWRpdCA9IGNhY2hlZEVkaXRGb3JtKCk7XG4gICAgY29uc3QgY3VycmVudFRhc2tEb20gPSBnZXRUYXNrRG9tRWxlbWVudHModGFyZ2V0KTtcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IHByb2plY3RDb250YWluZXJbY3VycmVudFByb2plY3QuY3VycmVudF0udGFza3NbY3VycmVudFRhc2tEb20udGFza0luZGV4XVxuICAgIG15RWRpdC5uYW1lLnZhbHVlID0gY3VycmVudFRhc2submFtZTtcbiAgICBteUVkaXQuZGVzYy52YWx1ZSA9IGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uO1xuICAgIG15RWRpdC5kYXRlLnZhbHVlID0gY3VycmVudFRhc2suZHVlRGF0ZTtcbiAgICBteUVkaXQucHJpby52YWx1ZSA9IGN1cnJlbnRUYXNrLnByaW9yaXR5O1xuICAgIG15RWRpdC5ub3Rlcy52YWx1ZSA9IGN1cnJlbnRUYXNrLm5vdGVzO1xuICAgIG15RWRpdC5zdWJtaXRFZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50VGFza0RvbS50YXNrSW5kZXgpXG4gICAgcG9wdWxhdGVFZGl0Q2hlY2tzKGN1cnJlbnRUYXNrKTtcbiAgICBcbn1cblxuY29uc3Qgc3VibWl0RWRpdCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGNvbnN0IG15RWRpdCA9IGNhY2hlZEVkaXRGb3JtKCk7XG5cbiAgICBjb25zdCBteUlkID0gdGFyZ2V0LmlkO1xuICAgIGNvbnN0IGN1clByb2plY3QgPSBwcm9qZWN0Q29udGFpbmVyW2N1cnJlbnRQcm9qZWN0LmN1cnJlbnRdO1xuICAgIGNvbnN0IGN1clRhc2sgPSBjdXJQcm9qZWN0LnRhc2tzW215SWRdO1xuXG4gICAgY3VyVGFzay5uYW1lID0gbXlFZGl0Lm5hbWUudmFsdWU7XG4gICAgY3VyVGFzay5kZXNjcmlwdGlvbiA9IG15RWRpdC5kZXNjLnZhbHVlO1xuICAgIGN1clRhc2suZGF0ZSA9IG15RWRpdC5kYXRlLnZhbHVlO1xuICAgIGN1clRhc2sucHJpb3JpdHkgPSBteUVkaXQucHJpby52YWx1ZTtcbiAgICBjdXJUYXNrLm5vdGVzID0gbXlFZGl0Lm5vdGVzLnZhbHVlO1xuICAgIGN1clRhc2suY2hlY2tib3ggPSBjaGVja2xpc3RidWlsZGVyKGNhY2hlZEVkaXRDaGVja3MoKSk7XG5cbiAgICB1cGRhdGVTdG9yYWdlKGN1clByb2plY3QpO1xuXG4gICAgZXhpdEVkaXRWaWV3KCk7XG4gICAgZHVtcENoZWNrbGlzdEVkaXQobXlFZGl0LmNoZWNrcyk7XG4gICAgbXlFZGl0LmZvcm0ucmVzZXQoKTtcblxuICAgIHJlbmRlclRhc2tzKGN1clByb2plY3QpO1xufVxuXG5jb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY29uc3QgY3VyUHJvamVjdCA9IHByb2plY3RDb250YWluZXJbY3VycmVudFByb2plY3QuY3VycmVudF07XG4gICAgY29uc3QgY3VyVGFzayA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICBjdXJQcm9qZWN0LnRhc2tzLnNwbGljZShjdXJUYXNrLCAxKTtcbiAgICByZW5kZXJUYXNrcyhjdXJQcm9qZWN0KTtcbiAgICB1cGRhdGVTdG9yYWdlKGN1clByb2plY3QpO1xufSBcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGxhc3RLZXkgPSBTdHJpbmcocHJvamVjdENvbnRhaW5lci5sZW5ndGggLSAxKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsYXN0S2V5KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnNwbGljZShjdXJyZW50UHJvamVjdC5jdXJyZW50LCAxKTtcbiAgICBvcmRlclN0b3JhZ2UoKTtcbiAgICBwcm9qZWN0c0J1dHRvbkV2ZW50KCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TWFycXVlZSgpO1xuICAgIGNoYW5nZVZpZXdQcm9qZWN0KCk7XG59XG5cbmNvbnN0IHBvcHVsYXRlUHJvamVjdE1hcnF1ZWUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBwcm9qZWN0RGF0ZUFycmF5ID0gW107XG5cbiAgICBpZihwcm9qZWN0Q29udGFpbmVyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG15RG9tLm1hcnF1ZWUudGV4dENvbnRlbnQgPSAnTm90aGluZyB0byBkbyEgVGFrZSBhIGJyZWFrIDopJ1xuICAgICAgICBteURvbS5tYXJxdWVlLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdENvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZW1wRGF0ZSA9IHBhcnNlSVNPKChwcm9qZWN0Q29udGFpbmVyW2ldLmR1ZURhdGUpKVxuICAgICAgICBpZihpc1Bhc3QodGVtcERhdGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RDb250YWluZXJbaV0ubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlID0gZm9ybWF0RGlzdGFuY2UodGVtcERhdGUsIHRvZGF5KTtcbiAgICAgICAgICAgIGNvbnN0IG1hcnF1ZWVUZXh0ID0gJ092ZXJkdWU6ICcgKyBwcm9qZWN0TmFtZSArICcsIGR1ZSAnICsgcHJvamVjdERhdGUgKyAnIGFnby4nO1xuICAgICAgICAgICAgbXlEb20ubWFycXVlZS50ZXh0Q29udGVudCA9IG1hcnF1ZWVUZXh0O1xuICAgICAgICAgICAgbXlEb20ubWFycXVlZS5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdERhdGVBcnJheS5wdXNoKHRlbXBEYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNvb25lc3QgPSBKU09OLnN0cmluZ2lmeShjbG9zZXN0VG8odG9kYXksIHByb2plY3REYXRlQXJyYXkpKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdENvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0ZUFycmF5W2ldKSA9PSBzb29uZXN0KXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdENvbnRhaW5lcltpXS5uYW1lO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3REYXRlQXJyYXlbaV07XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGZvcm1hdERpc3RhbmNlKGR1ZURhdGUsIHRvZGF5KTtcbiAgICAgICAgICAgIGNvbnN0IG1hcnF1ZWVUZXh0ID0gJ1VwY29taW5nOiAnICsgcHJvamVjdE5hbWUgKyAnLCBkdWUgaW4gJyArIHByb2plY3REYXRlICsgJy4nXG4gICAgICAgICAgICBteURvbS5tYXJxdWVlLnRleHRDb250ZW50ID0gbWFycXVlZVRleHQ7XG4gICAgICAgICAgICBteURvbS5tYXJxdWVlLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgcG9wdWxhdGVUYXNrTWFycXVlZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tEYXRlQXJyYXkgPSBbXTtcblxuICAgIGlmKHByb2plY3RDb250YWluZXJbY3VycmVudFByb2plY3QuY3VycmVudF0udGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgbXlEb20ubWFycXVlZS50ZXh0Q29udGVudCA9ICdOb3RoaW5nIHRvIGRvISBUYWtlIGEgYnJlYWsgOiknXG4gICAgICAgIG15RG9tLm1hcnF1ZWUuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RDb250YWluZXJbY3VycmVudFByb2plY3QuY3VycmVudF0udGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVtcERhdGUgPSBwYXJzZUlTTygocHJvamVjdENvbnRhaW5lcltjdXJyZW50UHJvamVjdC5jdXJyZW50XS50YXNrc1tpXS5kdWVEYXRlKSlcbiAgICAgICAgaWYoaXNQYXN0KHRlbXBEYXRlKSkge1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBwcm9qZWN0Q29udGFpbmVyW2N1cnJlbnRQcm9qZWN0LmN1cnJlbnRdLnRhc2tzW2ldLm5hbWU7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGZvcm1hdERpc3RhbmNlKHRlbXBEYXRlLCB0b2RheSk7XG4gICAgICAgICAgICBjb25zdCBtYXJxdWVlVGV4dCA9ICdPdmVyZHVlOiAnICsgdGFza05hbWUgKyAnLCBkdWUgJyArIHRhc2tEYXRlICsgJyBhZ28uJztcbiAgICAgICAgICAgIG15RG9tLm1hcnF1ZWUudGV4dENvbnRlbnQgPSBtYXJxdWVlVGV4dDtcbiAgICAgICAgICAgIG15RG9tLm1hcnF1ZWUuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tEYXRlQXJyYXkucHVzaCh0ZW1wRGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzb29uZXN0ID0gSlNPTi5zdHJpbmdpZnkoY2xvc2VzdFRvKHRvZGF5LCB0YXNrRGF0ZUFycmF5KSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RDb250YWluZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkodGFza0RhdGVBcnJheVtpXSkgPT0gc29vbmVzdCl7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHByb2plY3RDb250YWluZXJbY3VycmVudFByb2plY3QuY3VycmVudF0udGFza3NbaV0ubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0YXNrRGF0ZUFycmF5W2ldO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBmb3JtYXREaXN0YW5jZShkdWVEYXRlLCB0b2RheSk7XG4gICAgICAgICAgICBjb25zdCBtYXJxdWVlVGV4dCA9ICdVcGNvbWluZzogJyArIHRhc2tOYW1lICsgJywgZHVlIGluICcgKyB0YXNrRGF0ZSArICcuJ1xuICAgICAgICAgICAgbXlEb20ubWFycXVlZS50ZXh0Q29udGVudCA9IG1hcnF1ZWVUZXh0O1xuICAgICAgICAgICAgbXlEb20ubWFycXVlZS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGdldFNvcnRWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG4gICAgcmV0dXJuIG15RG9tLnNvcnQudmFsdWU7XG59XG5cbmNvbnN0IGNvcHlBcnJheSA9IGZ1bmN0aW9uKHNvbWVBcnJheSkge1xuICAgIGNvbnN0IGNvcGllZEFycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNvbWVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb3BpZWRBcnJheS5wdXNoKHNvbWVBcnJheVtpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNvcGllZEFycmF5O1xufVxuXG5jb25zdCBnZXRTb3J0ZWRBcnJheSA9IGZ1bmN0aW9uKHNvbWVBcnJheSkge1xuICAgIGNvbnN0IHNvcnRNZXRob2QgPSBnZXRTb3J0VmFsdWUoKTtcbiAgICBjb25zb2xlLmxvZyhzb3J0TWV0aG9kKTtcbiAgICBzd2l0Y2goc29ydE1ldGhvZCkge1xuICAgICAgICBjYXNlICdhbHBoYWJldC1hJzpcbiAgICAgICAgICAgIHJldHVybiBzb21lQXJyYXkuc29ydCgoYSwgYikgPT4gYS5uYW1lIC0gYi5uYW1lKTtcbiAgICAgICAgY2FzZSAnYWxwaGFiZXQteic6XG4gICAgICAgICAgICByZXR1cm4gc29tZUFycmF5LnJldmVyc2UoKGEsIGIpID0+IGEubmFtZSAtIGIubmFtZSk7XG4gICAgICAgIGNhc2UgJ3ByaW9yaXR5LW9uZSc6XG4gICAgICAgICAgICByZXR1cm4gc29tZUFycmF5LnJldmVyc2UoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KTtcbiAgICAgICAgY2FzZSAncHJpb3JpdHktdHdvJzpcbiAgICAgICAgICAgIHJldHVybiBzb21lQXJyYXkuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpO1xuICAgICAgICBjYXNlICdkYXRlLW9uZSc6XG4gICAgICAgICAgICByZXR1cm4gc29tZUFycmF5LnNvcnQoKGEsIGIpID0+IGEuZHVlRGF0ZSAtIGIuZHVlRGF0ZSk7XG4gICAgICAgIGNhc2UgJ2RhdGUtdHdvJzpcbiAgICAgICAgICAgIHJldHVybiBzb21lQXJyYXkucmV2ZXJzZSgoYSwgYikgPT4gYS5kdWVEYXRlIC0gYi5kdWVEYXRlKTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBwcm9qZWN0c0J1dHRvbkV2ZW50LCBuZXdUYXNrQnV0dG9uRXZlbnQsIG5ld1Byb2plY3RCdXR0b25FdmVudCwgc3VibWl0UHJvamVjdCwgXG4gICAgc3VibWl0VGFzaywgY2xvc2VPcGVuVGFzaywgZXhpdFByb2plY3RWaWV3LCBleGl0VGFza1ZpZXcsIHJlbW92ZUNoZWNrYm94LCBjaGFuZ2VWaWV3UHJvamVjdCwgXG4gICAgY2hhbmdlVmlld1Rhc2ssIGV4cGFuZFRhc2ssIGNsb3NlVGFzaywgZWRpdFRhc2ssIHN1Ym1pdEVkaXQsIGV4aXRFZGl0VmlldywgZGVsZXRlVGFzaywgXG4gICAgZGVsZXRlUHJvamVjdCwgdXBkYXRlU3RvcmFnZSwgcG9wdWxhdGVQcm9qZWN0TWFycXVlZSwgcG9wdWxhdGVUYXNrTWFycXVlZSwgZ2V0U29ydGVkQXJyYXksIGNvcHlBcnJheSB9XG4iLCJ2YXIgY3VycmVudFByb2plY3QgPSB7XG4gICAgY3VycmVudCA6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFByb2plY3Q7IiwiaW1wb3J0IHByb2plY3RDb250YWluZXIgZnJvbSBcIi4uL2FwcExvZ2ljL3Byb2plY3RzXCJcbmltcG9ydCB7IHBvcHVsYXRlUHJvamVjdE1hcnF1ZWUgfSBmcm9tIFwiLi9ldmVudHNcIjtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZVtpXSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZFN0cmluZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2ldKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5wdXNoKHBhcnNlZFN0cmluZyk7XG4gICAgfVxuICAgIHBvcHVsYXRlUHJvamVjdE1hcnF1ZWUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDsiLCJpbXBvcnQgcHJvamVjdENvbnRhaW5lciBmcm9tIFwiLi4vYXBwTG9naWMvcHJvamVjdHNcIjtcbmltcG9ydCB7IGR1bXBDb250ZW50IH0gZnJvbSBcIi4uL2hlbHBlcnMvZHVtcEVsZW1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3REZWxldGVCdXR0b24sIGl0ZXJhdGVQcm9qZWN0IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdGlvbi9kaXZDcmVhdGlvblwiO1xuaW1wb3J0IHsgYmluZFByb2plY3RFdmVudHMgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0aW9uL2V2ZW50QmluZGluZ1wiO1xuaW1wb3J0IHsgY2hhbmdlVmlld1Rhc2ssIHBvcHVsYXRlVGFza01hcnF1ZWUsIHBvcHVsYXRlUHJvamVjdE1hcnF1ZWUsIGdldFNvcnRlZEFycmF5LCBjb3B5QXJyYXkgfSBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7IGl0ZXJhdGVUYXNrcyB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRpb24vZGl2Q3JlYXRpb25cIjtcbmltcG9ydCB7IGNhY2hlZERvbSB9IGZyb20gXCIuL2NhY2hlRG9tRWxlbWVudHNcIjtcblxuY29uc3QgcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGR1bXBDb250ZW50KCk7XG4gICAgY29uc3QgbmV3UHJvamVjdENvcHlTb3J0ZWQgPSBnZXRTb3J0ZWRBcnJheShjb3B5QXJyYXkocHJvamVjdENvbnRhaW5lcikpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RDb250YWluZXIpO1xuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3RDb3B5U29ydGVkKTtcbiAgICBpdGVyYXRlUHJvamVjdChuZXdQcm9qZWN0Q29weVNvcnRlZCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TWFycXVlZSgpO1xuICAgIGJpbmRQcm9qZWN0RXZlbnRzKCk7XG59XG5cbmNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlUHJvamVjdERlbGV0ZUJ1dHRvbigpO1xuICAgIGR1bXBDb250ZW50KCk7XG4gICAgY2hhbmdlVmlld1Rhc2soKTtcbiAgICBpdGVyYXRlVGFza3MocHJvamVjdCk7XG4gICAgcG9wdWxhdGVUYXNrTWFycXVlZSgpO1xuICAgIG15RG9tLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuIH1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdCwgcmVuZGVyVGFza3MgfTsiLCJpbXBvcnQgY2hlY2tsaXN0RmFjdG9yeSBmcm9tIFwiLi4vYXBwTG9naWMvY2hlY2tsaXN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgZ2V0TGFiZWxJbnB1dCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRpb24vY2FjaGVEb21FbGVtZW50c1wiXG5cbmNvbnN0IGNoZWNrbGlzdGJ1aWxkZXIgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgY29uc3QgY2hlY2tsaXN0QXJyYXkgPSBbXVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wID0gZ2V0TGFiZWxJbnB1dChlbGVtZW50W2ldKTtcbiAgICAgICAgbGV0IG5ld0NoZWNrID0gY2hlY2tsaXN0RmFjdG9yeSh0ZW1wLmxhYmVsVGV4dCwgdGVtcC5pbnB1dEJvb2wpO1xuICAgICAgICBjaGVja2xpc3RBcnJheS5wdXNoKG5ld0NoZWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrbGlzdEFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja2xpc3RidWlsZGVyOyIsImltcG9ydCB7IGNhY2hlZERvbSB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRpb24vY2FjaGVEb21FbGVtZW50c1wiXG5cbmNvbnN0IGR1bXBTZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gbXlEb20udGFza0Zvcm0ucXVlcnlTZWxlY3RvcignI3Byb2plY3Qtc2VsZWN0Jyk7XG4gICAgd2hpbGUoc2VsZWN0b3IuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHNlbGVjdG9yLnJlbW92ZUNoaWxkKHNlbGVjdG9yLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuY29uc3QgZHVtcENvbnRlbnQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBteURvbSA9IGNhY2hlZERvbSgpO1xuICAgIHdoaWxlKG15RG9tLmNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG15RG9tLmNvbnRlbnQucmVtb3ZlQ2hpbGQobXlEb20uY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmNvbnN0IGR1bXBDaGVja2xpc3QgPSBmdW5jdGlvbihjaGVja2xpc3QpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoZWNrbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stY29udGFpbmVyLXN1YicpO1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG5jb25zdCBkdW1wQ2hlY2tsaXN0RWRpdCA9IGZ1bmN0aW9uKGNoZWNrbGlzdCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuZXdEaXYnKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgZHVtcFNlbGVjdCwgZHVtcENvbnRlbnQsIGR1bXBDaGVja2xpc3QsIGR1bXBDaGVja2xpc3RFZGl0IH07IiwiaW1wb3J0IHByb2plY3RDb250YWluZXIgZnJvbSBcIi4uL2FwcExvZ2ljL3Byb2plY3RzXCJcblxuY29uc3QgZmluZFByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lci5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0VGl0bGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kUHJvamVjdCBcbiIsImNvbnN0IGZpbmRUYXNrID0gZnVuY3Rpb24ocHJvamVjdCwgdGFza05hbWUpIHtcbiAgICByZXR1cm4gcHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5uYW1lID09PSB0YXNrTmFtZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRUYXNrOyIsImNvbnN0IGdldFAgPSBmdW5jdGlvbihkaXYpIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkaXYucXVlcnlTZWxlY3RvcigncCcpO1xuICAgIHJldHVybiBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFA7IiwiaW1wb3J0IHsgY2FjaGVkRG9tIH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdGlvbi9jYWNoZURvbUVsZW1lbnRzXCI7XG5pbXBvcnQgcHJvamVjdENvbnRhaW5lciBmcm9tIFwiLi4vYXBwTG9naWMvcHJvamVjdHNcIjtcblxuY29uc3QgY3JlYXRlU2VsZWN0ID0gZnVuY3Rpb24ocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBuZXdPcHRpb24udmFsdWUgPSBwcm9qZWN0VGl0bGU7XG4gICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgIHJldHVybiBuZXdPcHRpb247XG59XG5cbmNvbnN0IHBvcHVsYXRlUHJvamVjdFNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15RG9tID0gY2FjaGVkRG9tKCk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBteURvbS50YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1zZWxlY3QnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdENvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVtcE9wdGlvbiA9IGNyZWF0ZVNlbGVjdChwcm9qZWN0Q29udGFpbmVyW2ldLm5hbWUpO1xuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZCh0ZW1wT3B0aW9uKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlUHJvamVjdFNlbGVjdDsiLCJjb25zdCBjaGVja0xlbmd0aCA9IGZ1bmN0aW9uKHNvbWVTdHJpbmcpIHtcbiAgICByZXR1cm4gc29tZVN0cmluZy5sZW5ndGggPiAyMDtcbn1cblxuY29uc3QgYWJicmV2aWF0ZVN0cmluZyA9IGZ1bmN0aW9uKHNvbWVTdHJpbmcpIHtcbiAgICBjb25zdCBkb3RzID0gJy4uLic7XG4gICAgY29uc3Qgc2xpY2UgPSBzb21lU3RyaW5nLnNsaWNlKDAsIDE3KTtcbiAgICByZXR1cm4gKHNsaWNlK2RvdHMpO1xufVxuXG5leHBvcnQgeyBjaGVja0xlbmd0aCwgYWJicmV2aWF0ZVN0cmluZyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYmluZEV2ZW50c01haW4gfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRpb24vZXZlbnRCaW5kaW5nXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0aW9uL3JlbmRlclwiO1xuaW1wb3J0IGluaXQgZnJvbSBcIi4vZG9tTWFuaXB1bGF0aW9uL2luaXRcIjtcblxuaW5pdCgpO1xuYmluZEV2ZW50c01haW4oKTtcbnJlbmRlclByb2plY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=