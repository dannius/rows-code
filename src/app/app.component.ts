import { Component, OnInit } from '@angular/core';

import { ProductService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private products: ProductService,
  ) {}

  public ngOnInit() {

  }

}
