import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appParallaxHeader]'
})
export class ParallaxHeaderDirective {
  header: any;
  headerHeight: number;
  moveImage: number;
  scaleImage: number; 
  element: any;
  domCtrl: DomController;
  renderer: Renderer2;

  constructor() { element: ElementRef; renderer: Renderer2; domCtrl: DomController}

  
/*
ngOnInit() {
    let content = this.element.nativeElement;
    this.header = content.getElementsByClassName('parallax-image')[0];

    this.domCtrl.read(() => {
        this.headerHeight = this.header.clientHeight; 
    });
  }


    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event: any) {
      const scrollTop=$event.detail.scrollTop; 
      console.log('scrollTop: ', scrollTop);

      this.domCtrl.write(() => {
        if (scrollTop > 0) {
          this.moveImage = scrollTop / 2;
          this.scaleImage = 1;
        } else {

        }

        this.renderer.setStyle(this.header, 
          'webkitTransform', 'translate3d(0, ' + this.moveImage + 'px,0) scale(' + this.scaleImage + ')'
          )
      });

    }
*/
}
