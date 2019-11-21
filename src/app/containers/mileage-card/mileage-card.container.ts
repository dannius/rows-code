import { Component, OnInit } from '@angular/core';

import { ProductService } from '@app/services';
import { IMileage } from '@lib/mileage';

@Component({
  selector: 'app-mileage-card',
  templateUrl: './mileage-card.container.html',
  styleUrls: ['./mileage-card.container.scss'],
})
export class MileageCardContainer implements OnInit {

  public products: IMileage[];

  constructor(
    private _productSvc: ProductService,
  ) {}

  public ngOnInit() {
    this.products = this._productSvc.products;
  }

  public estimateChange(est: number) {
    console.log(est);
  }

}
