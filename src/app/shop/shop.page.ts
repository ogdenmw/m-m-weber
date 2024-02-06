import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { ScreensizeService } from '../services/screensize.service';
import { LoadingController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { DomController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';



@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss']
})

export class ShopPage {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(IonModal) modal: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
  
  topImageS: any;
  topMiddleImageS: any;
  topBottomImageS: any;

  headerHeightS: number;
  moveImageTopS: number;
  scaleImageTopS: number; 

  moveImageTopMiddleS: number;
  scaleImageTopMiddleS: number; 

  moveImageTopBottomS: number;
  scaleImageTopBottomS: number; 
  
  isDesktop: boolean = false;

  constructor(private screensizeService: ScreensizeService, public loadingController: LoadingController, public element: ElementRef, public renderer: Renderer2, private domCtrl: DomController) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })    
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {

    //console.log('scroll', ev.detail);
    // this.scrollElem = this.content.getScrollElement();
    // this.header = document.getElementsByClassName('parallax-image')[0];

    const scrollTop=ev.detail.scrollTop; 
    //console.log('scrollTop: ', scrollTop);

    this.domCtrl.write(() => {
      if (scrollTop > 0) {
        this.moveImageTopS = scrollTop / 3;
        this.scaleImageTopS = 1;

        this.moveImageTopMiddleS = scrollTop / 2;
        this.scaleImageTopMiddleS = 1;            

        this.moveImageTopBottomS = scrollTop / 5;
        this.scaleImageTopBottomS = 1;            

      } else {

      }

      this.renderer.setStyle(this.topImageS, 
        'webkitTransform', 'translate3d(0, ' + this.moveImageTopS + 'px,0) scale(' + this.scaleImageTopS + ')'
        )

      this.renderer.setStyle(this.topMiddleImageS, 
        'webkitTransform', 'translate3d(0, ' + this.moveImageTopMiddleS + 'px,0) scale(' + this.scaleImageTopMiddleS + ')'
        )

      this.renderer.setStyle(this.topBottomImageS, 
        'webkitTransform', 'translate3d(0, ' + this.moveImageTopBottomS + 'px,0) scale(' + this.scaleImageTopBottomS + ')'
        )

        //console.log(this.moveImageTopBottom);
        //console.log(this.topBottomImage);
        //console.log(scrollTop);
      });

}

ngOnInit() {
let content = this.element.nativeElement;

if (typeof document !== 'undefined') {
  this.topImageS = document.getElementById('topImageS');    
  this.topMiddleImageS = document.getElementById('topMiddleImageS');    
  this.topBottomImageS = document.getElementById('topBottomImageS');   
  
  //console.log(this.topImage);

  this.domCtrl.read(() => {
    this.headerHeightS = this.topImageS.clientHeight; 
  //console.log('headerHeight: ', this.headerHeight);
  });
}


}

}
