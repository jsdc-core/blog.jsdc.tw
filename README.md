JSDC Blog
---------

## 寫文章

1. clone 這個 repo 或是 fork + pull request 的方式

   ```bash
   $ git clone git@github.com:jsdc-core/blog-theme.git
   ```
   
2. 切換到 `master` branch

   ```bash
   $ git checkout master
   ```
   
3. 將自己的基本資料新增到 `_config.yml` 內
3. 在 `_posts` 目錄下以 `年-月-日-網址.md` 的格式新增/命名檔案，像是 `_posts/2014-06-27-hello-world.md`
4. 設定文章

   ```yml
   ---
   layout: post
   author: 作者名稱，_config.yml 必須有對應資料
   description: 文章說明，用在首頁、meta
   tags:
     - hello
     - world
   tableOfContents:
     - text: 段落一
       link: #段落一
     - text: 段落二
       link: #段落二
   ---
   ```

## 修改 js、css

1. 同寫文章的第一步
2. 切換到 `theme` branch
3. 執行 `make watch`，當檔案有修改就 rebuild
4. 修改 js、css
5. 全部都修改完後執行 `make release`
6. `commit` js、css 的修改（這筆 commit 只能有 js、css），把 hash 複製起來
7. 切換到 `master` branch
8. 使用 `cherry-pick` 把 js、css 修改拉到 `master`

   ```bash
   $ git cherry-pic 剛剛那個hash
   ```

## 補充

### Theme

* 前端模組化使用 `component.io`，沒有用他的 Local Dependency 機制，是為了避免門檻過高，但如果前端越來越複雜，可以考慮使用。
* `component.io` 版本使用 1.0.0 以上版本（目前還在 rc）
* 所有需要用到的 js、css、圖片都要到 `component.json` 中設定
