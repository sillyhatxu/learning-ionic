# learning-ionic

创建项目

```
ionic start
```

启动服务

```
ionic serve
```

add page

```
ionic generate page pages/about
```

add service

```
ionic generate service api/user
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
