import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {

  @Input() images: string[] = [];
  selectedImage: string | null = null;

  open(image: string): void {
    this.selectedImage = image;
  }

  close(): void {
    this.selectedImage = null;
  }

  prev(): void {
    const index = this.images.indexOf(this.selectedImage || '');
    if (index > 0) {
      this.selectedImage = this.images[index - 1];
    }
  }

  next(): void {
    const index = this.images.indexOf(this.selectedImage || '');
    if (index < this.images.length - 1) {
      this.selectedImage = this.images[index + 1];
    }
  }

  onModalClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.close();
    }
    event.stopPropagation(); //Detener la propagacion pero no es necesario
  }

}
