import {AfterViewInit, Component} from '@angular/core';
import {Product} from "@app/modules/home/interfaces/home.interface";

declare var RangeSliderPips: any;

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements AfterViewInit {


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



  ngAfterViewInit() {
    this.loadScript().then(() => {
      // Inicializa el slider después de que el script se haya cargado.
      const sliderElement = document.getElementById('slider');
      const minInput = document.querySelector<HTMLInputElement>('#min');
      const maxInput = document.querySelector<HTMLInputElement>('#max');

      if (sliderElement && minInput && maxInput) {

        const slider = new RangeSliderPips({
          target: sliderElement,
          props: {
            min: 10000,          // Valor mínimo
            max: 500000,         // Valor máximo
            values: [10000, 500000], // Valores iniciales
            pips: true,
            pipstep: 10000,      // Paso de los pips
            float: true,
            range: true,
            prefix: "COP ",
            pushy: true,
            handleFormatter: (v: number) => {
              // Formatear el valor con separador de miles y "k"
              return `${(v / 1000)}k`;
            }
          }
        });

        // Actualiza los valores de Min y Max cuando el slider cambia
        slider.$on('change', (e: any) => {
          minInput.value = e.detail.values[0];
          maxInput.value = e.detail.values[1];
        });

      //  Cambia la altura de las "pips" (marcas del slider) de forma aleatoria para efectos visuales
        document.querySelectorAll<HTMLElement>(".rangePips .pip").forEach((element, index) => {
          const height = 2 * index + 10; // Calcular la altura lineal
          element.style.height = `${height}px`;
        });

        // Actualiza el slider cuando cambian los inputs de Min y Max
        minInput.addEventListener("change", () => {
          slider.$set({ values: [Number(minInput.value), Number(maxInput.value)] });
        });

        maxInput.addEventListener("change", () => {
          slider.$set({ values: [Number(minInput.value), Number(maxInput.value)] });
        });
      }
    });
  }

  // Método para cargar el script de la biblioteca externa
  private loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/svelte-range-slider-pips/dist/svelte-range-slider-pips.min.js';
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.body.appendChild(script);
    });
  }
}
