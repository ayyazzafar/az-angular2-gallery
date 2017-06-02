import {  Component, ContentChildren, AfterContentInit, QueryList } from '@angular/core';

import { AzAngular2GalleryImageComponent } from "./az-angular2-gallery-image/az-angular2-gallery-image.component";
import {animations} from "./animations"; 

@Component({
  selector: 'az-angular2-gallery',
  templateUrl: 'az-angular2-gallery.component.html',
  styleUrls: ['az-angular2-gallery.component.scss'],
  animations: animations
})
export class AzAngular2GalleryComponent implements AfterContentInit {

  constructor() {
  }
  @ContentChildren(AzAngular2GalleryImageComponent) azAngular2GalleryImageComponent: QueryList<AzAngular2GalleryImageComponent>;
  images: Array<string> = [];
  viewerZIndex: number = -0;
  ViewerImage: string = '';
  self = this;
  state: string = 'inactive';
  viewerImageAnimtationsState: string = "leftActive";
  ngAfterContentInit() {

    this.azAngular2GalleryImageComponent.forEach((item, index) => {

      this.images.push(item.href);
      item.imageClicked.subscribe((href) => {

        let index = this.images.indexOf(href);
        this.ViewerImage = href;
        this.showViewer();
      });
    });

  }

  showViewer():void{
    this.viewerZIndex = 22222222;
    this.state = 'active';
  }

  hideViewer():void {
    this.state = "inactive";
    
  }
  newIndex = 0;
  nextImg() {
    let curIndex = this.images.indexOf(this.ViewerImage);
    if (curIndex + 1 < this.images.length) {
      this.newIndex = curIndex + 1;
    }
    else {
      this.newIndex = 0;
    }

    this.viewerImageAnimtationsState = 'leftInactive';
  }

  prevImg() {
    let curIndex = this.images.indexOf(this.ViewerImage);
    if (curIndex > 0) {
      this.newIndex = curIndex - 1;
    }
    else {
      this.newIndex = this.images.length - 1;
    }

    this.viewerImageAnimtationsState = 'rightInactive';
  }


  imageAnimationDone($event) {

    this.ViewerImage = this.images[this.newIndex];
    if (this.viewerImageAnimtationsState == 'leftInactive') {

      this.viewerImageAnimtationsState = 'leftActive';
    }
    else if (this.viewerImageAnimtationsState == 'rightInactive') {
      this.viewerImageAnimtationsState = 'rightActive';
    }

  }
  viewerAnimationDone($event) {
    if (!($event.toState == 'active' && $event.phaseName == 'done')) {
      this.viewerZIndex = -2323232323;
    }

  }
  
}
