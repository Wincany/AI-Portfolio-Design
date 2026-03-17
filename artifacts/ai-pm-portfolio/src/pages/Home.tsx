import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { AudioFlowDiagram, InterviewChatMockup, DietAppMockup, CityRouteMockup } from '@/components/Mockups';
import { Mail, ExternalLink, ArrowRight, Layers, Database, Code2, Server, Globe, Brain, MapPin, Zap, Sparkles, Cpu, Network } from 'lucide-react';

const SectionHeader = ({ num, category, title, dark = false }: { num: string, category: string, title: string, dark?: boolean }) => (
  <div className="mb-12 md:mb-20">
    <div className="flex items-center gap-4 mb-4">
      <span className={`text-sm font-mono tracking-widest ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{num}</span>
      <div className={`h-[1px] w-12 ${dark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      <Badge variant="outline" className={`font-mono text-xs ${dark ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
        {category}
      </Badge>
    </div>
    <h2 className={`font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-foreground'}`}>
      {title.split('·').map((part, i, arr) => (
        <React.Fragment key={i}>
          {part}
          {i < arr.length - 1 && <span className="text-primary px-2">·</span>}
        </React.Fragment>
      ))}
    </h2>
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, 50]);

  return (
    <div className="bg-background min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden dark bg-slate-950 text-white tech-grid">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3 mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none -translate-x-1/4 translate-y-1/3 mix-blend-screen"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl z-10"
        >
          <div className="mb-8 flex gap-3 flex-wrap">
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-gray-700 bg-gray-900/50 text-gray-300">AI 产品定义</Badge>
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-gray-700 bg-gray-900/50 text-gray-300">Agent 工作流设计</Badge>
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-gray-700 bg-gray-900/50 text-gray-300">数据驱动决策</Badge>
          </div>
          
          <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] mb-8 gradient-text">
            陈明远
          </h1>
          
          <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm md:text-base font-mono text-gray-400 mb-12 bg-gray-900/50 border border-gray-800 p-4 rounded-2xl w-fit backdrop-blur-sm">
            <div className="flex items-center gap-2"><span className="text-primary font-bold">3</span> 大厂经历</div>
            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2"><span className="text-primary font-bold">4</span> AI 项目</div>
            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            <div>GPT/Claude/文心</div>
          </div>

          <p className="text-xl md:text-3xl text-gray-400 font-light tracking-wide max-w-3xl leading-relaxed">
            <strong className="font-medium text-white">AI 产品经理</strong> · Agent 设计师 · 空间数据分析师
            <br />
            <span className="text-lg md:text-xl mt-4 inline-block text-gray-500">从 0 到 1 定义 AI 产品 · Prompt Engineering · 多模态系统落地</span>
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity, y }}
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-2 text-sm text-gray-500 font-mono tracking-widest uppercase z-10"
        >
          <div className="w-1 h-12 bg-gray-800 rounded-full overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-primary rounded-full glow-blue"
            />
          </div>
          <span className="writing-vertical-rl ml-2 rotate-180 text-[10px]">SCROLL TO EXPLORE</span>
        </motion.div>
      </section>

      {/* DATA CARDS SECTION */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-full bg-slate-950 dark text-white relative tech-grid border-t border-gray-900">
        <div className="max-w-[1400px] mx-auto w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader num="01" category="大厂背书" title="业务实战 · 数据驱动的底层素养" dark />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
              {/* Card 1 */}
              <div className="glass-card p-8 lg:p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500">
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold mb-6">百度地图</div>
                <p className="text-gray-400 font-medium mb-2 text-sm">产品实习</p>
                <h3 className="text-5xl lg:text-6xl font-black mb-6 font-mono tracking-tighter gradient-text-gold">
                  +14%
                </h3>
                <p className="text-white font-bold mb-3 text-lg">NLP 体验优化</p>
                <p className="text-sm text-gray-400 leading-relaxed">AI副驾播报降噪，智能播报体验重构。通过数据驱动提升识别率，负反馈降低 27%。</p>
              </div>

              {/* Card 2 */}
              <div className="glass-card p-8 lg:p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500">
                <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-semibold mb-6">腾讯 IEG</div>
                <p className="text-gray-400 font-medium mb-2 text-sm">产品实习</p>
                <h3 className="text-5xl lg:text-6xl font-black mb-6 font-mono tracking-tighter gradient-text-gold">
                  85%+
                </h3>
                <p className="text-white font-bold mb-3 text-lg">AI 业务孵化</p>
                <p className="text-sm text-gray-400 leading-relaxed">AI陪玩业务从0到1孵化。深入洞察玩家需求，核心功能首发即获极高接受度。</p>
              </div>

              {/* Card 3 */}
              <div className="glass-card p-8 lg:p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500">
                <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold mb-6">蚁群科技</div>
                <p className="text-gray-400 font-medium mb-2 text-sm">产品经理</p>
                <h3 className="text-5xl lg:text-6xl font-black mb-6 font-mono tracking-tighter gradient-text-gold">
                  -40%
                </h3>
                <p className="text-white font-bold mb-3 text-lg">多智能体调度</p>
                <p className="text-sm text-gray-400 leading-relaxed">多智能体无人机调度系统。设计自主决策架构，大幅降低人工介入与运维成本。</p>
              </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center gap-4 border-t border-gray-800 pt-8">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">能力底座</span>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300">NLP优化</span>
                <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300">业务孵化</span>
                <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300">多智能体调度</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT 01 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="02" category="自动化 Workflow" title="Audio Parsing · 让冗余无所遁形" />
          
          <div className="mb-16">
            <AudioFlowDiagram />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">痛点与方案</h4>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  海量播报内容难以快速提炼重点，人工筛选成本极高，信息密度低。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  通过构建多模态处理流，结合 Whisper ASR 与大语言模型，自动将非结构化音视频转化为高密度的结构化文档，大幅提升信息流转效率。
                </p>
              </div>

              <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                <p className="text-sm font-medium text-gray-800 flex items-center gap-3">
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm"><ArrowRight size={18} /></span>
                  <span>处理效率 <strong className="text-2xl font-mono text-primary mx-1">↑60%</strong> · 人工介入 <strong className="text-2xl font-mono text-emerald-600 mx-1">↓80%</strong></span>
                </p>
              </div>

              <div>
                <Badge variant="secondary" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700">多模态处理 · 非结构化→结构化</Badge>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
              <h4 className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-6 flex items-center gap-2">
                <Layers size={16} /> 技术架构层
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600"><Globe size={18} /></div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold mb-1">前端表现层</div>
                    <div className="text-sm font-medium text-gray-900">拖拽上传界面 + 实时进度可视化</div>
                  </div>
                </div>
                
                <div className="flex justify-center text-gray-300">
                  <ArrowRight className="rotate-90 w-5 h-5" />
                </div>

                <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-center gap-4 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary"></div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary"><Brain size={18} /></div>
                  <div>
                    <div className="text-xs text-primary font-bold mb-1">Agent 编排层</div>
                    <div className="text-sm font-medium text-gray-900">Whisper ASR 模型 + GPT-4 语义理解</div>
                  </div>
                </div>

                <div className="flex justify-center text-gray-300">
                  <ArrowRight className="rotate-90 w-5 h-5" />
                </div>

                <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600"><Database size={18} /></div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold mb-1">数据存储层</div>
                    <div className="text-sm font-medium text-gray-900">向量 DB + 时序存储 (时间戳对齐)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT 02 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="03" category="对话式 Agent" title="Interview Simulator · 真实反馈精准备考" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  求职者针对特定 JD 备考时，缺乏具有真实感、针对性的面试反馈与情景模拟。通用模型往往只能给出空泛的建议。
                </p>
              </div>
              
              <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 size={16} className="text-primary" />
                  <span className="text-xs font-mono text-gray-400 uppercase">Core Prompt Design</span>
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
2. 针对简历细节进行追问，压力测试。
3. 结束后，输出多维度雷达图数据。`}
                </pre>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100"><div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-xs font-bold text-gray-900">①</div> 上传简历+JD</div>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100"><div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-xs font-bold text-gray-900">②</div> AI生成题库并规划走向</div>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100"><div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-xs font-bold text-gray-900">③</div> 多轮对话与压力测试</div>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-primary/5 p-3 rounded-lg border border-primary/20"><div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-sm text-xs font-bold text-white">④</div> 雷达图打分与结构化评估</div>
              </div>

              <div>
                <Badge variant="outline" className="bg-white border-gray-200 text-gray-600">RAG架构 · Context管理 · Prompt工程</Badge>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
               {/* Decorative background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-full blur-3xl -z-10"></div>
              <InterviewChatMockup />
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT 03 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-full bg-[#050B14] text-white relative tech-grid">
        <div className="max-w-[1400px] mx-auto w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader num="04" category="C端高频应用" title="Diet AI Planner · 吃什么，让 AI 决定" dark />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mt-12">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <DietAppMockup />
              </div>
              
              <div className="lg:col-span-7 flex flex-col gap-10 order-1 lg:order-2">
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  年轻用户面临"选择困难症"与健康管理缺失的双重压力。这是一个结合 <strong className="text-white">LBS 与 LLM</strong> 的高频决策工具，让健康饮食毫不费力。
                </p>
                
                <div className="space-y-6 mt-4">
                  <h4 className="text-sm font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2">
                    <Server size={16} /> 系统架构分层
                  </h4>
                  
                  <div className="flex flex-col gap-3">
                    <div className="glass-card p-5 rounded-2xl border-l-4 border-l-blue-400">
                      <div className="text-xs font-bold text-blue-400 mb-1">Layer 1: 用户界面</div>
                      <div className="text-lg font-bold text-white mb-2">C端 App / 小程序</div>
                      <div className="flex gap-2"><span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React Native</span><span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Taro</span></div>
                    </div>
                    
                    <div className="glass-card p-5 rounded-2xl border-l-4 border-l-purple-400 ml-4">
                      <div className="text-xs font-bold text-purple-400 mb-1">Layer 2: Agent 编排层</div>
                      <div className="text-lg font-bold text-white mb-2">LangChain Workflow</div>
                      <div className="flex gap-2"><span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">意图识别</span><span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">多工具路由</span></div>
                    </div>
                    
                    <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-400 ml-8">
                      <div className="text-xs font-bold text-emerald-400 mb-1">Layer 3: 模型层</div>
                      <div className="text-lg font-bold text-white mb-2">GPT-4 / 文心一言</div>
                      <div className="flex gap-2"><span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">营养学成分估算</span><span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">决策推理</span></div>
                    </div>
                    
                    <div className="glass-card p-5 rounded-2xl border-l-4 border-l-orange-400 ml-12">
                      <div className="text-xs font-bold text-orange-400 mb-1">Layer 4: 数据层</div>
                      <div className="text-lg font-bold text-white mb-2">高德API + 美团API + 营养库</div>
                      <div className="flex gap-2"><span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-1 rounded">LBS定位</span><span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-1 rounded">实时菜品抓取</span></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <Badge variant="outline" className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800">外部API整合 · C端产品设计 · 推荐算法</Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT 04 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-mono tracking-widest text-gray-400">05</span>
                <div className="h-[1px] w-12 bg-gray-200"></div>
                <Badge variant="outline" className="font-mono text-xs border-gray-200">空间计算</Badge>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
                City Vibe · <span className="text-primary">情绪漫游生成器</span>
              </h2>
            </div>
            
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-none shadow-xl shadow-orange-500/20 px-6 py-3 text-sm flex gap-2">
              <span>⚡</span> 1周 · Cursor + Claude · 全栈MVP
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
            <div className="xl:col-span-7 h-[600px] w-full rounded-2xl shadow-2xl shadow-gray-200/50">
              <CityRouteMockup />
            </div>
            
            <div className="xl:col-span-5 flex flex-col gap-8">
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-primary pl-4">
                结合空间规划与 GIS 数据分析能力，探索<strong className="text-gray-900">「非目的导向」</strong>的新型出行产品。输入抽象的氛围情绪，AI 自动在城市中连点成线。
              </p>
              
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mt-4">
                <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin size={18} className="text-primary" /> GIS 空间分析链路
                </h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0 mt-1">1</div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Geopandas 空间聚类</div>
                      <p className="text-xs text-gray-500 mt-1">对全城数万级 POI 进行密度分析与热点提取。</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0 mt-1">2</div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">LLM 意图-标签映射</div>
                      <p className="text-xs text-gray-500 mt-1">将自然语言（"赛博感"）映射为结构化检索标签（"霓虹灯", "精酿", "地下"）。</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">3</div>
                    <div>
                      <div className="font-bold text-primary text-sm">动态连线算法</div>
                      <p className="text-xs text-gray-600 mt-1">基于步行/骑行距离阈值（≤3km），在聚类簇中挑选最优组合生成路径。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded shadow-sm">LLM意图识别</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded shadow-sm">高德Maps API</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded shadow-sm">Geopandas</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded shadow-sm">FastAPI</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded shadow-sm">React</span>
              </div>
              
              <div>
                <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">GIS×LLM跨界 · 敏捷AI辅助开发</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* OUTRO */}
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 text-center max-w-full bg-[#0A0F1C] tech-grid text-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl z-10"
        >
          <h2 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            寻找能定义 AI 产品的 PM？
          </h2>
          <p className="text-2xl text-gray-400 font-light mb-20">We should talk.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-3xl border border-gray-800 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/20 group-hover:text-primary text-gray-400">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">产品定义</h3>
              <p className="text-sm text-gray-400 leading-relaxed">从 0 到 1 的 AI 场景设计、需求洞察与核心功能规划。不做为了 AI 而 AI 的产品。</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-3xl border border-gray-800 hover:border-primary/50 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/20 group-hover:text-primary text-gray-400 relative z-10">
                <Brain size={24} />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl relative z-10">Agent 设计</h3>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">高级 Prompt Engineering、工作流架构设计与多智能体协同机制的落地。</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-3xl border border-gray-800 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/20 group-hover:text-primary text-gray-400">
                <Database size={24} />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">数据驱动</h3>
              <p className="text-sm text-gray-400 leading-relaxed">GIS 空间分析、A/B 测试设计与核心业务指标拆解优化，用数据验证价值。</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold transition-all hover:-translate-y-1 shadow-xl shadow-primary/30 text-lg">
              <Mail size={20} />
              联系我 : me@example.com
            </button>
            <button className="flex items-center gap-3 bg-transparent hover:bg-gray-900 text-white border border-gray-700 px-10 py-5 rounded-full font-bold transition-all hover:border-gray-500 text-lg">
              <ExternalLink size={20} />
              查看完整简历 PDF
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-900 bg-[#050B14] dark">
        <p>© {new Date().getFullYear()} 陈明远. All rights reserved.</p>
        <p className="mt-2 text-xs font-mono text-gray-600">Built with React, Tailwind v4 & Framer Motion.</p>
      </footer>
    </div>
  );
}
