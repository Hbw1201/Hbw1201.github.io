# 个人网站

网站地址：https://hbw1201.github.io/

源码仓库：https://github.com/Hbw1201/Hbw1201.github.io

白底、简洁的中英文个人主页，包含姓名、照片、教育与研究助理经历、研究方向、论文及其核心图和联系方式。右上角按钮切换中文与英文，每次只显示一种语言；默认中文，并在浏览器允许本地存储时记住上次选择。

双击 `index.html` 查看。中文内容在 `index.html` 中维护，对应英文在 `assets/language.js` 中维护；`data-i18n` 标记把两者关联。无需构建或安装依赖；语言切换和邮箱入口使用少量本地 JavaScript。禁用 JavaScript 时仍可阅读默认中文主页。

添加项目链接：`<a href="https://github.com/你的用户名/仓库名">项目名称</a>`。

邮箱入口由 `assets/contact.js` 管理：页面只显示“个人邮箱”和“学校邮箱”，地址以数值混淆形式保存，仅在用户点击或通过键盘激活时临时还原并打开邮件应用，不写入 DOM。禁用 JavaScript 时会显示提示。此方式可减少简单的源码扫描和链接采集，但无法阻止分析脚本或模拟真人操作的爬虫。

更换邮箱时，为相应条目选择数值 `key`，将地址的每个字符编码与 `key` 做按位异或后保存到 `bytes` 数组。不要在公开文件、注释或备用链接中另存明文地址。

GitHub Pages 使用 `main` 分支的根目录发布。后续修改后提交并推送到 `main`，GitHub 会自动更新网站。发布文件包括 `index.html`、`.nojekyll` 和完整的 `assets/` 文件夹；`.preview/` 只用于本地检查，不上传。图片使用相对路径，也支持部署到仓库子路径。

可选本地预览：运行 `node scripts/serve.mjs`，打开 `http://127.0.0.1:4173`。

图片说明：

- `assets/han-bowen.jpg`：本人提供的照片，保持原图比例。
- `assets/biomod-overview.jpg`：Lingbei Meng, Jianqing Zhu, Bowen Han, et al., *BioMod: Biological Module Tokenization for Single-Cell Foundation Modeling*, bioRxiv v1, 2026，图 1。[论文与图注](https://www.biorxiv.org/content/10.64898/2026.10.12.758490v1.full-text#F1)；[原始图片](https://www.biorxiv.org/content/biorxiv/early/2026/10/13/2026.10.12.758490/F1.large.jpg)。
- `assets/tempobridge-overview.png`：Bowen Han, Lingbei Meng, Shihuan Luo, et al., *TempoBridge: Source-Conditioned Flow Matching with Optimal Transport Couplings for Single-Cell Population Transitions*, arXiv:2610.04945v2, 2026，图 1。[论文与图注](https://arxiv.org/html/2610.04945v2#S4.F1)；[原始图片](https://arxiv.org/html/2610.04945v2/figure2_overview.png)。

两张论文配图均采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可，保留原图内容，页面仅等比例缩放显示；点击可查看原始尺寸。
