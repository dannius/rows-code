import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IMileage } from '@lib/mileage';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {

  @Input()
  public product: IMileage;
}
