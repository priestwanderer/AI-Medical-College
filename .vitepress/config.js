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
                }
                // {
                //     text: '电脑使用的基本知识',
                //     items: [
                //         { text: '电脑硬件组成', link: '/prologue/basic-knowledge/pc-hardware-composition' },
                //         { text: '操作系统概述', link: '/prologue/basic-knowledge/pc-os-overview' },
                //         { text: '电脑桌面的常用功能区域', link: '/prologue/basic-knowledge/pc-desktop-common-area' },
                //         { text: '图形界面和命令行', link: '/prologue/basic-knowledge/gui-and-cli' },
                //         { text: '文件和目录', link: '/prologue/basic-knowledge/files-and-directories' },
                //         { text: '系统环境变量', link: '/prologue/basic-knowledge/system-environment-variables' }
                //     ]
                // }
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
