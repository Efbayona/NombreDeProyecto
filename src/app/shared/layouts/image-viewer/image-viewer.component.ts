import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {

  @Input() images: string[] = [];
  @Input() selectedImage: string | null = null;
  @Output() closeEvent = new EventEmitter<null>();

  open(image: string): void {
    this.selectedImage = image;
    this.blockScroll();
  }

  close(): void {
    this.selectedImage = null;
    this.unblockScroll();
    this.closeEvent.emit(null);
  }

  prev(): void {
    const index = this.images.indexOf(this.selectedImage || '');
    if (index > 0) {
      this.selectedImage = this.images[index - 1];
    } else {
      this.selectedImage = this.images[this.images.length - 1];
    }
  }

  next(): void {
    const index = this.images.indexOf(this.selectedImage || '');
    if (index < this.images.length - 1) {
      this.selectedImage = this.images[index + 1];
    } else {
      this.selectedImage = this.images[0];
    }
  }

  onModalClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.close();
    }
    event.stopPropagation(); //Detener la propagacion pero no es necesario
  }

  private blockScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private unblockScroll(): void {
    document.body.style.overflow = '';
  }

}
