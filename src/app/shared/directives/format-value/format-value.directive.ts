import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormatValue]'
})
export class FormatValueDirective {

  private _value: number | undefined;

  constructor(private el: ElementRef) {}

  // Recibe el valor inicial
  @Input('appFormatValue')
  set value(val: number) {
    this._value = val;
    this.formatCurrency();
  }

  // Formateo cuando el input pierde el foco
  @HostListener('blur') onBlur() {
    const rawValue = this.el.nativeElement.value.replace(/,/g, ''); // Remover comas antes de convertir
    this._value = parseFloat(rawValue);
    this.formatCurrency();
  }

  // Elimina el formato cuando se enfoca para edición
  @HostListener('focus') onFocus() {
    this.el.nativeElement.value = this._value ? this._value.toString() : '';
  }

  private formatCurrency() {
    if (this._value !== null && this._value !== undefined && !isNaN(this._value)) {
      const formattedValue = this._value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      this.el.nativeElement.value = formattedValue;
    } else {
      this.el.nativeElement.value = '';
    }
  }
}
