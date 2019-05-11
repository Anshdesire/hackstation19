import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { mfsuggestionPage } from './mfsuggestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: mfsuggestionPage
      }
    ])
  ],
  providers: [TwitterConnect],
  declarations: [mfsuggestionPage]
})
export class mfsuggestionPageModule {




}


