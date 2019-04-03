import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private el: ElementRef) {
   }

  //  @HostListener('mouseenter') mouseEntro(){
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  //  }
  //  @HostListener('mouseleave') mouseOut(){
  //   this.el.nativeElement.style.backgroundColor = null;
  //  }

  @Input('appHighlight') newColor: string;

  @HostListener('mouseenter') mouseEntro(){
    this.highlight( this.newColor || 'yellow');
   }
   @HostListener('mouseleave') mouseOut(){
    this.highlight( null );
   }

   private highlight(color: string ){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
