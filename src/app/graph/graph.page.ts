import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: 'graph.page.html',
  styleUrls: ['graph.page.scss'],
})
export class GraphPage {

  constructor(private _router: Router){}

  navigate(type: string) {
    this._router.navigate(['/'+type]);
  }

}
