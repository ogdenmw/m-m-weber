import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { DomController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage {

  @ViewChild(IonContent, { static: false }) 
  content: IonContent;

  topImageB: any;
  topMiddleImageB: any;
  topBottomImageB: any;

  headerHeightB: number;
  moveImageTopB: number;
  scaleImageTopB: number; 

  moveImageTopMiddleB: number;
  scaleImageTopMiddleB: number; 

  moveImageTopBottomB: number;
  scaleImageTopBottomB: number; 

  constructor(public element: ElementRef, public renderer: Renderer2, private domCtrl: DomController) {}

  handleScroll(ev: CustomEvent<ScrollDetail>) {

        //console.log('scroll', ev.detail);
        // this.scrollElem = this.content.getScrollElement();
        // this.header = document.getElementsByClassName('parallax-image')[0];
    
        const scrollTop=ev.detail.scrollTop; 
        //console.log('scrollTop: ', scrollTop);
  
        this.domCtrl.write(() => {
          if (scrollTop > 0) {
            this.moveImageTopB = scrollTop / 3;
            this.scaleImageTopB = 1;

            this.moveImageTopMiddleB = scrollTop / 2;
            this.scaleImageTopMiddleB = 1;            

            this.moveImageTopBottomB = scrollTop / 5;
            this.scaleImageTopBottomB = 1;            

          } else {
  
          }
  
          this.renderer.setStyle(this.topImageB, 
            'webkitTransform', 'translate3d(0, ' + this.moveImageTopB + 'px,0) scale(' + this.scaleImageTopB + ')'
            )

          this.renderer.setStyle(this.topMiddleImageB, 
            'webkitTransform', 'translate3d(0, ' + this.moveImageTopMiddleB + 'px,0) scale(' + this.scaleImageTopMiddleB + ')'
            )

          this.renderer.setStyle(this.topBottomImageB, 
            'webkitTransform', 'translate3d(0, ' + this.moveImageTopBottomB + 'px,0) scale(' + this.scaleImageTopBottomB + ')'
            )
    
          });

  }

  ngOnInit() {
    let content = this.element.nativeElement;

    if (typeof document !== 'undefined') {
      this.topImageB = document.getElementById('topImageB');    
      this.topMiddleImageB = document.getElementById('topMiddleImageB');    
      this.topBottomImageB = document.getElementById('topBottomImageB');   
      
      //console.log(this.topImage);

      this.domCtrl.read(() => {
        this.headerHeightB = this.topImageB.clientHeight; 
      //console.log('headerHeight: ', this.headerHeight);
      });
    }


  }

}
