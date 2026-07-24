# 个人网站素材精准替换清单

整理日期：2026-07-23

使用方式：优先保持文件名不变，直接覆盖对应目录里的同名文件；如果改文件名，需要同步更新页面里的引用路径。当前站点主体已从旧版 `index.html` 拆为启动页 `index.html` 和作品集页 `portfolio.html`，素材格式也已基本切换为 `.webp`。

## 统一尺寸规则

| 类型 | 目标尺寸 | 使用范围 |
| --- | --- | --- |
| 首屏视频 | 1920 x 1080 | 作品集首屏视频与封面 |
| UI 大图 | 1200 x 900 | 首页/作品集重点 UI 大卡、详情页关键 UI 展示 |
| UI 小图 | 1200 x 800 | 通用 UI 小卡片、入口卡片 |
| 平面主推 | 1080 x 1440 | 作品集平面主推图 |
| 平面小图 | 1200 x 1200 / 1080 x 1350 | 平面作品小卡，可按内容选择方图或竖图 |
| 头像 | 800 x 800 | 关于我头像 |
| 分类导航图片 | 1200 x 1070 | 作品集页 5 个分类入口图 |
| 把车修好详情页 - 用户问题模块 - UI 小图 | 1514 x 1039 | 该模块专用尺寸，优先级高于通用 UI 小图 |

## 启动页 `index.html`

| 模块 | 当前素材 | 建议替换尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 启动页社交分享图 | `assets/home/首页首屏.webp` | 1920 x 1080 | 当前启动页主要是代码/Canvas 动效，分享图仍引用首页首屏封面 |
| 启动页背景动效 | 当前为 Canvas / CSS | 不需要素材 | 若以后改成视频或图片，再新增对应素材 |
| 顶部 Logo | 当前启动页未直接用 `website-logo.svg` | SVG | 作品集页和详情页已经使用通用 Logo |

## 作品集页 `portfolio.html`

| 模块 | 当前素材 | 建议替换尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 作品集首屏视频 | `assets/home/hero-motion.mp4` | 1920 x 1080 | 首屏动态主视觉，注意首帧、循环点和移动端清晰度 |
| 作品集首屏封面 / 分享图 | `assets/home/首页首屏.webp` | 1920 x 1080 | 视频加载前封面，视觉需与视频一致 |
| 分类导航 01：产品设计 | `assets/home/01.webp` | 1200 x 1070 | 分类入口图，建议 5 张保持统一视觉语言 |
| 分类导航 02：UI 界面设计 | `assets/home/02.webp` | 1200 x 1070 | 同上 |
| 分类导航 03：品牌视觉设计 | `assets/home/03.webp` | 1200 x 1070 | 同上 |
| 分类导航 04：视觉传播 | `assets/home/04.webp` | 1200 x 1070 | 同上 |
| 分类导航 05：版式设计 | `assets/home/05.webp` | 1200 x 1070 | 同上 |
| UI 项目主推：把车修好入口 | `assets/home/UI大图1200x900.webp` | 1200 x 900 | 作品集页最重要 UI 大卡图 |
| UI 小图 01：收米多多入口 | `assets/shoumi-case/UI小图-1.webp` | 1200 x 800 | 当前也可作为收米项目入口图 |
| UI 小图 02：数据可视化入口 | `assets/shoumi-case/UI小图-2.webp` | 1200 x 800 | 当前仍借用收米目录素材，建议后续拆到 `assets/visualization-case/` |
| UI 小图 03：工业交互入口 | `assets/shoumi-case/UI小图-3.webp` | 1200 x 800 | 当前仍借用收米目录素材，建议后续拆到 `assets/industrial-case/` |
| 平面主推 | `assets/home/平面主图.webp` | 1080 x 1440 | 目前作为作品集平面主推图使用 |
| 平面小图 01：品牌视觉入口 | `assets/home/平面小图-1.webp` | 1200 x 1200 / 1080 x 1350 | 已链接到 `brand-case.html` |
| 平面小图 02：视觉传播 | `assets/home/平面小图-2.webp` | 1200 x 1200 / 1080 x 1350 | 平面作品卡片 |
| 平面小图 03：PPT 与信息设计 | `assets/home/平面小图-4.webp` | 1200 x 1200 / 1080 x 1350 | 当前页面未引用 `平面小图-3.webp` |
| 关于我头像 | 当前为 CSS 占位 | 800 x 800 | 需要补真实头像文件，并在关于我模块接入 |
| 简历展示图 | `assets/home/resume-portfolio-visual.webp` | 可保持现图比例 / 可按 1200 x 1200 重做 | 简历区视觉辅助图 |
| PDF 简历 | `assets/home/resume.pdf` | PDF | 直接覆盖同名文件即可 |

## 把车修好详情页 `repair-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 项目封面 | `assets/repair-case/repair-case-cover.webp` | 当前页面标注 1756 x 896 | 详情页首屏封面和社交分享图 |
| 项目背景 | `assets/repair-case/repair-project-background.webp` | 当前页面标注 1920 x 982 | 详情页背景模块，已替代旧的代码排版背景区 |
| 设计系统 | `assets/repair-case/repair-design-system.webp` | 当前页面标注 1920 x 1024 | 详情页整屏图 |
| 设计挑战 | `assets/repair-case/repair-design-challenge.webp` | 当前页面标注 1920 x 1024 | 详情页整屏图 |
| 用户问题卡片 01：服务流程复杂 | `assets/repair-case/把车修好-UI小图-1.webp` | 1514 x 1039 | 专用尺寸；该图通过 CSS 背景引用 |
| 用户问题卡片 02：价格与内容不透明 | `assets/repair-case/把车修好-UI小图-2.webp` | 1514 x 1039 | 专用尺寸；该图通过 CSS 背景引用 |
| 用户问题卡片 03：维修状态不可感知 | `assets/repair-case/把车修好-UI小图-3.webp` | 1514 x 1039 | 专用尺寸；该图通过 CSS 背景引用 |
| 项目背景备用图 | `assets/repair-case/repair-background-reference.webp` | 当前 CSS 背景引用 | 用于背景区域氛围，可保留备用 |
| 设计系统组件图 | `assets/repair-case/car-component.webp` | 小组件图 | 当前文件存在；若页面模块不直接显示，可作为设计系统素材备用 |
| 设计挑战备用背景 | `assets/repair-case/challenge-background.webp` | 当前 CSS 背景引用 | 可作为挑战区背景备用 |
| 解决方案总览 | `assets/repair-case/solution-overview.webp` | 当前页面标注 1672 x 941 | 页面整屏图模块 |
| 解决方案核心流程与能力 | `assets/repair-case/solution-core.webp` | 当前页面标注 1920 x 3056 | 长图，注意移动端文字可读性 |
| 用户流程设计 | `assets/repair-case/user-flow.webp` | 当前页面标注 1920 x 1081 | 流程图类素材，留足边距 |
| 核心功能模块 | `assets/repair-case/feature-system.webp` | 当前页面标注 1920 x 1579 | 详情页大图 |
| 维修进度系统 | `assets/repair-case/repair-progress-system.webp` | 当前页面标注 1920 x 1347 | 详情页大图 |
| 订单系统 | `assets/repair-case/order-system.webp` | 当前页面标注 1920 x 1368 | 详情页大图 |
| 核心界面展示 | `assets/repair-case/ui-showcase.webp` | 当前页面标注 1920 x 2550 | 长图，建议统一屏幕样机风格 |
| 成果表达 | `assets/repair-case/repair-results.webp` | 当前页面标注 1920 x 951 | 结果总结上半部分 |
| 总结 | `assets/repair-case/repair-summary.webp` | 当前页面标注 1920 x 988 | 结果总结下半部分 |
| 成果表达与总结旧合图 | `assets/repair-case/repair-results-summary.webp` | 文件存在 | 当前页面已拆成两个图，可保留备用 |

## 收米多多详情页 `shoumi-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 项目封面 | `assets/shoumi-case/shoumi-cover.webp` | 当前页面标注 1934 x 1537 | 首屏封面，偏竖向大封面 |
| 项目概览视频 | `assets/shoumi-case/shoumi-overview.mp4` | 建议 1920 x 1080 或保持现版比例 | 自动播放视频模块，当前为懒加载 |
| 用户洞察 | `assets/shoumi-case/shoumi-user-insight.webp` | 当前页面标注 1920 x 1280 | 详情页整屏图 |
| 设计策略 | `assets/shoumi-case/shoumi-design-strategy.webp` | 当前页面标注 1920 x 1119 | 详情页整屏图 |
| 体验框架 | `assets/shoumi-case/shoumi-experience-framework.webp` | 当前页面标注 1920 x 1022 | 详情页整屏图 |
| 视觉方向 | `assets/shoumi-case/shoumi-visual-direction.webp` | 当前页面标注 1920 x 1280 | 详情页整屏图 |
| 核心体验 | `assets/shoumi-case/shoumi-core-experience.webp` | 当前页面标注 1920 x 1280 | 详情页整屏图 |
| 界面展示 | `assets/shoumi-case/shoumi-interface-showcase.webp` | 当前页面标注 1920 x 1280 | 详情页整屏图 |
| 核心页面交互 iframe | `assets/shoumi-case/core-pages-interactive/index.html` | 独立交互页面 | 替换时保留文件夹结构和内部资源 |
| 总结 | `assets/shoumi-case/shoumi-summary-final.webp` | 当前页面标注 1920 x 1280 | 详情页收尾图 |
| 后台系统 01 | `assets/shoumi-case/shoumi-backend-01.webp` | 文件存在，当前页面未直接引用 | 可作为后续后台系统模块素材 |
| 后台系统 02：设计风格 | `assets/shoumi-case/shoumi-backend-02-design-style.webp` | 文件存在，当前页面未直接引用 | 后续扩展备用 |
| 后台系统 03：视觉规范 | `assets/shoumi-case/shoumi-backend-03-visual-spec.webp` | 文件存在，当前页面未直接引用 | 后续扩展备用 |
| 后台系统 04：考勤 | `assets/shoumi-case/shoumi-backend-04-attendance.webp` | 文件存在，当前页面未直接引用 | 后续扩展备用 |
| 后台系统 05：首页 | `assets/shoumi-case/shoumi-backend-05-homepage.webp` | 文件存在，当前页面未直接引用 | 后续扩展备用 |
| 后台系统 06：页面展示 | `assets/shoumi-case/shoumi-backend-06-page-display.webp` | 文件存在，当前页面未直接引用 | 后续扩展备用 |

## 智慧运营可视化详情页 `visualization-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 首屏展示 | `assets/visualization-case/visualization-hero-01.webp` | 当前页面标注 1920 x 1280 | 详情页首屏大图 |
| 设计理念 | `assets/visualization-case/visualization-concept-02.webp` | 当前页面标注 1920 x 1280 | 整屏图 |
| 业务场景分析 | `assets/visualization-case/visualization-scenario-03.webp` | 当前页面标注 1920 x 1310 | 整屏图 |
| 信息架构设计 | `assets/visualization-case/visualization-architecture-04.webp` | 当前页面标注 1920 x 1281 | 整屏图 |
| 设计挑战 | `assets/visualization-case/visualization-design-challenge-04.webp` | 文件存在，当前页面未直接引用 | 可作为后续新增模块或替换旧架构模块 |
| 工程装备运营平台视频 | `assets/visualization-case/visualization-equipment-platform-05.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块，当前为懒加载 |
| 企业经营分析驾驶舱视频 | `assets/visualization-case/visualization-business-cockpit-0502.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块，当前为懒加载 |
| 汽车智能服务运营平台视频 | `assets/visualization-case/visualization-auto-service-0503.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块，当前为懒加载 |
| 视觉规范视频 | `assets/visualization-case/visualization-visual-spec-06.mp4` | 建议按页面宽图比例统一 | 自动播放视频模块，当前为懒加载 |
| 成果展示 | `assets/visualization-case/visualization-results-07.webp` | 当前页面标注 1920 x 1280 | 收尾成果图 |
| 作品集入口图 | 当前借用 `assets/shoumi-case/UI小图-2.webp` | 1200 x 800 | 建议新增可视化专属入口图并改 `portfolio.html` 引用 |

## 工业交互详情页 `industrial-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 项目首屏 | `assets/industrial-case/industrial-hero.webp` | 当前页面标注 1920 x 1024 | 首屏大图，同时页面仍叠加代码绘制的控制台概念界面 |
| 行业背景 | `assets/industrial-case/industrial-background.webp` | 当前页面标注 1920 x 1081 | 项目概览整屏图 |
| 设计挑战 | `assets/industrial-case/industrial-design-challenge.webp` | 当前页面标注 1920 x 1100 | 现场洞察/挑战模块整屏图 |
| 现场调研图片 / 设备照片 | 当前为占位模块 | 1200 x 800 | 页面仍保留占位，可补真实现场照片或调研图 |
| 设计策略 | `assets/industrial-case/industrial-design-strategy.webp` | 当前页面标注 1920 x 1280 | 任务流程/策略模块整屏图 |
| 系统架构 | `assets/industrial-case/industrial-system-architecture.webp` | 当前页面标注 1920 x 1240 | 信息架构模块整屏图 |
| 飞机除冰机智能控制终端 | `assets/industrial-case/industrial-aircraft-deicer.webp` | 当前页面标注 1920 x 1280 | 关键界面案例 01 |
| 全局监控中心 UI 大图 | 当前为占位模块 | 1200 x 900 | 页面仍保留占位，可替换为真实 UI 大图 |
| 设备控制台 UI 大图 | 当前为占位模块 | 1200 x 900 | 页面仍保留占位，可替换为真实 UI 大图 |
| 告警诊断 UI 小图 | 当前为占位模块 | 1200 x 800 | 小图 01 |
| 工单处理 UI 小图 | 当前为占位模块 | 1200 x 800 | 小图 02 |
| 移动巡检 UI 小图 | 当前为占位模块 | 1200 x 800 | 小图 03 |
| 农业设备机械智能控制终端 | `assets/industrial-case/industrial-agricultural-machinery.webp` | 当前页面标注 1920 x 1523 | 关键界面案例 02 |
| 工程机械车辆智能控制终端 | `assets/industrial-case/industrial-construction-vehicle-terminal.webp` | 当前页面标注 1921 x 2180 | 长图，注意文字和界面细节清晰度 |
| 更多工业 HMI 界面视频 | `assets/industrial-case/industrial-more-interfaces.mp4` | 建议 1920 x 1080 或按现版比例保持 | 自动播放视频模块，当前为懒加载 |
| 项目总结 | `assets/industrial-case/industrial-project-summary.webp` | 当前页面标注 1920 x 1280 | 收尾总结图 |
| 作品集入口图 | 当前借用 `assets/shoumi-case/UI小图-3.webp` | 1200 x 800 | 建议新增工业交互专属入口图并改 `portfolio.html` 引用 |

## 品牌视觉详情页 `brand-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 品牌项目首屏 | `assets/brand-case/brand-hero-01.webp` | 当前页面标注 1920 x 1024 | 品牌案例首屏和社交分享图 |
| 项目背景 | `assets/brand-case/brand-project-context-02.webp` | 当前页面标注 1920 x 1281 | 品牌案例整屏图 |
| 品牌基础系统 | `assets/brand-case/brand-foundation-03.webp` | 当前页面标注 1920 x 1281 | Logo、色彩、基础规范 |
| 产品应用 | `assets/brand-case/brand-product-application-04.webp` | 当前页面标注 1920 x 1281 | 产品/载体应用展示 |
| 营销应用 | `assets/brand-case/brand-marketing-application-05.webp` | 当前页面标注 1920 x 1281 | 海报、物料、传播应用 |
| 行业展会应用 | `assets/brand-case/brand-industry-exhibition-06.webp` | 当前页面标注 1920 x 1190 | 展会/线下场景应用 |
| 品牌总结 | `assets/brand-case/brand-summary-07.webp` | 当前页面标注 1920 x 1341 | 收尾总结图 |
| 作品集入口图 | `assets/home/平面小图-1.webp` | 1200 x 1200 / 1080 x 1350 | 当前入口在平面作品区品牌视觉卡片 |

## 视觉传播详情页 `visual-communication-case.html`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 项目封面 | `assets/visual-communication/visual-communication-01.webp` | 1920 x 1280 | 首屏封面和社交分享图 |
| 项目背景与传播目标 | `assets/visual-communication/visual-communication-02.webp` | 1920 x 1280 | 交代项目、受众与传播任务 |
| 商业视觉设计与品牌海报展示 | `assets/visual-communication/visual-communication-03.webp` | 1920 x 1081 | 宽幅海报主视觉与商业传播应用 |
| 海报设计合集 | `assets/visual-communication/visual-communication-04.webp` | 1920 x 1081 | 品牌、节日与产品推广海报集合 |
| 展厅与文化墙设计 | `assets/visual-communication/visual-communication-05.webp` | 1920 x 1564 | 展厅空间、文化墙与品牌体验展示 |
| 宣传折页与画册设计 | `assets/visual-communication/visual-communication-06.webp` | 1920 x 1537 | 公司画册、宣传折页与印刷物料展示 |
| 数字视觉与官网设计 | `assets/visual-communication/visual-communication-07.webp` | 1920 x 1440 | 响应式官网、数字界面与线上品牌视觉 |
| 商业落地多场景应用展示 | `assets/visual-communication/visual-communication-08.webp` | 1920 x 1081 | 大屏、广告、印刷、数字媒体、展会和办公场景 |
| 封底与项目总结 | `assets/visual-communication/visual-communication-09.webp` | 1920 x 1280 | 价值主张、联系方式与项目收尾 |
| 作品集入口图 | `assets/home/平面小图-2.webp` | 1200 x 1200 / 1080 x 1350 | 已链接到视觉传播详情页 |

## 通用素材 `assets/common/`

| 模块 | 当前素材 | 当前/建议尺寸 | 替换重点 |
| --- | --- | --- | --- |
| 全站 Logo | `assets/common/website-logo.svg` | SVG | 作品集页与详情页顶部 Logo |
| 全站星空背景 | `assets/common/starfield.gif` | 当前 540 x 763 | 全站背景纹理 |
| 稀疏星空背景 | `assets/common/starfield-sparse.gif` | 当前 305 x 496 | 备用背景纹理 |
| UI 项目区背景氛围图 | `assets/common/星球背景.webp` | 宽图背景 | 作品集页 UI 区域背景 |
| 备用主视觉 | `assets/common/portfolio-hero.webp` | 宽图 | 当前未直接引用，可作为备用 |
| 备用深色主视觉 | `assets/common/portfolio-hero-dark.webp` | 宽图 | CSS 备用背景 |
| 返回顶部图标 | `assets/common/back-to-top.svg` | SVG | 详情页浮动返回顶部按钮 |

## 优先替换顺序

1. 作品集首屏：`hero-motion.mp4`、`首页首屏.webp`
2. 作品集 5 张分类导航图：`01.webp` 到 `05.webp`
3. 作品集 UI 项目入口图：`UI大图1200x900.webp`、3 张 UI 小图
4. 补可视化和工业交互专属入口图，避免继续借用收米目录素材
5. 把车修好详情页用户问题模块：3 张 `把车修好-UI小图-*.webp`
6. 把车修好详情页长图模块：背景、设计系统、挑战、解决方案、流程、功能、界面、成果、总结
7. 收米多多详情页整屏图与概览视频
8. 可视化详情页整屏图与视频
9. 工业交互详情页真实图片、视频与仍保留的占位 UI 图
10. 品牌视觉详情页整套 `brand-case` 素材
11. 平面作品区主图与小图
12. 头像、简历 PDF、简历展示图

## 需要特别注意

- 当前作品集主体页是 `portfolio.html`，`index.html` 是启动页；替换作品集模块时不要只看 `index.html`。
- 当前大多数素材已经改为 `.webp`，后续覆盖时优先保持 `.webp` 文件名不变。
- 作品集页数据可视化入口和工业交互入口仍借用 `assets/shoumi-case/` 里的 UI 小图，后续最好拆成各自项目目录下的专属入口图。
- 把车修好详情页用户问题模块请按 `1514 x 1039` 导出，这是专用尺寸，不要用通用 `1200 x 800` 覆盖。
- 工业交互页已经新增多张真实长图，但仍保留现场照片、两张 UI 大图和三张 UI 小图占位模块。
- 品牌视觉详情页已经成为独立详情页，后续替换平面/品牌项目素材时要同步检查 `brand-case.html`。
