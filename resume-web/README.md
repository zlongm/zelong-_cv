# 🚀 Zelong 个人简历网站

一个现代、科技感十足的个人简历网站，支持多语言（中文、英文、葡萄牙语）和PDF导出功能。

## ✨ 功能特性

- 🎨 **现代科技设计** - 采用渐变色、玻璃态效果和动画
- 🌐 **多语言支持** - 完美支持中文、英文、葡萄牙语
- 📱 **完全响应式** - 完美适配桌面、平板、手机
- 🌓 **亮暗主题切换** - 提供舒适的浏览体验
- 📄 **PDF导出** - 一键下载对应语言的简历PDF
- 💾 **本地存储** - 记住用户的语言和主题选择
- ⚡ **高性能** - 轻量级设计，加载速度快

## 📁 项目结构

```
resume-web/
├── index.html              # 主HTML文件
├── styles.css              # 样式文件（包含响应式设计）
├── script.js               # 主要功能和翻译逻辑
├── utils.js                # 辅助工具函数
├── data.js                 # 数据管理
├── assets/
│   └── profile.jpg         # 个人照片（需要自己添加）
└── README.md               # 本文件
```

## 🚀 快速开始

### 1. 设置个人照片

将你的个人照片放在 `assets/` 目录中，命名为 `profile.jpg`。

推荐：
- 尺寸：300×300像素或更大
- 格式：JPG或PNG
- 大小：小于500KB

### 2. 修改个人信息

编辑 `script.js` 文件中的 `contentData` 对象：

```javascript
const contentData = {
    zh: {
        name: 'Zelong',           // 你的名字
        email: 'your@email.com',   // 你的邮箱
        phone: '+86 xxx xxxx xxxx', // 你的电话
        location: 'City, Country',  // 你的位置
        about: '你的个人简介...',
        // ... 其他内容
    },
    // en 和 pt 分别是英文和葡萄牙语版本
}
```

### 3. 本地运行

#### 方式一：使用Python

```bash
cd resume-web
python -m http.server 8000
```

然后在浏览器打开 `http://localhost:8000`

#### 方式二：使用Node.js

```bash
npm install http-server -g
http-server resume-web
```

#### 方式三：直接打开HTML

直接在浏览器中打开 `index.html` 文件（不推荐，某些功能可能不完全）

## 📝 自定义内容指南

### 添加/修改教育经历

在 `script.js` 的 `contentData` 中找到 `education` 数组：

```javascript
education: [
    {
        school: '大学名称',
        major: '专业名称',
        year: '2018 - 2022',
        description: '描述'
    }
]
```

### 添加/修改工作经验

在 `experience` 数组中：

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

### 添加/修改项目

在 `projects` 数组中：

```javascript
projects: [
    {
        title: '项目名称',
        description: '项目描述',
        tags: ['技术1', '技术2', '技术3']
    }
]
```

### 添加/修改课程

在 `courses` 数组中：

```javascript
courses: [
    { name: '课程名称', info: '来源 - 状态' }
]
```

### 添加/修改语言技能

在 `languages` 数组中：

```javascript
languages: [
    { 
        name: '语言名称', 
        level: '等级描述', 
        percentage: 90  // 0-100的数值
    }
]
```

## 🎨 自定义设计

### 主题色修改

在 `styles.css` 中修改 `:root` 变量：

```css
:root {
    --primary-color: #00d4ff;      /* 主色 */
    --secondary-color: #ff006e;    /* 次色 */
    --accent-color: #a200f5;       /* 强调色 */
    --background-dark: #0a0e27;    /* 深色背景 */
    --text-primary: #ffffff;       /* 主文字色 */
}
```

### 字体修改

修改 `styles.css` 中的 `font-family`：

```css
font-family: 'Your Font Name', 'Microsoft YaHei', sans-serif;
```

## 📥 PDF导出说明

- 点击 "下载PDF" 按钮
- 自动下载对应语言的简历PDF
- PDF不包含导航栏、下载按钮等UI元素
- 更新时间仅在网页显示，PDF中隐藏

## 🌍 多语言切换

- 界面顶部有3个语言按钮：中文、English、Português
- 点击切换语言后，所有内容会自动更新
- 语言选择会保存到本地存储，下次访问自动应用

## 🌓 主题切换

- 点击页脚的"切换主题"链接
- 在亮色和深色主题间切换
- 主题选择会保存到本地存储

## 📱 响应式设计

该简历网站在以下设备上都有优化：

- 📊 桌面 (1200px+)
- 📱 平板 (768px - 1199px)
- 📲 手机 (< 768px)

## 🔧 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 网格布局、渐变、动画
- **JavaScript** - 原生JS（无框架依赖）
- **html2pdf.js** - PDF导出功能

## 💡 高级功能

### 添加社交媒体链接

编辑 `data.js` 中的 `socialLinks` 对象，然后在 `script.js` 中调用 `getSocialLink()` 函数。

### 导出/导入数据

```javascript
// 导出为JSON
const json = exportResumeJSON();

// 从JSON导入
importResumeJSON(jsonData);
```

### 添加新语言

1. 在 `translations` 对象中添加新键值对
2. 在 `contentData` 对象中添加新语言数据
3. 在 HTML 中添加新的语言按钮

## 🐛 常见问题

### Q: 照片不显示？
A: 确保照片文件在 `assets/profile.jpg`，且文件格式正确。

### Q: PDF导出有问题？
A: 检查浏览器是否已加载 html2pdf 库。确保网址中没有特殊字符。

### Q: 如何部署到网络？
A: 可以部署到：
- GitHub Pages
- Netlify
- Vercel
- 自己的服务器

## 📄 许可证

此项目可自由使用和修改。

## 👨‍💻 作者

Zelong Portfolio - 2024

---

**提示**：如果你想进一步扩展功能（如联系表单、动态内容管理等），可以使用后端框架如 Node.js/Express 或 Python/Flask。
