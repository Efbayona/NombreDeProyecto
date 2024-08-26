import {Component, OnInit} from '@angular/core';
import {LoadingService} from "@app/core/services/loading/loading.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productReviews: boolean = false;
  returnPolicy: boolean = false;
  screen: number = 1;
  mainImage: string = 'assets/images/product/Product-detail-1.jpg';
  secondaryImages: string[] = [
    'assets/images/product/Product-detail-2.jpg',
    'assets/images/product/Product-detail-3.jpg',
    'assets/images/product/Product-detail-4.jpg',
    'assets/images/product/Product-detail-5.jpg'
  ];

  selectedImage!: string;

  constructor(private loader: LoadingService) {
  }


  ngOnInit() {
  }

  onImageClick() {
    this.selectedImage = this.allImages[0];
  }

  get allImages(): string[] {
    return [this.mainImage, ...this.secondaryImages];
  }

  openMainImage(): void {
    // Open the main image in the image viewer
    const imageViewer = document.querySelector('app-image-viewer') as any;
    if (imageViewer) {
      imageViewer.open(this.mainImage);
    }
  }

}
