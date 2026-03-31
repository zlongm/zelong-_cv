// ============================================
// 数据管理文件
// ============================================
// 注意：主要数据已集成在 script.js 中
// 此文件用于扩展功能和数据管理

/**
 * 获取简历数据
 * @param {String} language - 语言代码
 * @returns {Object} 简历数据
 */
function getResumeData(language) {
    return contentData[language] || contentData['zh'];
}

/**
 * 获取翻译
 * @param {String} language - 语言代码
 * @returns {Object} 翻译对象
 */
function getTranslations(language) {
    return translations[language] || translations['zh'];
}

/**
 * 更新简历中的特定字段
 * @param {String} language - 语言代码
 * @param {String} field - 字段名
 * @param {*} value - 新值
 */
function updateResumeField(language, field, value) {
    if (contentData[language]) {
        contentData[language][field] = value;
    }
}

/**
 * 导出简历数据为JSON
 * @returns {String} JSON字符串
 */
function exportResumeJSON() {
    return JSON.stringify(contentData, null, 2);
}

/**
 * 从JSON导入简历数据
 * @param {String} jsonData - JSON字符串
 */
function importResumeJSON(jsonData) {
    try {
        const data = JSON.parse(jsonData);
        Object.assign(contentData, data);
        console.log('简历数据导入成功');
    } catch (error) {
        console.error('导入失败:', error);
    }
}

/**
 * 获取所有支持的语言
 * @returns {Array} 语言数组
 */
function getSupportedLanguages() {
    return [
        { code: 'zh', name: '中文' },
        { code: 'en', name: 'English' },
        { code: 'pt', name: 'Português' }
    ];
}

/**
 * 链接管理（如果需要添加社交媒体链接）
 */
const socialLinks = {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:zelong@example.com'
};

/**
 * 获取社交链接
 * @param {String} platform - 平台名称
 * @returns {String} 链接
 */
function getSocialLink(platform) {
    return socialLinks[platform.toLowerCase()] || null;
}

// 技能分类（用于未来扩展）
const skillCategories = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'TypeScript'],
    backend: ['Node.js', 'Python', 'MySQL', 'MongoDB', 'GraphQL'],
    tools: ['Git', 'Docker', 'Webpack', 'Vite', 'Jenkins'],
    soft: ['Team Leadership', 'Communication', 'Problem Solving', 'Project Management']
};
