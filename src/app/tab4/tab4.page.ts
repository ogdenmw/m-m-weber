import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  isDesktop: boolean = false;

  constructor(private screensizeService: ScreensizeService, public loadingController: LoadingController) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })    
  }

}
