import { Component } from '@angular/core';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mf',
  templateUrl: 'mf.page.html',
  styleUrls: ['mf.page.scss'],
})
export class mfPage {




  constructor(public twitter: TwitterConnect, private _router: Router,
    public loadingController: LoadingController) { 
    console.log(this.twitter);
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Fetching details',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


  async fillDetails(form:any) {
    await this.presentLoading();
    this.next(form.value);
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

  next(data) {
    this._router.navigate(['/mfsuggestion'], {
      queryParams: {
        data: JSON.stringify(data)
      }
    });
  }


}
