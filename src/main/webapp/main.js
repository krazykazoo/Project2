(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/friends/friends.component */ "./src/app/components/friends/friends.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// shift + alt + down to duplicate lines






var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'game/:id',
        component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'games',
        component: _components_games_games_component__WEBPACK_IMPORTED_MODULE_6__["GamesComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'friends',
        component: _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_4__["FriendsComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    // ****WHAT WE WERE TALKING ABOUT IN REGARDS TO CROSSING ROUTE W/ ENDPOINT****
    { path: '**', redirectTo: '' } // wildcard for all plus subdirectories that havent already been found from above
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav bar here, but not on login???? -->\n<div style=\"padding: 25px\">\n  <app-main-nav></app-main-nav>\n</div>\n\n<div style=\"padding: 80px\">\n<router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/friends/friends.component */ "./src/app/components/friends/friends.component.ts");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_game_game_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/game/game.service */ "./src/app/services/game/game.service.ts");
/* harmony import */ var _components_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-friend/add-friend.component */ "./src/app/components/add-friend/add-friend.component.ts");
/* harmony import */ var _classes_sanitize_html_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classes/sanitize-html-pipe.pipe */ "./src/app/classes/sanitize-html-pipe.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyA3fg1DuXlXGN_76BKZXyC1JnMA2DZRp4Q",
    authDomain: "project2-137a2.firebaseapp.com",
    databaseURL: "https://project2-137a2.firebaseio.com",
    projectId: "project2-137a2",
    storageBucket: "",
    messagingSenderId: "50528571639"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
                _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_6__["FriendsComponent"],
                _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_12__["MainNavComponent"],
                _components_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_18__["AddFriendComponent"],
                _classes_sanitize_html_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__["SanitizeHtmlPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]
            ],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _services_game_game_service__WEBPACK_IMPORTED_MODULE_17__["GameService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/sanitize-html-pipe.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/classes/sanitize-html-pipe.pipe.ts ***!
  \****************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        if (v) {
            return this._sanitizer.bypassSecurityTrustHtml(v);
        }
    };
    SanitizeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/components/add-friend/add-friend.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-friend/add-friend.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-friend/add-friend.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-friend/add-friend.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Search users</h2>\n  <label>username:\n    <input #friendName />\n  </label>\n  <!-- click passes input value to add() (search() later)  and then clears the input -->\n  <button (click)=\"searchForUsername(friendName.value); friendName.value=''\">Search</button>\n  <div class=\"searchResults\">\n    <ul>\n      <li *ngFor=\"let result of searchResults\">\n        ID: {{result.id}} ----- Username: {{result.username}}\n        <button disabled *ngIf=\"isPending(result.id)\"  title=\"request sent\">request sent</button>\n        <!-- Didn't want to loop through isPending() again, created bool to reference -->\n        <button *ngIf=\"!_isPending\" (click)=\"sendFriendRequest(result.id)\" title=\"add friend\">add friend</button>\n\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-friend/add-friend.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-friend/add-friend.component.ts ***!
  \***************************************************************/
/*! exports provided: AddFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendComponent", function() { return AddFriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFriendComponent = /** @class */ (function () {
    function AddFriendComponent(userService) {
        this.userService = userService;
    }
    AddFriendComponent.prototype.ngOnInit = function () {
    };
    AddFriendComponent.prototype.searchForUsername = function (searchUsername) {
        var _this = this;
        //send search for username of friends
        this.userService.searchForUsername(searchUsername).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.filter(function (resUser) { return resUser.id !== _this.user.id; }); }) //filters out user's id
        ).subscribe(function (results) { return _this.searchResults = results; });
    };
    AddFriendComponent.prototype.sendFriendRequest = function (id) {
        this.userService.addFriendRequest(this.user.id, id).subscribe();
        //need to alert that friend request has been sent and reset the searchResults
    };
    /*
     * Works right now, but for some reason this is getting called an extra time
     * I think it may have to deal with the searchForUsername() observable not being
     * complete yet before moving on, then it loops through searchResults after as well
    */
    //checks pending friend requests to see if it exists
    AddFriendComponent.prototype.isPending = function (id) {
        this._isPending = false;
        //loops through pending requests, returns true if pending
        for (var _i = 0, _a = this.pendingRequests; _i < _a.length; _i++) {
            var pending = _a[_i];
            if (pending.friend === id) {
                this._isPending = true;
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], AddFriendComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddFriendComponent.prototype, "pendingRequests", void 0);
    AddFriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-friend',
            template: __webpack_require__(/*! ./add-friend.component.html */ "./src/app/components/add-friend/add-friend.component.html"),
            styles: [__webpack_require__(/*! ./add-friend.component.css */ "./src/app/components/add-friend/add-friend.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AddFriendComponent);
    return AddFriendComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Games</h1>\n<ul class=\"games\">\n  <li *ngFor=\"let game of games\">\n    <a routerLink=\"/game/{{game.id}}\">\n      Game id - {{game.id}}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game/game.service */ "./src/app/services/game/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, gameService) {
        this.authService = authService;
        this.gameService = gameService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getCurrentUser();
        this.getGames();
    };
    DashboardComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getAllGamesForUser(this.user.id)
            .subscribe(function (games) { return _this.games = games; });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/friends/friends.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/friends/friends.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/friends/friends.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/friends/friends.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"\"></button> -->\n<app-add-friend *ngIf=\"showAddFriend\" [user]=\"user\" [pendingRequests]=\"pendingRequests\"></app-add-friend>\n\n<!-- no way to close this 'show add friends' yet-->\n<button (click)=\"showAddFriend=true\" title=\"show add friends\">Add friends</button>\n\n<h2>Friend Requests</h2>\n<ul class=\"friendRequests\">\n  <li *ngFor=\"let fReq of friendRequests\">\n    Id: {{fReq.user}}\n    <button (click)=\"acceptRequest(fReq.id)\">accept</button>\n    <button (click)=\"denyRequest(fReq.id)\">deny</button>\n  </li>\n</ul>\n\n<h1>Friends</h1>\n<ul class=\"friends\">\n  <li *ngFor=\"let friend of friends\">\n    <!-- Username: {{friend.username}} -->\n    Id: {{friend.id}} ----- Username: {{friend.username}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/friends/friends.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/friends/friends.component.ts ***!
  \*********************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getCurrentUser();
        this.getFriends();
        this.getPending();
        this.getFriendRequests();
    };
    /*
     * Looked into trying to handle all of these getFriends calls in one getFriends()
     * call and then filter it from there but couldn't figure out if there was a way to
     * do it ... maybe just loop through the list and assign after ??
    */
    FriendsComponent.prototype.getFriends = function () {
        var _this = this;
        this.userService.getFriends(this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (friend) { return friend.filter(function (fr) { return fr.status !== 1 && fr.user === _this.user.id; }); }) //filters for only accepted and user id
        ).subscribe(function (friends) {
            friends.map(function (friend) { return _this.userService.getUserById(friend.friend).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (usr) { return usr['username']; })).subscribe(function (username) { friend.username = username; return friend; }); });
            _this.friends = friends;
        });
    };
    FriendsComponent.prototype.getPending = function () {
        var _this = this;
        this.userService.getFriends(this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pending) { return pending.filter(function (pend) { return pend.status === 1 && pend.user === _this.user.id; }); }) // filters for only status is 1 and user id
        ).subscribe(function (pendingRequests) {
            pendingRequests.map(function (pendingRequest) { return _this.userService.getUserById(pendingRequest.friend).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (usr) { return usr['username']; })).subscribe(function (username) { pendingRequest.username = username; return pendingRequest; }); });
            _this.pendingRequests = pendingRequests;
        });
    };
    FriendsComponent.prototype.getFriendRequests = function () {
        var _this = this;
        this.userService.getFriends(this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (requests) { return requests.filter(function (fReq) { return fReq.status === 1 && fReq.friend === _this.user.id; }); }) // filters for only status is 1 and is receiver of request
        // switchMap(request => request.map(req => req.username = this.userService.getUserById(req['friend']).pipe(take(1),map(usr => { return usr['username'] }) ))))
        ).subscribe(function (friendRequests) {
            friendRequests.map(function (friendRequest) { return _this.userService.getUserById(friendRequest.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (usr) { return usr['username']; })).subscribe(function (username) { friendRequest.username = username; return friendRequest; }); });
            _this.friendRequests = friendRequests;
        });
    };
    FriendsComponent.prototype.approveRequest = function () {
    };
    FriendsComponent.prototype.denyRequest = function () {
    };
    FriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/components/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/components/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  game works!\n</p>"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameComponent = /** @class */ (function () {
    function GameComponent() {
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/games/games.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/games/games.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);\n\n.mono-roboto {\n    font-family: 'Roboto Mono', sans-serif;\n    font-size: 2em;\n}\n\n.red {\n    color: red !important;\n}\n"

/***/ }),

/***/ "./src/app/components/games/games.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/games/games.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Test speed read</h2>\n<label>Enter phrase:\n  <input #phrase />\n</label>\n<!-- click passes input value to add() (search() later)  and then clears the input -->\n<button (click)=\"beginPhrase(phrase.value); phrase.value=''\">Run</button>\n\n\n<div [innerHTML]=\"currentWord | sanitizeHtml\" class=\"mono-roboto\">\n\n</div>"

/***/ }),

/***/ "./src/app/components/games/games.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/games/games.component.ts ***!
  \*****************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent.prototype.beginPhrase = function (phrase) {
        //not sure how this works with commas or periods
        //find better way to handle selections, works for now
        var _this = this;
        var wordArr = phrase.split(" ");
        var index = 0;
        var interval = 50;
        var startInterval = setInterval(function () {
            var nextWord = wordArr[index++];
            var len = nextWord.length;
            if (len === 1 || len === 2) {
                nextWord = _this.wrapChar(nextWord, 0);
                nextWord = "&nbsp;&nbsp;&nbsp;" + nextWord; //adds THREE spaces
            }
            else if (len === 3 || len === 4 || len === 5) {
                nextWord = _this.wrapChar(nextWord, 1);
                nextWord = "&nbsp;&nbsp;" + nextWord; //adds TWO spaces
            }
            else if (len === 6 || len === 7 || len === 8 || len === 9) {
                nextWord = _this.wrapChar(nextWord, 2);
                nextWord = "&nbsp;" + nextWord; //adds ONE spaces
            }
            else {
                nextWord = _this.wrapChar(nextWord, 3);
            }
            _this.currentWord = nextWord;
            if (index == wordArr.length) {
                clearInterval(startInterval);
            }
        }, interval);
    };
    GamesComponent.prototype.wrapChar = function (str, index) {
        return str.substr(0, index) + '<span style="color:red">' + str.charAt(index) + '</span>' + str.substr(index + 1);
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/components/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/components/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n                          <!-- on submit, confirms that form is valid and runs login func, \n                            also #f is naming the component instance to #f as an ngForm -->\n<form name=\"loginForm\" (ngSubmit)=\"f.form.valid && submitLogin(f)\" #f=\"ngForm\" novalidate>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid}\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" name=\"username\" (ngModel)=\"username\" #username=\"ngModel\" required />\n    <div *ngIf=\"f.submitted && !username.valid\" class=\"\">Username is required</div>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid}\">\n    <label for=\"password\">Password</label>                                            \n    <input type=\"password\" class=\"form-control\" name=\"password\" (ngModel)=\"user.password\" #password=\"ngModel\" required />  <!-- here the #password is set to what ngModel is (which is model.password) -->\n    <div *ngIf=\"f.submitted && !password.valid\" class=\"\">Password is required</div>\n  </div>\n  <div class=\"form-group\">\n    <!-- disabled if property 'loading' is set to false in component -->\n    <button type=\"submit\" [disabled]=\"loading || f.form.invalid\" class=\"btn btn-primary\">Login</button>\n    <!-- gif symbol for loading :: only shows if 'loading' set to true -->\n    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { User } from '../../classes/user';
var LoginComponent = /** @class */ (function () {
    /*
     * Not essential or entirely related to this component!!
     * *****************************************************
     * Good idea:
     * add an HttpInterceptor that grabs HttpRequests
     * and attaches a JWT (json web token) to it to
     * ensure security and that the request was from
     * an authentic source
     * *****************************************************
    */
    function LoginComponent(router, authService) {
        // declare needed variables like authentication service, alert service, etc...
        this.router = router;
        this.authService = authService;
        this.loading = false; // used upon form submission
    }
    LoginComponent.prototype.ngOnInit = function () {
        // could call authService.logout() here if you wanna
        // logout upon navigating to this page orrrrr....
        // choose to send to dashboard if already logged in..
        /* moved this from constructor b/c must finish creating component and
         * handle dependency injection on authService before calling its methods
         */
        if (this.authService.isLoggedIn()) {
            console.log('already logged in, sent to dashboard');
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.submitLogin = function (form) {
        this.loading = true;
        if (form.valid) {
            console.log(form.value.username);
            this.authService.login(form.value.username, form.value.password);
        }
        this.loading = false;
        return false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n      <li>\n                        <!-- will only add this class if '/' -->\n        <a routerLink=\"\" [class.activated]=\"currentUrl == '/'\">\n          Home\n        </a>\n      </li>\n      <li>\n          <a routerLink=\"dashboard\" [class.activated]=\"currentUrl == '/dashboard'\">\n            Dashboard\n          </a>\n      </li>\n      <li>\n          <a routerLink=\"games\" [class.activated]=\"currentUrl == '/games'\">\n            Games\n          </a>\n      </li>\n      <li>\n          <a routerLink=\"friends\" [class.activated]=\"currentUrl == '/friends'\">\n            Friends\n          </a>\n      </li>\n      <li>\n          <a href=\"\" (click)=\"authService.logout()\">\n            Logout\n          </a>\n      </li>\n    </ul>\n  </nav>"

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        // every time someone clicks on new router link
        router.events.subscribe(function (navEnd) { return _this.currentUrl = navEnd.url; });
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/components/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/components/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"registerForm\" (ngSubmit)=\"f.form.valid && registerUser(f)\" #f=\"ngForm\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid}\">\n      <label for=\"username\">Username</label>\n      <input type=\"username\"  class=\"form-control\" name=\"username\"  (ngModel)=\"username\" #username=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"\">Username is required or invalid form</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" (ngModel)=\"password\" #password=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"\">Password is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" (ngModel)=\"firstName\" #firstName=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !firstName.valid\" class=\"\">First name is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" (ngModel)=\"lastName\" #lastName=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !lastName.valid\" class=\"\">Last name is required</div>\n    </div>\n\n    <div class=\"form-group\">\n      <button type=\"submit\" [disabled]=\"f.form.invalid\" class=\"btn btn-primary\">Register</button>\n      <a [routerLink]=\"['']\" class=\"btn btn-link\">Go back</a>\n    </div>\n </form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
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
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (form) {
        if (form.valid) {
            console.log(form.value);
            this.userService.createUser(form.value.username)
                .subscribe(function (user) {
                console.log('subscribed to created user in registerUser in register component');
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        //not logged in
        //alert("SQUANCH! You must be logged in first");
        this.router.navigate(['']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        //implements CanActivate
        ,
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        //this.setAuthState();
        this.http = http;
        this.router = router;
        this.authenticated = false;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('http://localhost:8080/data/users/login', { "username": username, "password": password }).subscribe(function (user) {
            if (user && user.username) {
                _this.user = user;
                _this.authenticated = true;
                console.log("logged in as user id: " + user.id + " and username: " + user.username);
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log("invalid or not working, send error message");
                //send error message
            }
        });
    };
    AuthService.prototype.setAuthState = function () {
        var _this = this;
        this.http.get('url/getSession').subscribe(function (user) {
            if (user) {
                _this.authenticated = true;
                _this.user = user;
                console.log(_this.user);
            }
            else {
                _this.authenticated = false;
            }
        });
    };
    //not sure if i should be checking this from server-side or just client isLoggedIn variable
    AuthService.prototype.isLoggedIn = function () {
        if (this.authenticated == false) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.user;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        console.log("squanch");
        this.http.post('logout', {}).subscribe(function () { console.log("successfully logged out"); }, function () { console.log("error logging out"); }, function () {
            //going to log out on client side whether successful or not
            _this.authenticated = false;
            _this.router.navigate(['']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/game/game.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/game/game.service.ts ***!
  \***********************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-logger.service */ "./src/app/services/message-logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameService = /** @class */ (function () {
    function GameService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.gamesUrl = 'http://localhost:8080/data/games';
    }
    GameService.prototype.getAllGamesForUser = function (id) {
        var _this = this;
        return this.http.get(this.gamesUrl + "?id=" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log("fetched games for user w/ id: " + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('fetching games')));
    };
    /**
   * ~Technique gathered from angular docs~
   * --
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    //result as an optional parameter
    GameService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            //TODO: send the error to remote logging infrastructure if desired
            console.log(error);
            //TODO: transform error message for user consumption
            _this.log(operation + " failed: " + error.message);
            //Let app keep running by returning empty result
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    GameService.prototype.log = function (message) {
        //this.messageService.add(`HeroService: ${message}`);
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _message_logger_service__WEBPACK_IMPORTED_MODULE_4__["MessageLoggerService"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/message-logger.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/message-logger.service.ts ***!
  \****************************************************/
/*! exports provided: MessageLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageLoggerService", function() { return MessageLoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageLoggerService = /** @class */ (function () {
    function MessageLoggerService() {
    }
    MessageLoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageLoggerService);
    return MessageLoggerService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-logger.service */ "./src/app/services/message-logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Observable.of(...items) -- Returns an Observable instance that synchronously
 * delivers the values provided as arguments
 * --
 * Observable.from(iterable) -- Converts an argument to an Observable instance
 * This method is commonly used to convert an array to an observable
 */

/**
 * the .tap operator (function) invokes an action for each element in the observable sequence
 * Arguments: onNext, onError, onCompleted  <-- 3 functions as parameters, separated by commas
 *
 * it is used for the debugging/logging of query behavior by intercepting the
 * message stream to run arbitrary actions for messages on the pipeline
 * --
 * .catchError does exactly the same thing as tap but with error response
 * NOTE: can add retry(3), as first step in the pipe to try something 3 times before failing
 *    --> DON'T retry authentication requests
 * --
 * the .map operator is used to observe a source observable's emitted value(s) and
 * transform them, returning a new observable w/ transformed values
 * ie. map((response: Response) => response.json().data)
 * ie. map((val: number) => val * val);
 *
 * ^^ here map will take an observable that consists of int values and return a new one with the new val*val number
 * --
 * The filter() operator takes a function predicate as an argument, which returns true if the emitted value meets
 * the criteria, or false otherwise. Only the values that meet the criteria will make it to the observer
 * EX:
 * Rx.Observable.from(beersArray)
 * .filter(beer => beer.price < 8)
 * .map(beer => beer.name + ": $" + beer.price)
 * .subscribe(
 * beer => console.log(beer),
 * err => console.error(err),
 * () => console.log("Streaming is over")
 */


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.usersUrl = 'http://localhost:8080/data/users'; // endpoint to where we will be getting user data
    }
    // POST new user
    UserService.prototype.createUser = function (user) {
        var _this = this;
        return this.http.post(this.usersUrl + "/create", user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { return _this.log('created hero w/ id=' + user.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createUser')));
    };
    // GET users from the server
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (users) { return _this.log('fetched users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers', [])));
    };
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        return this.http.get(this.usersUrl + "/user?id=" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log('fetched user w/ id: ' + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUser id=" + id)));
        //return null;
    };
    UserService.prototype.getFriends = function (id) {
        var _this = this;
        return this.http.get(this.usersUrl + "/friends?id=" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log("fetched friends of user w/ id: " + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getFriends')));
    };
    UserService.prototype.searchForUsername = function (search) {
        var _this = this;
        return this.http.get(this.usersUrl + "/search?search=" + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log("searched for users w/ string: " + search); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchForUsername')));
    };
    UserService.prototype.addFriendRequest = function (from, to) {
        var _this = this;
        return this.http.post(this.usersUrl + "/friends/addRequest", { "user": from, "friend": to, "status": 1 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.log("send friend request to from " + from + " to " + to); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add friend request')));
    };
    /**
     * ~Technique gathered from angular docs~
     * --
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    //result as an optional parameter
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            //TODO: send the error to remote logging infrastructure if desired
            console.log(error);
            //TODO: transform error message for user consumption
            _this.log(operation + " failed: " + error.message);
            //Let app keep running by returning empty result
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    UserService.prototype.log = function (message) {
        //this.messageService.add(`HeroService: ${message}`);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _message_logger_service__WEBPACK_IMPORTED_MODULE_4__["MessageLoggerService"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Shotdoc/IntelliJ Workspace/Angular/ngApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map