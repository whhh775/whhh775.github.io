# 素材库分类与替换指南

当前素材库只分到第二层，便于日后替换素材时快速定位。以后优先保持原文件名不变，直接覆盖对应文件；如果修改文件名，再同步更新 HTML / CSS 引用。

## 1. 目录结构

```text
assets/
  common/        全站通用素材：背景、图标、备用主视觉
  home/          首页素材：首页首屏、分类导航、UI 入口、平面作品、简历区
  repair-case/   把车修好案例素材
  shoumi-case/   收米多多案例素材
```

## 2. `assets/common/` 全站通用素材

| 文件 | 规格 | 用途 |
| --- | --- | --- |
| `starfield.gif` | 540 x 763 | 全站星空背景纹理 |
| `starfield-sparse.gif` | 305 x 496 | 稀疏星空背景 |
| `星球背景.webp` | 1919 x 1024 | 首页 UI 项目区域背景氛围图 |
| `portfolio-hero.webp` | 1536 x 1024 | 备用主视觉，当前未直接引用 |
| `portfolio-hero-dark.webp` | 1536 x 1024 | CSS 备用主视觉背景 |
| `back-to-top.svg` | SVG | 案例详情页返回顶部图标 |

## 3. `assets/home/` 首页素材

| 文件 | 规格 | 用途 |
| --- | --- | --- |
| `首页首屏.webp` | 1920 x 1080 | 首页视频封面、社交分享图 |
| `hero-motion.mp4` | 建议 1920 x 1080 | 首页首屏视频 |
| `01.webp` | 1328 x 1184 | 分类导航：产品设计 |
| `02.webp` | 1327 x 1185 | 分类导航：UI 界面设计 |
| `03.webp` | 1327 x 1185 | 分类导航：品牌视觉设计 |
| `04.webp` | 1328 x 1184 | 分类导航：海报物料设计 |
| `05.webp` | 1327 x 1185 | 分类导航：版式设计 |
| `UI大图1200x900.webp` | 1448 x 1086 | 首页把车修好案例入口大图 |
| `平面主图.webp` | 1448 x 1086 | 首页平面作品主推大图 |
| `平面小图-1.webp` | 1254 x 1254 | 品牌视觉卡片 |
| `平面小图-2.webp` | 1254 x 1254 | 海报设计卡片 |
| `平面小图-3.webp` | 1254 x 1254 | 活动物料卡片 |
| `平面小图-4.webp` | 1254 x 1254 | PPT 与信息设计卡片 |
| `resume.pdf` | PDF | 简历下载文件 |
| `resume-portfolio-visual.webp` | 1053 x 1000 | 简历区域展示图 |

分类导航图建议后续统一导出 `1200 x 1070`。

## 4. `assets/repair-case/` 把车修好案例素材

| 文件 | 规格 | 用途 |
| --- | --- | --- |
| `repair-case-cover.webp` | 1756 x 896 | 案例详情页封面、社交分享图 |
| `repair-background-reference.webp` | 1754 x 897 | 项目背景区域背景图 |
| `把车修好-UI小图-1.webp` | 1513 x 1039 | 用户问题卡片 01 背景图 |
| `把车修好-UI小图-2.webp` | 1513 x 1039 | 用户问题卡片 02 背景图 |
| `把车修好-UI小图-3.webp` | 1514 x 1039 | 用户问题卡片 03 背景图 |
| `car-component.webp` | 691 x 290 | 设计系统组件图 |
| `challenge-background.webp` | 1717 x 916 | 设计挑战区域背景图 |
| `solution-overview.webp` | 1672 x 941 | 解决方案总览 |
| `solution-core.webp` | 1920 x 3056 | 解决方案核心流程 |
| `user-flow.webp` | 1920 x 1081 | 用户流程设计 |
| `feature-system.webp` | 1920 x 1579 | 核心功能模块 |
| `repair-progress-system.webp` | 1920 x 1347 | 维修进度系统 |
| `order-system.webp` | 1920 x 1368 | 订单系统 |
| `ui-showcase.webp` | 1920 x 2550 | 核心界面展示 |
| `repair-results-summary.webp` | 1920 x 1939 | 成果表达与总结 |

把车修好详情页「用户问题模块」UI 小图建议统一维护为 `1514 x 1039`。

## 5. `assets/shoumi-case/` 收米多多案例素材

| 文件 | 规格 | 用途 |
| --- | --- | --- |
| `UI小图-1.webp` | 1514 x 1039 | 首页收米多多入口、收米详情页封面、页面展示一 |
| `UI小图-2.webp` | 1515 x 1038 | 首页 UI Case 03 预览图、收米页面展示二 |
| `UI小图-3.webp` | 1514 x 1039 | 首页 UI Case 04 预览图、收米页面展示三 |

## 6. `assets/visualization-case/` 可视化大屏案例素材

| 文件 | 规格 | 用途 |
| --- | --- | --- |
| `visualization-hero-01.webp` | 1920 x 1280 | 智慧运营可视化平台详情页首屏展示 |
| `visualization-concept-02.webp` | 1920 x 1280 | 智慧运营可视化平台详情页设计理念模块 |

## 7. 替换规则

1. 替换首页素材：放到 `assets/home/`。
2. 替换把车修好案例素材：放到 `assets/repair-case/`。
3. 替换收米多多案例素材：放到 `assets/shoumi-case/`。
4. 替换可视化大屏案例素材：放到 `assets/visualization-case/`。
4. 替换通用背景或图标：放到 `assets/common/`。
5. 最省事的方式是同名覆盖，不用改代码。
6. 如果改了文件名，需要同步改 `index.html`、`repair-case.html`、`shoumi-case.html` 或 `styles.css` 里的路径。

## 7. 待处理事项

- `assets/common/portfolio-hero.webp` 当前未直接引用，可确认是否继续保留。
- `shoumi-case.html` 页面文字存在编码异常，建议后续单独修复编码和文案。

## 8. `assets/ppt-info-design/` PPT 与信息设计详情页素材

| 文件名 | 建议尺寸 | 用途 |
| --- | --- | --- |
| `ppt-info-design-01.webp` | 1920 x 1280 | Hero 首屏 |
| `ppt-info-design-02.webp` | 1920 x 1280 | 项目背景与设计任务 |
| `ppt-info-design-03.webp` | 1920 x 1280 | 整体信息架构 |
| `ppt-info-design-04.webp` | 1920 x 1280 | 企业介绍 PPT 精选 |
| `ppt-info-design-05.webp` | 1920 x 1280 | 视觉与信息规范 |
| `ppt-info-design-06.webp` | 1920 x 1280 | 行业解决方案体系 |
| `ppt-info-design-07.webp` | 1920 x 1280 | 三个行业的差异化适配 |
| `ppt-info-design-08.webp` | 1920 x 1280 | 精选页面展示 |
| `ppt-info-design-09.webp` | 1920 x 1600 | 更多精选页面展示 |
| `ppt-info-design-10.webp` | 1920 x 1280 | 项目总结 |
