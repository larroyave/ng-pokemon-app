import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmbordercard]',
})
export class BorderCarDirective {
  @Input('backgroundColorOnMouseEnter') backgroundColorOnMouseEnter: string;

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(220);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#ff0000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 1px ${color}`;
  }

  private setBackgroundColor(backgroundColorOnMouseEnter: string) {
    if (backgroundColorOnMouseEnter) {
      this.el.nativeElement.style.backgroundColor = backgroundColorOnMouseEnter;
    }
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
}
