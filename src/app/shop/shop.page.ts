import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { ScreensizeService } from '../services/screensize.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss']
})
export class ShopPage {
  
  isDesktop: boolean = false;

  constructor(private screensizeService: ScreensizeService, public loadingController: LoadingController) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })    
  }

}
