import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: 'AI医学院用户操作指南',
    description: 'A Site of How to Use AI Medical College Platform',
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    base: '/',
    cleanUrls: true,
    ignoreDeadLinks: true,
    appearance: true,
    lastUpdated: true,
    vite: {
        server: {
            host: '0.0.0.0',
            port: 8081,
            open: true
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        // 顶部导航
        nav: [
            { text: '主页', link: '/' },
            { text: '教师版', link: '/teacher/how-to-login' },
            { text: '学生版', link: '/student/how-to-login' }
        ],
        // 侧边栏章节
        sidebar: {
            '/teacher/': [
                {
                    text: '开始使用',
                    items: [{ text: '登录', link: '/teacher/how-to-login' }]
                },
                {
                    text: 'AI学习门户',
                    items: [
                        { text: '班级智能看板', link: '/teacher/ai-portal/class-dashboard' },
                        { text: '教学资源管理', link: '/teacher/ai-portal/resource-management' },
                        { text: '个人中心', link: '/teacher/ai-portal/personal-center' },
                        { text: '题库管理', link: '/teacher/ai-portal/question-bank-management' },
                        { text: '考试管理', link: '/teacher/ai-portal/exam-management' }
                    ]
                },
                {
                    text: 'AI医学知识库',
                    items: [
                        { text: '个人知识体系', link: '/teacher/ai-medical-knowledge-base/personal-knowledge' },
                        { text: '病例库', link: '/teacher/ai-medical-knowledge-base/case-library' },
                        { text: '智能检索', link: '/teacher/ai-medical-knowledge-base/intelligent-search' }
                    ]
                }
            ]
            // '/web/': [
            //     {
            //         text: '简介',
            //         items: [
            //             { text: '什么是 Web 开发', link: '/web/intro/what-is-it' },
            //             { text: '技术路线', link: '/web/intro/roadmap' }
            //         ]
            //     },
            //     {
            //         text: '前置准备',
            //         items: [{ text: '配置 Node.js 多环境管理工具', link: '/web/prepare/multiple-env' }]
            //     }
            // ]
        },
        aside: true,
        outline: {
            level: 'deep',
            label: '目录'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/priestwanderer/AI-Medical-College' }],
        editLink: {
            pattern: 'https://github.com/priestwanderer/AI-Medical-College'
        },
        search: {
            provider: 'local'
        },
        externalLinkIcon: true
    }
    // sitemap: {
    //     hostname: 'https://dev-manual.gdmuna.com/'
    // }
});
