import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  isDesktop: boolean = false;

  constructor(private screensizeService: ScreensizeService, public loadingController: LoadingController) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })    
  }

}
