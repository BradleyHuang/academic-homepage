# 学术主页维护与更新教程

## 一、项目结构

```
academic-homepage/
├── index.html          # 页面骨架（一般不需要改）
├── css/style.css       # 样式（一般不需要改）
├── css/responsive.css  # 响应式样式（一般不需要改）
├── js/renderer.js      # ← 主要编辑这个文件（个人信息、研究方向、教育背景、学术服务、动态）
├── js/publications.js  # ← 论文列表（单独编辑）
├── js/i18n.js          # 中英文切换逻辑（不需要改）
├── js/main.js          # 主逻辑（不需要改）
├── images/avatar.jpg   # 个人照片
└── data/config.json    # 配置备份（仅供参考，不参与渲染）
```

**核心原则：只需改 `renderer.js` 和 `publications.js`，改完推送到 GitHub 即可。**

---

## 二、本地预览

双击 `index.html` 用浏览器打开即可预览，无需服务器。

---

## 三、修改内容指南

### 3.1 修改个人信息

打开 `js/renderer.js`，找到 `"zh"` 或 `"en"` 部分，修改对应字段：

| 字段 | 说明 | 示例 |
|------|------|------|
| `name` | 姓名 | `"黄波"` |
| `title` | 职称 | `"副教授"` |
| `department` | 学院 | `"地球科学学院"` |
| `university` | 学校 | `"中国地质大学（武汉）"` |
| `email` | 邮箱 | `"bohuang@cug.edu.cn"` |
| `bio` | 个人简介 | 一段文字 |
| `tags` | 关键词标签 | `["前寒武纪地质", "太古宙构造"]` |

### 3.2 修改研究方向

找到 `research_interests` 数组，每个对象包含 `title`（方向名称）和 `desc`（描述）：

```json
"research_interests": [
    { "title": "方向名称", "desc": "方向描述" },
    { "title": "方向名称2", "desc": "方向描述2" }
]
```

- 添加：在数组末尾加一个 `{ "title": "...", "desc": "..." }`
- 删除：删掉对应的对象
- 注意：中英文都要改

### 3.3 修改教育背景

找到 `education` 数组：

```json
"education": [
    { "period": "2016 – 2020", "degree": "博士 构造地质学", "school": "中国地质大学（武汉）", "detail": "导师：xxx" },
    { "period": "2010 – 2016", "degree": "本科/硕士", "school": "xxx大学", "detail": "" }
]
```

- `period`：时间段
- `degree`：学位
- `school`：学校
- `detail`：补充信息（如导师），留空则不显示

### 3.4 修改学术服务

找到 `service` 对象：

```json
"service": {
    "editorial": ["期刊A 青年编委", "期刊B 编委"],
    "review": ["期刊1", "期刊2", "期刊3"]
}
```

### 3.5 添加/删除新闻动态

找到 `news` 数组，每条包含 `date` 和 `content`：

```json
"news": [
    { "date": "2026.05", "content": "新动态内容" },
    { "date": "2025.11", "content": "旧动态内容" }
]
```

- 添加新动态：在数组最前面加一条
- 删除动态：删掉对应对象

### 3.6 修改论文列表

打开 `js/publications.js`，找到 `data` 数组，每篇论文格式：

```javascript
{
    title: { zh: "中文标题", en: "English Title" },
    authors: { zh: "<span class='me'>Huang, B.*</span>, 合作者", en: "<span class='me'>Huang, B.*</span>, Coauthor" },
    venue: "期刊名", year: 2026, type: "journal", doi: "https://doi.org/..."
}
```

**注意事项：**
- 你的名字必须包在 `<span class='me'>...</span>` 里才会蓝色高亮
- 通讯作者加 `*`，如 `Huang, B.*`
- 添加论文：在数组末尾加一个对象（注意末尾逗号）
- 删除论文：删掉对应对象
- 中英文都要写

### 3.7 更换头像

将新照片命名为 `avatar.jpg`，放入 `images/` 文件夹替换原文件即可。

---

## 四、推送到 GitHub

修改完成后，打开终端（PowerShell / CMD / Git Bash），进入项目目录：

```bash
cd E:\Opencode\test\academic-homepage
```

然后依次执行：

```bash
# 1. 查看改了哪些文件
git status

# 2. 添加所有修改
git add .

# 3. 提交（引号内写本次修改的说明）
git commit -m "更新新闻动态"

# 4. 推送到 GitHub
git push
```

推送成功后，等待 1-2 分钟，刷新网页即可看到更新。

---

## 五、常见问题

### Q: 推送时报错 `fatal: not a git repository`
说明不在项目目录下，先 `cd` 到 `academic-homepage` 目录。

### Q: 推送时报错 `rejected` 或 `non-fast-forward`
先拉取再推送：
```bash
git pull
git push
```

### Q: 推送需要输入账号密码
GitHub 现在不支持密码登录，需要用 Personal Access Token：
1. 去 GitHub → Settings → Developer settings → Personal access tokens → Generate new token
2. 权限勾选 `repo`
3. 生成后复制 token，推送时粘贴到密码框

### Q: 改完代码页面没有变化
- 确认已经 `git push` 成功
- 等待 1-2 分钟（GitHub Pages 部署需要时间）
- 强制刷新浏览器：`Ctrl + Shift + R`（清除缓存）

### Q: 中英文切换不生效
确认 `renderer.js` 中 `zh` 和 `en` 两个部分都改了。

---

## 六、快速参考

| 操作 | 文件 | 推送命令 |
|------|------|----------|
| 改个人信息 | `js/renderer.js` | `git add . && git commit -m "update info" && git push` |
| 改研究方向 | `js/renderer.js` | 同上 |
| 改教育背景 | `js/renderer.js` | 同上 |
| 改学术服务 | `js/renderer.js` | 同上 |
| 加新闻动态 | `js/renderer.js` | 同上 |
| 改论文列表 | `js/publications.js` | 同上 |
| 换头像 | `images/avatar.jpg` | 同上 |
