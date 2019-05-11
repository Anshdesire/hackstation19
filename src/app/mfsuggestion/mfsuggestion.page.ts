import { Component } from '@angular/core';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mfsuggestion',
  templateUrl: 'mfsuggestion.page.html',
  styleUrls: ['mfsuggestion.page.scss'],
})
export class mfsuggestionPage {

    params: any =  {};
    tenure: any = 0;



  constructor(
    public twitter: TwitterConnect,
    private _router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
        this.params = JSON.parse(params.data);
        console.log(this.params);
        if (this.params.riskFactor === 'Aggressive') {
          this.params.riskFactor = 'Equity';
        } else {
          if (this.params.riskFactor === 'Moderate') {
            this.params.riskFactor = 'Hybrid';
          } else {
            this.params.riskFactor = 'Debt';
          }
        }
        let date: any = '';
        date = new Date();
        date = 2020 - date.getFullYear();
        date = (date * 12) - 5;
        this.tenure = parseInt(this.params.amount / date)
    });
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
