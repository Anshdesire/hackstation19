import { Component } from '@angular/core';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mfsuggestion',
  templateUrl: 'mfsuggestion.page.html',
  styleUrls: ['mfsuggestion.page.scss'],
})
export class mfsuggestionPage {




  constructor(public twitter: TwitterConnect, private _router: Router) { 
    console.log(this.twitter);
  }

  login() {
    this.twitter.login().then((response) => {
      console.log(response);
      // Will console log something like:
      // {
      //   userName: 'myuser',
      //   userId: '12358102',
      //   secret: 'tokenSecret'
      //   token: 'accessTokenHere'
      // }
    }, (onError) => {
      console.log(onError);
    });
  }

  next() {
    this._router.navigate(['/graph']);
  }


}
