import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  isDesktop: boolean = false;

  constructor(private screensizeService: ScreensizeService, public loadingController: LoadingController) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })    
  }

}
