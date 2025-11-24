import { Directive, ElementRef, Input, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppProductHighlight]',
  standalone: true
})
export class AppProductHighlightDirective implements OnInit {
  //@Input() isDiscounted: boolean = false;
  //@Input() isOutOfStock: boolean = false;
  @Input('appAppProductHighlight') product: any;;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Set base styles
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '5px');
      // Dim out-of-stock products
      if (this.product.quantity===0) {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5');
        this.renderer.setStyle(this.el.nativeElement, 'pointerEvents', 'none');
      }
      // Discounted products - green border
      if (this.product.discount>0) {
        this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #28a745'); // green
        this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 0 10px rgba(40, 167, 69, 0.3)');
      } 
  } 
      // Hover effect for all product cards
  @HostListener('mouseenter') onMouseEnter() {
    if (this.product.quantity>0) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.2s ease');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}
