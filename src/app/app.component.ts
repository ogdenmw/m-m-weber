import { Component, HostListener } from '@angular/core';
import { ScreensizeService } from './services/screensize.service';
import { initialize } from '@ionic/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform, 
//    private splashScreen: SplashScreen, 
//    private statusBar: StatusBar, 
    private screensizeService: ScreensizeService
  ) {
    this.initializeApp();
  }

initializeApp() {
  this.platform.ready().then(() => {
//    this.statusBar.styleDefault();
//    this.splashScreen.hide();
    this.screensizeService.onResize(this.platform.width());
  });
}

@HostListener('window:resize', ['$event'])
private onResize(event: any) {
  this.screensizeService.onResize(event.target.innerWidth);
}
}
