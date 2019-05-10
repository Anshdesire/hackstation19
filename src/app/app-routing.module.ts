import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'graph', loadChildren: './graph/graph.module#graphPageModule' },
  { path: 'cc', loadChildren: './cardcc/cardcc.module#ccPageModule' },
  { path: 'mf', loadChildren: './mf/mf.module#mfPageModule' },
  { path: 'mfsuggestion', loadChildren: './mfsuggestion/mfsuggestion.module#mfsuggestionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
