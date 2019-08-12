import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  percent: number = 0
  radius: number = 100
  fullTime: any = '00:01:30'
  timer: any = false
  progress: any = 0
  minutes: number = 1
  seconds: any = 30

  startTime() {
    var _that = this
    this.timer = false
    this.percent = 0
    this.progress = 0
    let timeSplit = this.fullTime.split(':')
    console.log(timeSplit)
    this.minutes = timeSplit[1]
    this.seconds = timeSplit[0]
    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds)
    this.timer = setInterval(() => {
      if (_that.percent == _that.radius) {
        clearInterval(_that.timer)
      }
      console.log(_that.percent)
      _that.percent = Math.floor((_that.progress / totalSeconds) * 100)
      _that.progress++
    }, 1000)
  }
}
