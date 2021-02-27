var tipuesearch = {"pages":[{"title":"About","text":"cd2021 課程倉儲: https://github.com/mdecourse/cd2021 內容管理: https://mdecourse.github.io/cd2021/ 課程投影片: https://mdecourse.github.io/cd2021/reveal 課程網誌: https://mdecourse.github.io/cd2021/blog","tags":"misc","url":"https://40823103.github.io/cd2021/blog/pages/about/"},{"title":"2021 工作流程","text":"請注意: http://fossil.kmol.info 僅支援 IPv6 網路協定. 2021 年起的工作流程已經逐步確立, 其中為了因應 G Suite for Education 改名為 Google Workspace for Education 後, 免費的 GDrive 已經不再提供 unlimited 使用, 因此 @gm 上的儲存空間將只提供當學期所使用的下載服務. 其實在網際網路上, 本來就沒有免費使用的服務, 差別只在於連線上網過程所使用的各種資源, 到底是誰在付出代價? 2018 年起 KMOLab 所開設的課程已經全面使用 CMSiMDE 建立動態與靜態網站, 其中的動態網站主要用於近端或網際的網站內容編輯, 而靜態網站則使用 Github , Gitlab , Heroku 與 Fossil SCM 進行同步伺服, 意即每一個與 KMOLab 有關的課程內容資料, 遠端可以有四個同步備份, 而近端則是工作目錄所在電腦, 則可以具有與遠端版本相同或相近的多個分散式備分內容. 雲端的同步資料中只有 Heroku 可以執行 Python, 但能夠免費使用的總容量限制在 500 MB 以內, 因此大多僅用於 Python 網際程式開發測試或跳板之用. 至於 Github 與 Gitlab 的競爭其實已經告一段落, 等塵埃落定, 勝出的一方將會與 Google 蹲點 10 年的 GDrive 商品一樣 (2012-2022), 不再提供用來打擊對手的優渥免費教育使用方案. 這樣的認知其實在受到 Openshift 中途拆免費使用者的台之後, 相比之下, GDrive 仍然維持每個帳號大約 15GB 的免費儲存量, 好像已經厚道, 但, 真正的原因可能是: 普羅大眾的網際儲存大數據, 仍然具有價值. 期望 Github 不要改變使用方針 以目前的情況來看, Github 對於上課專用的小 project, 在 2026 年之前免費存放 50 MB (目前的 limit 為 100MB) 以下的檔案, 然後總倉儲容量不要超過 1 GB ( Github 目前 最大容忍量 為 5GB), 應該沒有太大問題, 另外一個限制則是每個目錄下最多只能有 1000 個檔案. KMOLab 建立倉儲可以將 https://github.com/mdecourse/cmstemplate 當作 template 直接建立靜態網站與動態網站, 其中的靜態網站以 Github Pages 建立, 而動態網站則需要 Python 3 加上 flask flask_cors lxml bs4 markdown pelican leo 等模組. 針對將 Github 中的倉儲同步至 Gitlab , 也同時要啟用 Gitlab Pages, 則倉儲中額外需要 https://raw.githubusercontent.com/mdecourse/cad2020/master/.gitlab-ci.yml 進行設定. 而雙方倉儲的同步設定位於近端, 可以利用 git remote add 指令輕易達成, 一般是將推送到 Gitlab 的 git remote add 名稱設為 gitlab, 只要提交推送至 Github 後, 以 git push gitlab 就可以將同步資料的版本送到 Gitlab . 至於將靜態網站資料送到 Heroku 的設定, 則是透過 https://github.com/mdecourse/cad2020/blob/master/index.php 將倉儲的靜態內容以 PHP 伺服進行跳址傳送. 同步至 Fossil SCM 倉儲 將 Github 倉儲同步至 Fossil SCM 倉儲的目的, 其實就是考量若上述三個免費雲端儲存服務都面臨停用後, 在只有自架主機的情況下, 可以只使用 Fossil SCM 管理版本資料, 或者自行安裝 https://gitlab.com/gitlab-org/gitlab , 仍然可以在近端主機或遠端主機環境下的 Fossil SCM 與 Gitlab 倉儲維持與先前相同的工作流程.f 在此為了避免 Github 與 Fossil SCM 倉儲雙向同步下, 可能造成 FOSSIL 或 .fslckout 檔案的合併問題, 特別讓 Fossil SCM 倉儲保有 Github 倉儲的版本資料 (也就是 .git 目錄內容), 但 Github 倉儲則不儲存 FOSSIL 或 .fslckout 檔案. 實際的作法是以 Github 倉儲中的改版為主, 在 Fossil SCM 倉儲端僅透過 git pull 取得最新的 Github 倉儲內容, 然後再勾選 Fossil SCM 倉儲端設定的 dotfiles 選項, Fossil SCM 倉儲就能納入 Github 倉儲的版本資料. 基本的操作流程如下: github 利用 cmstemplate 建立 CMSiMDE 倉儲 github 端完成靜態 Github Pages 設定 fossil 端, 在對應的 wd 目錄, 以 git clone --recurse-submodules 取下 github 端的倉儲內容 fossil 端 wd 中設法利用 fossil open 開啟從 fossil init 所建立的 fossil 倉儲 將 fossil 空白的 FOSSIL 或 .fslckout 檔案複製至 wd/倉儲名稱目錄下 利用 fossil add . 或 fossil addremove 將 git pull 從遠端取回的版本資料進行新增 再利用 fossil push 與 autosync 功能, 將改版資料送到 fossil 端. 最後則將 fossil 端的 default-csp 欄位設為 https://fonts.googleapis.com, 以便讓靜態網頁可以正常透過 doc/trunk/index.html 取得.","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/2021-kmolab-prefered-working-flow.html"},{"title":"2021 Pelican 設定修改","text":"請注意: http://fossil.kmol.info 僅支援 IPv6 網路協定. 利用 Leo Editor 開啟 CMSiMDE 中的 config/pelican.leo, 然後利用 control + i 插入一個新的節點, 將節點標題改為 @clean 20210219.md, 表示要利用 @clean 指令在 markdown 目錄中新增一個 20210219.md 的 Markdown 格式檔案. 接著從先前的網誌中複製網誌文章的標頭格式資料, 修改標題與日期, 並且留意 slug 中必須要採用唯一的檔案名稱, 然後就可以先寫網誌的摘要, 之後再利用 @others 標註將隨後子節點中的內文區全部整合到 20200219.md 檔案中. 然後就可以開始寫特定主題的網誌內容. 假如你曾經見過網路上的網路文章除了英文標題外, 隨後還有一串不短的數字, 這一串數字就是與前面的文章主題結合, 然後可能用做該文章儲存的檔案名稱, 主要用來確認該主題加上數字的字串在系統中具有唯一性. 所謂同步 其實在各網誌間的所謂同步, 並非及時同步, 而是在各種可能的情況下儘量讓多方的資料內容保持相同. 那麼在完全同步之間的影響因素就是時間, 因為將資料從一系統轉到另一個系統需要時間. 以 CMSiMDE 上的 Pelican Blog 轉到 Blogger , 需要在 Leo Editor 以程式按鈕執行, 而實際操作過程需要將滑鼠停留在網誌文章節點, 然後點擊新增 Blogger 或編輯 Blogger 的程式按鈕, 一旦 Pelican Blog 的網誌文章正確存入對應的 Blogger 系統後, Blogger 會傳回 blog id, 並且透過程式安排將此一 blog id 存為該網誌文章的子節點標題, 而且是沒有內容的文章標題, 因此這些用來標註所屬 Blogger 與 blog id 的資料並不會影響 @others 導入子節點文章內容的功能. 由於目前的程式只會從網誌文章的最後一個節點存取 blog id, 因此若將同一篇網誌文章同步公開到多麼 Blogger , 新增或編輯時除了要注意滑鼠是否停留在文章主節點外, 還必須在新增與編輯過程手動搬遷這些 blog id.","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/2021-kmolab-pelican-setup-modification.html"},{"title":"2021 Spring 課程規劃","text":"請注意: http://fossil.kmol.info 僅支援 IPv6 網路協定. 每年的 Spring KMOLab 共開兩門課程, 網際內容管理與協同產品設計實習, 基本的課程規劃仍以承接 Fall 的計算機程式及電腦輔助設計實習為主. 重新導入 Fossil SCM 2021 年除了使用各種免費雲端儲存空間與分散式版次管理系統外, 特別又將能簡易配置在自架伺服器上的 Fossil SCM 拿了出來. 主要原因是 Fossil SCM 在功能提升與 IPv6 的環境下已經有大幅進步. 因此各種課程相關資料除了放在 Github , Gitlab 與 Heroku (只限存 500 MB), 也將同步存入近端工作站室中的實體或虛擬主機 Fossil SCM 系統中. (例如: http://mde.tw/cd2021 與 http://fossil.kmol.info/cd2021/doc/trunk/index.html 為同步資料, 其倉儲分別為 https://github.com/mdecourse/cd2021 與 http://fossil.kmol.info/cd2021 ) 五專部網際內容管理課程規劃 Spring 的網際內容管理課程分別開設在五專一精密機械工程科與四技一機械設計工程系, 因為五專一是高中一年級入學的下學期課程, 上學期只上過計算機概論, 因此五專的網際內容管理課程就從 Blogger 的網際內容管理系統導入作為開端. Blogger 是與 Google 帳號整合的 Blog 系統, 而 Blog 則是一種依照發佈時間排序的內容記錄, 五專課程一開始就是要求每一位學員利用學校配發的\"學號@gm.nfu.edu.tw\"建立自己的網際內容管理課程網誌, 並且將上學期的計算機概論課程摘要一一紀錄, 除了讓學員熟悉如何使用 Blogger 之外, 也讓學員能夠多多練習英文與中文打字, 尤其是除了中文注音輸入之外, 至少再學一套較有未來性的中文輸入法. 五專的網際內容管理系統除了 Blogger 之外, 將從如何整理各學員的 Blogger 網際連結切入, 讓學員對於 HTML 與 全球資訊網 能有初步認識, 其中將會包含如何利用 CMSiMDE 在 Github , [Gitllab], Heroku 與 Fossil SCM 中建立個人課程網頁系統. 並且讓學員逐步熟悉電腦與網路的設定與應用, 同時透過 Windows 10 64 位元操作系統上的可攜程式環境, 讓學員了解英文與程式應用的重要性. 四技部網際內容管理課程規劃 四技部的網際內容管理, 除了包含上述五專部的課程內容之外, 將要從 nfulist 程式的架構導入, 讓學員應用近端與雲端程式擷取學校教務主機中的資料. 其次還希望各學員能夠在自己的電腦上配置學校所能取得的合法 CAD 與 CAE 套件, 並且有能力採用網際程式 API 的模式延伸這些封閉套件的功能, 至少有能力可以根據 http://mde.tw/cad2020/content/HW1_SW.html 的導引, 結合初步的網際協同程式 https://github.com/mdecourse/cd2020pj1 , 開發各種與機械協同設計相關的網際延伸應用, 或者設法 改寫 CMSiMDE . 協同產品設計實習課程規劃 2021 年的協同產品設計實習所採用的規劃是三段式協同的步驟, 從兩人一組, 四人一組到最後八人一組的設計流程, 讓各學員實際了解協同設計的基本元素是人, 工具與時間, 傳統的設計工具若沒有網路的串連, 較難產生同步協同效益, 但是網路與同步協同模式也帶來許多問題. 2020 年的疫情讓全球各企業許多員工被迫必須 在家上班 , 而 work from home 的模式包含協同產品設計流程中的同步與非同步協同, 幾乎所有的成員溝通都必須透過網路與視訊工具達成. (例如: http://mde.tw/cd2020/content/Covid-19.html 與 http://mde.tw/cd2020/content/Online%20course.html ), 而這個學期的協同產品設計實習重點除了 Onshape , Coppeliasim , Webots 與 Fossil SCM 外, 也將納入 Ethercalc 的 API 應用 以及 Jitsi 視訊會議系統的使用.","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/2021-spring-course-planning.html"},{"title":"Fossil SCM 與 Github 整合","text":"請注意: http://fossil.kmol.info 僅支援 IPv6 網路協定. 為了實際了解 Fossil SCM 與 Github 的同一倉儲內容資料, 應該如何整合, 特別建立了一個 fosgit 倉儲作為測試. 一開始, 利用 https://github.com/mdecourse/cmstemplate 作為樣板, 建立一個 https://github.com/mdecourse/fosgit 倉儲, 並且分別在 Ubuntu 與 Windows 10 中進行操作, 目標是分別利用 Fossil SCM 與 Github 管理 https://mde.tw/fosgit 與 http://fossil.kmol.info/fosgit/doc/trunk/index.html 兩個網站的對應倉儲. 建立 fosgit 倉儲 在 Github 登入後, 新增 fosgit 倉儲時, 在上方 template 選單, 選擇以 https://github.com/mdecourse/cmstemplate 作為 template, 意即要直接利用 CMSiMDE 建立一個動態網站與靜態網站, 名稱為 fosgit. 完成後的倉儲位於 https://github.com/mdecourse/fosgit , 透過 Github 的設定將 main 分支設為 Github Pages 的 root, 接著就可以設法將倉儲以: git clone --recurse-submodules https://github.com/mdecourse/fosgit.git 取下倉儲資料到 Ubuntu 或 Windows 10 操作系統中, 之所以需要使用 --recurse-submodules 選項的原因是 cmstemplate 倉儲帶有子模組, 使用者可以直接透過上述指令取下包含子模組的倉儲所有資料. Ubuntu 端操作 由於 fosgit 倉儲在 Fossil SCM 端希望透過 http://fossil.kmol.info/fosgit 進行管理, 為了方便, 可以直接以 ssh 登入 fossil.kmol.info 主機進行操作. 首先就是在 /home/user/repository/ 目錄中, 以 fossil init fosgit.fossil 建立 fosgit.fossil 空的倉儲檔案. 接著進入 /home/user/repository/wd/ 目錄中, 以 git clone --recurse-submodules https://github.com/mdecourse/fosgit.git 將 Github 端的倉儲 clone 至 /home/user/repository/wd/fosgit 目錄. Fossil SCM .fslckout 由於 Ubuntu Fossil SCM 倉儲的內容存在 .fslckout 檔案中, 因此 /home/user/repository/wd/fosgit 目錄中雖然已經有與 Github 遠端倉儲對應的 .git 目錄, 但還需要能與 http://fossil.kmol.info/fosgit 對應的 .fslckout, 為了取得此一資料檔案. 可以進入 fossil.kmol.info 主機中的 /home/user/repository/ 目錄, 以 fossil init fosgit.fossil 建立, 隨後則進入 /home/user/repository/wd/fosgit 目錄執行 fossil open ./../../fosgit.fossil, 將 fosgit.fossil 對應的 .fslckout 放入 /home/user/repository/wd/fosgit 目錄. 這時, 因為 http://fossil.kmol.info/fosgit settings 已經勾選 dotfiles (V), 因此 Fossil SCM 倉儲會導入 .git 目錄, 同時 Fossil SCM 的版本資料 .fslckout (或隨後的 FOSSIL ) 也會被 Github 納管. Fossil SCM addremove 指令 上述的規劃, 若從 cmsimde/ 目錄中執行 python wsgi.py, 可以在近端對倉儲內容作變更, 其中可能包括刪除倉儲中的某些檔案. 這時若要讓系統自動將已經刪除的檔案納入版次管理, 可以使用 git addremove 指令.","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/fossil-scm-and-github-integration.html"},{"title":"Fossil SCM 使用案例","text":"請注意: http://fossil.kmol.info 僅支援 IPv6 網路協定. Fossil SCM 的 https://fossil-scm.org/home/doc/trunk/www/embeddeddoc.wiki 可以與靜態網頁結合應用, 唯一必須注意的是 https://fossil-scm.org/home/doc/trunk/www/defcsp.md 議題. Fossil SCM documentation 功能 先前已經建議 Fossil SCM 的倉儲可以放在 /home/user/repository/ 目錄中, 以這裡的範例分別為 /home/user/repository/cd2021.fossil 與 /home/user/repository/lab.fossil, 而這兩個倉儲的展開內容分別位於 /home/user/repository/wd/cd2021 與 /home/user/repository/wd/lab 等目錄. 透過 Fossil SCM 的 https://fossil-scm.org/home/help/http 指令與 stunnel 的結合運用可以伺服為: http://fossil.kmol.info/cd2021/doc/trunk/index.html 與 http://fossil.kmol.info/lab/doc/trunk/index.html 而這兩個 Fossil SCM 倉儲的靜態網頁與 https://mde.tw/cd2021 及 https://mde.tw/lab 內容保持同步. 且 Fossil SCM 的靜態網頁可以直接將網址中的 trunk (表示為最新版本) 換為 Fossil SCM 倉儲內容的對應版本號, 就可以直接顯示各舊版本的靜態網頁內容, 這一個功能至今連 https://pages.github.com/ 或 https://docs.gitlab.com/ee/user/project/pages/ 都還無法直接在網際介面中完成. Fossil SCM open, add 與 commit 之前已經提過, 建立 Fossil SCM 倉儲的方法: fossil init cd2021.fossil 而這個指令若直接在 /home/user/repository/ 目錄中執行, 則可以建立 cd2021.fossil 空倉儲. 這裡的規劃是將這些倉儲以 fossil open 指令, 在 /home/user/repository/wd 目錄中設法展開內容, 而且以倉儲的名稱作為展開後的目錄, 並將展開內容置入. 例如: /home/user/repository/cd2021.fossil 可以透過: 在 /home/user/repository/wd/cd2021/ 目錄中執行 fossil open ./../../cd2021.fossil 而將內容展開. 而 /home/user/repository/lab.fossil 則在 /home/user/repository/wd/lab 目錄中展開內容. 若從 Github 以: git clone --recurse-submodules https://github.com/mdecourse/cd2021.git 將 cd2021 倉儲內容取下, 而且放入 /home/user/repository/wd/cd2021/ 目錄中. 使用者就可以在 /home/user/repository/wd/cd2021/ 目錄中執行: fossil add . fossil commit -m \"add cd2021 git repository content\" 則 Fossil SCM 會將 /home/user/repository/wd/cd2021/ 已經改版的內容壓進 /home/user/repository/cd2021.fossil 倉儲中, 並透過 Fossil SCM http 將靜態網頁以 project documentation 功能伺服到 https://fossil.kmol.info/cd2021/doc/trunk/index.html . 而根據網站內容, 必須將 https://fonts.googleapis.com 放入 settings - default-csp 設定欄位中, Fossil SCM doc 網站才會允許 default-csp 設定的網站進行跨網站擷取所需的資料. 採取相同的操作步驟, 就可以將 https://mde.tw/lab 網站資料同步至 http://fossil.kmol.info/lab/doc/trunk/index.html","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/fossil-scm-use-case.html"},{"title":"Fossil SCM on Ubuntu","text":"Fossil SCM 是一套完整的 軟體組態管理系統 ( Software Configuration Management ), 以 ANSI C 編寫, 其中利用 TCL 作為 Scripting 語言. 接下來將要說明如何在 Ubuntu 20.04 中安裝與配置 Fossil SCM . 這裡所要介紹的 Fossil SCM 為 http://fossil.kmol.info (只配置 IPv6 網路協定), http 網際伺服器前端採用 nginx , https 代理伺服器採用 stunnel , 主要伺服的 Software Configuration Management 套件則為 Fossil SCM . 安裝 nginx 在 Ubuntu 20.04 中安裝 nginx 非常簡單, 只要執行 sudo apt install nginx 即可. nginx 的基本設定檔案位於 /etc/nginx/sites-available/default 安裝 nginx 有兩個目的, 一方面回應 http://fossil.kmol.info , 也就是 port 80 的 WWW 伺服器. 而另外一方面則是配合 https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx 以手動模式取得 stunnel https 伺服所需要的 fullchain.pem 與 privkey.prm 等兩個檔案. 安裝 Fossil SCM 在 Ubuntu 20.04 安裝 Fossil SCM 也非常簡單, 只要執行 sudo apt install fossil 即可. 但是所安裝的版本可能不是最新版, 由於安裝的 fossil 執行檔案位於 /usr/bin/fossil, 假如希望與 Windows 10 64 位元操作系統中的 Fossil SCM 對應, 可以至 https://fossil-scm.org/home/uv/download.html 下載 Linux 最新版本的 fossil, 然後以 sudo cp fossil /urs/bin/ 即可. 若要查驗 Fossil SCM 的版本, 可以使用 fossil version 指令. Fossil SCM 整個系統就只有一個 fossil 執行檔案, 而倉儲檔案則只全部壓縮在一個 SQLite 資料庫檔案中. 接下來為了配置一套可以伺服多個 Fossil SCM 倉儲的 Ubuntu 20.04 系統, 在 /home/user/ 目錄下建立 repository 目錄, 之後的所有要從遠端擷取的 Fossil SCM 倉儲都可以放在此一用戶目錄下. 至於要在此目錄下建立一個內定的 Fossil SCM 倉儲, 可以進入 /home/user/repository 目錄後 (這裡的 user 為 Ubuntu 20.04 下的用戶帳號名稱), 以 fossil init cd2021.fossil 建立一個 Fossil SCM 倉儲, 執行完後系統就會直接在命令列中顯示用來管理此一倉儲的用戶 (會使用建立倉儲的帳號, 也就是 user) 登入管理的密碼. 使用者可以選擇將此一與 user 對應的管理密碼記起來, 或者之後再使用 sqlite3 指令進入 cd2021.fossil 查詢. 假如使用者需要在 Ubuntu 環境中直接對 Fossil SCM 倉儲改版, 則建議在 /home/user/repository 目錄中再建立一個 wd 目錄 (為 working directory 的縮寫), 之後可以將位於 /home/user/repository 目錄中的各個 .fossil 內容, 在 /home/user/repository/wd 目錄中展開, 若以 /home/user/repository/cd2021.fossil 為例, 展開後將位於 /home/user/repository/wd/cd2021. 安裝 stunnel 安裝 stunnel 也很簡單, 只要執行 sudo apt install stunnel4 即可, 安裝後若要隨系統開機啟動, 則需要 sudo vi /etc/default/stunnel4, 並在檔案中加入 ENABLED=1 後存檔. 另外, 還需要 sudo vi /etc/environment, 並在檔案中加入 HTTPS=on 後存檔. 接下來為了由 stunnel 代理 Fossil SCM 的 https 伺服, 必須加入 /etc/stunnel/stunnel.conf [https] accept = 140.130.your_ipv4.ip:443 accept = 2001:288:6004:your:ipv6::ip:443 cert = /etc/stunnel/fullchain.pem key = /etc/stunnel/privkey.pem exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/repository/ --https --nojail --notfound cd2021 上述的 fullchain.pem 與 privkey.pem 由於尚未配置 certbot , 必須要取得合法的數位簽章檔案後, 再利用: sudo systemctl start stunnel4.service 啟動 stunnel . sudo systemctl stop stunnel4.service 關閉 stunnel , 或利用: sudo systemctl restart stunnel4.service 重新啟動 stunnel . 擷取 fullchain.pem 與 privkey.pem 這個步驟主要按照 https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx 中的指令操作, 由於 Ubuntu 20.04 已經內建 snap, 因此只要執行: sudo snap install core; sudo snap refresh core sudo snap install --classic certbot sudo ln -s /snap/bin/certbot /usr/bin/certbot sudo certbot certonly --nginx 就可以在 /etc/letsencrypt/live/fossil.kmol.info/ 目錄中找到 fullchain.pem 與 privkey.pem 等兩個數位簽章檔案, 接著將此兩個檔案複製至 /etc/stunnel/ 目錄, 以便配合 /etc/stunnel/stunnel.conf 隨電腦開機啟動. 因為 certbot 的數位簽章每 90 天都要更新一次, 屆時若要手動更新可以先模擬執行: sudo certbot renew --dry-run nginx http 跳轉 https 最後一個步驟是讓 nginx 所伺服的 http://fossil.kmol.info 能夠自動跳轉到 Fossil SCM 與 stunnel 結合的 https://fossil.kmol.info 修改 /etc/nginx/sites-available/default 中的設定如下: server { listen 80; server_name fossil.kmol.info; rewrite &#94;/(.*)$ https://fossil.kmol.info/$1 permanent; }","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/fossil-scm-on-ubuntu.html"},{"title":"Pelican 與 Blogger 內容同步2","text":"cmsimde 中的 Pelican blog 內容建議採用 config 目錄中的 pelican.leo 進行管理, 主要的資料管理架構採用 Leo Editor 中的 @clean 標題指令, 能夠與內文指令 @others 配合, 利用階層式的文章管理, 區隔網誌摘要與各段內容. Google Developer Console 為了能夠將 Pelican blog 在 Leo Editor 中的網誌文章推向 Blogger , 必須要從 Google developer console 取得 與 Blogger 擷取權限對應的 secret json 檔案. 實際操作流程如下: 進入 Library - > ENABLE APIS AND SERVICES -> 啟用 Blogger API v3 設定 OAuth consent screen 新增 Credentials -> Desktop-type Oauth 2.0 client -> Download JSON 即可取得 secret.json 檔案. 將 secrets.json 轉為 token.dat 轉換前必須確定系統已經安裝 google_auth_oauthlib pip install google_auth_oauthlib 接著利用下列程式將 secrets.json 轉為 token.dat, 隨後使用者就可利用此一 token.dat 將 Leo Editor 中的網誌文章內容傳送到對應的 Blogger . 下列程式在轉換過程會透過操作系統的內定瀏覽器讓使用者登入與 secrets.json 對應的帳號, 一旦通過認證就可以完成 secrets.json 轉為 token.dat 的流程. # get secrets: https://console.developers.google.com # https://developers.google.com/blogger/docs/3.0/using # pip install google_auth_oauthlib # under Mac command + b to execute import pickle import os from googleapiclient.discovery import build from google_auth_oauthlib.flow import InstalledAppFlow from google.auth.transport.requests import Request SCOPES = ['https://www.googleapis.com/auth/blogger', ] # we check if the file tBo store the credentials exists if not os.path.exists('./../../yen_gm_blogger_token.dat'): flow = InstalledAppFlow.from_client_secrets_file('./../../yen_gm_blogger_secrets.json', SCOPES) credentials = flow.run_local_server() with open('yen_gm_blogger_token.dat', 'wb') as credentials_dat: pickle.dump(credentials, credentials_dat) else: with open('yen_gm_blogger_token.dat', 'rb') as credentials_dat: credentials = pickle.load(credentials_dat) service = build('blogger', 'v3', credentials=credentials) g.es(service) 將 Pelican 文章轉往 Blogger 將 Pelican 文章轉投 Blogger 的過程包含新增與編輯, 新增的程式碼如下: from markdown import markdown from oauth2client import client #from googleapiclient import sample_tools import os # 配合使用 credential token import pickle from googleapiclient.discovery import build #from google_auth_oauthlib.flow import InstalledAppFlow #from google.auth.transport.requests import Request os.environ['TZ'] = 'Asia/Taipei' with open('./../../yen_gm_blogger_token.dat', 'rb') as credentials_dat: credentials = pickle.load(credentials_dat) service = build('blogger', 'v3', credentials=credentials) def get_cat_tag_content(data): # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- # 用跳行符號分割 data_list = data.split(\"\\n\") #第 2 行為 title title= data_list[1] #第 4 行為 category category = data_list[3] #第 5 行為 tags tags = data_list[4] # 有多項資料的 content 型別為數列 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 content = \"\\n\".join(data_list[8:]) # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 content = content.replace(' ', ' ') # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 #content = content.replace('~~~python', '[code lang=\"python\"]') #content = content.replace('~~~', '[/code]') return title, category, tags, content # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 # p.h 為 @clean filename.md # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 md_filename = p.h.split(\" \")[1] with open(md_filename, 'r', encoding=\"utf-8\") as content_file: md_content = content_file.read() # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) title_str, category_str, tags_str, content = get_cat_tag_content(md_content) category = category_str.split(\":\")[1] tags = tags_str.split(\":\")[1].split(\",\") tags.append(category) # title 是一個單獨的字串 title = title_str.split(\":\")[1] # 將 markdown 格式 content 轉為 html content = markdown(content) # 以下處理 content 的 標題 content = content.replace(\" \", \" \") content = content.replace(\" \", \" \") # g.es(content) try: ''' users = service.users() # 取得使用者 profile 資料 user = users.get(userId='self').execute() print('網誌名稱: %s' % user['displayName']) ''' blogs = service.blogs() # 取得使用者所建立網誌名稱 blogs = blogs.listByUser(userId='self').execute() # post_id is now blogs[\"items\"][0][\"id\"] #blog_id = blogs[\"items\"][0][\"id\"] blog_id = \"2403495118140401474\" #for blog in blogs['items']: #print(blog['name'], blog['url']) posts = service.posts() # 新增網誌 post 時, 需要 post_id body = { \"kind\": \"blogger#post\", \"id\": blog_id, \"title\": title, # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容 \"content\": content, \"labels\": tags } insert = posts.insert(blogId=blog_id, body=body) posts_doc = insert.execute() post_id = posts_doc[\"id\"] #print(posts_doc) # 改用 credential token 後不會產生 blogger.dat #os.remove(\"blogger.dat\") # 利用最後的 child 節點來儲存 post_id to_save_post_id = p.insertAsLastChild() # 改為內文為空的節點, id 直接標在 head 標題 to_save_post_id.b = \"\" to_save_post_id.h = post_id # 因為新增節點, commander 必須 redraw c.redraw() g.es(\"post_id 為\", post_id) g.es(\"已經將資料送往 KBlogger!\") except(client.AccessTokenRefreshError): g.es(\"error\") 完成上述文章轉投至 Blogger 之後, Blogger 會傳回該文章的 post id, 而新增程式會將此 id 放在該筆 @clean 文章節點的最末端, 由於該 post id 節點只有標題而無內文, 因此即便內縮成為 @clean 的子節點, 也不會在文章中增加任何資料, 但若該網誌內容同步推向一個以上的 Blogger , 則使用者需要將該 post if 內縮外, 還需要在此 post id 節點的上屬節點增加標註, 說明該 post id 所屬的網誌標題或代號. 至於當該文章內容經過編修後, 使用者若希望將新內容推向遠端同步 Blogger , 則必須將原先新增的 Blogger post id 移至該 @clean 文章的最末端, 以便讓程式可以更新與此 post id 對應的 Blogger 文章內容. 可用於編輯 Blogger 文章的程式碼如下: from markdown import markdown from oauth2client import client #from googleapiclient import sample_tools import os # 配合使用 credential token import pickle from googleapiclient.discovery import build #from google_auth_oauthlib.flow import InstalledAppFlow #from google.auth.transport.requests import Request os.environ['TZ'] = 'Asia/Taipei' with open('./../../yen_gm_blogger_token.dat', 'rb') as credentials_dat: credentials = pickle.load(credentials_dat) service = build('blogger', 'v3', credentials=credentials) def get_cat_tag_content(data): # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- # 用跳行符號分割 data_list = data.split(\"\\n\") #第 2 行為 title title= data_list[1] #第 4 行為 category category = data_list[3] #第 5 行為 tags tags = data_list[4] # 有多項資料的 content 型別為數列 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 content = \"\\n\".join(data_list[8:]) # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 content = content.replace(' ', ' ') # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 #content = content.replace('~~~python', '[code lang=\"python\"]') #content = content.replace('~~~', '[/code]') return title, category, tags, content # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 # p.h 為 @clean filename.md # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 md_filename = p.h.split(\" \")[1] with open(md_filename, 'r', encoding=\"utf-8\") as content_file: md_content = content_file.read() # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) title_str, category_str, tags_str, content = get_cat_tag_content(md_content) category = category_str.split(\":\")[1] tags = tags_str.split(\":\")[1].split(\",\") tags.append(category) # title 是一個單獨的字串 title = title_str.split(\":\")[1] # 將 markdown 格式 content 轉為 html content = markdown(content) # 以下處理 content 的 標題 content = content.replace(\" \", \" \") content = content.replace(\" \", \" \") # g.es(content) try: blogs = service.blogs() # 取得使用者所建立網誌名稱 blogs = blogs.listByUser(userId='self').execute() #blog_id = blogs[\"items\"][0][\"id\"] blog_id = \"2403495118140401474\" # 設法取得原 post 的 id postid_outline = p.getLastChild() # 直接從標題取得 post 的 id 號碼 post_id = postid_outline.h posts = service.posts() # 更新網誌文章時的 body body = { \"kind\": \"blogger#post\", \"title\": title, \"content\": content } # need to save postId to outline head update = posts.update(blogId=blog_id, postId=post_id, body=body, publish=True) update_doc = update.execute() # 使用 credential token 後, 無需刪除 blogger.dat #os.remove(\"blogger.dat\") g.es(\"post_id 為\", post_id) g.es(\"已經將更新資料送往 K Blogger!\") except(client.AccessTokenRefreshError): g.es(\"error\")","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/sync-pelican-and-blogger-content2.html"},{"title":"資料儲存的永續性","text":"假如將時間倒轉 20 年, 看看當時的電腦程式課程在教些什麼? 大家是如何上課, 結果應該會讓現在這些初出茅廬, 剛剛成年的大一生非常驚訝. 是的, 當年並沒有人手一機, 上課是需要抄筆記的...... 而且當時全球科技界正度過所謂的千禧年之禍, 利用電腦程式產生中文字仍處於 Big-5 的陰影下, 倚天中文仍然到處可見, 即使處在所謂的數位科技前緣, 某些人手上已經有小而美的易利信手機, 口袋裡也放著一個由 HTC 打造的頗有重量 HP PDA , 但所謂數位資料的永續性, 距離仍然很遠, 因此二十年多年後, 當時能留下與上課有關的數位資料非常有限. 之後就在 Google 逐漸成熟, 而 Facebook 騰空出世 7 年後的 2011年, Red Hat 推出可以免費使用的 Openshift , 不僅能夠伺服 PHP 與 Python, 還可免費存放各種數位資料, 當時以為資料終於可以永續存放的假象, 到 2016 年夢想逐漸破滅, 還好 2016 年之後有 Github 接手, Heroku 也很意外地從 2007 年活到現在, 目前, Github 與 Heroku (只能儲存 500 MB), 加上 Gitlab 的同步資料備份與 Google Drive 上的大檔案存放, 全球網友前撲後繼用隱私換取數位資料免費存放的所謂永續性, 似乎終於有了眉目. 目前教育版的 Google Drive 仍不限容量, 但也許未來的某一天這樣的所謂永續仍會畫上休止符, 大家仍必須有所因應. 資料存至 Google Drive 從 https://github.com/mdecourse/cd2020pj1/blob/master/myflaskapp.py 可以看出如何利用 Google Drive API, 在網際環境中將數位檔案送到特定伺服器之外, 還能利用 AJAX 存備份至特定 Google Drive 目錄. @app.route('/saveToDB' , methods=['POST']) @login_required def saveToDB(): \"\"\"axuploader.js 將檔案上傳後, 將上傳檔案名稱數列, 以 post 回傳到 Flask server. 截至這裡, 表示檔案已經從 client 上傳至 server, 可以再設法通過認證, 將 server 上的檔案上傳到對應的 Google Drive, 並且在上傳後的 GDrive 目錄, 設定特定擷取權限 (例如: 只允許 @gm 用戶下載. 以下則可將 server 上傳後的擷取目錄與 GDrive 各檔案 ID 存入資料庫, 而檔案擷取則分為 server 擷取與 GDrive 擷取等兩種 url 連結設定 \"\"\" if request.method == \"POST\": files = request.form[\"files\"] # split files string files = files.split(\",\") # files 為上傳檔案名稱所組成的數列 for i in range(len(files)): # 逐一將已經存在 server downloads 目錄的檔案, 上傳到 GDrive uploaded 目錄 fileName = files[i] fileLocation = _curdir + \"/downloads/\" + fileName mimeType = mimetypes.MimeTypes().guess_type(fileLocation)[0] # for GDrive v2 #gdriveID = uploadToGdrive(fileName, mimeType) # for GDrive v3 gdriveID = uploadToGdrive3(fileName, mimeType) fileSize = str(round(os.path.getsize(fileLocation)/(1024*1024.0), 2)) + \" MB\" date = datetime.datetime.now().strftime(\"%b %d, %Y - %H:%M:%S\") user = session.get(\"user\") print(user + \"|\" + str(fileSize) + \"|\" + str(mimeType) + \"|\" + gdriveID) # 逐一將上傳檔案名稱存入資料庫, 同時存入mimeType, fileSize 與 gdriveID # 資料庫欄位 #g.db.execute('insert into grouping (user , date, fileName, mimeType, fileSize, memo) values (?, ?, ?, ?, ?, ?)',(user, date, fileName, mimeType, fileSize, \"memo\")) #g.db.commit() #flash('已經新增一筆 upload 資料!') return \"Uploaded fileName and gdriveID save to database\" def uploadToGdrive(fileName, mimeType): gauth = GoogleAuth() # 必須使用 desktop 版本的 client_secrets.json gauth.LoadClientConfigFile(\"./../gdrive_desktop_client_secrets.json\") drive = GoogleDrive(gauth) ''' # View all folders and file in your Google Drive fileList = drive.ListFile({'q': \"'root' in parents and trashed=false\"}).GetList() for file in fileList: print('Title: %s, ID: %s' % (file['title'], file['id'])) # Get the folder ID that you want # 檔案會上傳到根目錄下的 uploaded 目錄中 if(file['title'] == \"uploaded\"): fileID = file['id'] ''' # GDrive 上 uploaded 目錄的 fileID with open(\"./../gdrive_uploaded_id.txt\", 'r') as content_file: fileID = content_file.read() # 由上述目錄外的檔案讀取 uploaded 目錄對應 ID #fileID = \"your_folder_file_ID\" # 上傳檔案名稱為輸入變數 #fileName = \"DemoFile.pdf\" filePath = _curdir + \"/downloads/\" # parents 為所在 folder, 亦即 uploaded 目錄, fileID 為 uploaded 目錄的 ID file1 = drive.CreateFile({\"mimeType\": mimeType, \"parents\": [{\"kind\": \"drive#fileLink\", \"id\": fileID}], \"title\": fileName}) file1.SetContentFile(filePath + fileName) file1.Upload() # Upload the file. # 傳回與上傳檔案對應的 GDrive ID, 將會存入資料庫 gdiveID 欄位 return file1['id'] #print('Created file %s with mimeType %s' % (file1['title'], file1['mimeType'])) #print(\"upload fileID:\" + str(file1['id'])) # 以下為下載檔案測試 # file2 = drive.CreateFile({'id': file1['id']}) #file2.GetContentFile('./test/downloaded_ModernC.pdf') # Download file as 'downloaded_ModernC.pdf under directory test'. ''' file1.Trash() # Move file to trash. file1.UnTrash() # Move file out of trash. file1.Delete() # Permanently delete the file. ''' def uploadToGdrive3(fileName, mimeType): # get upload folder id # GDrive 上 uploaded 目錄的 fileID with open(\"./../gdrive_uploaded_id.txt\", 'r') as content_file: folderID = content_file.read() creds = None with open('./../gdrive_write_token.pickle', 'rb') as token: creds = pickle.load(token) # 讀進既有的 token, 建立 service driveService = build('drive', 'v3', credentials=creds) metadata = { 'name': fileName, 'mimeType': mimeType, # 注意: 必須提供數列格式資料 'parents': [folderID] } filePath = _curdir + \"/downloads/\" + fileName media = MediaFileUpload(filePath, mimetype=mimeType, chunksize=1024*1024, resumable=True ) gdFile = driveService.files().create( body=metadata, media_body=media, fields='id' ).execute() fileID = gdFile.get(\"id\") return fileID 上述程式利用較新的 GDrive V3 上傳資料之前, 可攜系統必須安裝 google-api-python-client: # for uploadToGDrive3 # pip install google-api-python-client # https://github.com/googleapis/google-api-python-client import pickle from googleapiclient.discovery import build from apiclient.http import MediaFileUpload Github, Gitlab 與 Fossil SCM 針對 Github 與 Gitlab 的操作, 可以參考 https://git-scm.com/book/en/v2 , 但是 Fossil SCM 的參考資料則相對較少, 以下將針對 Fossil SCM 的應用稍加說明, 為了因應未來上述各種網際免費數位儲存資料系統的更迭, 在近端配置 Fossil SCM , 並用 BD-R or BD-RE (25GB) 進行備份, 也是一個不錯的資料永續儲存方案. Fossil SCM 的使用非常簡單, 只要配合操作系統從 https://fossil-scm.org/home/uv/download.html 下載相應版本, 並讓系統可以執行 fossil.exe (以 Windows 10 為例) 即可, 唯一要注意的是若操作過程牽涉兩個不同操作系統, 必須透過 fossil version 查驗雙方的版本是否相同. 有關 Fossil SCM 的先前參考資料, 可參閱 Fossil SCM 簡介 . Ubuntu 安裝 fossil scm 使用 sudo apt install fossil 安裝 Fossil SCM 所取得的版本可以利用 fossil version 檢查. 若版本並非最新版本或與 Windows 10 所用的版本相同, 可以至 https://fossil-scm.org/home/uv/download.html 下載最新的 fossil 後, 以 sudo cp /home/user/fossil /usr/bin/, 然後再透過 fossil version 查驗是否已經更新為最新版本. 安裝 stunnel4 由於 Fossil SCM 並無 https 啟動功能的設置, 因此在實作上必須透過 stunnel SSL 代理主機啟動 https 伺服功能. 首先安裝 stunnel4: sudo apt install stunnel4 接下來將系統環境設為 HTTPS: sudo vi /etc/environment 加入 HTTPS=on 並且在 /etc/default/stunnel4 中加入 ENABLED=1 然後透過 sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt, 在 /etc/stunnel/ 目錄中建立所需的 localhost.key 與 localhost.crt 同時建立 /etc/stunnel/stunnel.conf 如下: [https] accept = your_IPv4_ip:443 accept = :::443 cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/repository/ --https --nojail --notfound cd2021 實際配置下, 使用 :::443 並無法讓 stunnel 綁定至系統的 ipv6 網址, 必須使用: [https] accept = 140.xxx.xxx.xxx:443 accept = 2001:288:6004:xx::1:443 cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/repository/ --https --nojail --notfound cd2021 似乎 stunnel 會自動取最後的 :443 作為 port, 而無需如 https://[ipv6 address]:443 中以 [] 隔開 ipv6 網址與埠號. execargs = /usr/bin/fossil http /home/user/repository/ --https --nojail --notfound cd2021 設定的意思為 stunnel 代理啟動的指令為 fossil http, 指定 /home/yser/repository/ 作為倉儲目錄, 可以透過 URL 加上倉儲名稱伺服多個 repo.fossil 倉儲, 隨後的 --https 表示要使用 https 協定擷取資料, --nojail 表示不要使用 root 權限啟動, 且不進入 jail 模式, --notfound cd2021 表示內定 https URL 擷取的倉儲為 /home/user/repository/cd2021.fossil 啟動-停止-重新啟動 stunnel4.service sudo systemctl start stunnel4.service sudo systemctl stop stunnel4.service sutod systemctl restart stunnel4.service","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/data-sustainablity.html"},{"title":"2021 開春","text":"2021 年伊始, 機器學習的程式從原先簡單的演化, 進展到能夠有效控制具有亂數的決策系統, 科技的發展讓人類的工作更加兩極化, 一方可持續開發指使電腦軟硬體從事工作, 而另一方則幾乎必須完全按照電腦軟硬體的指示與命令行事. 這樣的發展似乎已經沒了退路.","tags":"Weblog","url":"https://40823103.github.io/cd2021/blog/starting-2021.html"}]};