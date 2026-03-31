// ============================================
// 翻译数据
// ============================================

const translations = {
    zh: {
        download_pdf: '下载PDF',
        basic_info: '基本信息',
        name: '姓名:',
        email: '邮箱:',
        phone: '电话:',
        location: '位置:',
        languages: '语言技能',
        learning_methods: '练习方式',
        last_updated: '最后更新:',
        about_me: '关于我',
        education: '教育背景',
        experience: '工作经验',
        projects: '实战项目',
        courses: '课程学习',
        footer_text: '© 2026 Zelong. All rights reserved.',
        toggle_theme: '切换主题'
    },
    en: {
        download_pdf: 'Download PDF',
        basic_info: 'Basic Information',
        name: 'Name:',
        email: 'Email:',
        phone: 'Phone:',
        location: 'Location:',
        languages: 'Languages',
        learning_methods: 'Learning Methods',
        last_updated: 'Last Updated:',
        about_me: 'About Me',
        education: 'Education',
        experience: 'Work Experience',
        projects: 'Projects',
        courses: 'Courses',
        footer_text: '© 2026 Zelong. All rights reserved. ',
        toggle_theme: 'Toggle Theme'
    },
    pt: {
        download_pdf: 'Baixar PDF',
        basic_info: 'Informações Básicas',
        name: 'Nome:',
        email: 'Email:',
        phone: 'Telefone:',
        location: 'Localização:',
        languages: 'Idiomas',
        learning_methods: 'Métodos de Aprendizagem',
        last_updated: 'Última Atualização:',
        about_me: 'Sobre Mim',
        education: 'Educação',
        experience: 'Experiência Profissional',
        projects: 'Projetos',
        courses: 'Cursos',
        footer_text: '© 2026 Zelong. Todos os direitos reservados. ',
        toggle_theme: 'Alternar Tema'
    }
};

// ============================================
// 内容数据
// ============================================

const contentData = {
    zh: {
        name: '马泽龙',
        email: 'mazelong2002@gmail.com',
        phone: '+351 927 259 962',
        location: 'Braga, Portugal',
        about: '我来自中国，在葡萄牙长期居住已超过14年，这让我具备良好的跨文化适应能力，能够在多元环境中灵活应对和发展。我毕业于信息系统管理与工程专业，将对科技的兴趣与系统思维及商业理解相结合。我对科技发展保持持续关注，并乐于探索新技术和行业趋势。我性格开放，喜欢与不同背景的人沟通交流，具备良好的团队合作精神和责任感。在面对新环境或新挑战时，我拥有较强的学习能力，能够快速适应并持续提升自己。目759，我正在寻找能够发挥自身技术背景、持续成长并在多元文化环境中创造价值的职业机会。',
        
        languages: [
            { name: '中文', level: '母语', percentage: 100 },
            { name: '英文', level: '日常沟通', percentage: 5
             },
            { name: '葡萄牙语', level: '高级', percentage: 90 }
        ],
        
        methods: [
            '课程学习',
            '项目实践',
            '在线教程',
            '技术博客',
            '开源社区'
        ],
        
        education: [
            {
                school: '米尼奥大学',
                major: '信息系统工程与管理',
                year: '2023 - 2026',
                description: '攻读本科学位，系统学习信息系统管理、工程实践和企业应用。预计2026年毕业。'
            }
        ],
        
        experience: [
            {
                company: '自由职业',
                position: '自由翻译员',
                year: '2026 - 至今',
                description: '专业翻译服务，丰富的跨领域翻译经验。涉及木材、钢铁、科技、出口肉类等行业，精通葡萄牙语和中文，保证翻译质量和文化准确性。'
            },
            {
                company: 'IT工作经验',
                position: '说明',
                year: '-',
                description: '目前没有IT类公司工作经验，但具备强大的技术背景和学习能力，渴望在IT领域发展职业生涯。'
            }
        ],
        
        projects: [
            {
                title: 'SAP 4/HANA 基础部署',
                description: '学校组织的企业资源规划系统基础部署项目，深入学习SAP系统架构、数据库管理和企业流程整合。',
                tags: ['SAP/HANA', 'ERP', '数据库']
            },
            {
                title: '交通实时模拟系统',
                description: '开发交通流量实时监测和模拟系统，支持动态数据处理和可视化展示，用于城市交通规划分析。',
                tags: ['Python', '数据处理', '实时系统', '可视化']
            },
            {
                title: '外卖平台软件',
                description: '完整的外卖平台应用，包括商家端、客户端和后台管理系统，支持订单管理、支付集成和配送追踪。',
                tags: ['Web应用', '支付集成', '后端管理', '移动适配']
            },
            {
                title: '软件部署计划书',
                description: '学校组织的软件部署项目文档编制，包括系统架构规划、部署策略制定、风险评估和实施方案设计。',
                tags: ['部署计划', '系统架构', '项目管理', '文档']
            }
        ],
        
        courses: [
            { name: '数据库 1', info: '数据库基础' },
            { name: '会计学', info: '财务基础' },
            { name: '软件过程与方法论', info: '软件工程' },
            { name: '面向对象编程', info: '编程范式' },
            { name: '操作系统', info: '系统基础' },
            { name: '数据库 2', info: '数据库进阶' },
            { name: '信息系统应用开发', info: '系统开发' },
            { name: '计算机网络导论', info: '网络基础' },
            { name: '统计方法', info: '数学与统计' },
            { name: '数值方法与非线性优化', info: '数值计算' },
            { name: '数据工程与决策支持', info: '数据与商业' },
            { name: '分布式系统基础', info: '分布式计算' },
            { name: '企业信息系统实施', info: '企业应用' },
            { name: '运筹学', info: '运营与优化' },
            { name: '物流与生产组织', info: '生产管理' },
            { name: '信息技术与组织发展', info: '组织与IT' },
            { name: '财务管理', info: '财务与成本' },
            { name: '选修课程（UMinho）', info: '选修课程' },
            { name: 'Web编程', info: 'Web开发' },
            { name: '人工智能技术', info: 'AI与机器学习' }
        ]
    },
    
    en: {
        name: 'Zelong Ma',
        email: 'mazelong2002@gmail.com',
        phone: '+351 927259962',
        location: 'Braga, Portugal',
        about: 'I am originally from China and have been living in Portugal for over 14 years, which has enabled me to develop strong cross-cultural adaptability and thrive in diverse environments. I hold a degree in Information Systems Management and Engineering, combining my interest in technology with a solid foundation in systems thinking and business understanding. I actively follow technological developments and enjoy exploring new trends in the industry. I am an open-minded and people-oriented individual who enjoys interacting with individuals from different backgrounds. I bring strong teamwork skills, a sense of responsibility, and the ability to learn quickly and adapt to new challenges. I am currently seeking opportunities where I can apply my technical background, continue to grow, and contribute within a dynamic and multicultural environment.',
        
        languages: [
            { name: 'Chinese', level: 'Native', percentage: 100 },
            { name: 'English', level: 'Fluent', percentage: 90 },
            { name: 'Portuguese', level: 'Intermediate', percentage: 70 }
        ],
        
        methods: [
            'Course Learning',
            'Project Practice',
            'Online Tutorials',
            'Technical Blogs',
            'Open Source Community'
        ],
        
        education: [
            {
                school: 'Universidade do Minho',
                major: 'Information Systems Engineering and Management',
                year: '2023 - 2026',
                description: 'Pursuing bachelor degree with systematic study of information systems management, engineering practice and enterprise applications. Expected graduation in 2026.'
            }
        ],
        
        experience: [
            {
                company: 'Freelance',
                position: 'Freelance Translator',
                year: '2026 - Present',
                description: 'Professional translation services with extensive cross-domain experience. Specializing in timber, steel, technology, and export meat industries. Fluent in Portuguese and Chinese with expertise in ensuring translation quality and cultural accuracy.'
            },
            {
                company: 'IT Work Experience',
                position: 'Note',
                year: '-',
                description: 'Currently no IT company work experience, but possess strong technical background and learning ability, eager to develop a career in the IT field.'
            }
        ],
        
        projects: [
            {
                title: 'SAP 4/HANA Deployment Fundamentals',
                description: 'School-organized enterprise resource planning system deployment project. In-depth learning of SAP system architecture, database management, and enterprise process integration.',
                tags: ['SAP/HANA', 'ERP', 'Database']
            },
            {
                title: 'Real-Time Traffic Simulation System',
                description: 'Developed real-time traffic flow monitoring and simulation system supporting dynamic data processing and visualization for urban traffic planning analysis.',
                tags: ['Python', 'Data Processing', 'Real-time System', 'Visualization']
            },
            {
                title: 'Food Delivery Platform',
                description: 'Complete food delivery application including merchant side, customer side and backend management system with order management, payment integration and delivery tracking.',
                tags: ['Web Application', 'Payment Integration', 'Backend Management', 'Mobile Responsive']
            },
            {
                title: 'Software Deployment Plan',
                description: 'School-organized software deployment project documentation, including system architecture planning, deployment strategy formulation, risk assessment and implementation proposal design.',
                tags: ['Deployment Plan', 'System Architecture', 'Project Management', 'Documentation']
            }
        ],
        
        courses: [
            { name: 'Databases 1', info: 'Database Fundamentals' },
            { name: 'Accounting', info: 'Financial Basics' },
            { name: 'Software Processes and Methodologies', info: 'Software Engineering' },
            { name: 'Object-Oriented Programming', info: 'Programming Paradigms' },
            { name: 'Operating Systems', info: 'Systems Fundamentals' },
            { name: 'Databases 2', info: 'Advanced Databases' },
            { name: 'Information Systems Application Development', info: 'Systems Development' },
            { name: 'Introduction to Computer Networks', info: 'Network Fundamentals' },
            { name: 'Statistical Methods', info: 'Mathematics & Statistics' },
            { name: 'Numerical Methods and Nonlinear Optimization', info: 'Numerical Computing' },
            { name: 'Data Engineering for Decision Support', info: 'Data & Business' },
            { name: 'Fundamentals of Distributed Systems', info: 'Distributed Computing' },
            { name: 'Enterprise Information Systems Implementation', info: 'Enterprise Applications' },
            { name: 'Operations Research', info: 'Operations & Optimization' },
            { name: 'Logistics and Production Organization', info: 'Production Management' },
            { name: 'Organizational Development with Information Technologies', info: 'Organization & IT' },
            { name: 'Financial Management', info: 'Finance & Costing' },
            { name: 'Elective Course (UMinho)', info: 'Elective Course' },
            { name: 'Web Programming', info: 'Web Development' },
            { name: 'Artificial Intelligence Techniques', info: 'AI & Machine Learning' }
        ]
    },
    
    pt: {
        name: 'Zelong Ma',
        email: 'mazelong2002@gmail.com',
        phone: '+351 927259962',
        location: 'Braga, Portugal',
        about: 'Sou natural da China e vivo em Portugal há mais de 14 anos, o que me permitiu desenvolver uma forte capacidade de adaptação a diferentes contextos culturais e trabalhar eficazmente em ambientes diversos. Sou licenciado em Gestão e Engenharia de Sistemas de Informação, área onde consigo conciliar o meu interesse pela tecnologia com uma base sólida de pensamento sistémico e compreensão do negócio. Tenho interesse contínuo pela evolução tecnológica e gosto de acompanhar novas tendências. Sou uma pessoa aberta e gosto de comunicar com pessoas de diferentes origens, valorizando o trabalho em equipa e o sentido de responsabilidade. Tenho facilidade de aprendizagem e adapto-me rapidamente a novos desafios. Atualmente, procuro oportunidades onde possa aplicar os meus conhecimentos, continuar a evoluir e contribuir num ambiente dinâmico e multicultural.',
        
        languages: [
            { name: 'Chinês', level: 'Nativo', percentage: 100 },
            { name: 'Inglês', level: 'Fluente', percentage: 90 },
            { name: 'Português', level: 'Intermediário', percentage: 70 }
        ],
        
        methods: [
            'Aprendizado de Cursos',
            'Prática de Projetos',
            'Tutoriais Online',
            'Blogs Técnicos',
            'Comunidade Open Source'
        ],
        
        education: [
            {
                school: 'Universidade do Minho',
                major: 'Engenharia e Gestão de Sistemas de Informação',
                year: '2023 - 2026',
                description: 'Cursando licenciatura com estudo sistemático de gestão de sistemas de informação, prática de engenharia e aplicações empresariais. Conclusão prevista para 2026.'
            }
        ],
        
        experience: [
            {
                company: 'Trabalho Freelancer',
                position: 'Tradutor Freelancer',
                year: '2026 - Presente',
                description: 'Serviços profissionais de tradução com vasta experiência em múltiplos domínios. Especialização em indústrias de madeira, aço, tecnologia e carnes de exportação. Fluente em português e chinês com expertise em garantir qualidade de tradução e precisão cultural.'
            }
        ],
        
        projects: [
            {
                title: 'Fundamentos de Implantação SAP 4/HANA',
                description: 'Projeto de implantação de sistema de planejamento de recursos empresariais organizado pela escola. Aprendizado aprofundado da arquitetura do sistema SAP, gerenciamento de banco de dados e integração de processos empresariais.',
                tags: ['SAP/HANA', 'ERP', 'Banco de Dados']
            },
            {
                title: 'Sistema de Simulação de Tráfego em Tempo Real',
                description: 'Desenvolvi sistema de monitoramento e simulação de fluxo de tráfego em tempo real com suporte para processamento de dados dinâmicos e visualização para análise de planejamento de tráfego urbano.',
                tags: ['Python', 'Processamento de Dados', 'Sistema em Tempo Real', 'Visualização']
            },
            {
                title: 'Plataforma de Entrega de Alimentos',
                description: 'Aplicativo completo de entrega de alimentos incluindo lado do comerciante, lado do cliente e sistema de gerenciamento de back-end com gerenciamento de pedidos, integração de pagamento e rastreamento de entrega.',
                tags: ['Aplicação Web', 'Integração de Pagamento', 'Gerenciamento de Back-End', 'Responsivo Móvel']
            },
            {
                title: 'Plano de Implantação de Software',
                description: 'Documentação de projeto de implantação de software organizado pela escola, incluindo planejamento da arquitetura do sistema, formulação de estratégia de implantação, avaliação de risco e design da proposta de implementação.',
                tags: ['Plano de Implantação', 'Arquitetura de Sistema', 'Gestão de Projeto', 'Documentação']
            }
        ],
        
        courses: [
            { name: 'Bases de Dados 1', info: 'Fundamentos de Bases de Dados' },
            { name: 'Contabilidade', info: 'Fundamentos Financeiros' },
            { name: 'Processo e Metodologias de Software', info: 'Engenharia de Software' },
            { name: 'Programação com Objetos', info: 'Paradigmas de Programação' },
            { name: 'Sistemas Operativos', info: 'Fundamentos de Sistemas' },
            { name: 'Bases de Dados 2', info: 'Bases de Dados Avançadas' },
            { name: 'Desenvolvimento de Aplicações Informáticas', info: 'Desenvolvimento de Sistemas' },
            { name: 'Introdução às Redes de Computadores', info: 'Fundamentos de Redes' },
            { name: 'Métodos Estatísticos', info: 'Matemática e Estatística' },
            { name: 'Métodos Numéricos e Otimização Não Linear', info: 'Computação Numérica' },
            { name: 'Engenharia de Dados para Suporte à Tomada de Decisão', info: 'Dados e Negócios' },
            { name: 'Fundamentos de Sistemas Distribuídos', info: 'Computação Distribuída' },
            { name: 'Implantação de Aplicações Informáticas Empresariais', info: 'Aplicações Empresariais' },
            { name: 'Investigação Operacional', info: 'Operações e Otimização' },
            { name: 'Logística e Organização da Produção', info: 'Gestão da Produção' },
            { name: 'Desenvolvimento Organizacional com Tecnologias da Informação', info: 'Organização e TI' },
            { name: 'Gestão Financeira', info: 'Finanças e Custos' },
            { name: 'Opção UMinho', info: 'Disciplina Opcional' },
            { name: 'Programação para a Web', info: 'Desenvolvimento Web' },
            { name: 'Técnicas de Inteligência Artificial', info: 'IA e Aprendizagem Automática' }
        ]
    }
};

// ============================================
// 当前语言管理
// ============================================

let currentLanguage = localStorage.getItem('resumeLanguage') || 'zh';

// ============================================
// 初始化
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // 设置初始主题
    const savedTheme = localStorage.getItem('resumeTheme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    // 初始化语言
    setLanguage(currentLanguage);
    
    // 绑定事件
    bindEvents();
    
    // 更新时间
    updateTime();
}

// ============================================
// 事件绑定
// ============================================

function bindEvents() {
    // 语言切换
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        });
    });
    
    // PDF下载
    document.getElementById('downloadPdf').addEventListener('click', downloadPDF);
    
    // 主题切换
    document.getElementById('themeToggle').addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });
    
    // 添加交互效果
    addInteractiveEffects();
}

// ============================================
// 语言切换
// ============================================

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('resumeLanguage', lang);
    
    // 更新活跃按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // 更新所有翻译文本
    updateTranslations(lang);
    
    // 更新内容
    updateContent(lang);
    
    // 设置html语言属性
    document.documentElement.lang = lang;
}

function updateTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (t[key]) {
            element.textContent = t[key];
        }
    });
}

function updateContent(lang) {
    const data = contentData[lang];
    
    // 基本信息
    document.getElementById('nameDisplay').textContent = data.name;
    document.getElementById('emailDisplay').textContent = data.email;
    document.getElementById('phoneDisplay').textContent = data.phone;
    document.getElementById('locationDisplay').textContent = data.location;
    
    // 关于我
    document.getElementById('aboutContent').textContent = data.about;
    
    // 语言技能
    const languageContainer = document.getElementById('languagesContainer');
    languageContainer.innerHTML = data.languages.map(lang => `
        <div class="skill-item">
            <span class="skill-name">${lang.name}</span>
            <span class="skill-level">${lang.level}</span>
        </div>
    `).join('');
    
    // 练习方式
    const methodsContainer = document.getElementById('methodsContainer');
    methodsContainer.innerHTML = data.methods.map(method => 
        `<li>${method}</li>`
    ).join('');
    
    // 教育背景
    const educationContainer = document.getElementById('educationContainer');
    educationContainer.innerHTML = data.education.map(edu => `
        <div class="education-item">
            <div class="education-header">
                <div>
                    <div class="education-school">${edu.school}</div>
                    <div class="education-major">${edu.major}</div>
                </div>
                <span class="education-year">${edu.year}</span>
            </div>
            <div class="education-description">${edu.description}</div>
        </div>
    `).join('');
    
    // 工作经验
    const experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.innerHTML = data.experience.map(exp => `
        <div class="experience-item">
            <div class="experience-header">
                <div>
                    <div class="experience-position">${exp.position}</div>
                    <div class="experience-company">${exp.company}</div>
                </div>
                <span class="experience-year">${exp.year}</span>
            </div>
            <div class="education-description">${exp.description}</div>
        </div>
    `).join('');
    
    // 项目
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = data.projects.map(project => `
        <div class="project-card">
            <div class="project-title">${project.title}</div>
            <div class="project-description">${project.description}</div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    // 课程
    const coursesContainer = document.getElementById('coursesContainer');
    coursesContainer.innerHTML = data.courses.map(course => `
        <div class="course-item">
            <div class="course-name">${course.name}</div>
            <div class="course-info">${course.info}</div>
        </div>
    `).join('');
}

// ============================================
// 主题切换
// ============================================

function toggleTheme() {
    const isDark = document.body.classList.toggle('light-mode');
    localStorage.setItem('resumeTheme', isDark ? 'light' : 'dark');
}

// ============================================
// 交互效果
// ============================================

function addInteractiveEffects() {
    // 进度条动画
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillProgress = entry.target.querySelector('.skill-progress');
                if (skillProgress) {
                    const width = skillProgress.style.width;
                    skillProgress.style.setProperty('--progress-width', width);
                    skillProgress.style.width = width;
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-bar').forEach(bar => {
        observer.observe(bar);
    });
    
    // 项目卡片点击展开效果
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.zIndex = index;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 教育和工作项目的序号动画
    document.querySelectorAll('.education-item, .experience-item').forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '5px';
            this.style.paddingLeft = '20px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '1px';
            this.style.paddingLeft = '25px';
        });
    });
    
    // 课程项目鼠标悬停效果
    document.querySelectorAll('.course-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(37, 99, 235, 0.08)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // 平滑滚动到元素
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ============================================
// 主题切换
// ============================================

function toggleTheme() {
    const isDark = document.body.classList.toggle('light-mode');
    localStorage.setItem('resumeTheme', isDark ? 'light' : 'dark');
}

// ============================================
// 更新时间
// ============================================

function updateTime() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    const timeElement = document.getElementById('updateTimeValue');
    if (timeElement) {
        timeElement.textContent = dateString;
    }
}

// ============================================
// PDF下载
// ============================================

function downloadPDF() {
    // 生成极简正式简历HTML（非网页布局，适合A4打印）
    const data = contentData[currentLanguage];
    const translations_ = translations[currentLanguage];
    // 获取头像base64
    let photoBase64 = '';
    const originPhoto = document.querySelector('.profile-photo');
    if (originPhoto && originPhoto.src) {
        // 创建canvas转base64
        const img = originPhoto;
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        photoBase64 = canvas.toDataURL('image/jpeg', 0.92);
    }
    let html = `
    <div style="font-family: Arial, sans-serif; font-size: 11px; line-height: 1.5; color: #222; max-width: 800px; margin: 0 auto; padding: 0;">
        <div style="display: flex; align-items: center; gap: 32px; margin-bottom: 12px;">
            ${photoBase64 ? `<img src='${photoBase64}' style='width:120px;height:120px;border-radius:50%;object-fit:cover;border:2.5px solid #2563EB;box-shadow:0 2px 8px #2563eb22;' alt='photo'>` : ''}
            <div>
                <h1 style="margin: 0 0 4px 0; font-size: 22px; color: #2563EB;">${data.name}</h1>
                <div style="font-size: 11px; color: #444;">${data.email} | ${data.phone} | ${data.location}</div>
            </div>
        </div>
        <div style="margin-bottom: 8px;">
            <h3 style="margin: 8px 0 2px 0; color: #2563EB; font-size: 13px;">${translations_.about_me}</h3>
            <div style="font-size: 10.5px; text-align: justify;">${data.about}</div>
        </div>
        <div style="margin-bottom: 8px;">
            <h3 style="margin: 8px 0 2px 0; color: #2563EB; font-size: 13px;">${translations_.education}</h3>
            ${data.education.map(edu => `
                <div style='margin-bottom:2px;'><b>${edu.school}</b> (${edu.year})<br><span style='color:#2563EB;'>${edu.major}</span><br><span style='font-size:10px;'>${edu.description}</span></div>
            `).join('')}
        </div>
        <div style="margin-bottom: 8px;">
            <h3 style="margin: 8px 0 2px 0; color: #2563EB; font-size: 13px;">${translations_.experience}</h3>
            ${data.experience.map(exp => `
                <div style='margin-bottom:2px;'><b>${exp.position}</b> - ${exp.company} ${exp.year !== '-' ? `(${exp.year})` : ''}<br><span style='font-size:10px;'>${exp.description}</span></div>
            `).join('')}
        </div>
        <div style="margin-bottom: 8px;">
            <h3 style="margin: 8px 0 2px 0; color: #2563EB; font-size: 13px;">${translations_.projects}</h3>
            ${data.projects.map(proj => `
                <div style='margin-bottom:2px;'><b>${proj.title}</b><br><span style='font-size:10px;'>${proj.description}</span><br><span style='font-size:9px;color:#666;'>${proj.tags.map(tag => `<span style='background:#f0f4fa;padding:1px 4px;margin-right:3px;border-radius:2px;'>${tag}</span>`).join('')}</span></div>
            `).join('')}
        </div>
        <div style="margin-bottom: 8px;">
            <h3 style="margin: 8px 0 2px 0; color: #2563EB; font-size: 13px;">${translations_.languages}</h3>
            ${data.languages.map(lang => `<span style='margin-right:12px;'>${lang.name}: ${lang.level}</span>`).join('')}
        </div>
        <div style="margin-bottom: 8px;">
            <h3 style="margin: 8px 0 2px 0; color: #2563EB; font-size: 13px;">${translations_.courses}</h3>
            <div style='font-size:9.5px;'>${data.courses.map(course => course.name).join(' · ')}</div>
        </div>
    </div>
    `;
    const options = {
        margin: 8,
        filename: 'zelong_ma_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#fff' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(html).save();
}
