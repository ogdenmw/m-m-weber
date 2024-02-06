import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { DomController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage {

  @ViewChild(IonContent, { static: false }) 
  content: IonContent;

  topImageE: any;
  topMiddleImageE: any;
  topBottomImageE: any;

  headerHeightE: number;
  moveImageTopE: number;
  scaleImageTopE: number; 

  moveImageTopMiddleE: number;
  scaleImageTopMiddleE: number; 

  moveImageTopBottomE: number;
  scaleImageTopBottomE: number; 

  constructor(public element: ElementRef, public renderer: Renderer2, private domCtrl: DomController) {}

  handleScroll(ev: CustomEvent<ScrollDetail>) {

        //console.log('scroll', ev.detail);
        // this.scrollElem = this.content.getScrollElement();
        // this.header = document.getElementsByClassName('parallax-image')[0];
    
        const scrollTop=ev.detail.scrollTop; 
        //console.log('scrollTop: ', scrollTop);
  
        this.domCtrl.write(() => {
          if (scrollTop > 0) {
            this.moveImageTopE = scrollTop / 3;
            this.scaleImageTopE = 1;

            this.moveImageTopMiddleE = scrollTop / 2;
            this.scaleImageTopMiddleE = 1;            

            this.moveImageTopBottomE = scrollTop / 5;
            this.scaleImageTopBottomE = 1;            

          } else {
  
          }
  
          this.renderer.setStyle(this.topImageE, 
            'webkitTransform', 'translate3d(0, ' + this.moveImageTopE + 'px,0) scale(' + this.scaleImageTopE + ')'
            )

          this.renderer.setStyle(this.topMiddleImageE, 
            'webkitTransform', 'translate3d(0, ' + this.moveImageTopMiddleE + 'px,0) scale(' + this.scaleImageTopMiddleE + ')'
            )

          this.renderer.setStyle(this.topBottomImageE, 
            'webkitTransform', 'translate3d(0, ' + this.moveImageTopBottomE + 'px,0) scale(' + this.scaleImageTopBottomE + ')'
            )
    
          });

  }

  ngOnInit() {
    let content = this.element.nativeElement;

    if (typeof document !== 'undefined') {
      this.topImageE = document.getElementById('topImageE');    
      this.topMiddleImageE = document.getElementById('topMiddleImageE');    
      this.topBottomImageE = document.getElementById('topBottomImageE');   
      
      //console.log(this.topImage);

      this.domCtrl.read(() => {
        this.headerHeightE = this.topImageE.clientHeight; 
      //console.log('headerHeight: ', this.headerHeight);
      });
    }


  }

}
