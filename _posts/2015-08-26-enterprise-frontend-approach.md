---
layout: post
title: 企業開源前端框架整合
author: df1
description: 經過多年的發展，今年HTML5已制定完成，正式成為W3C推薦標準。加上Mozilla等組織付出的努力...
image: https://www.linkedin.com/mpr/mpr/AAEAAQAAAAAAAAO2AAAAJDYwZWY1OGVhLWY1NGItNDQ2Mi1hNDE4LTc2NDRmODgxMjFmNw.png
tags:
  - enterprise
  - frameworks
tableOfContents:
---

![攝於COSCUP 2015](https://www.linkedin.com/mpr/mpr/AAEAAQAAAAAAAAO2AAAAJDYwZWY1OGVhLWY1NGItNDQ2Mi1hNDE4LTc2NDRmODgxMjFmNw.png)


## Open Web與開源之道

經過多年的發展，今年HTML5已制定完成，正式成為W3C推薦標準。加上Mozilla等組織付出的努力，open web已經帶我們脫離了以往舊IE年代封閉的桎梏，讓我們有快速的瀏覽器可使用之外，更讓我們在各種裝置上都有良好的使用者體驗。在這個趨勢下，許多企業體認到擁抱open source對企業帶來的效益。連Microsoft也將其整體策略大幅調整，將.NET開源化、收購R語言工具公司，向open source社群靠攏。


![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAREAAAAJDRmNjM0NGYwLTA4ODQtNDExNC05ZDc0LWFlYzIzOTU0MzQ5ZQ.png)

圖：微軟CEO Satya Nadella在公開活動上表示『Microsoft loves Linux』(轉載自[Information Week](http://www.informationweek.com/cloud/platform-as-a-service/if-microsoft-loves-linux-why-not-red-hat/a/d-id/1316800?image_number=1))

2015年7月，Adobe Flash連續爆出重大安全性漏洞，引起了Mozilla、Google、Facebook的同聲表示反對立場。大量使用Flex打造企業應用的公司紛紛採取動作，加快其往open web轉移的速度。   

## 前端技術景觀（Technical Landscape）

Google、Facebook、Twitter等網路服務迅速成長，這幾家網路大廠也紛紛釋出自家發展的framework或library（如Google的Angular、Facebook的React、Twitter的Bootstrap），並在初期即將其開源，供開發者使用或延續其開發，激盪出許多開源的火花。有了這樣的良性循環，前端技術之發展也因而較後端明顯迅速且多樣化。因此，開發者及企業架構人員往往需持續關注其發展，以跟上市場的腳步

我們先將業界最值得了解關注的開源前端技術加以分門別類，並將各類別中名字最響亮的佼佼者（其中不乏德高望重的前輩，也有後起新秀）的技術名稱直接列出，並簡單講述其優缺點（表1）。

**MVC (or MV*) Framework：**協助架構整體前端程式，使其層次分明且好維護。提供資料與畫面的雙向繫結（資料變動時，畫面上的顯示值會跟著變動，反之亦然），與各種好用的utility（如：與後台的溝通、字串日期處理、流程控制等等）；但不提供任何具體的UI widget或CSS style。最具代表性的框架為Google提供的Angular JS 。

**Style Framework：**提供簡單好用的CSS class協助架構網站的RWD （Responsive Web Design）行為，並提供簡單的UI widgets。代表為Twitter提供的Bootstrap。

**DOM Manipulation Library：**提供簡單語法，來選取網頁上的元件並進行操作，方便撰寫UI邏輯；另亦提供多種utility。代表即為歷久不衰的jQuery。

**Widget Library：**提供特定或是一系列的UI widget。如以jQuery為基礎的jQuery UI與jQuery Mobile，前者專注於桌面，提供表單、表格、拖拉等元件，後者則專注手機的使用者體驗，提供手機上的UI元件。另外也有許多特定功能的widget library，如提供rich text editing的CKEditor[註1]等等，實在是族繁不及備載。Angular UI提供了許多angular directive形式的UI widget供使用；Ionic則是以Angular為基礎的輕量級手機widget library。

**Visualization Library：**提供資料視覺化、圖表繪製功能的library。SVG為web上的動態向量圖標準，有放大不失真的特性，較符合RWD的需求；但若資料點或圖形數目過多，則容易造成頁面效能不佳。Canvas則是HTML5提供的畫板繪圖方式，不會因圖形數量影響效能，常用於複雜的繪圖與遊戲上。一般商用圖表仍以SVG方式為大宗，以D3為代表。

**Monolithic Framework/Library：**市面上亦有開源的技術，提供從UI架構面到桌面及行動UI widget都全包的一站式（one-stop）解決方案。代表為Ext JS[註1]。

**Next-generation Component Framework：**Web component為下一代標準的網頁元件化技術，代表為Polymer。React也是基於類似概念，專注於view component的技術（但不是web component）。因使用VDOM技術減少了不必要的render，效能相當傑出，且加上flux架構的支援，可以做到在後台render（即isomorphic），因此不需擔心瀏覽器相容性問題。已經廣泛應用於Facebook、AirBnB等網站。

**Miscellaneous  Libraries：**為了滿足多樣化的需求，當然還有許多未被提到的技術：如icon library（如Font Awesome）、純粹幫助templating的語法（如hogan、handlebar.js）、處理特定資料的 JS utility (如處理excel的sheet.js)等等。

![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAXSAAAAJGIwMDYyY2FiLWE5NmItNGM0Ny05YzhiLWU1OGJiYTllZDI5NA.png)
表1：值得一提的前端開源技術及其扮演的角色類型

經常聽見這樣的疑惑：到底哪些技術屬於framework，哪些應該稱為library呢？Framework提供了整體前端的架構性，如Angular為MVC framework、Bootstrap為style framework；Library則較無架構性，僅提供較特定的功能，大多不會貫串整個前端程式，需要時候將其include進程式內即可使用。如jQuery、林林總總的小UI Widgets、圖表library等等。

註1：雖為開源且提供開源授權，但在企業內部程式不開源的情況下仍需購買商業授權之軟體。需注意開源與免費並不能畫上等號，企業使用前需了解其授權類型。

## 壁壘分明的兩條改革路線

從以上列出的技術可以發現，有些技術可以共同搭配、相輔相成，以實現前端所需的所有功能；有些則會互斥。除了大多只會選擇一種主框架（如Angular、React之間的選擇）之外，我們也可以發現似乎有個明顯的界線存在monilithic framework與其他framework/library之間。

 
![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAANKAAAAJDMyYjgxMzYyLTIxZDItNDU2MS05OTk2LThhOGRmNzU3Y2MwOA.png)
圖：Monolithic與 open-source-mashup 兩種改革路線示意圖

## Monolithic路線

Monolithic路線的framework的目標是讓開發者以一套技術解決所有前端複雜的需求，以ExtJS為代表。ExtJS已經是個歷史悠久的開源套件，他原先是個Yahoo YUI的擴充，出現於2007年。在2010年，Ext與其他技術整併後成立了Sencha這間公司，方向轉為偏向對企業的支援。Sencha號稱是業界唯一提供純JavaScript的web application + widget framework，並以公司的力量支援企業，且提供IDE的公司。主力除了Ext JS之外，還有針對Mobile UI的Sencha Touch。ExtJS適合製作UI較為複雜的應用，我們在Synology與QNAP的NAS後台，以及中華電信的客服網站都可看見其蹤影。



在下圖，我們大略將前端技術分為View及Logic/Data兩大塊。View部分包含了widgets（如表單裡的元件、下拉選單、可以排序與篩選的表格、美觀的彈跳視窗、圖表等等），另外也控制的整個single page application （SPA）頁面的外觀與排版。Logic/Data部分則是負責頁面的UI邏輯（如操作流程、表單驗證等等）及與後台資料串接（如Ajax與data model）。整體的架構以及data binding則屬於橫跨view與data的範疇。Monolithic framework野心勃勃地將所有功能都囊括進自己肚子內。

![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAV4AAAAJGFiYjY3M2MzLTdiYTctNDQyOS1iMWI1LTAxZGVlZjQ3YTY5Zg.png)
圖：Monolithic framework幾乎將所有前端需要的功能都全包，唯有少數可以直接透過HTML5標準API來實作，不需要framework。

值得一提的是，在2015年中最新推出的6.x版，Sencha將Ext JS與Sencha Touch合併，以達到企業希望在桌面及手機版的web程式都能共用程式碼的目標。以前一直未能合併的原因，歸咎於手機版的使用者行為實在是與桌機的widget差異性太大，很難藉由RWD來做到良好的mobile UX；另外則可能還有行動裝置上的效能問題。在Ext JS 6，將手機與桌面合併的方式其實是透過兩個不同的view：給手機的稱為『modern』，給桌面的稱為『classic』，但是背後的logic/data部分可共用程式碼。雖然不是真正的single code base，但似乎已經是不錯的折衷方案。

![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAH_AAAAJDRhNWFiNmVjLTY1MTUtNDUxNC04NGFkLTlmY2JmNzk1YmY5Yw.png)
圖：Ext JS 6將Ext JS與Sencha Touch合併後的架構（來源：Sencha Blog）

 

## Open-Source-Mashup路線

來看開源這個陣營，可豐富許多了！我們舉Angular JS為例，來作為整體架構。Angular也是個超級英雄等級的framework，提供了相當良好的架構與dependency injection機制，讓開發者進行模組化開發，也提供許多logic/data相關的支援。但是他不包含UI widget以及style/layout的部分。

於是，開發者必須自行將剩餘的拼圖找齊，以實作出完整的web app。Style/layout的部分比較簡單，只要套用Bootstrap即可擁有RWD layout以及簡單的佈景主題。但是在widget部分，恐怕就沒那麼單純了。

企業應用所需要的widget百百款，我們可能需要集結非常多的第三方元件（需以Angular撰寫，或提供Angular directive的使用方式）以達成各種需求。在這種大雜燴的情況下會遇到兩個課題：一是企業內部需要有個標準的技術集合，讓開發者遵循，避免各自尋找元件造成技術發散；第二則是需要統合不同的第三方套件往往有不同的外觀及行為。因此，企業需要安排專屬的人力或template團隊，管理集結後的技術及版本，定義各種技術的用槍時機，並負責維持UI外觀及操作體驗的一致性。

![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAbfAAAAJDU3ZWUzNjZiLWUwZTctNGE3Yi05ZGQ4LTY5NWFhNTM4ODQ1OA.png)
圖：Open-source-mashup的作法，通常是選定的基本的framework之後，再加上企業所需的各種UI widget元件及style來達成。以Angular架構為例，在widget上常使用Angular UI提供的各種widget，在手機上則使用Angular Ionic的元件。

## 結語

未來的前端趨勢無疑是朝著多樣化的open-source library以及component-based型態來前進，但對企業來說，若要創造一個公司內部的標準方案，則需自行拼湊出適合的組合。本文探討的兩個主要路線，企業仍需評估其人力與web app的實際需求來進行最佳的決策權衡。 在這個前端技術爆炸的年代，企業若能掌握其脈動並實際嘗試，無論最終是否導入，均會是非常寶貴的知識經驗資產。

