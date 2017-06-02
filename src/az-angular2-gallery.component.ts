import {  trigger,state,transition,keyframes, animate, style, Component, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import {AzAngular2GalleryImageComponent } from "./az-angular2-gallery-image/az-angular2-gallery-image.component";
@Component({
  selector: 'az-angular2-gallery',
  templateUrl: 'az-angular2-gallery.component.html',
  styleUrls: ['az-angular2-gallery.component.scss'],
   animations:[
        trigger('azGalleryAnimations', [
            state('active', style({
               opacity:1, 'z-index':1
            })),
            state('inactive', style({
                opacity:0, 'z-index':-22222
            })),

             transition('inactive => active', animate('800ms ease',keyframes([
                style({'z-index':1, offset:0}),
                style({opacity:1, 'z-index:':1, offset:1}),
            ]))),
            transition('active => inactive', animate('800ms ease',keyframes([
                style({ opacity:1, 'z-index:':1, offset:0}),
                style({ opacity:0,'z-index:':1, offset:0.8}),
                style({'z-index':0, opacity:0, offset:1}),
            ])))

        ]),

        trigger('viewerImageAnimations', [
            state('leftActive', style({
               opacity:1, 
            })),
            state('leftInactive', style({
                opacity:0,
            })),
            state('rightActive', style({
               opacity:1, 
            })),
            state('rightInactive', style({
                opacity:0,
            })),


             transition('leftInactive => leftActive', animate('600ms ease',keyframes([
                style({opacity:0, transform:"translateX(50px)", offset:0}),
                style({opacity:0.2,transform:"translateX(30px)",  offset:0.2}),
                style({opacity:1, transform:"translateX(0px)",  offset:1}),
            ]))),
            transition('leftActive => leftInactive, rightActive=>leftInactive', animate('400ms ease',keyframes([
                style({ opacity:1,transform:"translateX(0)",   offset:0}),
                style({ opacity:0,transform:"translateX(-200px)",  offset:1}),
            ]))),


            transition('rightInactive => rightActive', animate('600ms ease',keyframes([
                style({opacity:0, transform:"translateX(-50px)", offset:0}),
                style({opacity:0.2,transform:"translateX(-30px)",  offset:0.2}),
                style({opacity:1, transform:"translateX(0px)",  offset:1}),
            ]))),
            transition('rightActive => rightInactive, leftActive=>rightInactive', animate('400ms ease',keyframes([
                style({ opacity:1,transform:"translateX(0)",   offset:0}),
                style({ opacity:0,transform:"translateX(200px)",  offset:1}),
            ])))




        ]), 
        
    ]
})
export class AzAngular2GalleryComponent implements AfterContentInit {

  constructor() {
  }
  @ContentChildren(AzAngular2GalleryImageComponent) azAngular2GalleryImageComponent:QueryList<AzAngular2GalleryImageComponent>;
  images:Array<string>=[];
  ViewerImage:string='';
  self = this;
  state:string='inactive';
  viewerImageAnimtationsState:string = "leftActive";
  ngAfterContentInit(){
    console.log('OBJECT');
    
    this.azAngular2GalleryImageComponent.forEach((item, index)=>{
    
      this.images.push(item.href);
      item.testt.subscribe((href)=>{
       let index = this.images.indexOf(href);
       this.ViewerImage =href;
       
       this.state = 'active';
      });
    });

     console.log(this.images);
  }

 hideViewer(){
   this.state ="inactive";
 }
newIndex =0;
 nextImg(){
   let curIndex = this.images.indexOf(this.ViewerImage);
   if(curIndex+1<this.images.length){
     this.newIndex = curIndex+1;
   }
   else {
     this.newIndex=0;
   }
   
   this.viewerImageAnimtationsState = 'leftInactive';
 }

 prevImg(){
   let curIndex = this.images.indexOf(this.ViewerImage);
   if(curIndex>0){
     this.newIndex = curIndex-1;
   }
   else {
     this.newIndex=this.images.length-1;
   }
   
   this.viewerImageAnimtationsState = 'rightInactive';
 }


 imageAnimationDone($event){
  
  this.ViewerImage = this.images[this.newIndex];
  if(this.viewerImageAnimtationsState=='leftInactive'){
    
    this.viewerImageAnimtationsState = 'leftActive';
  }
  else if(this.viewerImageAnimtationsState=='rightInactive')
  {
    this.viewerImageAnimtationsState = 'rightActive';
  }
  
 }
}
