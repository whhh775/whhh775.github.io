# 个人网站素材精准替换清单

整理日期：2026-07-15

使用方式：优先保持文件名不变，直接覆盖对应目录里的同名文件；如果改文件名，需要同步改 HTML / CSS 里的引用路径。

## 统一尺寸规则

| 类型 | 目标尺寸 | 备注 |
| --- | --- | --- |
| 首屏视频 | 1920 x 1080 | 首页首屏视频与封面统一 16:9 |
| UI 大图 | 1200 x 900 | 首页大卡、详情页重点 UI 展示可按此导出 |
| UI 小图 | 1200 x 800 | 通用小卡片 UI 图 |
| 平面主推 | 1080 x 1440 | 首页平面主推图 |
| 平面小图 | 1200 x 1200 / 1080 x 1350 | 方图或竖图二选一，按内容适配 |
| 头像 | 800 x 800 | 关于我头像 |
| 分类导航图片 | 1200 x 1070 | 首页 5 个分类入口统一尺寸 |
| 把车修好详情页 - 用户问题模块 - UI 小图 | 1514 x 1039 | 该模块优先使用此专用尺寸 |

## 首页 `index.html`

| 模块 | 当前素材 | 建议替换尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 首页首屏视频 | `assets/home/hero-motion.mp4` | 1920 x 1080 | 首屏动态主视觉，注意首帧也要好看 |
| 首页首屏封面 / 分享图 | `assets/home/首页首屏.png` | 1920 x 1080 | 视频加载前封面，画面风格需和视频一致 |
| 分类导航 01：产品设计 | `assets/home/01.png` | 1200 x 1070 | 首页分类入口图，建议统一同一套视觉语言 |
| 分类导航 02：UI 界面设计 | `assets/home/02.png` | 1200 x 1070 | 同上 |
| 分类导航 03：品牌视觉设计 | `assets/home/03.png` | 1200 x 1070 | 同上 |
| 分类导航 04：海报物料设计 | `assets/home/04.png` | 1200 x 1070 | 同上 |
| 分类导航 05：版式设计 | `assets/home/05.png` | 1200 x 1070 | 同上 |
| UI 项目主推：把车修好入口 | `assets/home/UI大图1200x900.png` | 1200 x 900 | 首页最重要 UI 大图，建议放完整项目高光界面 |
| UI 小图 01：APP 产品设计 / 收米多多入口 | `assets/shoumi-case/UI小图-1.png` | 1200 x 800 | 首页小卡图，若继续兼作收米详情封面，可保留 1514 x 1039 比例版本 |
| UI 小图 02：数据可视化入口 | `assets/shoumi-case/UI小图-2.png` | 1200 x 800 | 当前借用收米素材，后面建议替换为可视化专属封面 |
| UI 小图 03：工业交互入口 | `assets/shoumi-case/UI小图-3.png` | 1200 x 800 | 当前借用收米素材，后面建议替换为工业交互专属封面 |
| 平面主推 | `assets/home/平面主图.png` | 1080 x 1440 | 目前实际为横图，后续可按竖版主推重新导出 |
| 平面小图 01：品牌视觉 | `assets/home/平面小图-1.png` | 1200 x 1200 / 1080 x 1350 | 首页平面卡片 |
| 平面小图 02：海报设计 | `assets/home/平面小图-2.png` | 1200 x 1200 / 1080 x 1350 | 首页平面卡片 |
| 平面小图 03：活动物料 | `assets/home/平面小图-3.png` | 1200 x 1200 / 1080 x 1350 | 首页平面卡片 |
| 平面小图 04：PPT 与信息设计 | `assets/home/平面小图-4.png` | 1200 x 1200 / 1080 x 1350 | 首页平面卡片 |
| 关于我头像 | 当前为 CSS 占位 | 800 x 800 | 需要补真实头像文件，并在关于我模块接入 |
| 简历展示图 | `assets/home/resume-portfolio-visual.png` | 1053 x 1000 当前尺寸 / 可按 1200 x 1200 重做 | 简历区视觉辅助图 |
| PDF 简历 | `assets/home/resume.pdf` | PDF | 直接覆盖同名文件即可 |

## 把车修好详情页 `repair-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 项目封面 | `assets/repair-case/repair-case-cover.png` | 当前 1756 x 896 | 详情页首屏封面和社交分享图 |
| 项目背景参考图 | `assets/repair-case/repair-background-reference.png` | 当前 1754 x 897 | 文件存在，当前页面未直接引用，可作为备用背景图 |
| 用户问题卡片 01：服务流程复杂 | `assets/repair-case/把车修好-UI小图-1.png` | 1514 x 1039 | 专用尺寸；当前实际 1513 x 1039，建议下次统一到 1514 x 1039 |
| 用户问题卡片 02：价格与内容不透明 | `assets/repair-case/把车修好-UI小图-2.png` | 1514 x 1039 | 专用尺寸；当前实际 1513 x 1039，建议下次统一到 1514 x 1039 |
| 用户问题卡片 03：维修状态不可感知 | `assets/repair-case/把车修好-UI小图-3.png` | 1514 x 1039 | 专用尺寸；当前实际符合 |
| 设计系统 - 车型卡片组件 | `assets/repair-case/car-component.png` | 当前 691 x 290 | 小组件图，尽量保持透明/干净背景 |
| 设计挑战背景图 | `assets/repair-case/challenge-background.png` | 当前 1717 x 916 | 文件存在，当前页面主要用代码排版展示 |
| 解决方案总览 | `assets/repair-case/solution-overview.png` | 当前 1672 x 941 | 页面整屏长图模块 |
| 解决方案核心流程与能力 | `assets/repair-case/solution-core.png` | 当前 1920 x 3056 | 长图，注意文字移动端可读性 |
| 用户流程设计 | `assets/repair-case/user-flow.png` | 当前 1920 x 1081 | 流程图类素材，留足边距 |
| 核心功能模块 | `assets/repair-case/feature-system.png` | 当前 1920 x 1579 | 详情页大图 |
| 维修进度系统 | `assets/repair-case/repair-progress-system.png` | 当前 1920 x 1347 | 详情页大图 |
| 订单系统 | `assets/repair-case/order-system.png` | 当前 1920 x 1368 | 详情页大图 |
| 核心界面展示 | `assets/repair-case/ui-showcase.png` | 当前 1920 x 2550 | 长图，建议统一屏幕样机风格 |
| 成果表达 | `assets/repair-case/repair-results.png` | 当前 1920 x 951 | 结果总结上半部分 |
| 总结 | `assets/repair-case/repair-summary.png` | 当前 1920 x 988 | 结果总结下半部分 |
| 成果表达与总结旧合图 | `assets/repair-case/repair-results-summary.png` | 当前 1920 x 1939 | 文件存在，当前页面已拆成两个图，可保留备用 |

## 收米多多详情页 `shoumi-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 项目封面 | `assets/shoumi-case/shoumi-cover.png` | 当前 1934 x 1537 | 首屏封面，当前偏竖向大封面 |
| 项目概览视频 | `assets/shoumi-case/shoumi-overview.mp4` | 建议 1920 x 1080 或按现版比例保持 | 自动播放视频模块 |
| 用户洞察 | `assets/shoumi-case/shoumi-user-insight.png` | 当前 1920 x 1280 | 详情页整屏图 |
| 设计策略 | `assets/shoumi-case/shoumi-design-strategy.png` | 当前 1920 x 1119 | 详情页整屏图 |
| 体验框架 | `assets/shoumi-case/shoumi-experience-framework.png` | 当前 1920 x 1022 | 详情页整屏图 |
| 视觉方向 | `assets/shoumi-case/shoumi-visual-direction.png` | 当前 1920 x 1280 | 详情页整屏图 |
| 核心体验 | `assets/shoumi-case/shoumi-core-experience.png` | 当前 1920 x 1280 | 详情页整屏图 |
| 界面展示 | `assets/shoumi-case/shoumi-interface-showcase.png` | 当前 1920 x 1280 | 详情页整屏图 |
| 核心页面交互 iframe | `assets/shoumi-case/core-pages-interactive/index.html` | 独立交互页面 | 替换时要保留文件夹结构 |
| 总结 | `assets/shoumi-case/shoumi-summary-final.png` | 当前 1920 x 1280 | 详情页收尾图 |
| 首页入口小图 01 | `assets/shoumi-case/UI小图-1.png` | 建议 1200 x 800；若详情封面复用可保持 1514 x 1039 | 当前也被首页引用 |
| 首页入口小图 02 | `assets/shoumi-case/UI小图-2.png` | 建议 1200 x 800 | 当前被首页数据可视化入口引用 |
| 首页入口小图 03 | `assets/shoumi-case/UI小图-3.png` | 建议 1200 x 800 | 当前被首页工业交互入口引用 |

## 智慧运营可视化详情页 `visualization-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 首屏展示 | `assets/visualization-case/visualization-hero-01.png` | 当前 1920 x 1280 | 详情页首屏大图 |
| 设计理念 | `assets/visualization-case/visualization-concept-02.png` | 当前 1920 x 1280 | 整屏图 |
| 业务场景分析 | `assets/visualization-case/visualization-scenario-03.png` | 当前 1920 x 1310 | 整屏图 |
| 信息架构设计 | `assets/visualization-case/visualization-architecture-04.png` | 当前 1920 x 1281 | 整屏图 |
| 工程装备运营平台视频 | `assets/visualization-case/visualization-equipment-platform-05.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块 |
| 企业经营分析驾驶舱视频 | `assets/visualization-case/visualization-business-cockpit-0502.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块 |
| 汽车智能服务运营平台视频 | `assets/visualization-case/visualization-auto-service-0503.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块 |
| 视觉规范视频 | `assets/visualization-case/visualization-visual-spec-06.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块 |
| 成果展示 | `assets/visualization-case/visualization-results-07.png` | 当前 1920 x 1280 | 收尾成果图 |
| 首页入口图 | 当前借用 `assets/shoumi-case/UI小图-2.png` | 1200 x 800 | 建议新增可视化专属入口图并改首页引用 |

## 工业交互详情页 `industrial-case.html`

| 模块 | 当前素材 | 建议替换尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 首屏概念界面 | 当前为代码绘制 | 1200 x 900 / 或保持代码界面 | 若要换成真实图，需要新增素材并改页面结构 |
| 现场调研图片 / 设备照片 | 当前为占位模块 | 1200 x 800 | 页面已写明占位尺寸，适合放现场照片或调研图 |
| 全局监控中心 UI 大图 | 当前为占位模块 | 1200 x 900 | 关键界面 01 |
| 设备控制台 UI 大图 | 当前为占位模块 | 1200 x 900 | 关键界面 02 |
| 告警诊断 UI 小图 | 当前为占位模块 | 1200 x 800 | 小图 01 |
| 工单处理 UI 小图 | 当前为占位模块 | 1200 x 800 | 小图 02 |
| 移动巡检 UI 小图 | 当前为占位模块 | 1200 x 800 | 小图 03 |
| 首页入口图 | 当前借用 `assets/shoumi-case/UI小图-3.png` | 1200 x 800 | 建议新增工业交互专属入口图并改首页引用 |

## 通用素材 `assets/common/`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 全站星空背景 | `assets/common/starfield.gif` | 当前 540 x 763 | 全站背景纹理 |
| 稀疏星空背景 | `assets/common/starfield-sparse.gif` | 当前 305 x 496 | 备用背景纹理 |
| UI 项目区背景氛围图 | `assets/common/星球背景.png` | 当前 1919 x 1024 | 首页 UI 区域背景 |
| 备用主视觉 | `assets/common/portfolio-hero.png` | 当前 1536 x 1024 | 当前未直接引用，可作为备用 |
| 备用深色主视觉 | `assets/common/portfolio-hero-dark.png` | 当前 1536 x 1024 | CSS 备用背景 |
| 返回顶部图标 | `assets/common/back-to-top.svg` | SVG | 详情页浮动返回顶部按钮 |

## 优先替换顺序

1. 首页首屏：`hero-motion.mp4`、`首页首屏.png`
2. 首页 5 张分类导航图：`01.png` 到 `05.png`
3. 首页 UI 项目入口图：`UI大图1200x900.png`、3 张 UI 小图
4. 把车修好详情页用户问题模块：3 张 `把车修好-UI小图`
5. 把车修好详情页长图模块：解决方案、流程、功能、界面、成果、总结
6. 收米多多详情页整屏图与视频
7. 可视化详情页整屏图与视频，并补首页专属入口图
8. 工业交互详情页占位素材，并补首页专属入口图
9. 平面作品区主图与小图
10. 头像、简历 PDF、简历展示图

## 需要特别注意

- 首页数据可视化入口和工业交互入口目前都借用了 `assets/shoumi-case/` 里的 UI 小图，后面最好拆成各自项目目录下的专属入口图。
- 把车修好详情页用户问题模块请按 `1514 x 1039` 导出；当前前两张是 `1513 x 1039`，视觉上问题不大，但后续替换建议统一。
- 首页平面主推规则是 `1080 x 1440`，当前文件实际是横图；如果要强化平面作品区，建议下一版按竖图重新做。
- 工业交互页目前大量是代码占位模块，真正替换素材时需要新增文件并接入页面，不是单纯覆盖现有图片。
