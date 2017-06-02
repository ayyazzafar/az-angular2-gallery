import {  Component, Input, Output, OnInit, EventEmitter, HostListener  } from '@angular/core';

@Component({
    selector: 'az-gallery-image',
    templateUrl: 'az-angular2-gallery-image.component.html',
   
})

export class AzAngular2GalleryImageComponent implements OnInit {
    @Input() href:string;
    constructor() { }
    @Output() testt: EventEmitter<string> = new EventEmitter<string>();
    @HostListener('click', ['$event.target']) onclick(el){
        this.testt.emit(this.href);
    }

    
    ngOnInit() { }

    zzz(){
        alert('heheheeh');
    }
}