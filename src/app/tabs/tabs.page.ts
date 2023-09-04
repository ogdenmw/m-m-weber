import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isDesktop: boolean = false;
  mmweberlogo: string ='assets/mmweber-logo.svg';

  constructor(private screensizeService: ScreensizeService, public loadingController: LoadingController) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })    
  }

  ngOnInit() {
    // this is how to show a loading spinner, in case we ever want to implement this. 
    // when we implement it, we probably want to do it as a service so we can use it on any page
    // this.loadingController.create({
    //   message: 'This Loader Will Auto Hide in 2 Seconds',
    //   duration: 2000,
    //   cssClass: 'loaderClass'
    // }).then((res) => {
    //   res.present();
    // });
  };
}
