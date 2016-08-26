---
layout: post
title: 初學者 JS 懶人包，入門 JS 先看這一篇
author: df1
description: 身為初學開發者 JavaScript 的方向有許多不同方法，我們到底該何去何從，到底是該學哪一個框架與哪一個瀏覽器為核心探討，直接整包提供給你
image: http://2016.jsdc.tw/dist/images/jsdc-mascot-250.jpg
tags:
  - beginner
  - 懶人包
tableOfContents:
  - text: For初學者
    link: jsdc2016-beginner-pack#for
  - text: JS入門介紹
    link: jsdc2016-beginner-pack#js
  - text: Web前端技術與最新發展
    link: jsdc2016-beginner-pack#web
  - text: 網頁的構成
    link: jsdc2016-beginner-pack#section
  - text: 議程推薦
    link: jsdc2016-beginner-pack#section-2
  - text: 小結
    link: jsdc2016-beginner-pack#section-3
---


## For初學者

[JSDC](http://2016.jsdc.tw/) 扮演了台灣 JavaScript 開發者向世界大師學習的窗口，同時，也肩負著JS技術推廣的角色，引領更多開發者進入這個領域。我們希望在議程的設計上，除了邀請一流大師之外，也強調基礎技術的教學與語言核心的探討。

若是你對JS與Web前後端技術還不熟悉，對於 NodeJS 也一知半解，但是還是想藉由參加JSDC來取得近幾年最新最潮的知識，這邊的概述可以讓你對JS技術有個全面但粗淺的理解，解釋大部份需要了解的名詞；另外，也推薦一些比較入門的議程。


## JS入門介紹

JS 是一門程式語言，但他與其他眾多語言不同的地方，在於他是Web前端指令碼的標準（由[W3C組織](https://www.w3.org/)訂定），所有瀏覽器都要能處理JS，才符合標準。現在看到的所有前端邏輯互動都是用JS撰寫。（雖然以前會用Flash來做，但是他是封閉的技術，且不是標準，於是逐漸式微。

這就是Open Web的概念，也是因為如此，才有現在瀏覽器之間的JS效能競爭，我們今天才有快又好用的Chrome/ Firefox/ Edge可以用）。

如今 Google/FB 崛起，以這些巨擘為首，帶動了前端技術的爆炸性成長。開發者大幅增加，各式新應用不斷的被開發與使用，讓 JavaScript 不再只是傳統前端語言。有了 [NodeJS](http://nodejs.org/)，我們可以用JS寫後端。於是JS成為近年最紅的語言。在今年2016，JavaScript仍然是Github上最多人使用的語言喔！


  * [GitHub 公布 10 大热门编程语言：Javascript 居首](http://tech.sina.com.cn/i/2015-08-20/doc-ifxhcvry0716678.shtml)
  * [TIOBE 公布 2014 年度程式語言，由 JavaScript 摘冠](http://technews.cn/2015/01/12/javascript-won-the-programming-language-of-2014/)


# Web前端技術與最新發展

## 網頁的構成

網頁是由三大元素所構成：HTML、CSS、JavaScript，我們將分別討論這三個技術所扮演的角色，以及最新的發展。


  - HTML：負責頁面的結構與內容，如標題、超連結、表格⋯⋯都有專屬的HTML語法。當我們檢視網頁原始碼時，看到的&lt;xxx&gt;&lt;/xxx&gt;形式的語法就是HTML。這是Yahoo!奇摩的原始碼：
![](http://i.imgur.com/SGxx6CXr.png)
HTML5則是最新的HTML標準，提供了許多新的元件種類與對應的JS API。以下幾種是比較需要了解的：
  - Canvas：提供畫板繪圖功能，很多2D遊戲都用這種方式實作喔！
  - WebSocket：即時與server端雙向通訊，常用來做聊天、即時互動等等應用。
  - Audio/Video：提供標準的聲音＆影片元件，可以使用JS控制播放。
  - Local Storage：讓網站可以存資料在瀏覽器裡。

  - CSS：負責頁面元件的樣式，如顏色、字型大小、背景圖等等。上圖右下角的Styles的內容就是CSS的語法。如果沒有CSS，Yahoo!奇摩會變得像這樣：
![](http://i.imgur.com/ER99nlF.png)

  - JavaScript：終於來到重頭戲了！JavaScript負責網頁的行為，如點擊之後秀出某些隱藏的元件，或是從server端取得資料（如：Gmail會去後端取得你的email列表等等）。從後端取得的資料，通常以JSON格式回傳。JSON格式的範例如下：

```:javascript
  {
    "id": "061519", 
    "name": "John Doe", 
    "job": "Engineer" 
  }
```

[JSON](https://en.wikipedia.org/wiki/JSON) 是由 [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) 所提出（今年在 [Modern Web](http://modernweb.tw/)有來台演講喔！），以文字為基礎，容易讓JavaScript處理（與JavaScript物件及陣列語法非常相似），且易於讓人閱讀。

最近的 JS 技術愈來愈多，常讓初學者眼花撩亂。（因此出現了一個新名詞：JavaScript fatigue，被JS新技術淹沒，感到暈眩不知所措）。不過，其實在前端的JS技術不脫這幾種，

## 好用的Library

在以前，寫網頁的JS只能用原生的DOM API來操作網頁上的元件(DOM)，其語法較為艱澀難懂。到2006年，有了jQuery這個library，讓我們可以用簡單的語法來操作操作DOM，這也是許多人入門前端工程第一個學習的套件喔！另外，近年來也有非常多的open-source library提供我們簡單的方式，來達到快速開發的效果。

### [jQuery](https://jquery.com/)

提供方便的語法來操作 DOM與其 CSS，也提供打後端server、一些前端邏輯操作簡單的方法。在今年6月已經 [release了3.0版](https://jquery.com/download/)！

### [D3.js](https://d3js.org/)

讓我們簡單的操作網頁上的SVG（向量圖形）來繪製圖表，將資料視覺化。最近的大數據趨勢讓資料視覺化的議題變得特別夯喔！
  
### [Three.js](http://threejs.org/)

用WebGL的3D技術，讓我們在網頁實作3D遊戲！林林總總的 UI widget套件：開發一個Web Application一定需要相當多的表單元件（日期選擇器、下拉bar、Rich text編輯器、按鈕⋯⋯）、進度條、資料表格，甚至拖拉、樹狀列表等複雜的元件。很多library專注提供單一的widget，有些則是包山包海，如jQueryUI、KendoUI、ExtJS等等。

### 開發測試相關Library與工具

如單元測試使用的Jesmine，測試一連串End-to-end操作的Protractor、模組化與管理相依性的Library：Browserify、webpack、SystemJS、RequireJS等等。這些工具幾乎都是開發時使用的，多半是在NodeJS環境提供。他們只是輔助，不包含在我們前端的程式碼裡面喔！


### 前端框架（framework）

當網站的規模愈來愈大的時候，應該很難想像如何架構好一個容易管理、架構分明的程式吧！這時候，我們就需要框架來輔助了！這邊介紹幾種一定要認識的框架：

### [Angular.JS](https://angularjs.org/)

以html的寫法來讓整個UI架構清晰分明，並提供data binding。

實際例子例如，我們寫

```html
<ul>
  <li ng-repeat=”myList”></li>
</ul>
```

若myList是有10筆資料的陣列，則&lt;li&gt;會被重複10次。若再塞5筆，則畫面上會再多5個&lt;li&gt;。這就是Angular中的ng-repeat與data binding帶來的效果，簡單吧！ 

另外他也提供許多架構大網站所需的功能，如URL routing、http等等。現在最火熱的Angular 2版本，也是使用相似的概念，並希望讓初學者更容易上手，且提升效能。目前已經推出RC5，相信離正式版已經不遠喔！
  
### React JS

其實React本身只是一個協助定義UI元件的library，讓我們網頁上的UI可以以JS function的形式元件化並重複使用。（與Angular相反，React是將html封裝到JS裡面。使用了一套JSX的語法讓我們方便在JS裡面寫HTML）。

但是，由於其functional的特性，許多架構大型網站的架構就隨之而生，如Flux與Redux，都是管理大型網站中react元件狀態的framework喔！

另外，由於UI可以藉由function來產生，那我們也可以把UI丟給後端的NodeJs執行，來降低前端負擔，這就是server render的概念。這種前後端都可以跑的JS，我們稱作Universal JavaScript。

還有非常多[React](https://facebook.github.io/react/) 相關的技術，如：用React的語法寫原生手機App的React Native，還有讓開發如虎添翼的Time-travel debugging，都是時下最夯的議題喔！

### 其他新興 Framework/Library：

  - Vue.js：與React類似，較為輕量的component定義library，也較容易上手。
  - [Aurelia](https://vuejs.org/)：與Angular類似的大型framework，使用ES6/ES7最新的語言特色。
  - Polymer：由Google開發，也是定義component的library，使用了W3C的WebComponent標準來封裝元件。

### 語言本身：

隨著愈來愈多人使用JavaScript，開發者們也發現現在的JavaScript（ES5版本）設計上的諸多不足。於是，除了JS語言本身的改版被大家迫不及待的搶先使用外，也有許多人發展了新的語法/語言，再用transplier來轉換成JS喔！

  - [ES2015（ES6）與 ES2016（ES7）](http://blog.jsdc.tw/2016/08/20/node_v6_and_es6)：這是ECMA所規範JavaScript的新標準，提供許多新的語法，目前已經廣泛使用中。
  - TypeScript：微軟擴充了ES6，加上一些方便的decorator語法。
  - CoffeeScript：改變了JS的語法，以達到簡化的目的，但大部分與JS類似。
  - asm.js：讓C/C++寫出的程式可以在瀏覽器中以接近原生的效能執行。透過限縮JS語言來達到高效能的目的。
        - 如果想對於JS語言的歷史與分支有個概觀，可以參考 Solar System of JS：[https://shaunlebron.github.io/solar-system-of-js](https://shaunlebron.github.io/solar-system-of-js)

## 議程推薦

- 使用 Angular 2 與 Firebase 實現 Serverless 網站架構（保哥）
- GraphQL 經驗分享（XP Steven）
- How to adapt to change & exploring Vue.js （Blake Newman）

# 小結

看了那麼多的名詞，相信應該對今天的 JavaScript 及前端開發技術有了個整體的概觀吧！

今天先為大家cover到前端技術的部分，未來幾週，小編志工們還會繼續講到 NodeJS，還有更進階的技術主題與議程介紹，敬請期待！

## JSDC 2016 活動現正售票中

對於開發 JavaScript 有一定認識，JavaScript 深度中毒，非常熱衷於網站易用性，以及喜愛開發的朋友們，不可錯過的年度研討會，

台灣一年一度最大場 JavaScript 與全世界好手齊聚一堂。

 　- [JSDC 2016 報名網址](http://jsdc-tw.kktix.cc/events/jsdc2016)

　 - [JSDC 2016 官方](http://2016.jsdc.tw/)

