# 个人网站

网站地址：https://hbw1201.github.io/

源码仓库：https://github.com/Hbw1201/Hbw1201.github.io

白底、简洁的中英文个人主页，包含姓名、照片、教育与研究助理经历、研究方向、论文及其核心图和联系方式。右上角按钮切换中文与英文，每次只显示一种语言；默认中文，并在浏览器允许本地存储时记住上次选择。

双击 `index.html` 查看。中文内容在 `index.html` 中维护，对应英文在 `assets/language.js` 中维护；`data-i18n` 标记把两者关联。无需构建或安装依赖；语言切换和邮箱入口使用少量本地 JavaScript。禁用 JavaScript 时仍可阅读默认中文主页。

添加项目链接：`<a href="https://github.com/你的用户名/仓库名">项目名称</a>`。

邮箱入口由 `assets/contact.js` 管理：页面只显示“个人邮箱”和“学校邮箱”，地址以数值混淆形式保存，仅在用户点击或通过键盘激活时临时还原并打开邮件应用，不写入 DOM。禁用 JavaScript 时会显示提示。此方式可减少简单的源码扫描和链接采集，但无法阻止分析脚本或模拟真人操作的爬虫。

更换邮箱时，为相应条目选择数值 `key`，将地址的每个字符编码与 `key` 做按位异或后保存到 `bytes` 数组。不要在公开文件、注释或备用链接中另存明文地址。

GitHub Pages 使用 `main` 分支的根目录发布。后续修改后提交并推送到 `main`，GitHub 会自动更新网站。发布文件包括 `index.html`、`.nojekyll` 和完整的 `assets/` 文件夹；`.preview/` 只用于本地检查，不上传。图片使用相对路径，也支持部署到仓库子路径。

搜索设置：HTML 标题与页面摘要包含“韩博文”和“Han Bowen”，个人资料结构化数据另关联论文署名“Bowen Han”。这些资料直接写入 HTML，读取时不依赖语言切换。`robots.txt` 允许抓取并提供 `sitemap.xml` 地址；站点地图与 canonical 统一使用正式 HTTPS 地址。请一并发布这两个文件，实质更新主页时同步更新站点地图中的 `lastmod` 日期。更换域名时，也要更新 HTML 元数据、结构化数据、站点地图与 robots.txt 中的绝对地址。

这些设置帮助搜索引擎发现和理解主页，但不保证收录时间或排名。可在 Google Search Console 中验证 `https://hbw1201.github.io/` 的 URL 前缀资源，提交 `sitemap.xml`，再使用网址检查工具请求编入索引；其他搜索引擎需分别使用其站长工具。站点已发布不代表已经完成搜索引擎收录或提交。

可选本地预览：运行 `node scripts/serve.mjs`，打开 `http://127.0.0.1:4173`。

图片说明：

- `assets/han-bowen.jpg`：本人提供的照片，保持原图比例。
- `assets/biomod-overview.jpg`：Lingbei Meng, Jianqing Zhu, Bowen Han, et al., *BioMod: Biological Module Tokenization for Single-Cell Foundation Modeling*, bioRxiv v1, 2026，图 1。[论文与图注](https://www.biorxiv.org/content/10.64898/2026.10.12.758490v1.full-text#F1)；[原始图片](https://www.biorxiv.org/content/biorxiv/early/2026/10/13/2026.10.12.758490/F1.large.jpg)。
- `assets/tempobridge-overview.png`：Bowen Han, Lingbei Meng, Shihuan Luo, et al., *TempoBridge: Source-Conditioned Flow Matching with Optimal Transport Couplings for Single-Cell Population Transitions*, arXiv:2610.04945v2, 2026，图 1。[论文与图注](https://arxiv.org/html/2610.04945v2#S4.F1)；[原始图片](https://arxiv.org/html/2610.04945v2/figure2_overview.png)。

两张论文配图均采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可，保留原图内容，页面仅等比例缩放显示；点击可查看原始尺寸。
