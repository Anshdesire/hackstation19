import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GraphPage } from './graph.page';
import { ChartsModule } from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: GraphPage
      }
    ]),
    ChartsModule
  ],
  declarations: [GraphPage]
})
export class graphPageModule {}
