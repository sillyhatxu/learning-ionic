# learning-ionic

Install Ionic
```
npm install -g ionic

```

创建项目

```
ionic start
ionic start myApp tabs
```

启动服务

```
ionic serve
```

add page

```
ionic generate page pages/shop
ionic generate page pages/message
ionic generate page pages/me
ionic generate page pages/cart
```

add service

```
ionic generate service api/user
ionic generate service api/product
```

安装组件

```
npm install ng-circle-progress --save
```

build ios or android

> 生成 platform 目录，用 xcode 打开或用 Android Studio 打开

```
ionic cordova platform add ios
ionic cordova platform add android
```

[ionic client](https://ionicframework.com/docs/cli/commands/generate)

```
ionic generate
ionic generate page
ionic generate page contact
ionic generate component contact/form
ionic generate component login-form --change-detection=OnPush
ionic generate directive ripple --skip-import
ionic generate service api/user
```



## Develop Process

> ionic start
>
> ionic generate page pages/tutorial
> 
> ionic generate service api/tutorial
>
> Edit app-routing.module.ts
```ts
const routes: Routes = [
  {path: '',redirectTo: '/tutorial',pathMatch: 'full'},
  {path: 'tutorial',loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialPageModule),canLoad: [TutorialService]},
];
```
系统资源加载
```
import { CanLoad } from '@angular/router';

canLoad() {
    return this.storage.get('ion_did_tutorial').then(res => {
      if (res) {
        this.router.navigate(['/app', 'tabs', 'schedule']);
        return false;
      } else {
        return true;
      }
    });
  }
```

> 新增 tutorial-routing.module.ts 为每一个组件配置routing
>

```bash
ionic generate page pages/tabs
ionic generate page pages/shop
ionic generate page pages/shipping
ionic generate page pages/message
ionic generate page pages/me
```
> 
> TabsPageModule 需要导入tab组件Module

```ts
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
```

> tab="shipping"是url跳转链接，ion-icon是图片，ion-label是tag名字
```html
    <ion-tab-button tab="shipping">
      <ion-icon name="cart"></ion-icon>
      <ion-label>Shipping</ion-label>
    </ion-tab-button>
```
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx
> 
> ionic xxxxxxxxxxxxxxx


## 资源说明

#### 缓存
> npm install --save @ionic/storage

```
import { IonicStorageModule } from '@ionic/storage';
```




## 打开app画面

```bash
ionic cordova plugin add cordova-plugin-splashscreen
npm install @ionic-native/splash-screen
```