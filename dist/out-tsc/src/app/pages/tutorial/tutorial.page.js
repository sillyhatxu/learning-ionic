import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
let TutorialPage = class TutorialPage {
    constructor(menu, router, storage) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
    }
    startApp() {
        this.router
            .navigateByUrl('/app/tabs/schedule')
            .then(() => this.storage.set('ion_did_tutorial', true));
    }
    onSlideChangeStart(e) {
    }
};
TutorialPage = tslib_1.__decorate([
    Component({
        selector: 'app-tutorial',
        templateUrl: './tutorial.page.html',
        styleUrls: ['./tutorial.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MenuController, Router, Storage])
], TutorialPage);
export { TutorialPage };
//# sourceMappingURL=tutorial.page.js.map