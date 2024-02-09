import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';
import { LoadingController } from '@ionic/angular';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  isDesktop: boolean = false;
  mmweberlogo: string ='assets/mmweber-logo.svg';

  constructor(private screensizeService: ScreensizeService, public loadingController: LoadingController, private titleService: Title, private metaService: Meta) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      console.log('is desktop changed: ', isDesktop);
      this.isDesktop = isDesktop;
    })    
  }

  ngOnInit() {
    this.titleService.setTitle('M.M.Weber Autorenseite');
    this.metaService.updateTag({ name: 'description', content: 'Author Page for M.M.Weber' });
    // Twitter
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ property: 'twitter:title', content: 'NEW BOOK DIE PHYSIK DES TODES' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'Check out this fantastic new book' });
    this.metaService.updateTag({ property: 'twitter:image', content: 'https://m-m-weber.com/assets/physik%20des%20todes%20book%20cover%20epub.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: '/shop' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'M.M.Weber Author Page' });
    this.metaService.updateTag({ property: 'og:title', content: 'M.M.Weber - Autorenseite' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://m-m-weber.com/assets/physik%20des%20todes%20book%20cover%20epub.jpg' });
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
