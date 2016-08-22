---
layout: post
title: 淺談蓄勢待發的 Angular2
author: ivanwei
description: 淺談 Angular2，讓初學者了解它與 Angular1 的差異
image: http://farm9.staticflickr.com/8391/29000284732_8be50251b1_b.jpg
tags:
  - news
  - 消息
tableOfContents:
  - text: 最新消息
    link: #最新消息
---

![Angular2 Trends](https://farm9.staticflickr.com/8440/28490212844_176b5f852b_h.jpg 'Angular2 Trends')

[Angular2](https://angular.io/ 'Angular2') 於 8/10 釋出 RC5 版本，從上圖 [Google Trends](https://www.google.com.tw/trends/explore?date=2015-01-01%202016-08-21&q=angular2 'Google Trends') 可以得知隨著正式穩定版本的逼近，也吸引越來越多人的關注的目光。

## 關於 Anguar2

「Angular2 主要目的是為了打造一個更簡單開發的 Web 框架，開發團隊深信寫出漂亮的應用是會讓人感覺快樂與有趣」，這段話翻自 Angular2 About。

這次的改版 Angular 團隊將 [Javascript VM - Zone.js](https://github.com/angular/zone.js/ 'Javascript VM - Zone.js') 放進 Angular2，決解 Angular1 在錯誤處理與分析薄弱的弱勢，此外更進一步出專屬的 [Zone.js - NgZone](https://angular.io/docs/ts/latest/api/core/index/NgZone-class.html 'NgZone')，讓開發者能更容易追蹤數據變化，改善過去數據流難追蹤的窘境；另外一個明顯的改變，這次的改版官方釋出三種範例，分別是 老大哥 JavaScript、最近火得發燙的 [TypeScript](https://www.typescriptlang.org/ 'TypeScript') 以及 Zone.js 發想起源 [Dart](https://www.dartlang.org/ 'Dart')，提供過去沒見過的多元範例的選項。這些改變都顯現出 Angular 團隊對於這次的大改版想帶來的不單只是版號改變，而是想給開發者在 Angular 的體驗上能有一個大跳躍。

可是 Angular2 就只有這些改變嗎？以下我們對 Angular2 重點整理，方便大家更快了解 Angular2。

## Agnular2 主要改變

1. 強化模組化技術
  - 實踐 [開閉原則 The Open/Closed Principle](https://zh.wikipedia.org/wiki/%E5%BC%80%E9%97%AD%E5%8E%9F%E5%88%99 '開閉原則 The Open/Closed Principle') 與 [關注點分離](https://zh.wikipedia.org/wiki/%E5%85%B3%E6%B3%A8%E7%82%B9%E5%88%86%E7%A6%BB '關注點分離') 兩個原則
  - 更容易使用第三方框架，如 [RxJS](https://angular.io/docs/ts/latest/guide/server-communication.html#!#enable-rxjs-operators 'RxJS')、[ImmutableJS](https://facebook.github.io/immutable-js/ 'ImmutableJS')、[CSS Module](http://joaogarin.github.io/css-modules-angular2/ 'CSS Module') 等
2. 更好的效能
3. 對末來標準的友好
  - 採用 [Web Worker](https://html.spec.whatwg.org/multipage/workers.html 'Web Worker')、[Web Components](http://webcomponents.org/ 'Web Components')、[CSS Scoping](https://drafts.csswg.org/css-scoping/ 'CSS Scoping')
4. 跨平臺的支援
  - 除了 Web 外，還支援手機 App 與桌機 App

## 更多 Angular2

想知道更多關於 Angular2，今年的 [2016 JSDC](http://2016.jsdc.tw/ '2016 JSDC') 講者名單有 Angular2 前鋒 [Will 保哥](https://www.facebook.com/will.fans/ 'Will 保哥') 與 [Angular 國外資深開發人員](https://twitter.com/gdi2290 '神秘嘉賓')。對 Angular2 保持的好奇，對 Angular2 有所期待的你/妳，還不心動嗎？  
