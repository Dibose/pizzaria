import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private el: ElementRef) {}
  @HostBinding('style.backgroundColor') bgcol: any;
  @HostBinding('style.color') col: any;
  @HostBinding('innerHtml') text = 'Order Now';
  // @HostBinding('class.btn-danger') myClass;
  // toggle: boolean = false;

  @HostListener('mouseover')
  myclick() {
    this.bgcol = '#ffd600';
    this.col = '#e3f2fd';
  }
  @HostListener('mouseout') myclic() {
    this.bgcol = null;
    this.col = null;
  }
  @HostListener('click') click() {
    // this.toggle = !this.toggle;
    // if (this.toggle) {
    //   // this.myClass;
    //   this.text = 'Remove';
    // } else {
    //   this.text = 'Order Now';
    // }
    this.text = 'Order Again!';
  }
}
