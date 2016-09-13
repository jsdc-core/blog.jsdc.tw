---
layout: post
title: React 茁壯之後，開發者的下一步呢？
author: ALi
description: React 經歷了崛起、當紅，而在這樣茁壯之後對於不同階段的開發者是什麼樣的挑戰？
image: http://i.imgur.com/IMunTrh.png
tags:
  - news
  - JavaScript
  - React
tableOfContents:
  - text: 為什麼會有 React ?
    link: react-next#react-
  - text: 對不同階段的開發者而言
    link: react-next#section
  - text: 第一階段：初心者
    link: react-next#section-1
  - text: 第二階段：Web 冒險家
    link: react-next#web-
  - text: 第二階段：Mobile 冒險家
    link: react-next#mobile-
  - text: 第三階段：大師
    link: react-next#section-2
---

## 為什麼會有 React ?

React 是由 Facebook 的軟體工程師 Jordon Walke 創立，React 是一個為了 View 而產生的模組，與其他前端框架在初建立時概念就截然相同，可以參考我們的 [JS 超新手懶人包
](http://blog.jsdc.tw/2016/08/21/jsdc2016-beginner-pack)，這邊就不再多做說明。


## 對不同階段的開發者而言

回到正題，這裡指的不同階段的開發者不是說前端、後端，

更不是以工作的資歷，而是指：你 / 妳對 React 了解的程度。

以下分成三個階段，並針對這三個階段可能會遇到的問題特別拋出：


### 第一階段：初心者

泛指只聽過技術、跑過基礎教學，準備坐船離開新手村的你，這時候的你可能會遇到：

- 怎麼要了解這麼多、到底要怎麼開始？

React 的生態系已經發展的非常龐大，或許先專注從 React 本身開始，這邊分享一個官方提供的一個基礎建設專案，讓新手可以專注在學習使用 React 上，可以用來做 SPA 的練習！

文章：[Create Apps with No Configuration](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)

Repo: [https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)

- - - -

### 第二階段：Web 冒險家

當你想實際開發專案時，在這個階段的你會遇到幾件事情：

  - K攻略時發現資訊爆炸（日新月異，文章迭代的速度是很可怕的）

  - 架構的選擇障礙症（flux, redux, relay ... 等等）

  - 到底怎麼規劃檔案結構？

  - 用了許多套件發現程式好大一包！


這邊推薦由 [@kdchang 撰寫的【從零開始學 ReactJS】](https://www.gitbook.com/book/kdchang/react101/details)


推薦議程：

- wuct: Dive into React Performance

> 在使用者體驗當道的年代，效能的問題就顯得非常重要，而開發者要如何解決與發現效能的癥結點呢？

- - - -

### 第二階段：Mobile 冒險家

React 冒險家們還有一另一個選擇 ———— React Native。

React Native 的出現讓原本的網頁工程師可以將觸角延伸到 Native Mobile App 的世界。但，React Native 實際開發時，對於一個沒有開發過 iOS / Android 概念的網站工程師來說是會碰到一些困難的，像是：

- 排版時 css 語法的部分支援
- 使用第三方套件時會需要調整一些原生的 Android / iOS Code
- 尋找 Component 時，會不了解在 Mobile 時的關鍵名詞是什麼
- 不能全然以網站的角度去套用在 RN 開發上

推薦議程：

- Tomas Lin: React Native - dispatch route like web uri

> 碰過 React Native 的人一定知道它的 navigator 的 router 概念與網站是不同的，那我們如何從網站改開發 RN 使用 router 時能順利無痛轉換呢？


- 李欣龍(山姆大叔): React Native + Redux 簡單也不簡單

> Redux 是在 React 開發時，一種主流的資料流概念（PS 連 Vue 也有 Vuex 呢！），當 React Native 與 Redux 相遇時，到底是發生了什麼事情，讓山姆大叔對他下了簡單也不簡單的評論呢？

- - - -


### 大師

遊戲玩家最終總會有封頂之時，而開發者很幸運的是技術不會！

據 React 官方網站部落格 [Relay: State of the State](https://facebook.github.io/react/blog/2016/08/05/relay-state-of-the-state.html#whats-next) 中提到的下一步將會是：

- Relay, Relay, Relay
- 對低階手機設備的支援
- 開發者的體驗提升
- 更多 ...

推薦議程：

- Steven Su: GraphQL 經驗分享

> 引用 Fin Hopkins 大師說的話：「 For a project like mission control, GraphQL and Relay were a near-perfect solution 」，你想要了解 React 未來趨勢和 GraphQL 嗎？

- - - -

想知道這些答案嗎？那一定要來 [2016 JSDC](http://2016.jsdc.tw/,'2016 JSDC')，讓我們一起來一探究吧！

售票時間快截止囉，有興趣的朋友們記得移動腳步到 [KKTIX 售票網站](http://jsdc-tw.kktix.cc/events/jsdc2016, '售票於 9/16 截止')
