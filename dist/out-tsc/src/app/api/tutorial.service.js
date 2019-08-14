import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
let TutorialService = class TutorialService {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canLoad() {
        return this.storage.get('ionic_show_tutorial').then(res => {
            if (res) {
                this.router.navigate(['/app', 'tabs', 'shop']);
                return false;
            }
            else {
                return true;
            }
        });
    }
};
TutorialService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Storage, Router])
], TutorialService);
export { TutorialService };
//# sourceMappingURL=tutorial.service.js.map