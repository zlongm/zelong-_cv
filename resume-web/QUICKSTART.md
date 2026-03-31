# ⚡ 快速开始指南

欢迎使用 Zelong 个人简历网站！按照以下步骤快速启动并自定义你的简历。

## 📋 5分钟快速设置

### 第一步：准备照片 (1分钟)

1. 准备一张清晰的个人照片（正方形，300×300px 或更大）
2. 将照片放入 `assets` 文件夹中
3. **重要**: 确保文件名为 `profile.jpg`

✅ **完成**: 你的照片设置完毕

### 第二步：编辑个人信息 (2分钟)

打开 `script.js` 文件，找到 `contentData` 对象。

**中文版本修改 (查找 `zh:` 部分)**:

```javascript
const contentData = {
    zh: {
        name: '你的名字',                    // 改这里
        email: 'your.email@example.com',     // 改这里
        phone: '+86 158 1234 5678',          // 改这里
        location: '你的城市, 国家',           // 改这里
        about: '你的个人简介...',             // 改这里
        // 其他内容继续修改
    }
}
```

**英文版本修改 (查找 `en:` 部分)**:

```javascript
en: {
    name: 'Your Name',
    email: 'your.email@example.com',
    phone: '+86 158 1234 5678',
    location: 'City, Country',
    about: 'Your bio...'
}
```

**葡萄牙语版本修改 (查找 `pt:` 部分)**:

```javascript
pt: {
    name: 'Seu Nome',
    email: 'seu.email@example.com',
    phone: '+86 158 1234 5678',
    location: 'Cidade, País',
    about: 'Sua bio...'
}
```

✅ **完成**: 基本信息设置完毕

### 第三步：添加教育和工作经验 (2分钟)

在 `script.js` 中继续找到相应的数组：

**教育经历示例** (找到 `education: [` 部分):

```javascript
education: [
    {
        school: '大学名称',
        major: '专业名称',
        year: '2018 - 2022',
        description: '你的描述'
    }
    // 可以添加多个
]
```

**工作经验示例** (找到 `experience: [` 部分):

```javascript
experience: [
    {
        company: '公司名称',
        position: '职位',
        year: '2023 - 至今',
        description: '工作描述'
    }
]
```

✅ **完成**: 教育和工作经验设置完毕

## 🚀 本地运行

选择其中一种方式运行：

### 方式1：Python (最简单)

```bash
cd resume-web
python -m http.server 8000
```

然后打开: `http://localhost:8000`

### 方式2：VS Code Live Server

1. 安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

### 方式3：直接打开

在 Windows 中，直接双击 `index.html` 文件打开（功能有限）

## ✨ 核心功能使用

### 🌐 语言切换
- 页面顶部有3个语言按钮
- 点击 **中文** / **English** / **Português** 即可切换
- 选择会自动保存

### 🌓 主题切换
- 点击页脚的 "切换主题" 链接
- 在亮色和深色模式间切换

### 📄 PDF下载
- 点击 "下载PDF" 按钮
- 自动下载对应语言的简历PDF
- PDF 格式优化排版

## 📝 常见修改项清单

打开 `script.js`，找到以下部分进行修改：

- [ ] **基本信息**: `name`, `email`, `phone`, `location`
- [ ] **关于我**: `about` 字段
- [ ] **教育**: `education` 数组
- [ ] **工作**: `experience` 数组
- [ ] **项目**: `projects` 数组
- [ ] **课程**: `courses` 数组
- [ ] **语言**: `languages` 数组
- [ ] **学习方式**: `methods` 数组

## 🎨 进阶自定义 (可选)

### 改变主色

编辑 `styles.css` 顶部的颜色变量：

```css
:root {
    --primary-color: #00d4ff;      /* 改这个颜色 */
    --secondary-color: #ff006e;
    --accent-color: #a200f5;
}
```

### 添加内容

三种语言的所有内容都在 `script.js` 中的 `contentData` 对象中，跟随相同的结构修改即可。

### 修改字体

在 `styles.css` 中找到 `font-family` 并修改。

## 🌍 上线部署

完成后，可以部署到以下平台（都是免费的）：

### GitHub Pages
```bash
# 推送到 GitHub 仓库
# 在设置中开启 GitHub Pages
```

### Netlify
1. 访问 https://www.netlify.com
2. 连接你的 GitHub 账户
3. 选择项目文件夹自动上线

### Vercel
1. 访问 https://vercel.com
2. Import 你的项目
3. 自动部署

## 🆘 问题排查

| 问题 | 解决方案 |
|------|--------|
| 照片不显示 | 检查 `assets/profile.jpg` 文件是否存在 |
| CSS样式错乱 | 清除浏览器缓存 (Ctrl+Shift+Delete) |
| PDF下载不工作 | 确保浏览器允许弹窗，检查网络连接 |
| 文字显示为方块 | 检查HTML编码是否为UTF-8 |

## 📚 完整目录结构

```
resume-web/
├── index.html           ← 主页面
├── styles.css          ← 样式（改颜色这里）
├── script.js           ← 数据和逻辑（改内容这里）
├── utils.js            ← 工具函数
├── data.js             ← 数据管理
├── config.json         ← 配置文件
├── assets/
│   ├── profile.jpg     ← 你的照片
│   └── README.md
├── README.md           ← 完整文档
└── QUICKSTART.md       ← 本文件
```

## 💡 小贴士

1. **同步三个语言**: 修改一个地方后，记得同步其他两个语言版本
2. **备份文件**: 修改前保存备份
3. **测试所有功能**: 改完后测试语言切换、PDF下载等
4. **移动设备测试**: 用手机访问测试响应式效果

## 🎉 完成！

现在你已经拥有一个专业的多语言个人简历网站了！

**下一步**:
- [ ] 自定义所有内容
- [ ] 测试所有功能
- [ ] 分享给朋友
- [ ] 部署到网络

需要帮助？查看 [README.md](README.md) 获取更详细的文档。

---

**记住**: 定期更新你的简历内容，保持最新状态！
