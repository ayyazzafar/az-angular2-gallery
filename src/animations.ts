import {trigger, state, transition, keyframes, animate, style } from "@angular/core";

export const animations:Array<any> = [
    trigger('azGalleryAnimations', [
      state('active', style({
        opacity: 1,
        visibility: 'visible'
      })),
      state('inactive', style({
        opacity: 0,
        visibility: 'hidden'
      })),

      transition('inactive => active', animate('800ms ease', keyframes([
        style({ offset: 0 }),
        style({ opacity: 1, offset: 1 }),
      ]))),
      transition('active => inactive', animate('800ms ease', keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 0.8 }),
        style({ opacity: 0, offset: 1 }),
      ])))

    ]),

    trigger('viewerImageAnimations', [
      state('leftActive', style({
        opacity: 1,
      })),
      state('leftInactive', style({
        opacity: 0,
      })),
      state('rightActive', style({
        opacity: 1,
      })),
      state('rightInactive', style({
        opacity: 0,
      })),


      transition('leftInactive => leftActive', animate('600ms ease', keyframes([
        style({ opacity: 0, transform: "translateX(50px)", offset: 0 }),
        style({ opacity: 0.2, transform: "translateX(30px)", offset: 0.2 }),
        style({ opacity: 1, transform: "translateX(0px)", offset: 1 }),
      ]))),
      transition('leftActive => leftInactive, rightActive=>leftInactive', animate('400ms ease', keyframes([
        style({ opacity: 1, transform: "translateX(0)", offset: 0 }),
        style({ opacity: 0, transform: "translateX(-200px)", offset: 1 }),
      ]))),


      transition('rightInactive => rightActive', animate('600ms ease', keyframes([
        style({ opacity: 0, transform: "translateX(-50px)", offset: 0 }),
        style({ opacity: 0.2, transform: "translateX(-30px)", offset: 0.2 }),
        style({ opacity: 1, transform: "translateX(0px)", offset: 1 }),
      ]))),
      transition('rightActive => rightInactive, leftActive=>rightInactive', animate('400ms ease', keyframes([
        style({ opacity: 1, transform: "translateX(0)", offset: 0 }),
        style({ opacity: 0, transform: "translateX(200px)", offset: 1 }),
      ])))




    ]),

  ];