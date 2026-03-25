import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { AudioFlowDiagram, InterviewChatMockup, DietAppMockup, CityRouteMockup } from '@/components/Mockups';
import { Mail, ExternalLink, ArrowRight, Layers, Database, Code2, Server, Globe, Brain, MapPin, Zap, Phone } from 'lucide-react';

const SectionHeader = ({ num, category, title }: { num: string; category: string; title: string }) => (
  <div className="mb-12 md:mb-16">
    <div className="flex items-center gap-4 mb-5">
      <span className="text-sm font-mono tracking-widest text-gray-400">{num}</span>
      <div className="h-[1px] w-12 bg-gray-200" />
      <span className="font-mono text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 bg-white">{category}</span>
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900">
      {title}
    </h2>
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, 40]);

  return (
    <div className="bg-[#F8F9FA] min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-28 overflow-hidden bg-white">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 -z-10" />

        <div className="max-w-[1300px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-center">

            {/* Left: Identity */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-8">
                AI Product Manager  ·  Class of 2026
              </p>

              {/* Name */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] text-gray-900 mb-8">
                张雯倩
              </h1>

              {/* One-liner */}
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12 max-w-lg">
                地理学背景 × AI 产品思维<br />
                <span className="text-base text-gray-400">空间数据  ·  Agent 设计  ·  Prompt Engineering</span>
              </p>

              {/* Experience strip */}
              <div className="flex items-center gap-8 mb-12 text-sm text-gray-500">
                <div>
                  <span className="block text-2xl font-bold text-gray-900">百度</span>
                  <span className="text-xs text-gray-400">产品经理</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <span className="block text-2xl font-bold text-gray-900">腾讯</span>
                  <span className="text-xs text-gray-400">研发项目管理</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <span className="block text-2xl font-bold text-gray-900">美团</span>
                  <span className="text-xs text-gray-400">产品经理</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <span className="block text-2xl font-bold text-gray-900">北京大学</span>
                  <span className="text-xs text-gray-400">地理学 硕士</span>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-6 text-sm text-gray-400 font-mono border-t border-gray-100 pt-8">
                <span>18515101008</span>
                <span className="text-gray-200">|</span>
                <span>2301212647@stu.pku.edu.cn</span>
              </div>
            </motion.div>

            {/* Right: Portrait — clean, no decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-80 md:w-[380px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/80">
                <img
                  src="/portrait.jpg"
                  alt="张雯倩"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity, y }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300"
        >
          <div className="w-[1px] h-12 bg-gray-200 overflow-hidden relative">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/3 bg-blue-400"
            />
          </div>
          <span className="text-[9px] tracking-[0.2em] uppercase text-gray-300">scroll</span>
        </motion.div>
      </section>

      {/* DATA CARDS — with graduation photo as background */}
      <section className="relative min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-gray-200">
        {/* Graduation photo background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/graduation.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader num="01" category="大厂背书" title="四段实习  数据驱动的底层素养" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* 百度 */}
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-500" />
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-full text-xs font-semibold mb-5 ml-2">百度地图</div>
                <p className="text-gray-400 text-xs mb-3 ml-2">产品经理  2025.10–2026.02</p>
                <h3 className="text-xl font-bold mb-1 text-blue-600 ml-2 leading-snug">AI副驾</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-900 ml-2 leading-snug">NLP 体验优化</h3>
                <p className="text-xs text-gray-500 leading-relaxed ml-2">分层播报策略 · A/B测试驱动迭代 · 语音识别准确率 <span className="font-semibold text-blue-600">↑14%</span>，负反馈 <span className="font-semibold text-blue-600">↓27%</span></p>
              </div>

              {/* 腾讯 */}
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-violet-500" />
                <div className="inline-block px-3 py-1 bg-violet-50 text-violet-600 border border-violet-100 rounded-full text-xs font-semibold mb-5 ml-2">腾讯 IEG</div>
                <p className="text-gray-400 text-xs mb-3 ml-2">研发项目管理  2025.06–2025.09</p>
                <h3 className="text-xl font-bold mb-1 text-violet-600 ml-2 leading-snug">商业化平台</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-900 ml-2 leading-snug">数据体系搭建</h3>
                <p className="text-xs text-gray-500 leading-relaxed ml-2">APM管线优化 · 商业数据看板 · 资产准点交付率 <span className="font-semibold text-violet-600">↑15%</span>，赋能定价策略</p>
              </div>

              {/* 美团 */}
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500" />
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-xs font-semibold mb-5 ml-2">美团</div>
                <p className="text-gray-400 text-xs mb-3 ml-2">产品经理  2023.01–2023.04</p>
                <h3 className="text-xl font-bold mb-1 text-emerald-600 ml-2 leading-snug">搜推策略</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-900 ml-2 leading-snug">商户分层运营</h3>
                <p className="text-xs text-gray-500 leading-relaxed ml-2">商户分层模型 · 促销策略设计 · 周均订单 <span className="font-semibold text-emerald-600">↑22%</span>，头部续约率 <span className="font-semibold text-emerald-600">92%</span></p>
              </div>

              {/* 蚁群 */}
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-orange-500" />
                <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-full text-xs font-semibold mb-5 ml-2">蚁群科技</div>
                <p className="text-gray-400 text-xs mb-3 ml-2">产品经理  2024.09–2025.03</p>
                <h3 className="text-xl font-bold mb-1 text-orange-600 ml-2 leading-snug">多智能体调度</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-900 ml-2 leading-snug">无人机平台迭代</h3>
                <p className="text-xs text-gray-500 leading-relaxed ml-2">光伏/电力场景落地 · 开放接口标准制定 · 运维成本 <span className="font-semibold text-orange-600">↓40%</span></p>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center gap-4 border-t border-gray-200/60 pt-8">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">教育背景</span>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 shadow-sm font-medium">北京大学  地理学  硕士  985</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 shadow-sm font-medium">北京体育大学  旅游管理  本科  211</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT 01: Audio Parsing */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="02" category="自动化 Workflow" title="Audio Parsing  AI播报信息降噪工作流" />

          <div className="mb-14">
            <AudioFlowDiagram />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">来源于百度实习经历</h4>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  海量播报内容难以快速提炼重点，人工筛选成本极高。基于"驾驶行为画像+路线熟悉度"的多维分析，构建动态播报降噪机制。
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  结合 Whisper ASR 与大语言模型，自动将音视频非结构化内容转为高密度结构化文档，重构意图关键词库与多轮对话逻辑。
                </p>
              </div>

              <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-3 flex-wrap">
                <span className="text-sm font-medium text-gray-700">语音识别准确率</span>
                <strong className="text-xl font-mono text-blue-600">↑14%</strong>
                <span className="text-gray-300">·</span>
                <span className="text-sm font-medium text-gray-700">负反馈率</span>
                <strong className="text-xl font-mono text-emerald-600">↓27%</strong>
              </div>

              <Badge variant="secondary" className="w-fit px-4 py-2 bg-gray-100 text-gray-600 text-sm">A/B测试驱动  NLP模型迭代  分层策略</Badge>
            </div>

            <div className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-8">
              <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-6 flex items-center gap-2">
                <Layers size={14} /> 技术架构层
              </h4>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500"><Globe size={16} /></div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold mb-0.5">前端表现层</div>
                    <div className="text-sm font-medium text-gray-800">驾驶行为画像  路线熟悉度分析</div>
                  </div>
                </div>
                <div className="flex justify-center text-gray-300"><ArrowRight className="rotate-90 w-4 h-4" /></div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center gap-4 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-l-xl" />
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><Brain size={16} /></div>
                  <div>
                    <div className="text-xs text-blue-600 font-bold mb-0.5">Agent 编排层</div>
                    <div className="text-sm font-medium text-gray-800">Whisper ASR  GPT-4 意图理解</div>
                  </div>
                </div>
                <div className="flex justify-center text-gray-300"><ArrowRight className="rotate-90 w-4 h-4" /></div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500"><Database size={16} /></div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold mb-0.5">数据存储层</div>
                    <div className="text-sm font-medium text-gray-800">向量 DB  时序存储  时间戳对齐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT 02: Interview Simulator */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="03" category="对话式 Agent" title="Interview Simulator  AI面试精准模拟器" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <p className="text-gray-600 leading-relaxed text-base">
                求职者备考时缺乏真实感、针对性的面试反馈。基于 RAG 架构，结合目标 JD 与候选人简历，生成沉浸式面试场景。
              </p>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 size={14} className="text-blue-400" />
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Core Prompt Design</span>
                </div>
                <pre className="text-xs text-emerald-400 font-mono leading-loose whitespace-pre-wrap">
{`// System Prompt (核心设计)
你是{company}的资深面试官。
基于以下JD上下文:
{jd_context}
和候选人简历信息:
{resume_context}
进行真实面试模拟。

规则：
1. 保持人设，切勿表现出你是AI。
2. 针对简历细节进行追问。
3. 结束后输出多维雷达图数据。`}
                </pre>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { step: '①', label: '上传简历与目标岗位JD' },
                  { step: '②', label: 'AI 生成题库并规划面试走向' },
                  { step: '③', label: '多轮对话与压力情景测试' },
                  { step: '④', label: '雷达图打分与结构化评估报告', highlight: true },
                ].map(({ step, label, highlight }) => (
                  <div key={step} className={`flex items-center gap-3 text-sm font-medium p-3 rounded-xl border ${highlight ? 'bg-blue-50 border-blue-100 text-blue-700' : 'bg-[#F8F9FA] border-gray-100 text-gray-600'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${highlight ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-500'}`}>{step}</div>
                    {label}
                  </div>
                ))}
              </div>

              <Badge variant="outline" className="w-fit bg-white border-gray-200 text-gray-500 text-sm">RAG架构  Context管理  Prompt工程</Badge>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-blue-50 to-violet-50/50 rounded-full blur-3xl -z-10" />
              <InterviewChatMockup />
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT 03: Diet AI Planner */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="04" category="C端高频应用" title="Diet AI Planner  智能饮食决策助手" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <DietAppMockup />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
              <p className="text-base text-gray-600 leading-relaxed">
                年轻用户面临选择困难与健康管理缺失的双重压力。结合 <strong className="text-gray-900">LBS 与 LLM</strong> 的高频决策工具，让健康饮食毫不费力。
              </p>

              <div>
                <h4 className="text-xs font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2 mb-5">
                  <Server size={14} /> 系统架构分层
                </h4>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Layer 1  用户界面', title: 'C端 App  小程序', tags: ['React Native', 'Taro'], color: 'blue' },
                    { label: 'Layer 2  Agent 编排层', title: 'LangChain Workflow', tags: ['意图识别', '多工具路由'], color: 'violet', indent: 'ml-4' },
                    { label: 'Layer 3  模型层', title: 'GPT-4  文心一言', tags: ['营养估算', '决策推理'], color: 'emerald', indent: 'ml-8' },
                    { label: 'Layer 4  数据层', title: '高德API  美团API  营养库', tags: ['LBS定位', '实时菜品'], color: 'orange', indent: 'ml-12' },
                  ].map(({ label, title, tags, color, indent = '' }) => {
                    const palette: Record<string, string> = {
                      blue: 'border-l-blue-400 bg-blue-50 border-blue-100',
                      violet: 'border-l-violet-400 bg-violet-50 border-violet-100',
                      emerald: 'border-l-emerald-400 bg-emerald-50 border-emerald-100',
                      orange: 'border-l-orange-400 bg-orange-50 border-orange-100',
                    };
                    const textColor: Record<string, string> = {
                      blue: 'text-blue-600', violet: 'text-violet-600', emerald: 'text-emerald-600', orange: 'text-orange-600',
                    };
                    const tagClass: Record<string, string> = {
                      blue: 'bg-blue-100 text-blue-600', violet: 'bg-violet-100 text-violet-600',
                      emerald: 'bg-emerald-100 text-emerald-600', orange: 'bg-orange-100 text-orange-600',
                    };
                    return (
                      <div key={label} className={`${indent} p-4 rounded-xl border-l-4 border ${palette[color]}`}>
                        <div className={`text-xs font-bold mb-1 ${textColor[color]}`}>{label}</div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">{title}</div>
                        <div className="flex gap-2 flex-wrap">
                          {tags.map(t => <span key={t} className={`text-[10px] px-2 py-0.5 rounded font-medium ${tagClass[color]}`}>{t}</span>)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Badge variant="outline" className="w-fit border-gray-200 bg-white text-gray-500 text-sm">外部API整合  C端产品设计  推荐算法</Badge>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT 04: City Route */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-mono tracking-widest text-gray-400">05</span>
                <div className="h-[1px] w-12 bg-gray-200" />
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 bg-white">空间计算 × GIS</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                City Vibe  <span className="text-blue-600">情绪漫游生成器</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold w-fit">
              <Zap size={14} /> 地理学专业背景应用
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            <div className="xl:col-span-7 h-[560px] w-full rounded-2xl shadow-lg shadow-gray-200/60 border border-gray-200 overflow-hidden">
              <CityRouteMockup />
            </div>

            <div className="xl:col-span-5 flex flex-col gap-7">
              <p className="text-base text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4">
                结合空间规划与 GIS 数据分析能力（ArcGIS/Geopandas），探索<strong className="text-gray-900">非目的导向</strong>的新型出行产品。输入抽象情绪，AI 自动在城市中连点成线。
              </p>

              <div className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-700 mb-5 flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" /> GIS 空间分析链路
                </h4>
                <div className="space-y-5">
                  {[
                    { n: '1', title: 'Geopandas 空间聚类', desc: '对全城数万级 POI 进行密度分析与热点提取。' },
                    { n: '2', title: 'LLM 意图标签映射', desc: '将自然语言"赛博感"映射为结构化检索标签。' },
                    { n: '3', title: '动态连线算法', desc: '基于步行距离阈值在聚类簇中挑选最优路径组合。', highlight: true },
                  ].map(({ n, title, desc, highlight }) => (
                    <div key={n} className="flex gap-4 items-start">
                      <div className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${highlight ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-500'}`}>{n}</div>
                      <div>
                        <div className={`font-semibold text-sm mb-1 ${highlight ? 'text-blue-600' : 'text-gray-800'}`}>{title}</div>
                        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['LLM意图识别', 'ArcGIS', 'Geopandas', 'FastAPI', 'React'].map(t => (
                  <span key={t} className="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-xs rounded-lg shadow-sm">{t}</span>
                ))}
              </div>

              <Badge variant="outline" className="w-fit border-blue-100 bg-blue-50 text-blue-600 text-sm">地理学背景赋能  GIS × LLM 跨界</Badge>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS & CONTACT */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-600 mb-5">SKILLS  CONTACT</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              <span className="text-gray-900">Let's Build </span>
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">AI Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {[
              {
                category: 'AI  ML',
                color: 'text-blue-600',
                skills: ['Prompt Engineering', 'RAG', 'Multi-Agent', 'NLP'],
              },
              {
                category: '产品',
                color: 'text-violet-600',
                skills: ['Axure', '用研', 'A/B Test', '数据看板'],
              },
              {
                category: '技术',
                color: 'text-emerald-600',
                skills: ['Python', 'SQL', 'GIS  ArcGIS', 'Tableau'],
              },
              {
                category: '设计',
                color: 'text-red-500',
                skills: ['Figma', 'PS  AI', 'Illustrator', 'CAD'],
              },
            ].map(({ category, color, skills }) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-5 ${color}`}>{category}</p>
                <ul className="space-y-3">
                  {skills.map(skill => (
                    <li key={skill} className="text-base text-gray-700 font-normal leading-relaxed">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-gray-100">
            <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 text-base">
              <Mail size={18} />
              2301212647@stu.pku.edu.cn
            </button>
            <button className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold transition-all text-base">
              <Phone size={18} />
              18515101008
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100 bg-[#F8F9FA]">
        <p>© {new Date().getFullYear()} 张雯倩. All rights reserved.</p>
      </footer>
    </div>
  );
}
