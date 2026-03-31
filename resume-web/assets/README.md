# 资源文件夹

此文件夹用于存放简历所需的资源文件。

## 📸 添加个人照片

1. **文件名必须是**: `profile.jpg`
2. **建议规格**:
   - 尺寸: 300×300px 或更大（正方形）
   - 格式: JPG 或 PNG
   - 文件大小: < 500KB
   - 背景: 纯色或模糊背景效果最佳

3. **放置位置**: 直接放在本文件夹中

## 💡 照片建议

- 使用清晰的头部照片
- 穿着正式或专业服装
- 自然清晰的笑容
- 背景简洁
- 照片亮度适中

## 🎨 其他资源

如需添加其他资源（图标、背景等），也可放在此目录中。

## 示例替换方式

如果你的照片有不同的名称或格式，可以在 `index.html` 中修改图片引用：

```html
<!-- 当前 -->
<img src="./assets/profile.jpg" alt="Profile Photo" class="profile-photo">

<!-- 修改为你的文件 -->
<img src="./assets/your-photo-name.jpg" alt="Profile Photo" class="profile-photo">
```

或者直接在 `styles.css` 中使用 CSS 背景图像。
