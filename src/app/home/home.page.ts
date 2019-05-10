import { Component } from '@angular/core';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {




  constructor(public twitter: TwitterConnect) { 
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


}
