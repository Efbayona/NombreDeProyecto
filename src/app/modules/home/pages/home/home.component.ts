import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Categories, Product} from "@app/modules/home/interfaces/home.interface";
import {LoadingService} from "@app/core/services/loading/loading.service";
import {HomeService} from "@app/modules/home/services/home.service";

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = [
    {
      image: 'https://example.com/image1.jpg',
      title: 'Producto 1',
      description: 'Descripción del producto 1.',
      price: 29.99,
      onSale: true
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Producto 2',
      description: 'Descripción del producto 2.',
      price: 49.99,
      onSale: false
    },
    {
      image: 'https://example.com/image3.jpg',
      title: 'Producto 3',
      description: 'Descripción del producto 3.',
      price: 19.99,
      onSale: true
    },
    {
      image: 'https://example.com/image4.jpg',
      title: 'Producto 4',
      description: 'Descripción del producto 4.',
      price: 99.99,
      onSale: false
    },
    {
      image: 'https://example.com/image5.jpg',
      title: 'Producto 5',
      description: 'Descripción del producto 5.',
      price: 59.99,
      onSale: true
    },
    {
      image: 'https://example.com/image6.jpg',
      title: 'Producto 6',
      description: 'Descripción del producto 6.',
      price: 39.99,
      onSale: false
    },
    {
      image: 'https://example.com/image7.jpg',
      title: 'Producto 7',
      description: 'Descripción del producto 7.',
      price: 79.99,
      onSale: true
    },
    {
      image: 'https://example.com/image8.jpg',
      title: 'Producto 8',
      description: 'Descripción del producto 8.',
      price: 25.99,
      onSale: false
    },
    {
      image: 'https://example.com/image9.jpg',
      title: 'Producto 9',
      description: 'Descripción del producto 9.',
      price: 15.99,
      onSale: true
    },
    {
      image: 'https://example.com/image10.jpg',
      title: 'Producto 10',
      description: 'Descripción del producto 10.',
      price: 89.99,
      onSale: false
    }
  ];
  currentIndex: number = 0;
  itemsPerPage: number = 4;


  constructor(private router: Router,
              private loader: LoadingService,
              private home: HomeService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    window.addEventListener('resize', this.onResize.bind(this));
    this.home.getCategoryList().subscribe({
      next: (data) => {
      }
    })
  }


  get visibleProducts() {
    return this.products.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  next() {
    if (this.currentIndex + this.itemsPerPage < this.products.length) {
      this.currentIndex += 1;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  onResize() {
    this.cdr.detectChanges();
  }

  getCardClass() {
    const width = window.innerWidth;
    if (width >= 1558) {
      this.itemsPerPage = 4;
      return 'space-between';
    } else if (width <= 1585 && width >= 1218) {
      this.itemsPerPage = 3;
      return 'space-evenly';
    } else if (width <= 1217 && width >= 835) {
      this.itemsPerPage = 2;
      return 'space-evenly';
    } else if (width <= 835) {
      this.itemsPerPage = 1;
      return 'center';
    }
    return 'center';
  }

  getButtonClassLeft() {
    const width = window.innerWidth;
    if (width >= 1558) {
      return 'left-button-32';
    } else if (width <= 1585 && width >= 1218) {
      return 'left-button-5';
    } else if (width <= 1217 && width >= 835) {
      return 'left-button-5';
    } else if (width <= 835) {
      return 'left-button-5';
    }
    return '';
  }

  getButtonClassRight() {
    const width = window.innerWidth;
    if (width >= 1558) {
      return 'right-button-32';
    } else if (width <= 1585 && width >= 1218) {
      return 'right-button-5';
    } else if (width <= 1217 && width >= 835) {
      return 'right-button-5';
    } else if (width <= 835) {
      return 'right-button-5';
    }
    return '';
  }

  slides = [
    {src: "/assets/images/carousel/carousel-3.jpg"},
    {src: "/assets/images/carousel/carousel-4.jpg"},
    {src: "/assets/images/carousel/camiseta-negra.jpg"},
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  navigate() {
    this.router.navigateByUrl('/app/product').then();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

}
