import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { DomController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild(IonContent, { static: false }) 
  content: IonContent;

  topImage: any;
  topMiddleImage: any;
  topBottomImage: any;
  
  headerHeight: number;
  moveImage: number;
  scaleImage: number; 

  constructor(public element: ElementRef, public renderer: Renderer2, private domCtrl: DomController) {}

  handleScroll(ev: CustomEvent<ScrollDetail>) {

        console.log('scroll', ev.detail);
        // this.scrollElem = this.content.getScrollElement();
        // this.header = document.getElementsByClassName('parallax-image')[0];
    
        const scrollTop=ev.detail.scrollTop; 
        console.log('scrollTop: ', scrollTop);
  
        this.domCtrl.write(() => {
          if (scrollTop > 0) {
            this.moveImage = scrollTop / 2;
            this.scaleImage = 1;
          } else {
  
          }
  
          this.renderer.setStyle(this.topImage, 
            'webkitTransform', 'translate3d(0, ' + this.moveImage + 'px,0) scale(' + this.scaleImage + ')'
            )
          });

  }

  ngOnInit() {
    let content = this.element.nativeElement;
    this.topImage = document.getElementById('topImage');    

    this.domCtrl.read(() => {
      this.headerHeight = this.topImage.clientHeight; 
      console.log('headerHeight: ', this.headerHeight);
  });


  }
}
