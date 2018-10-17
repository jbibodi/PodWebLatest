(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../../../assets/img/background-try.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Welcome to PodWeb</h1>\r\n            <h3>A Decentralized Application Powered by Ethereum Network</h3>\r\n            <br />\r\n            <a href=\"\" class=\"btn btn-outline-neutral btn-round\" style=\"margin-right:20px\"><i class=\"fa fa-play\"></i>Watch video</a>\r\n            <button type=\"button\" (click) = \"loadLoginComponent()\" class=\"btn btn-outline-neutral btn-round\" style=\"margin-right:20px\"><i class=\"fa fa-sign-in\"></i>Login</button>\r\n            <button type=\"button\" (click) = \"loadRegisterComponent()\" class=\"btn btn-outline-neutral btn-round\" style=\"margin-right:20px\">Sign up</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 mr-auto ml-auto\">\r\n                <h2 class=\"title\">Let's talk product</h2>\r\n                <h5 class=\"description\">Product description</h5>\r\n                <br>\r\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\r\n            </div>\r\n        </div>\r\n        <br/><br/>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section section-dark text-center\">\r\n    <div class=\"container\">\r\n        <h2 class=\"title\">Let's talk about us</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/jay-bibodi.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Dr. Jinsong Ouyang</h4>\r\n                                <h6 class=\"card-category\">Professor-CSU Sacramento</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                            Dr. Ouyang Description\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/jay-bibodi.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Jay Bibodi</h4>\r\n                                <h6 class=\"card-category\">Developer</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                            My description\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <div class=\"section landing-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Keep in touch?</h2>\r\n                    <form class=\"contact-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label>Name</label>\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                        <i class=\"nc-icon nc-single-02\"></i>\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                        <i class=\"nc-icon nc-email-85\"></i>\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.test = new Date();
    }
    AboutComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        //body.classList.add('lock-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        //body.classList.remove('lock-page');
        body.classList.remove('off-canvas-sidebar');
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-cmp',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/login.jpg'); background-size: cover; background-position: top center;\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\n          <form class=\"form\" name=\"form\" (ngSubmit)=\"f.form.valid && login(f.value)\" #f=\"ngForm\" novalidate>\n            <div class=\"card card-login card-hidden\">\n              <div class=\"card-header card-header-rose text-center\">\n                <h4 class=\"card-title\">Log in</h4>\n                <div class=\"social-line\">\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                    <i class=\"fa fa-facebook-square\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                    <i class=\"fa fa-google-plus\"></i>\n                  </a>\n                </div>\n              </div>\n              <div class=\"card-body \">\n                <p class=\"card-description text-center\">Or Be Classical</p>\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !emailOfPerson.valid }\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"material-icons\">email</i>\n                      </span>\n                    </div>\n                    <input type=\"email\" autocomplete=\"off\" placeholder=\"Enter email\" class=\"form-control\" name=\"emailOfPerson\"\n                          [(ngModel)]=\"model.emailOfPerson\" #emailOfPerson=\"ngModel\" required ngModel email>\n                  </div>\n                  <div *ngIf=\"f.submitted && !emailOfPerson.valid\" class=\"help-block\" style=\"text-align: right;\">Email\n                    is required</div>\n                </span>\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !passwordOfPerson.valid }\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"material-icons\">lock_outline</i>\n                      </span>\n                    </div>\n                    <input type=\"password\" autocomplete=\"off\" placeholder=\"Enter password\" class=\"form-control far fa-eye\"\n                          name=\"passwordOfPerson\" [(ngModel)]=\"model.passwordOfPerson\" #passwordOfPerson=\"ngModel\"\n                          required />\n                  </div>\n                  <div *ngIf=\"f.submitted && !passwordOfPerson.valid\" class=\"help-block\" style=\"text-align: right;\">Password\n                    is required</div>\n                </span>\n              </div>\n              <div class=\"card-footer justify-content-center\">\n                <button type=\"submit\" class=\"btn btn-rose btn-link btn-lg\">Lets Go</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a [routerLink]=\"['/pages/about']\">\n                About Us\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                Blog\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n            {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by Jay Bibodi, CSU Sacramento.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(element, http, router) {
        this.element = element;
        this.http = http;
        this.router = router;
        this.test = new Date();
        this.model = {};
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.model);
        this.http.post('http://localhost:3000/login', this.model).subscribe(function (data) {
            console.log("message sending results", data);
            var body = JSON.parse(data.text());
            localStorage.setItem('emailAddress', body.emailAddress);
            localStorage.setItem("token", body.token);
            /*console.log(data.text());
            var body = JSON.parse(data.text());
            console.log(body.emailAddress);
            console.log(body.token);
            localStorage.setItem('emailAddress',body.emailAddress);
            localStorage.setItem("token",body.token);
            swal({
                title: "Successfully Registered",
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(swal.noop)  */
            _this.router.navigateByUrl('/tables/latestPodcast');
        }, function (err) { console.log("message sending err", err); }, function () { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ngModel'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "model", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-cmp',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { FlexLayoutModule } from '@angular/flex-layout';


//import { PricingComponent } from './pricing/pricing.component';
//import { LockComponent } from './lock/lock.component';


var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
                //  PricingComponent,
                //LockComponent
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");



var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            } /*, {
                path: 'lock',
                component: LockComponent
            }*/,
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]
            } /* {
                path: 'pricing',
                component: PricingComponent
            }*/,
            {
                path: 'about',
                component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/register.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 ml-auto mr-auto\">\n          <div class=\"card card-signup\">\n            <h2 class=\"card-title text-center\">Register</h2>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-5 ml-auto\">\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-rose\">\n                      <i class=\"material-icons\">timeline</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Powered By Ethereum Network</h4>\n                      <p class=\"description\">\n                        We've created decentrailized application for the podcast. Sell and Purchase the podcast with\n                        ERC-20 Pods Token\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-primary\">\n                      <i class=\"material-icons\">code</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Full Profit</h4>\n                      <p class=\"description\">\n                        Get full profit without paying specific amount to share to third party platform.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-info\">\n                      <i class=\"material-icons\">group</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Audience</h4>\n                      <p class=\"description\">\n                        Anyone could publish and sell the podcast to earn tokens.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-5 mr-auto\">\n                  <div class=\"social text-center\">\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </button>\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                    </button>\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-facebook\">\n                      <i class=\"fa fa-facebook\"> </i>\n                    </button>\n                    <h4 class=\"mt-3\"> or be classical </h4>\n                  </div>\n                  <form class=\"form\" name=\"form\" (ngSubmit)=\"f.form.valid && register(f.value)\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !nameOfPerson.valid }\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">person</i>\n                          </span>\n                        </div>\n                        <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter Name\" class=\"form-control\" name=\"nameOfPerson\"\n                          [(ngModel)]=\"model.nameOfPerson\" #nameOfPerson=\"ngModel\" required />\n                      </div>\n                      <div *ngIf=\"f.submitted && !nameOfPerson.valid\" class=\"help-block\" style=\"text-align: right;\">Name\n                        is required</div>\n                    </div>\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !emailOfPerson.valid }\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">mail</i>\n                          </span>\n                        </div>\n                        <input type=\"email\" autocomplete=\"off\" placeholder=\"Enter email\" class=\"form-control\" name=\"emailOfPerson\"\n                          [(ngModel)]=\"model.emailOfPerson\" #emailOfPerson=\"ngModel\" required ngModel email>\n                      </div>\n                      <div *ngIf=\"f.submitted && !emailOfPerson.valid\" class=\"help-block\" style=\"text-align: right;\">Email\n                        is required</div>\n\n                    </div>\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !passwordOfPerson.valid }\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">lock_outline</i>\n                          </span>\n                        </div>\n                        <input type=\"password\" autocomplete=\"off\" placeholder=\"Enter password\" class=\"form-control far fa-eye\"\n                          name=\"passwordOfPerson\" [(ngModel)]=\"model.passwordOfPerson\" #passwordOfPerson=\"ngModel\"\n                          required />\n\n                      </div>\n                      <div *ngIf=\"f.submitted && !passwordOfPerson.valid\" class=\"help-block\" style=\"text-align: right;\">Password\n                        is required</div>\n                    </div>\n                    <div class=\"text-center\">\n                      <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary btn-round mt-4\">Get Started</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a [routerLink]=\"['/pages/about']\">\n                About Us\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                Blog\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by Jay Bibodi, CSU Sacramento.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.test = new Date();
        this.model = {};
        this.loading = false;
        this.registerSuccessful = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        body.classList.add('off-canvas-sidebar');
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
        body.classList.remove('off-canvas-sidebar');
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.model);
        this.loading = true;
        this.http.post('http://localhost:3000/signup', this.model).subscribe(function (data) {
            var body = JSON.parse(data.text());
            localStorage.setItem("emailAddress", body.emailAddress);
            localStorage.setItem("token", body.token);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "Successfully Registered",
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            _this.router.navigateByUrl('/tables/latestPodcast');
        }, function (err) { console.log("message sending err", err); }, function () { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ngModel'),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "model", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-cmp',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map