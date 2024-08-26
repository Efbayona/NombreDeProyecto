import {Component, OnInit} from '@angular/core';
import {LoadingService} from "@app/core/services/loading/loading.service";

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

  imageUrls: string[] = [
    'assets/images/product/Product-detail-2.jpg',
    'assets/images/product/Product-detail-3.jpg',
    'assets/images/product/Product-detail-4.jpg',
    'assets/images/product/Product-detail-5.jpg'
  ];



  constructor(private loader: LoadingService) {
  }


  ngOnInit() {
      this.loader.show()
   setTimeout(() =>{
     this.loader.hide();
   },900)
  }



  setOff() {
    this.productDescription = false;
    this.productReviews = false;
    this.returnPolicy = false;
  }
}
