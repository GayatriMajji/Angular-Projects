import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
selector: '[changeText]'
})

export class ChangeTextDirective {

    elementName: string;

    constructor(private eleRef: ElementRef) {

    }


    @HostListener('mouseover') onMouseOver() {

        this.elementName = this.eleRef.nativeElement.innerText;

        console.log(this.elementName)

        this.eleRef.nativeElement.innerText="Heya, keep going.";

    }

    @HostListener('mouseleave') onMouseLeave() {

        this.eleRef.nativeElement.innerText= this.elementName;

    }
}