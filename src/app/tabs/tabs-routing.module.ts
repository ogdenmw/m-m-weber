import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../blog/blog.module').then(m => m.BlogPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'impressum',
        loadChildren: () => import('../impressum/impressum.module').then(m => m.ImpressumPageModule)
      },
      {
        path: 'datenschutz',
        loadChildren: () => import('../datenschutz/datenschutz.module').then(m => m.DatenschutzPageModule)
      },
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
