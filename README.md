# SHU261 课程作业仓库

上海大学 SHU261 基础实践课程作业提交仓库。

| 项目 | 内容 |
|---|---|
| 姓名 | 胡鑫 |
| 学号 | 24122330 |
| 仓库用途 | 平时作业与期末作业的集中提交 |
| 仓库性质 | 公开仓库 |

## 作业索引

| 目录 | 作业 | 形式 | 状态 |
|---|---|---|---|
| [Task01-AIGC-Game-Audio](./Task01-AIGC-Game-Audio/) | 当下 AIGC 在游戏音频设计中的应用（调研） | Markdown 长文 + 示意图 | 已提交 |
| （期末作业） | 待发布 | | |

## 目录结构约定

每个作业占一个独立目录，目录内自带 `README.md` 作为该作业的正文或说明。图片、图表等辅助材料放在该作业目录的 `images/` 下，生成脚本与源文件放在 `diagrams/` 下，保证配图可复现。

```
SHU261-Coursework-HuXin/
├── README.md                     本文件，作业索引
└── Task01-AIGC-Game-Audio/
    ├── README.md                 调研正文
    ├── images/                   正文引用的 PNG 示意图
    └── diagrams/                 示意图 SVG 源文件与渲染脚本
```

## 环境说明

本项目中的示意图由 SVG 源文件渲染而来，渲染脚本使用 Node.js 与 `@resvg/resvg-js`。复现方式见 `Task01-AIGC-Game-Audio/diagrams/`。
