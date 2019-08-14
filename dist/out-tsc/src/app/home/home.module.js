import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: HomePage
                }
            ]),
            NgCircleProgressModule.forRoot({
                // set defaults here
                "backgroundColor": "#FDB900",
                "radius": 60,
                "maxPercent": 200,
                "unitsColor": "#483500",
                "outerStrokeWidth": 5,
                "outerStrokeColor": "#FFFFFF",
                "innerStrokeColor": "#FFFFFF",
                "titleColor": "#483500",
                "subtitleColor": "#483500",
                "showSubtitle": false,
                "showInnerStroke": false,
                "startFromZero": false,
                "lazy": false,
            })
        ],
        declarations: [HomePage]
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map