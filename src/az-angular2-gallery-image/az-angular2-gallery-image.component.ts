import {  Component, Input, Output, OnInit, EventEmitter, HostListener  } from '@angular/core';

@Component({
    selector: 'az-gallery-image',
    templateUrl: 'az-angular2-gallery-image.component.html',
    host:{'(click)':'zzz()'},
   
})

export class AzAngular2GalleryImageComponent implements OnInit {
    @Input() href:string;
    constructor() { }
    @Output() testt: EventEmitter<any> = new EventEmitter();
    @HostListener('click', ['$event.target']) onclick(el){
        console.log(el);
        this.testt.emit(this.href);
    }

    
    ngOnInit() { }

    zzz(){
        alert('heheheeh');
    }
}