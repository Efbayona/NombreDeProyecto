import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public currency: any = [];
  selectedCurrency: string = '1 Unidad';
  productReviews: boolean = false;
  returnPolicy: boolean = false;
  typeBackground: number = 0;
  productDescription: boolean = true;
  screen: number = 1;

  ngOnInit() {

  }


  chanScream(scream: number): void {
    switch (scream) {
      case 1:
        this.setOff();
        this.productDescription = true;
        this.screen = 1;
        this.typeBackground = 1;
        break;

      case 2:
        this.setOff();
        this.productReviews = true;
        this.screen = 2;
        this.typeBackground = 2;
        break;

      case 3:
        this.setOff();
        this.returnPolicy = true;
        this.screen = 3;
        this.typeBackground = 3;
        break;
    }
  }


  setOff() {
    this.productDescription = false;
    this.productReviews = false;
    this.returnPolicy = false;
  }
}
