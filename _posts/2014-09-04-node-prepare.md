---
layout: post
title:  技術轉換需知，學習 Node.js 的前期準備
author: clonncd
description: Node.js 教學延伸出來的導讀文章之一，也是每次在活動一開始的時候，就會跟大家介紹的這門技術的初探。
image: http://code.danyork.com/files/2012/04/nodejs-logo.jpg
tags:
  - news
  - 活動
tableOfContents:
  - text: 訊息發佈
    link: #訊息發佈
---

![image](http://code.danyork.com/files/2012/04/nodejs-logo.jpg)

持續推廣 node.js 對於新手教學上，通常會遇到許多狀況，以及許多不同的迷思，總和出來其實可以看到一些常見的問題。

這篇文章也是藉由數次的活動發想實踐當中，延伸出來的導讀文章之一，也是每次在活動一開始的時候，就會跟大家介紹的這門技術的初探。

## 學習之前，先學會忘記

就像是所有武功絕學一樣，要學一門武功，一個新的技術，首先你需要改變自己的既有思想，這實際上真的很難，但就對於自己來說，也很有多既有概念，框架其實是無法捨棄，但是既然決定學習一件新事物，那勢必就是要改變。

對於已經有學習過一些程式編輯，或者一些程式框架的開發者，建議一開始學習 node.js 的朋友，先忘記掉所有你學過的語言，以及開發方式，試著忘記既有框架的狀況下，去學習這門技術。

在沒有既定框架下，不去過分討論，比較任何語言上的差異，而是先從他的背後歷史意義，演進接著再瞭解近期的改變以及未來規劃等。

以 Node.js 來說，在 2009 年，給與的示範就是一個聊天室，也表現提高 high concurrency 的實做，在當時定爲爲處理高承載量的新語言新服務，透過 JavaScript 實踐出來的結果。

到了 2012, 2013 年開始， Node.js 朝向不同環境中，透過許多公司投入全職開發者，將 Node.js 發佈到不同平臺上，同時依靠社群的力量，開始有極具的成長，也帶來不同的聲量。

最近的趨勢是開始走向， Node.js 嘗試解決分散式系統架構，以及直接嵌入式系統中，所以意味着開始有許多不同的發展，也有發展出不同於 Web 的應用。

## JavaScript 並不是 blah, blah, blah ...

講了許多過去歷史，雖然說大家已經開始試著要去忘記以往框架這件事情，但是我相信一開始還是做不到，這真的很難，但是請務必嘗試著，至少試著親手輸入每次的程式碼以及每次的相關測試，哪怕只是 hello world，跟着一起從頭開始進行所有流程。

在開宗明義上，跟大家說，Node.js 其實就是在寫  JavaScript ，拋棄以往對於所有瀏覽器上的謬誤，以及對於所謂  IE 或者其他瀏覽器上面可能發生的錯誤。現在開始所有的事情都發生在背後，全部的事情都是在伺服器裏面進行。

所以可以說是，Node.js 程式編輯，其實是使用 JavaScript 爲基礎，透過 Google V8 engine (JavaScript runtime) 進行後端程式的編譯。

## 非同步 ASYNC & 同步 SYNC

在以往的程式開發，一般的教育上我們都跟所有人講說， synchronization 序列化的程式開發，意思就是每個程式都是序列化進行，每個程式都是一步一步的慢慢進行。

在開始 Node.js 之前，接觸程式之前執行任何範例之前，我們必須記住在 Node.js 裏面，所有的東西都是非同步化，這也意味著其實你無法預測程式什麼時候會結束。

雖然聽起來有點怪異，不過這的確比較像是真實世界正在發生的狀況，最常舉的例子就像是準備早餐，當一開始準備早餐的時候，其實就是一個 process ，一開始我們需要準備煎蛋，準備咖啡，準備麵包。

如果使用 sync 的方式進行，我們的進行程序會變成

{% highlight javascript %}

	/*
	1. 先開始煎蛋，直到蛋煎好了
	2. 開始泡咖啡，直到咖啡煮開了
	3. 開始烤麵包，直到麵包完成
	*/

	getEgg();
	getCoffee();
	getBread();

{% endhighlight %}

序列化的方式增加我們的準備時間，整個準備時間開始大幅增加，因爲每個執行序列都是一個一個完成後才開始執行。

可是在現實世界裏面，我們會怎麼做？

{% highlight javascript %}

	* 開始煎蛋（做好了，再取蛋）
	* 開始泡咖啡（泡好了，再拿咖啡）
	* 開始烤麵包（做好了，再拿麵包）

	var cook = require("cook");

	cook.getEgg(function (egg) {
		return egg;
	});

	cook.getCoffee(function (coffee) {
		return coffee;
	});

	cook.getBread(function (bread) {
		return bread;
	});

{% endhighlight %}

在執行 async process 當下，我們就`直接進行`了所有的事情，執行了所有方法一開始我們就並行了所有的程式，並不是一個一個等待，而真正完成時間我們並不知道，我們知道的是，這些事情其實都是同時並進。

所以程式並不是一個等待一個，一個等待一個，而是一次性的併發出來，觸發之後再進行通知動作。


## Callback 程式藝術

剛剛提到的 Async，肯定要提到的就是 callback 這個特性，所有的流程處理都是在 callback 裏面所進行，這聽起來有點難懂，大部分的人也搞不清楚到底是怎麽一回事。

最長舉的例子就是直接啓動一個新的服務器。

{% highlight javascript %}

var server = require("http");
var fs = require("fs");

server.createServer(function (req, res){

  res.end(content);


}).listen(3000);

console.log("start server");

{% endhighlight %}

特別要說明的部分就是，大部分的程式都是採用類似的方式執行，注意 `createServer` 這個部分，裏面的匿名函式雖然宣告，但是並不是直接觸發，而是等到當有使用者登入伺服器的時候才會觸發這個事件。

這也是通用的 callback 寫法，大部分的處理都是如此，就只要先記住這種寫作的感覺。

所以這也意味著，雖然 Node.js 是單一 Process 的程式，實際上可以透過 callback / event driven 機制達到類似像 mulit-thread。

## 爲何要學習 Node.js ，優勢？

最後是給所有對於 Node.js 質疑的人，Node.js 從 2009 年宣告之後，被發展到今天的狀況，透過 open source 的力量，加上許多企業全力的合作，已經把 Node.js 這個程式形成一股無法動搖的力量，也成爲這些企業的基礎建設之一。

就實際上來說，我們可以說 Node.js 可以透過程式開發來瞭解到平行化處理的流程，同步化處理的效益，因爲使用 event-driven 的特性，加上 v8 engine 的效能，因此 Node.js 在相同機器底下能夠支撐的 concurrency 會提高許多，所以對於開發高併發，高承載量的服務器其實是很有幫助的。

雖然說這對於開發成本上是比較高的，但另外一方面，這也是對於前端開發者的一個優勢，因爲沒有人比前端還要瞭解 JavaScript 特性，目前來說大部分真正瞭解 JavaScript 特性的就是前端開發者，也表示你們可以親眼見證轉職的可能性與機會。

## 後續討論

大部分的人都會問，對於目前的項目有沒有可以建議的 Framework ，或者問現在是否適合改變到 Node.js 進行改寫。首先這個問題，沒有絕對的答案，但是先問自己，

 * 目前這個網站運作，有需要提高高承載量的需求?
 * 允許多久時間進行網站改寫，能否接受至少一個月沒有任何新進度？

如果以上答案都是 `Y` ，那答案就在各位心中。

在最近幾年其實 Node.js 已經有許多更多不同的變形，例如透過 node-webkit 可以進行 GUI 程式開發，透過 johnny-five 可以將 js 程式直接執行在 arduino 上面。甚至目前也有許多 robots 可以用 Node.js 進行程式開發。有人聽過 JavaScript 也可以寫音樂嗎？

因爲這些種種，我們必須承認 Node.js 的確對於 JavaScript 這門語言帶來巨大的震撼與改變。今年度 JSDC 2014 ，我們也特別規劃許多對於企業應用，模組開發，技術架構，及 JavaScript 最新流行趨勢的方向邀請各國講者來到臺灣。最精彩所有 JavaScript 頂尖技術全部都在 JSDC 2014

 * [JSDC 購買票網址](http://jsdc-tw.kktix.cc/events/jsdc2014)
 * [JSDC 2014 官方網站](http://2014.jsdc.tw/)

全文轉載於[技術轉換需知，學習 Node.js 的前期準備](http://blog.caesarchi.com/2014/09/nodejs_7.html)
