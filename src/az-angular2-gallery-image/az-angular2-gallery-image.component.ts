import {  Component, Input, Output, EventEmitter, HostListener  } from '@angular/core';

@Component({
    selector: 'az-gallery-image',
    templateUrl: 'az-angular2-gallery-image.component.html',
   
})

export class AzAngular2GalleryImageComponent{
    @Input() href:string;
    constructor() { }
    @Output() imageClicked: EventEmitter<string> = new EventEmitter<string>();
    @HostListener('click', ['$event.target']) onclick(el){
        this.imageClicked.emit(this.href);
    }

    

   
}