import { Pipe, PipeTransform } from '@angular/core';
import { IMileage } from '@lib/mileage';

@Pipe({
  name: 'closestProducts',
  pure: true,
})
export class ClosestProductsPipe implements PipeTransform {

  public transform(products: IMileage[], estimate: number, count: number): any {
    return [
      ...this.getLeftArray(products, estimate, count),
      ...this.getRightArray(products, estimate, count),
    ];
  }

  private getLeftArray(products: IMileage[], estimate: number, count: number) {
    const leftProducts = products.filter(p => p.mileage < estimate);

    if (count / 2 > leftProducts.length) {
      return leftProducts;
    }

    return leftProducts.splice(leftProducts.length - count / 2, count / 2);
  }

  private getRightArray(products: IMileage[], estimate: number, count: number) {
    const rightProducts = products.filter(p => p.mileage >= estimate);

    if (count / 2 > rightProducts.length) {
      return rightProducts;
    }

    return rightProducts.splice(0, count / 2);
  }

}
