import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isDesktop: boolean = false;

  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })
  }

}
