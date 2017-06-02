import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {AzAngular2GalleryComponent } from "./az-angular2-gallery.component";
import { AzAngular2GalleryImageComponent } from "./az-angular2-gallery-image/az-angular2-gallery-image.component";

export * from './az-angular2-gallery.component';
export * from './az-angular2-gallery-image/az-angular2-gallery-image.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule
  ],
  declarations: [
    AzAngular2GalleryComponent,AzAngular2GalleryImageComponent
   
  ],
  exports: [
   
    AzAngular2GalleryComponent, AzAngular2GalleryImageComponent, BrowserAnimationsModule
  ]
})
export class AzAngular2GalleryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AzAngular2GalleryModule,
      providers: []
    };
  }
}
