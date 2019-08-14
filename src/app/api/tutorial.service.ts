import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TutorialService implements CanLoad {

  constructor(private storage: Storage, private router: Router) { }

  canLoad() {
    console.log("canload")
    console.log(Constants.SHOW_TUORIAL)
    console.log(this.storage.get(Constants.SHOW_TUORIAL))
    return this.storage.get(Constants.SHOW_TUORIAL).then(res => {
      console.log("res : ", res)
      return true
      // if (res) {
      //   this.router.navigate(['/app', 'tabs', 'shop']);
      //   return false;
      // } else {
      //   return true;
      // }
    });
  }
}
