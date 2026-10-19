# 四川办税

基于 Cloudflare Workers（静态资源）的导航页，数据来自 [scbs.vip](https://scbs.vip)，并按官方域名校正。

线上地址：https://nav.scbs.vip

## 目录结构

| 路径 | 作用 |
|---|---|
| `public/index.html` | 页面结构、样式与交互逻辑 |
| `public/data.js` | **全部导航数据**（分组、站点、搜索引擎），日常只改这个 |
| `public/favicon.png` | 站点图标 |
| `public/_headers` | 响应头配置（安全头 + 缓存策略） |
| `public/robots.txt` | 爬虫规则 |
| `wrangler.jsonc` | Workers 配置：Worker 名称 + 静态资源目录 |

## 功能

- 左侧固定导航栏：分组列表、站点计数、滚动自动高亮
- 搜索框：输入文字走搜索引擎（可切换），输入网址直接跳转
- 分组折叠，`⇕` 一键全折叠；搜索时自动展开并隐藏快捷条
- 深浅色切换，默认跟随系统并记忆选择
- 图标自动抓取 favicon，失败退回首字母
- 快捷键：`/` 或 `Ctrl+K` 聚焦搜索，`Esc` 失焦
- 移动端（<900px）自动隐藏侧栏，改用顶部横向快捷条

## 本地预览

由于用了相对路径加载 `data.js`，建议起个本地服务：

```bash
cd public && python -m http.server 8899
```

然后访问 http://127.0.0.1:8899

## 修改导航

编辑 `public/data.js`，照抄一行改掉即可：

```js
{ name: '站点名', url: 'https://example.com', desc: '一句话描述', icon: '' },
```

`icon` 留空自动抓 favicon，也可填 emoji 或图片 URL。

## 部署

### Git 自动部署（Workers Builds）

Worker → **Settings → Builds → Connect**，选择本仓库：

| 配置项 | 值 |
|---|---|
| Git branch | `main` |
| Build command | 留空 |
| Deploy command | `npx wrangler deploy`（默认值，不要改） |
| Root directory | 留空（仓库根目录） |

推送后自动构建部署。

> 注意：Worker 的 build token 权限只覆盖 Workers，**不含 Cloudflare Pages**。
> 因此本项目走 Worker + 静态资源，不要用 `wrangler pages deploy`，否则会报
> `Authentication error [code: 10000]`。

### 手动上传

把 `public/` 目录内所有文件打包成 zip（index.html 必须在压缩包根目录），
在 Worker 的 Deployments 页面上传即可。
