# 四川办税导航

基于 Cloudflare Pages 的静态导航页，数据来自 [scbs.vip](https://scbs.vip) 现有分组与网址，并按官方域名校正。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 页面结构、样式与交互逻辑 |
| `data.js` | **全部导航数据**（分组、站点、搜索引擎），日常只改这个 |
| `_headers` | Cloudflare 响应头配置（安全头 + 缓存策略） |
| `robots.txt` | 爬虫规则 |

## 功能

- 搜索框：输入文字走搜索引擎（可切换），输入网址直接跳转
- 分组快捷跳转条 + 分组折叠（`⇕` 一键全折叠）
- 输入即过滤，搜索时自动展开分组
- 深浅色切换，默认跟随系统并记忆选择
- 图标自动抓取 favicon，失败退回首字母
- 快捷键：`/` 或 `Ctrl+K` 聚焦搜索，`Esc` 失焦

## 本地预览

直接用浏览器打开 `index.html`，无需构建、无依赖。

## 修改导航

编辑 `data.js`，照抄一行改掉即可：

```js
{ name: '站点名', url: 'https://example.com', desc: '一句话描述', icon: '' },
```

`icon` 留空自动抓 favicon，也可填 emoji 或图片 URL。

## 部署

Cloudflare Dashboard → Workers & Pages → Create → Pages → 连接本仓库：

- 构建命令：**留空**
- 构建输出目录：`/`

推送后自动部署，无需手动上传。
