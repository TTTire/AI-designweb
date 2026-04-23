export type ArticleCategory = "AI 模型" | "科技公司" | "产品与生活" | "日报";

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory;
  tag: string;
  date: string;
  cover: string;
  excerpt: string;
  href: string;
  variant: "amber" | "blue" | "green";
}

export const articles: Article[] = [
  {
    id: "jwfS5idDyPC73Rg6cy2Wog",
    title: "Kimi K2.6 开源——编程登顶 + Agent Swarm 300 子智能体并行",
    category: "日报",
    tag: "AI 日报 · Kimi",
    date: "2026.04.21",
    cover: "/covers/cover_11.jpg",
    excerpt: "开源模型的天花板又高了——Kimi K2.6 登顶编程榜,顺手把 300 个子智能体并行的 Agent Swarm 端了出来。",
    href: "https://mp.weixin.qq.com/s/jwfS5idDyPC73Rg6cy2Wog",
    variant: "blue",
  },
  {
    id: "EOlyEmRCGDytSntQT7jdjw",
    title: "库克交班了,你的 iPhone 要变聪明了",
    category: "科技公司",
    tag: "Apple · AI",
    date: "2026.04.21",
    cover: "/covers/cover_1.jpg",
    excerpt: "苹果掌门换人,AI 成了新旗帜——这次不是「One more thing」,是整个产品哲学的转向。",
    href: "https://mp.weixin.qq.com/s/EOlyEmRCGDytSntQT7jdjw",
    variant: "amber",
  },
  {
    id: "KVFVXfBq54eHaMJRPpj3eA",
    title: "OpenAI 造了个制药 AI,Cursor 估值 500 亿",
    category: "日报",
    tag: "AI 日报 · OpenAI",
    date: "2026.04.20",
    cover: "/covers/cover_12.jpg",
    excerpt: "OpenAI 发布制药专用模型 GPT-Rosalind 杀入生命科学,Cursor 洽谈新一轮融资估值破 500 亿——卖铲子的比挖金子的还值钱。",
    href: "https://mp.weixin.qq.com/s/KVFVXfBq54eHaMJRPpj3eA",
    variant: "green",
  },
  {
    id: "Oxbsm-Z-w0gN7jBhvklX3Q",
    title: "Anthropic 下场做设计工具,Adobe 当天跌了 2%",
    category: "AI 模型",
    tag: "Anthropic · 深度",
    date: "2026.04.17",
    cover: "/covers/cover_2_2.png",
    excerpt: "4 月 17 日,The Information 爆出两条关于 Anthropic 的大消息:模型公司正式向设计工具领域进军——Claude 的另一条增长曲线,正在清晰起来。",
    href: "https://mp.weixin.qq.com/s/Oxbsm-Z-w0gN7jBhvklX3Q",
    variant: "blue",
  },
  {
    id: "KJawME_sRIYbFCWjfl7UIQ",
    title: "OpenAI 主动要求给自己征税,你信吗?",
    category: "科技公司",
    tag: "OpenAI · 政策",
    date: "2026.04.07",
    cover: "/covers/cover_3.jpg",
    excerpt: "2026 年 4 月 6 日,一件挺反常的事情发生了——一家 AI 公司,主动要求监管。",
    href: "https://mp.weixin.qq.com/s/KJawME_sRIYbFCWjfl7UIQ",
    variant: "amber",
  },
  {
    id: "B949tzPLufbOrapq3Q77SQ",
    title: "让 AI 当私教 3 个月,\n我最大的感受是——不饿还能瘦",
    category: "产品与生活",
    tag: "AI · 生活",
    date: "2026.03.26",
    cover: "/covers/cover_4.jpg",
    excerpt: "去年 10 月左右,我还没有龙虾——现在那个每天帮我干活的 AI 助手,把我饭桌上的事也接管了。",
    href: "https://mp.weixin.qq.com/s/B949tzPLufbOrapq3Q77SQ",
    variant: "green",
  },
  {
    id: "WV5NOeD8qrLp-vwScLP3Tw",
    title: "Meta 把 AI 用量写进绩效考核了,\n你的公司还会远吗?",
    category: "科技公司",
    tag: "Meta · 组织",
    date: "2026.03.23",
    cover: "/covers/cover_5.jpg",
    excerpt: "想象一下,年底绩效评估 HR 递过来的不只是 KPI 表格,还有一份你的 AI Token 消耗量报告。",
    href: "https://mp.weixin.qq.com/s/WV5NOeD8qrLp-vwScLP3Tw",
    variant: "amber",
  },
  {
    id: "Cv3uC5XyNFMQ4b5T-fxPuA",
    title: "当推理变成白菜价:\n小米正在改写 AI 行业的游戏规则",
    category: "AI 模型",
    tag: "小米 · 推理",
    date: "2026.03.20",
    cover: "/covers/cover_6.jpg",
    excerpt: "推理能力的成本暴跌,比你想象的更彻底。一个叫 Hunter Alpha 的神秘选手悄无声息登上 OpenRouter 榜首。",
    href: "https://mp.weixin.qq.com/s/Cv3uC5XyNFMQ4b5T-fxPuA",
    variant: "blue",
  },
  {
    id: "GSRo-tsUrupRQ87UiQ9lXg",
    title: "黄仁勋称 OpenClaw 绝对是下一个 ChatGPT——AI Agent 时代真的来了",
    category: "AI 模型",
    tag: "NVIDIA · Agent",
    date: "2026.03.18",
    cover: "/covers/cover_7.jpg",
    excerpt: "3 月 16 日,加州圣何塞,Nvidia GTC 2026。老黄把一句话留给了全场:OpenClaw 绝对是下一个 ChatGPT。",
    href: "https://mp.weixin.qq.com/s/GSRo-tsUrupRQ87UiQ9lXg",
    variant: "blue",
  },
  {
    id: "jNrpuVkW5YidbKlpdc0EFg",
    title: "AI Agent 越来越强,\n但没人敢放心用——直到有人决定解决这件事",
    category: "AI 模型",
    tag: "Agent · 可信",
    date: "2026.03.17",
    cover: "/covers/cover_8.jpg",
    excerpt: "你的 AI 助手已经能干很多事了。订机票、整理邮件、处理报销、写周报,甚至自主学习新技能。24 小时不休息,从不抱怨——但你敢放心用吗?",
    href: "https://mp.weixin.qq.com/s/jNrpuVkW5YidbKlpdc0EFg",
    variant: "green",
  },
  {
    id: "gqsYdL-3a5O35v6fx2Movw",
    title: "智谱发布 GLM-5-Turbo:\n大模型正式进入 Agent 时代",
    category: "AI 模型",
    tag: "智谱 · GLM-5",
    date: "2026.03.16",
    cover: "/covers/cover_9.jpg",
    excerpt: "一个月内连发两代,智谱在急什么?昨天我还在用 GLM-5 让龙虾帮我查资料、写文章、整理代码。",
    href: "https://mp.weixin.qq.com/s/gqsYdL-3a5O35v6fx2Movw",
    variant: "blue",
  },
  {
    id: "aY_aCZ9FmDJ1PE9MoPXEqQ",
    title: "OpenClaw 在中国:\n一场开源 AI 的狂欢还是泡沫?",
    category: "产品与生活",
    tag: "OpenClaw · 观察",
    date: "2026.03.16",
    cover: "/covers/cover_10.jpg",
    excerpt: "龙虾热潮来了。OpenClaw 在中国突然爆火,打开社交媒体,到处都是关于它的讨论——热闹之下,哪些是信号,哪些是噪声?",
    href: "https://mp.weixin.qq.com/s/aY_aCZ9FmDJ1PE9MoPXEqQ",
    variant: "green",
  },
];

export const categories = [
  "全部",
  "AI 模型",
  "科技公司",
  "产品与生活",
  "日报",
] as const;

export type CategoryFilter = (typeof categories)[number];
