import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  showSkip = true;

  constructor(public menu: MenuController, public router: Router, public storage: Storage) { }

  ngOnInit() {
  }

  startApp() {
    this.router.navigateByUrl('/app/tabs/shop').then(() => this.storage.set(Constants.SHOW_TUORIAL, true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      console.log(`onSlideChangeStart: ${isEnd}`)
      this.showSkip = !isEnd;//最后一页
    });
  }
}
