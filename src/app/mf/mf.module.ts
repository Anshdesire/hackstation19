import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { mfPage } from './mf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: mfPage
      }
    ])
  ],
  providers: [TwitterConnect],
  declarations: [mfPage]
})
export class mfPageModule {




}


