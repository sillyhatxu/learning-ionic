import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomePage = class HomePage {
    constructor() {
        this.percent = 0;
        this.radius = 100;
        this.fullTime = '00:01:30';
        this.timer = false;
        this.progress = 0;
        this.minutes = 1;
        this.seconds = 30;
    }
    startTime() {
        const _that = this;
        this.timer = false;
        this.percent = 0;
        this.progress = 0;
        const timeSplit = this.fullTime.split(':');
        console.log(timeSplit);
        this.minutes = timeSplit[1];
        this.seconds = timeSplit[0];
        const totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds, 10);
        this.timer = setInterval(() => {
            if (_that.percent === _that.radius) {
                clearInterval(_that.timer);
            }
            console.log(_that.percent);
            _that.percent = Math.floor((_that.progress / totalSeconds) * 100);
            _that.progress++;
        }, 1000);
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map