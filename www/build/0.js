webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactPageModule", function() { return EditContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_contact__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditContactPageModule = /** @class */ (function () {
    function EditContactPageModule() {
    }
    EditContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */]),
            ],
        })
    ], EditContactPageModule);
    return EditContactPageModule;
}());

//# sourceMappingURL=edit-contact.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditContactPage = /** @class */ (function () {
    function EditContactPage(navCtrl, navParams, contactProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactProvider = contactProvider;
        this.toast = toast;
        if (this.navParams.data.contact && this.navParams.data.key) {
            this.model = this.navParams.data.contact;
            this.key = this.navParams.data.key;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* Contact */];
        }
    }
    EditContactPage.prototype.save = function () {
        var _this = this;
        this.saveContact()
            .then(function () {
            _this.toast.create({ message: 'Contato salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000, position: 'botton' }).present();
        });
    };
    EditContactPage.prototype.saveContact = function () {
        if (this.key) {
            return this.contactProvider.update(this.key, this.model);
        }
        else {
            return this.contactProvider.insert(this.model);
        }
    };
    EditContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-contact',template:/*ion-inline-start:"C:\Users\wesle\IonicProjects\offApp\src\pages\edit-contact\edit-contact.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Ionic Storage EditContact\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-list>\n  \n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input type="text" name="name" [(ngModel)]="model.name"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>Telefone</ion-label>\n        <ion-input type="tel" name="phone" [(ngModel)]="model.phone"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>Nascimento</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" name="birth" [(ngModel)]="model.birth"></ion-datetime>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Ativo</ion-label>\n        <ion-checkbox name="active" [(ngModel)]="model.active"></ion-checkbox>\n      </ion-item>\n  \n    </ion-list>\n  \n    <button ion-button block (click)="save()">Salvar</button>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\wesle\IonicProjects\offApp\src\pages\edit-contact\edit-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["b" /* ContactProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], EditContactPage);
    return EditContactPage;
}());

//# sourceMappingURL=edit-contact.js.map

/***/ })

});
//# sourceMappingURL=0.js.map