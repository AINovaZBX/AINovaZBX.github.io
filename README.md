# 赵炳旭 · 个人主页

赵炳旭（山东第二医科大学 · 基础医学院 · 计算机科学与技术教研室讲师）的个人学术主页。纯静态网站，可一键部署到 GitHub Pages。

## 技术栈

- HTML5 + CSS3 + 原生 JavaScript（无构建依赖）
- 内容数据分离在 `js/data.js`，便于维护

## 目录结构

```
个人网站/
├── index.html          # 首页
├── css/style.css       # 样式
├── js/
│   ├── data.js         # 简历数据（论文/经历）
│   └── main.js         # 渲染逻辑
├── .github/workflows/
│   └── deploy.yml      # GitHub Pages 自动部署
└── README.md
```

## 本地预览

直接用浏览器打开 `index.html` 即可；或用任意静态服务器：

```bash
cd 个人网站
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 GitHub Pages

### 方式一：GitHub 网页端（最简单）

1. 登录 GitHub，点击右上角 **+** → **New repository**，仓库名填 `zhaobingxu.github.io`
   （用你自己的用户名，仓库名必须是 `你的用户名.github.io`，发布后网址即为 `https://你的用户名.github.io`）。
2. 仓库设为 **Public**，点击 **Create repository**。
3. 在仓库页面点击 **uploading an existing file**，把本目录下的
   `index.html`、`css/`、`js/`、`.github/` 全部拖拽上传，提交。
4. 进入 **Settings → Pages**，在 **Build and deployment → Source** 选择
   **GitHub Actions**（仓库里已含 `.github/workflows/deploy.yml`，会自动生效）。
5. 稍等 1–2 分钟，访问 `https://你的用户名.github.io` 即可。

### 方式二：命令行推送（推荐，后续可反复更新）

```bash
# 1. 在 GitHub 新建空仓库 <你的用户名>.github.io（不要勾选 README）

# 2. 本地初始化并推送
cd 个人网站
git init
git add .
git commit -m "init: personal homepage"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
git push -u origin main

# 3. Settings → Pages → Source 选 GitHub Actions
```

推送成功后访问 `https://<你的用户名>.github.io`。

## 内容更新

修改简历信息只需编辑 `js/data.js`：

- `PUBLICATIONS`：论文列表
- `EDUCATION`：教育经历
- `WORK`：工作经历

改完后重新 push 即可自动更新。
