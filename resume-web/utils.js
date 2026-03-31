// ============================================
// 工具函数
// ============================================

/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {Number} wait - 等待时间（毫秒）
 * @returns {Function}
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 节流函数
 * @param {Function} func - 要执行的函数
 * @param {Number} limit - 限制时间（毫秒）
 * @returns {Function}
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 平滑滚动到指定元素
 * @param {String} selector - 元素选择器
 */
function smoothScrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * 复制文本到剪贴板
 * @param {String} text - 要复制的文本
 */
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('文本已复制到剪贴板！');
        });
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showNotification('文本已复制到剪贴板！');
        } catch (err) {
            console.error('复制失败:', err);
        }
        document.body.removeChild(textArea);
    }
}

/**
 * 显示通知消息
 * @param {String} message - 消息内容
 * @param {Number} duration - 显示时长（毫秒）
 */
function showNotification(message, duration = 2000) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00d4ff, #a200f5);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

/**
 * 获取本地存储值
 * @param {String} key - 键名
 * @param {*} defaultValue - 默认值
 * @returns {*}
 */
function getStorageValue(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch {
        return defaultValue;
    }
}

/**
 * 设置本地存储值
 * @param {String} key - 键名
 * @param {*} value - 值
 */
function setStorageValue(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error('存储值失败:', err);
    }
}

/**
 * 从URL获取查询参数
 * @param {String} key - 参数名
 * @returns {String|null}
 */
function getUrlParameter(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @param {String} format - 格式字符串 (yyyy-MM-dd, HH:mm:ss)
 * @returns {String}
 */
function formatDate(date, format = 'yyyy-MM-dd') {
    const map = {
        yyyy: date.getFullYear(),
        MM: String(date.getMonth() + 1).padStart(2, '0'),
        dd: String(date.getDate()).padStart(2, '0'),
        HH: String(date.getHours()).padStart(2, '0'),
        mm: String(date.getMinutes()).padStart(2, '0'),
        ss: String(date.getSeconds()).padStart(2, '0')
    };
    
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, matched => map[matched]);
}

/**
 * 验证邮箱格式
 * @param {String} email - 邮箱地址
 * @returns {Boolean}
 */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * 验证电话号码（简单验证）
 * @param {String} phone - 电话号码
 * @returns {Boolean}
 */
function isValidPhone(phone) {
    const regex = /^[0-9+\-\s()]+$/;
    return regex.test(phone) && phone.replace(/\D/g, '').length >= 7;
}

/**
 * 添加CSS动画
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 导出工具函数（如果使用模块化）
// export { debounce, throttle, smoothScrollTo, copyToClipboard, showNotification };
