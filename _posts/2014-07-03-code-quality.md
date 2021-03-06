---
layout: post
title: 導入快速開發，工程師打造出上等程式品質祕技
author: smlsun
description: 快速開發，同時打造高品質程式，如何在這兩者間兼容且並行前進，都在本篇中一一介紹
image: https://smartbear.com/SmartBear/media/images/Solutions/code-review-developer.png
tags:
  - 專家介紹
  - 程式開發
tableOfContents:
  - text: 架構論壇
    link: #架構論壇
  - text: 程式開發
    link: #程式開發
---

![程式碼驗證](https://smartbear.com/SmartBear/media/images/Solutions/code-review-developer.png)

# 導入快速開發，打造出上等程式品質
##前言

程式語言何其多，確認程式的正確只有透過測試才能達到，在通往功能的正確與系統的穩定，需要從各種不同的測試來達到，無論是人肉測試或是自動測試。

在開發的過程中，除了撰寫程式，接著就是一連串的 try and Error，程式開發的速度，取決於驗證的速度，系統的穩定度取決關鍵程式碼的驗證。

透過撰寫測試程式來加速開發速度，不只是心理上的安全感，而是程式開發的快感！

追求程式碼的快、狠、準，從測試開始，透過持續整合將一連串加速的過程連綿不斷的輸出，成為頂級超跑不是夢想！

---

撇去對開發語言的熟悉，屬於知識的範圍，更重要的是開發的觀念，程式開發要快最根本的是 coding 以及確認結果是否正確，關鍵就在於 test 的撰寫，就像當兵有一句話 「能坐就不站，能躺就不坐」，套在程式開發 「能 command 就不啟 server」，如果能透過 command 就確認程式正確，又何必啟動 server 實際到要測試的功能，多了好幾個步驟，如果不幸沒辦法一次到位，將會消耗 N 倍的時間。

實際在開發的進行時，可能是個人的 project，或是團隊共同開發，不管是個人或團隊，其複雜度隨著人數的增加也將倍數成成長，先從個人的角度來探討 test 的重要性。

## One Man Solo

從個人的角度，利用撰寫 test 來加速開發循環，可惜，test  往往在專案緊急時最易被捨棄的，在專案緊急的狀況，又捨棄了最重要的驅動引擎，時間就在不停的開發確認程式正確的循環中消耗。

以下圖來說明，若是在個人開發階段，將重覆 Design -> Develop -> Test 的流程，直到功能完善為止，若是單次測試所消耗時間還算少，不過正常程式開發是需要重覆很多次的，累積起來的時間將會很可觀。

![enter image description here][1]

除此之外，在重覆的開發撰寫程式，接著確認程式正確的過程中，若沒有透過撰寫 test  來確認程式的正確，沒辦法累積測試足跡，過了一段時間，或是當該功能出現問題時，往往需要再次將測試環境還原，然後再次回憶當初功能設計的方式，又是另外一種浪費。


除了開發階段的工作，還有版本發佈的流程，也就是上圖的最後步驟 release，就像前面所說的要能夠快速發佈，關鍵在於每個循環是否夠快。

發佈到測試機或是正式環境這樣的作業，長則半年短則一個禮拜或每天，節省時間最快的方式就是自動，隨著時間的推移，手動的方式所花成本遠遠高於自動的方式！要做到竟量不讓人員介入，需仰賴  CI 的幫忙。

![enter image description here][2]

程式的範圍一旦大到需要團隊一起開發，就不是單純個人的測試可以確保程式的健康，因此 ...

# Team Work

從團隊的角度，每個開發人員將程式上傳後進行編譯、打包，並且將打包好的程式 deploy 到測試機，解壓縮、運行 server ，供測試人員進一步進行確認，如果確認測試正常，在將程式打包，deploy 到正式的測試機，這樣的循環每天都在上演，每一個環節，都有可能因為異常，需要停下來進行處理，這樣的工作若要人負責，通常需要一個人力監控所有過程，本身就一種浪費。


持續整合，在實際的軟體開發中，被進度苦苦追趕的工程師們，往往不會想到要利用他來改善專案的穩定度

功能開發都來不急了，哪來的時間弄持續整合？

經驗不足的情況下，通常程式開發滿足需求就來不及了，哪來精神改善開發流程？

軟體開發通常不會是只有一個人的事，即使個人有極強的程式開發技巧，對於開發過程中總是能夠避開可能的問題，但實際的狀況是與你合作的 member 素質不一，通常一個 bug 發生不是對個人的管控與要求，而是需要提高到團隊的高度來進行，透過 CI 的輔助來更有系統的完成開發中每個環節與流程。

用比較傳統的程式建置流程來看，不外乎開發、編譯、測試、打包、發佈，這些環節；就如一開始說明的圖一樣，軟體開發就是一直不停的重覆疊代從 開發、編譯、打包、測試、發佈這樣的過程，每次疊代所花的時間越少，專案開發的速度就有多快，就像引擎轉動一樣，轉動的越快，效率就越高。

在沒有導入 CI 的團隊經歷了一段時間，期初在每個環節用人工的方式控管還可以過的去，一旦專案變大客製變多，需要疊代的次數一多，就不是單純用人力可以應付的，

尤其是多人開發的情形，即使有版本控管的幫忙，也沒辦法確保所有程式是最新的，就是有人以為程式已有上傳到版控主機，進行測試時發現明明程式人員回報程式有改，但測試人員就是發現錯誤一樣。

或是測試已經正常，但發現發佈出去的程式又錯！？可能的原因有很多，人為疏失來講就是包版時利用檔案傳遞可能又傳到錯誤或是不是最新的程式碼。

不知道大家是否遇到同樣的狀況？至少我遇到了！在專案時程的壓力，bug 永遠解不完的情況下，team member 每個人就像陀螺一樣不停的轉動，永遠沒辦法預期下一個問題會在哪個環節蹦出來...


# 結論

搞定測試環境是首要之務，如果你開發 java 就應該要有 junit 的運行所需 lib，若你是寫 node js 就應該使用類似 mocha 這樣的套件，開始學習一樣的新的語言時，語法的熟悉後，應該要先學會寫該語言特性的測試碼，透過測試程式的撰寫，可以讓你更更加快速的學習或是開發程式語言。

團隊開發的情況下，在開始一個專案時，先把專案的部屬流程搞定，越早搞定在往後的開發越節省時間，並且每次開發流程循環，或是定時運行開發人員撰寫的 test，確保專案總是保持在健康的情況。

前陣子有過 TDD 的論戰，要注意的是：寫 test code 不等於 TDD，寫 test code 是加速開發的必要手段(認真)，若要討論 TDD 那又是另一門學問了。

最後，一個專案或是團隊是否是快樂、幸福的，可以參考 [The Joel Test][3]，test 是你開發工作的好幫手、好夥伴，有了他將會更快樂與幸福，好好享受 coding 的樂趣！


  [1]: https://lh6.googleusercontent.com/-kHmKj9EoO1E/U6Kyq0QI_aI/AAAAAAAAOZw/q4_tkI4DCxg/s0/continuous-integration-design-process.png "continuous-integration-design-process.png"
  [2]: https://lh4.googleusercontent.com/-lBRIEFJdk9A/U7n8S5mj38I/AAAAAAAAOaY/at9cFuhwPuM/s0/Automated-Policy-Enforcement.png "Automated-Policy-Enforcement.png"
  [3]: http://www.joelonsoftware.com/articles/fog0000000043.html
  [4]: https://www.ptt.cc/bbs/Soft_Job/M.1390977011.A.FC1.html

---
