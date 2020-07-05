(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n\r\n\r\n<table style=\"width:100%\">\r\n  <tr>\r\n    <th>Firstname</th>\r\n    <th>Lastname</th>\r\n    <th>Age</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Jill</td>\r\n    <td>Smith</td>\r\n    <td>50</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Eve</td>\r\n    <td>Jackson</td>\r\n    <td>94</td>\r\n  </tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dish/dish-add/dish-add.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dish/dish-add/dish-add.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dish-add works!</p>\n\n<h1 id=\"tableLabel\"> Add new dish </h1>\n\n<!--<div class=\"container\">\n  <div class=\" row\">\n    <div class=\" col-10\">\n      <div class=\" jumbotron\">\n        <form [formGroup]=\"dishForm\" (ngSubmit)=\"onSubmit(dishForm)\">\n\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\" form-control\" formControlName=\"name\" />\n            <span *ngIf=\"form.get('name').errors?.required\">Name  is required</span>\n            <span *ngIf=\"dishForm.get('name').errors?.serverError\">\n              {{ dishForm.get('name').errors?.serverError }}\n            </span>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Description</label>\n            <input type=\"text\" class=\" form-control\" formControlName=\"description\" />\n            <span *ngIf=\"form.get('description').errors?.required\">Description is required</span>\n            <span *ngIf=\"dishForm.get('description').errors?.serverError\">\n              {{ dishForm.get('description').errors?.serverError }}\n            </span>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Dish Category</label>\n            <select class=\" form-control\" formControlName=\"genre\">\n              <option value=\"appetizer\">Appetizer </option>\n              <option value=\"soup\">Soup</option>\n              <option value=\"maindish\">Main Dish </option>\n              <option value=\"desert\">Desert </option>\n\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Date</label>\n            <input type=\"datetime\" class=\" form-control\" placeholder=\"2020-06-14\" formControlName=\"dateAdded\" />\n            <span *ngIf=\"form.get('dateAdded').errors?.required\">Date is required</span>\n            <span *ngIf=\"dishForm.get('dateAdded').errors?.serverError\">\n              {{ dishForm.get('dateAdded').errors?.serverError }}\n            </span>\n          </div>\n\n          <button class=\"btn btn-success float-left\" type='submit' [disabled]=\"!dishForm.valid\">Save</button>\n          <button class=\"btn btn-success float-right\" (click)=\"goBack()\">Back</button>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dish/dish-details/dish-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dish/dish-details/dish-details.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dish-details works!</p>\r\n\r\n\r\n<p *ngIf=\"!dish\"><em>Loading ...</em></p>\r\n\r\n<a [routerLink]=\"['/fetch-data']\" routerLinkActive=\"active\">Back</a>\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"dish\">\r\n  <tbody>\r\n    <tr>\r\n      <th>Name</th>\r\n      <td>{{ dish.name }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Description</th>\r\n      <td>{{ dish.description }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Dish Category</th>\r\n      <td>{{ dish.dishCategory }}</td>\r\n    </tr>\r\n\r\n    <!--<tr>\r\n      <th>DateAdded</th>-->\r\n      <!--<td>{{ movie.dateAdded }}</td>-->\r\n    <!--</tr>-->\r\n\r\n  </tbody>\r\n</table>\r\n\r\n<th>Reviews</th>\r\n<table style=\"width:100%\" *ngIf=\"dish\">\r\n  <thead>\r\n    <tr>\r\n      <th style=\"width:30%\">Content</th>\r\n    </tr>\r\n  </thead>\r\n  <tr *ngFor=\"let review of dish.reviews\">\r\n    <td style=\"width:30%\">{{ review.content }}</td>\r\n  </tr>\r\n</table>\r\n\r\n<th>Ingredients</th>\r\n<table style=\"width:100%\" *ngIf=\"dish\">\r\n  <thead>\r\n    <tr>\r\n      <th style=\"width:30%\">Name</th>\r\n      <th style=\"width:30%\">Ingredient Type</th>\r\n      <th style=\"width:30%\">Origin</th>\r\n    </tr>\r\n  </thead>\r\n  <tr *ngFor=\"let ingredient of dish.ingredients\">\r\n    <td style=\"width:30%\">{{ ingredient.name }}</td>\r\n    <td style=\"width:30%\">{{ ingredient.ingredientType }}</td>\r\n    <td style=\"width:30%\">{{ ingredient.origin }}</td>\r\n  </tr>\r\n</table>\r\n\r\n<a [routerLink]=\"['/dish']\" routerLinkActive=\"active\">Back</a>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Dishes Recipes</h1>\r\n\r\n<p>These are our Dishes Recipes.</p>\r\n\r\n<p *ngIf=\"!dishes\"><em>Loading...</em></p>\r\n\r\n<div><a class=\"btn btn-success\" [routerLink]=\"['/dish-add/0']\">Add</a></div>\r\n\r\n<table style=\"width:100%\" class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"dishes\">\r\n  <thead>\r\n    <tr>\r\n      <th style=\"width:14%\">Name</th>\r\n      <th style=\"width: 14%\">Description</th>\r\n      <th style=\"width:14%\">Dish Category</th>\r\n      <th style=\"width:14%\">No of Ingredients</th>\r\n      <th style=\"width:14%\">No of Reviews</th>\r\n      <th style=\"width:30%\">Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let dish of dishes\">\r\n      <td>{{ dish.name }}</td>\r\n      <td>{{ dish.description }}</td>\r\n      <td>{{ dish.dishCategory }}</td>\r\n      <td>{{ dish.numberOfIngredients }}</td>\r\n      <td>{{ dish.numberOfReviews }}</td>\r\n      <td width=\"300px\">\r\n        <button class=\"btn btn-primary\" [routerLink]=\"['/dish', dish.id]\" routerLinkActive=\"active\">Details</button> |\r\n        <button class=\"btn btn-warning\" [routerLink]=\"['/dish-add', dish.id]\">Edit</button> |\r\n        <button class=\"btn btn-danger\" (click)=\" delete(dish.id)\">Delete</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div><a class=\"btn btn-success\" [routerLink]=\"['/dish-add/0']\">Add</a></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!--<section style=\"width:100%\" >\r\n  <div>\r\n    <div>\r\n      <h1>Home Page!</h1>\r\n      <img src=\"./images/home3.jpeg\" >\r\n    </div>\r\n  </div>\r\n</section>-->\r\n\r\n\r\n  <img src=\"{{heroImageUrl}}\" style=\"width:100%\" >\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ingredient/ingredient.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ingredient/ingredient.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ingredient works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Dish Recipes</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">HOME</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/review']\">REVIEW</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/ingredient']\">INGREDIENT</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">DISH(Fetch data)</a>\r\n          </li>\r\n\r\n\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>review works!</p>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _dish_dish_add_dish_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dish/dish-add/dish-add.component */ "./src/app/dish/dish-add/dish-add.component.ts");
/* harmony import */ var _dish_dish_details_dish_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dish/dish-details/dish-details.component */ "./src/app/dish/dish-details/dish-details.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _ingredient_ingredient_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ingredient/ingredient.component */ "./src/app/ingredient/ingredient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _dish_dish_add_dish_add_component__WEBPACK_IMPORTED_MODULE_10__["DishAddComponent"],
            _dish_dish_details_dish_details_component__WEBPACK_IMPORTED_MODULE_11__["DishDetailsComponent"],
            _review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"],
            _ingredient_ingredient_component__WEBPACK_IMPORTED_MODULE_13__["IngredientComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                { path: 'dish-add', component: _dish_dish_add_dish_add_component__WEBPACK_IMPORTED_MODULE_10__["DishAddComponent"] },
                { path: 'dish-detail', component: _dish_dish_details_dish_details_component__WEBPACK_IMPORTED_MODULE_11__["DishDetailsComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/dish/dish-add/dish-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/dish/dish-add/dish-add.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2gvZGlzaC1hZGQvZGlzaC1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dish/dish-add/dish-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/dish/dish-add/dish-add.component.ts ***!
  \*****************************************************/
/*! exports provided: DishAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishAddComponent", function() { return DishAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_dish_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dish.service */ "./src/app/dish/shared/dish.service.ts");
/* harmony import */ var _shared_enum_dishDishCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/enum/dishDishCategory */ "./src/app/dish/shared/enum/dishDishCategory.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let DishAddComponent = class DishAddComponent {
    constructor(dishService, location, fb, route) {
        this.dishService = dishService;
        this.location = location;
        this.fb = fb;
        this.route = route;
        this.dishDishCategory = Object.values(_shared_enum_dishDishCategory__WEBPACK_IMPORTED_MODULE_4__["DishDishCategory"]);
    }
    ngOnInit() {
        this.addDishForm();
        this.getDish();
    }
    addDishForm() {
        this.dishForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dishCategory: [''],
            dateAdded: [''],
        });
    }
    getDish() {
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        if (id !== 0) {
            this.dishService.getDish(id)
                .subscribe(result => {
                this.dish = result;
                if (this.getDish !== null) {
                    this.dishForm.setValue({
                        name: this.dish.name,
                        description: this.dish.description,
                    });
                }
            });
        }
    }
    onSubmit({ value, valid }) {
        console.log("wrong place");
        if (valid) {
            var id = parseInt(this.route.snapshot.paramMap.get('id'));
            if (id === 0) {
                this.dishService.add(value)
                    .subscribe(_ => this.location.back(), err => {
                    const validationErrors = err.error.errors;
                    Object.keys(validationErrors).forEach(prop => {
                        const formControl = this.dishForm.get(prop.toLowerCase());
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[prop][0]
                            });
                        }
                    });
                });
            }
            else {
                value.id = id;
                this.dishService.update(id, value)
                    .subscribe(_ => this.location.back(), err => {
                    const validationErrors = err.error.errors;
                    Object.keys(validationErrors).forEach(prop => {
                        const formControl = this.dishForm.get(prop.toLowerCase());
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[prop][0]
                            });
                        }
                    });
                });
            }
        }
    }
    goBack() {
        this.location.back();
    }
};
DishAddComponent.ctorParameters = () => [
    { type: _shared_dish_service__WEBPACK_IMPORTED_MODULE_3__["DishService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DishAddComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dish-add',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dish-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dish/dish-add/dish-add.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dish-add.component.css */ "./src/app/dish/dish-add/dish-add.component.css")).default]
    }),
    __metadata("design:paramtypes", [_shared_dish_service__WEBPACK_IMPORTED_MODULE_3__["DishService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DishAddComponent);



/***/ }),

/***/ "./src/app/dish/dish-details/dish-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/dish/dish-details/dish-details.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2gvZGlzaC1kZXRhaWxzL2Rpc2gtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dish/dish-details/dish-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dish/dish-details/dish-details.component.ts ***!
  \*************************************************************/
/*! exports provided: DishDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishDetailsComponent", function() { return DishDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let DishDetailsComponent = class DishDetailsComponent {
    constructor(http, baseUrl, route) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.route = route;
    }
    loadDish(dishId) {
        this.http.get(this.baseUrl + 'api/Dishes/' + dishId).subscribe(result => {
            this.dish = result;
            console.log(this.dish);
        }, error => console.error(error));
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.loadDish(params.get('dishId'));
        });
    }
};
DishDetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DishDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dish-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dish-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dish/dish-details/dish-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dish-details.component.css */ "./src/app/dish/dish-details/dish-details.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DishDetailsComponent);



/***/ }),

/***/ "./src/app/dish/shared/dish.service.ts":
/*!*********************************************!*\
  !*** ./src/app/dish/shared/dish.service.ts ***!
  \*********************************************/
/*! exports provided: DishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function() { return DishService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let DishService = class DishService {
    constructor(httpClient, baseUrl) {
        this.httpClient = httpClient;
        this.baseUrl = baseUrl;
    }
    getAllDishes() {
        return this.httpClient.get(this.baseUrl + 'api/Dishes');
    }
    getDish(id) {
        return this.httpClient.get(this.baseUrl + 'api/Dishes/' + id);
    }
    add(dish) {
        return this.httpClient.post(this.baseUrl + 'api/Dishes', dish);
    }
    delete(id) {
        return this.httpClient.delete(this.baseUrl + 'api/Dishes/' + id);
    }
    update(id, dish) {
        return this.httpClient.put(this.baseUrl + 'api/Dishes/' + id, dish);
    }
};
DishService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
DishService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], DishService);



/***/ }),

/***/ "./src/app/dish/shared/enum/dishDishCategory.ts":
/*!******************************************************!*\
  !*** ./src/app/dish/shared/enum/dishDishCategory.ts ***!
  \******************************************************/
/*! exports provided: DishDishCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishDishCategory", function() { return DishDishCategory; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var DishDishCategory;
(function (DishDishCategory) {
    DishDishCategory["Appetizer"] = "Appetizer";
    DishDishCategory["Soup"] = "Soup";
    DishDishCategory["MainDish"] = "MainDish";
    DishDishCategory["Desert"] = "Desert";
})(DishDishCategory || (DishDishCategory = {}));


/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.name = "test";
        this.loadDishes();
    }
    loadDishes() {
        this.http.get(this.baseUrl + 'api/Dishes').subscribe(result => {
            this.dishes = result;
            console.log(this.dishes);
        }, error => console.error(error));
    }
    delete(dishId) {
        if (confirm('Are you sure you want to delete the dish with id ' + dishId + '?')) {
            this.http.delete(this.baseUrl + 'api/Dishes/' + dishId)
                .subscribe(result => {
                alert('Dish successfully deleted!');
                this.loadDishes();
            }, error => alert('Cannot delete dish - maybe it has comments?'));
        }
    }
    submit() {
        var dish = {};
        dish.name = this.name;
        dish.description = this.name;
        dish.dishCategory = DishCategory.Soup;
        dish.dateAdded = new Date();
        this.http.post(this.baseUrl + 'api/Dishes', dish).subscribe(result => {
            console.log('success!');
            this.loadDishes();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
            }
        });
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);

var DishCategory;
(function (DishCategory) {
    DishCategory[DishCategory["Appetizer"] = 0] = "Appetizer";
    DishCategory[DishCategory["Soup"] = 1] = "Soup";
    DishCategory[DishCategory["MainDish"] = 2] = "MainDish";
    DishCategory[DishCategory["Desert"] = 3] = "Desert";
})(DishCategory || (DishCategory = {}));


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
    constructor() {
        this.heroImageUrl = __webpack_require__(/*! ./images/home9.jpg */ "./src/app/home/images/home9.jpg");
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/images/home9.jpg":
/*!***************************************!*\
  !*** ./src/app/home/images/home9.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home9.jpg";

/***/ }),

/***/ "./src/app/ingredient/ingredient.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnQvaW5ncmVkaWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ingredient/ingredient.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.ts ***!
  \****************************************************/
/*! exports provided: IngredientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientComponent", function() { return IngredientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let IngredientComponent = class IngredientComponent {
    constructor() { }
    ngOnInit() {
    }
};
IngredientComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ingredient',
        template: __importDefault(__webpack_require__(/*! raw-loader!./ingredient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ingredient/ingredient.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./ingredient.component.css */ "./src/app/ingredient/ingredient.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], IngredientComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ReviewComponent = class ReviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReviewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-review',
        template: __importDefault(__webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ReviewComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gina\Desktop\ExDotNet\DishesRecipeApp\DishesRecipeApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map