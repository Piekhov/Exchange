"use strict";
(self["webpackChunkCurrencyExchange"] = self["webpackChunkCurrencyExchange"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _component_exchange_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/exchange.component */ 832);
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header/header.component */ 9819);




class AppComponent {
    constructor(http) {
        this.http = http;
        // currency: ICurrency[] = []
        this.loading = true;
        // constructor(private currencyService: CurrencyServise) {}
        // ngOnInit(): void {
        // this.currencyService.getAll(this.ccy).subscribe(currency => {
        //   this.currency = currency
        //   this.curr = JSON.stringify(this.currency)
        //   console.log(this.currency)
        //   this.currency = JSON.parse(this.currency)
        // })
        // }
        this.currency1 = [];
        this.datanew = '';
        this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLDO-49vWrDATXF9s9SfSOQ6YETUVnf2eYQ&usqp=CAU';
    }
    ngOnInit() {
        this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5' + this.currency1).subscribe((datanew) => {
            this.datanew = datanew;
            console.log(this.datanew);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "header"], [1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_component_exchange_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeComponent, _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], styles: [".wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-image: Url(\"https://cdn.pixabay.com/photo/2022/05/03/09/46/scrapbooking-7171360__340.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcJUQwJTkyJUQwJUJFJUQwJUJCJUQwJUJFJUQwJUI0JUQwJUI4JUQwJUJDJUQwJUI4JUQxJTgwXFxBbmd1bGFyXFxDdXJyZW5jeUV4Y2hhbmdlXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFHQUFBO0FDTkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNvbnRhaW5lciB7XHJcbi8vICAgICB3aWR0aDogMTAwMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4vLyB9XHJcbi53cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFVybCgnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMi8wNS8wMy8wOS80Ni9zY3JhcGJvb2tpbmctNzE3MTM2MF9fMzQwLmpwZycpO1xyXG4gICAgXHJcbn1cclxuLy8gLmhlYWRlciB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiKDE2OCwgMTk0LCAyMDkpO1xyXG4vLyAgICAgaGVpZ2h0OiA3MHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcclxuLy8gfSIsIi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogVXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMi8wNS8wMy8wOS80Ni9zY3JhcGJvb2tpbmctNzE3MTM2MF9fMzQwLmpwZ1wiKTtcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _component_exchange_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/exchange.component */ 832);
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header/header.component */ 9819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _component_exchange_component__WEBPACK_IMPORTED_MODULE_2__.ExchangeComponent,
        _header_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ }),

/***/ 832:
/*!*************************************************!*\
  !*** ./src/app/component/exchange.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeComponent": () => (/* binding */ ExchangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class ExchangeComponent {
    // constructor(private currencyService: CurrencyServise) {}
    // ngOnInit(): void {
    //   this.currencyService.getAll().subscribe(currency => {
    //     this.currency = currency
    //   })
    // }
    // constructor(private currencyService: CurrencyServise) {}
    constructor(http) {
        this.http = http;
        this.currjson = '';
        this.data = '';
        this.result = 0;
        this.base = 'UAH';
        this.base2 = 'UAH';
        this.count = 0;
    }
    changebase(a) {
        this.base = a;
    }
    changebase2(b) {
        this.base2 = b;
    }
    inputHandle(event) {
        let value = event.target.value;
        this.count = value;
        if (value >= 0) {
            let value = event.target.value;
            this.count = value;
        }
        else {
            alert("Будь ласка, введіть значення, яке більше за 0");
        }
    }
    ngOnInit() { }
    // this.currencyService.getAll().subscribe(data => {
    //   this.currjson = JSON.stringify(data)
    //   this.currjson = JSON.parse(this.currjson)
    //   this.result = this.currjson
    //   console.log(this.result)
    // })
    convert() {
        this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe((data) => {
            this.data = data;
            if (this.base == 'USD' && this.base2 == "UAH") {
                this.result = this.data[0].buy * this.count;
            }
            if (this.base == 'EUR' && this.base2 == "UAH") {
                this.result = this.data[1].buy * this.count;
            }
            if (this.base == 'UAH' && this.base2 == "UAH") {
                this.result = this.count;
            }
            if (this.base == 'UAH' && this.base2 == "USD") {
                this.result = Math.round(this.count / this.data[0].sale);
            }
            if (this.base == 'UAH' && this.base2 == "EUR") {
                this.result = Math.round(this.count / this.data[1].sale);
            }
            if (this.base == 'USD' && this.base2 == "EUR") {
                this.result = Math.round((this.count * this.data[0].buy) / this.data[1].sale);
                alert("При розрахунку USD/EUR відбувається подвійна конвертація: USD/UAH, UAH/EUR");
            }
            if (this.base == 'USD' && this.base2 == "USD") {
                this.result = this.count;
            }
            if (this.base == 'EUR' && this.base2 == "USD") {
                this.result = Math.round((this.count * this.data[1].buy) / this.data[0].sale);
                alert("При розрахунку EUR/USD відбувається подвійна конвертація: EUR/UAH, UAH/USD");
            }
            if (this.base == 'EUR' && this.base2 == "EUR") {
                this.result = this.count;
            }
        });
    }
}
ExchangeComponent.ɵfac = function ExchangeComponent_Factory(t) { return new (t || ExchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ExchangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExchangeComponent, selectors: [["app-exchange"]], inputs: { currency: "currency" }, decls: 36, vars: 1, consts: [[1, "container"], [1, "boxCurrency"], [1, "currency"], [1, "currencyText"], ["id", "currjson", 1, "select", 3, "mouseleave"], ["c1", ""], ["value", "UAH", 1, "option"], ["value", "USD", 1, "option"], ["value", "EUR", 1, "option"], [1, "text"], [1, "inputBox"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0443\u043C\u0443", 1, "input", 3, "input"], ["id", "", 1, "select", 3, "mouseleave"], ["c2", ""], ["value", "UAH"], ["value", "USD"], ["value", "EUR"], [1, "input"], [1, "button", 3, "click"]], template: function ExchangeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u0438\u0431\u0456\u0440 \u0432\u0430\u043B\u044E\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ExchangeComponent_Template_select_mouseleave_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.changebase(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UAH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u042F \u043C\u0430\u044E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ExchangeComponent_Template_input_input_16_listener($event) { return ctx.inputHandle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1)(18, "div", 2)(19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0412\u0438\u0431\u0456\u0440 \u0432\u0430\u043B\u044E\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ExchangeComponent_Template_select_mouseleave_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.changebase2(_r1.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "UAH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "EUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u042F \u043E\u0442\u0440\u0438\u043C\u0430\u044E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10)(32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangeComponent_Template_button_click_34_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  margin-left: 20%;\n  margin-right: 20%;\n  border-radius: 16px;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  background-color: lightgray;\n  display: flex;\n  border-radius: 10px;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  height: 30%;\n  margin-top: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: space-around;\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .currencyText[_ngcontent-%COMP%] {\n  font-size: 30px;\n  justify-content: center;\n  font-weight: bold;\n  color: rgb(70, 70, 70);\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n  border: none;\n  border-radius: 7px;\n  font-weight: bold;\n  color: rgb(70, 70, 70);\n  outline: none;\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  border: none;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  justify-content: center;\n  font-weight: bold;\n  color: rgb(70, 70, 70);\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 18px;\n  margin-top: 10%;\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%] {\n  height: 30%;\n  width: 90%;\n  border-radius: 16px;\n  background-color: lightgreen;\n  border: none;\n  padding: 0;\n  outline: none;\n  font-size: 30px;\n  margin-top: 2%;\n  margin-left: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 16px;\n  background-color: lightgreen;\n  border: none;\n  padding: 0;\n  outline: none;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 30px;\n  padding-left: 10%;\n  font-weight: bold;\n  color: rgb(70, 70, 70);\n}\n.container[_ngcontent-%COMP%]   .boxCurrency[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::placeholder {\n  font-size: 20px;\n  color: darkgray;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  width: 97vh;\n  height: 50px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  border-radius: 16px;\n  color: rgb(70, 70, 70);\n  font-size: 30px;\n  font-weight: bold;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(70, 70, 70);\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcJUQwJTkyJUQwJUJFJUQwJUJCJUQwJUJFJUQwJUI0JUQwJUI4JUQwJUJDJUQwJUI4JUQxJTgwXFxBbmd1bGFyXFxDdXJyZW5jeUV4Y2hhbmdlXFxzcmNcXGFwcFxcY29tcG9uZW50XFxleGNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDRVo7QUREWTtFQUNJLGVBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNFaEI7QURBWTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNFaEI7QUREZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNHcEI7QURDUTtFQUNJLGVBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBWjtBRElRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNGWjtBRElZO0VBRUksV0FBQTtFQUVBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNKaEI7QURNWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDSmhCO0FEU0E7RUFDRywyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ05IO0FEU0E7RUFDSSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTkoiLCJmaWxlIjoiZXhjaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5ib3hDdXJyZW5jeSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIC5jdXJyZW5jeSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgZGltZ3JheTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAuY3VycmVuY3lUZXh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIC5vcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dEJveCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDMwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgd2lkdGg6OTd2aDtcclxuICAgaGVpZ2h0OiA1MHB4O1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xyXG4gICBmb250LXNpemU6IDMwcHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgXHJcbn1cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5ib3hDdXJyZW5jeSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXIgLmJveEN1cnJlbmN5IC5jdXJyZW5jeSB7XG4gIGhlaWdodDogMzAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uY29udGFpbmVyIC5ib3hDdXJyZW5jeSAuY3VycmVuY3kgLmN1cnJlbmN5VGV4dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xufVxuLmNvbnRhaW5lciAuYm94Q3VycmVuY3kgLmN1cnJlbmN5IC5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY29udGFpbmVyIC5ib3hDdXJyZW5jeSAuY3VycmVuY3kgLnNlbGVjdCAub3B0aW9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmJveEN1cnJlbmN5IC50ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5jb250YWluZXIgLmJveEN1cnJlbmN5IC5pbnB1dEJveCB7XG4gIGhlaWdodDogMzAlO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmJveEN1cnJlbmN5IC5pbnB1dEJveCAuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcbn1cbi5jb250YWluZXIgLmJveEN1cnJlbmN5IC5pbnB1dEJveCAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogZGFya2dyYXk7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHdpZHRoOiA5N3ZoO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 9819:
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



class HeaderComponent {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.date = new Date();
    }
    ngOnInit() {
        this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe((data) => {
            this.data = data;
            console.log(this.data);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { currency: "currency" }, decls: 32, vars: 20, consts: [[1, "header"], [1, "Box_CurrentExchangeRate"], [1, "CurrentExchangeRate"], [2, "color", "hotpink"], [2, "margin-right", "30px", "margin-top", "2%", "color", "hotpink"], [2, "color", "white"], [2, "margin-right", "10px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u0442\u043E\u0447\u043D\u0430 \u0434\u0430\u0442\u0430: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041A\u0443\u0440\u0441\u0438 \u0432\u0430\u043B\u044E\u0442: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " USD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " /");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " EUR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx.date, "dd.MM.yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, ctx.data[0].buy, "1.0-1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 11, ctx.data[0].sale, "1.0-1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 14, ctx.data[1].buy, "1.0-1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 17, ctx.data[1].sale, "1.1-1"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 70px;\n  background-color: rgb(70, 70, 70);\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: flex-end;\n}\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: flex;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .Box_CurrentExchangeRate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .Box_CurrentExchangeRate[_ngcontent-%COMP%]   .CurrentExchangeRate[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwlRDAlOTIlRDAlQkUlRDAlQkIlRDAlQkUlRDAlQjQlRDAlQjglRDAlQkMlRDAlQjglRDElODBcXEFuZ3VsYXJcXEN1cnJlbmN5RXhjaGFuZ2VcXHNyY1xcYXBwXFxoZWFkZXJcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQ0hKO0FESUk7RUFFSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNIUjtBREtJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSFI7QURJUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRloiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhlYWRlciB7XHJcbi8vICAgICBoZWlnaHQ6IDIwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4vLyB9XHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIC50ZXh0IHtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLkJveF9DdXJyZW50RXhjaGFuZ2VSYXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLkN1cnJlbnRFeGNoYW5nZVJhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcbiIsIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlciAudGV4dCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyIC5Cb3hfQ3VycmVudEV4Y2hhbmdlUmF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5Cb3hfQ3VycmVudEV4Y2hhbmdlUmF0ZSAuQ3VycmVudEV4Y2hhbmdlUmF0ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map