import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TutorialPage } from './tutorial.page';
import { TutorialPageRoutingModule } from './tutorial-routing.module';
const routes = [
    {
        path: '',
        component: TutorialPage
    }
];
let TutorialPageModule = class TutorialPageModule {
};
TutorialPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TutorialPageRoutingModule
        ],
        declarations: [TutorialPage]
    })
], TutorialPageModule);
export { TutorialPageModule };
//# sourceMappingURL=tutorial.module.js.map