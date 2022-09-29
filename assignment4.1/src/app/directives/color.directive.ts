import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elementRef: ElementRef) { 
    //this.elementRef.nativeElement.classList.add('bg-success')
  
  }
  @HostListener('mouseenter')onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor ='green'
    
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor ='initial'
   
  }

}
