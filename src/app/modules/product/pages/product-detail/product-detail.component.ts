import {Component, OnInit} from '@angular/core';
import {LoadingService} from "@app/core/services/loading/loading.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  mainImage: string = 'assets/images/product/Product-detail-1.jpg';
  secondaryImages: string[] = [
    'assets/images/product/Product-detail-2.jpg',
    'assets/images/product/Product-detail-3.jpg',
    'assets/images/product/Product-detail-4.jpg',
    'assets/images/product/Product-detail-5.jpg'
  ];

  selectedImage: string | null = null;

  constructor(private loader: LoadingService) {
  }

  ngOnInit() {
  }

  onImageClick() {
    this.selectedImage = this.allImages[0];
  }

  closeEvent(event: null) {
    this.selectedImage = event;
  }

  get allImages(): string[] {
    return [this.mainImage, ...this.secondaryImages];
  }

}
