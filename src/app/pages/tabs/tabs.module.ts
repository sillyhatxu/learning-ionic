import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';
import { ShippingPageModule } from '../shipping/shipping.module';
import { ShippingPage } from '../shipping/shipping.page';
import { ShopPage } from '../shop/shop.page';
import { ShopPageModule } from '../shop/shop.module';
import { MessagePageModule } from '../message/message.module';
import { MePageModule } from '../me/me.module';
import { MessagePage } from '../message/message.page';
import { MePage } from '../me/me.page';

const routes: Routes = [
  { path: '', redirectTo: '/app/tabs/shop', pathMatch: 'full' },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'shop',
        children: [
          { path: '', component: ShopPage }
        ]
      },
      {
        path: 'shipping',
        children: [
          { path: '', component: ShippingPage }
        ]
      },
      {
        path: 'message',
        children: [
          { path: '', component: MessagePage }
        ]
      },
      {
        path: 'me',
        children: [
          { path: '', component: MePage }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageModule,
    ShippingPageModule,
    MessagePageModule,
    MePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
