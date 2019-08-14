import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MePage } from './me.page';
const routes = [
    {
        path: '',
        component: MePage
    }
];
let MePageModule = class MePageModule {
};
MePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MePage]
    })
], MePageModule);
export { MePageModule };
//# sourceMappingURL=me.module.js.map