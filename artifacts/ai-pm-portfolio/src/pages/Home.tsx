import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { AudioFlowDiagram, InterviewChatMockup, DietAppMockup, CityRouteMockup } from '@/components/Mockups';
import { Mail, ExternalLink, ArrowRight, Layers, Database, Code2, Server, Globe, Brain, MapPin, Zap, Sparkles, Cpu } from 'lucide-react';

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
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[100px] -z-10 pointer-events-none -translate-x-1/4 translate-y-1/3" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl z-10"
        >
          <div className="mb-8 flex gap-3 flex-wrap">
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-gray-300 bg-white text-gray-600">AI 产品定义</Badge>
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-gray-300 bg-white text-gray-600">Agent 工作流设计</Badge>
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-gray-300 bg-white text-gray-600">数据驱动决策</Badge>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-8 text-gray-900">
            陈明远
          </h1>

          <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm md:text-base font-mono text-gray-500 mb-10 bg-white border border-gray-200 p-4 rounded-2xl w-fit shadow-sm">
            <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">3</span> 大厂经历</div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">4</span> AI 项目</div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="text-gray-500">GPT / Claude / 文心</div>
          </div>

          <p className="text-lg md:text-2xl text-gray-500 tracking-wide max-w-3xl leading-relaxed">
            <strong className="font-semibold text-gray-900">AI 产品经理</strong>  Agent 设计师  空间数据分析师
            <br />
            <span className="text-base md:text-lg mt-3 inline-block text-gray-400">从 0 到 1 定义 AI 产品  Prompt Engineering  多模态系统落地</span>
          </p>
        </motion.div>

        <motion.div
          style={{ opacity, y }}
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-2 text-gray-400 font-mono z-10"
        >
          <div className="w-1 h-10 bg-gray-200 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/3 bg-blue-500 rounded-full"
            />
          </div>
          <span className="rotate-180 text-[9px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>SCROLL TO EXPLORE</span>
        </motion.div>
      </section>

      {/* DATA CARDS */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="01" category="大厂背书" title="业务实战  数据驱动的底层素养" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-500" />
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-full text-xs font-semibold mb-6 ml-2">百度地图</div>
              <p className="text-gray-400 text-sm mb-2 ml-2">产品实习</p>
              <h3 className="text-4xl lg:text-5xl font-black mb-5 font-mono tracking-tighter text-blue-600 ml-2">
                +14%
              </h3>
              <p className="text-gray-800 font-semibold mb-2 ml-2 text-base">NLP 体验优化</p>
              <p className="text-sm text-gray-500 leading-relaxed ml-2">AI副驾播报降噪，智能播报体验重构。识别率提升 14%，负反馈降低 27%。</p>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-violet-500" />
              <div className="inline-block px-3 py-1 bg-violet-50 text-violet-600 border border-violet-100 rounded-full text-xs font-semibold mb-6 ml-2">腾讯 IEG</div>
              <p className="text-gray-400 text-sm mb-2 ml-2">产品实习</p>
              <h3 className="text-4xl lg:text-5xl font-black mb-5 font-mono tracking-tighter text-violet-600 ml-2">
                85%+
              </h3>
              <p className="text-gray-800 font-semibold mb-2 ml-2 text-base">AI 业务孵化</p>
              <p className="text-sm text-gray-500 leading-relaxed ml-2">AI陪玩业务从0到1孵化。深入洞察玩家需求，核心功能首发接受度达85%以上。</p>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500" />
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-xs font-semibold mb-6 ml-2">蚁群科技</div>
              <p className="text-gray-400 text-sm mb-2 ml-2">产品经理</p>
              <h3 className="text-4xl lg:text-5xl font-black mb-5 font-mono tracking-tighter text-emerald-600 ml-2">
                -40%
              </h3>
              <p className="text-gray-800 font-semibold mb-2 ml-2 text-base">多智能体调度</p>
              <p className="text-sm text-gray-500 leading-relaxed ml-2">多智能体无人机调度系统。自主决策架构设计，运维成本大幅降低。</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-4 border-t border-gray-100 pt-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">能力底座</span>
            <div className="flex flex-wrap gap-3">
              {['NLP优化', '业务孵化', '多智能体调度', '数据驱动迭代'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 shadow-sm">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT 01 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="02" category="自动化 Workflow" title="Audio Parsing  信息降噪工作流" />

          <div className="mb-14">
            <AudioFlowDiagram />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">痛点与方案</h4>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  海量播报内容难以快速提炼重点，人工筛选成本极高，信息密度低。
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  通过构建多模态处理流，结合 Whisper ASR 与大语言模型，自动将非结构化音视频转化为高密度结构化文档。
                </p>
              </div>

              <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">处理效率</span>
                <strong className="text-xl font-mono text-blue-600">↑60%</strong>
                <span className="text-gray-300">·</span>
                <span className="text-sm font-medium text-gray-700">人工介入</span>
                <strong className="text-xl font-mono text-emerald-600">↓80%</strong>
              </div>

              <Badge variant="secondary" className="w-fit px-4 py-2 bg-gray-100 text-gray-600 text-sm">多模态处理  非结构化转结构化</Badge>
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
                    <div className="text-sm font-medium text-gray-800">拖拽上传界面  实时进度可视化</div>
                  </div>
                </div>
                <div className="flex justify-center text-gray-300"><ArrowRight className="rotate-90 w-4 h-4" /></div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center gap-4 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-l-xl" />
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><Brain size={16} /></div>
                  <div>
                    <div className="text-xs text-blue-600 font-bold mb-0.5">Agent 编排层</div>
                    <div className="text-sm font-medium text-gray-800">Whisper ASR  GPT-4 语义理解</div>
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

      {/* PROJECT 02 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="03" category="对话式 Agent" title="Interview Simulator  真实反馈精准备考" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <p className="text-gray-600 leading-relaxed text-base">
                求职者针对特定 JD 备考时，缺乏具有真实感的针对性面试反馈与情景模拟，通用模型只能给出空泛建议。
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
                  { step: '①', label: '上传简历与目标JD' },
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

      {/* PROJECT 03 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-gray-100 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="04" category="C端高频应用" title="Diet AI Planner  智能饮食规划" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <DietAppMockup />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
              <p className="text-base text-gray-600 leading-relaxed">
                年轻用户面临"选择困难症"与健康管理缺失的双重压力。结合 <strong className="text-gray-900">LBS 与 LLM</strong> 的高频决策工具，让健康饮食毫不费力。
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
                      blue: 'border-l-blue-400 bg-blue-50 border-blue-100 text-blue-600',
                      violet: 'border-l-violet-400 bg-violet-50 border-violet-100 text-violet-600',
                      emerald: 'border-l-emerald-400 bg-emerald-50 border-emerald-100 text-emerald-600',
                      orange: 'border-l-orange-400 bg-orange-50 border-orange-100 text-orange-600',
                    };
                    const tagPalette: Record<string, string> = {
                      blue: 'bg-blue-100 text-blue-600',
                      violet: 'bg-violet-100 text-violet-600',
                      emerald: 'bg-emerald-100 text-emerald-600',
                      orange: 'bg-orange-100 text-orange-600',
                    };
                    return (
                      <div key={label} className={`${indent} p-4 rounded-xl border-l-4 border ${palette[color]}`}>
                        <div className={`text-xs font-bold mb-1 ${palette[color].split(' ')[3]}`}>{label}</div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">{title}</div>
                        <div className="flex gap-2 flex-wrap">
                          {tags.map(t => <span key={t} className={`text-[10px] px-2 py-0.5 rounded font-medium ${tagPalette[color]}`}>{t}</span>)}
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

      {/* PROJECT 04 */}
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
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500 bg-white">空间计算</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                City Vibe  <span className="text-blue-600">情绪漫游生成器</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold w-fit">
              <Zap size={14} /> 1周  Cursor  Claude  全栈MVP
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            <div className="xl:col-span-7 h-[560px] w-full rounded-2xl shadow-lg shadow-gray-200/60 border border-gray-200 overflow-hidden">
              <CityRouteMockup />
            </div>

            <div className="xl:col-span-5 flex flex-col gap-7">
              <p className="text-base text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4">
                结合空间规划与 GIS 数据分析能力，探索<strong className="text-gray-900">非目的导向</strong>的新型出行产品。输入抽象的氛围情绪，AI 自动在城市中连点成线。
              </p>

              <div className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-700 mb-5 flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" /> GIS 空间分析链路
                </h4>
                <div className="space-y-5">
                  {[
                    { n: '1', title: 'Geopandas 空间聚类', desc: '对全城数万级 POI 进行密度分析与热点提取。' },
                    { n: '2', title: 'LLM 意图标签映射', desc: '将自然语言"赛博感"映射为结构化检索标签。' },
                    { n: '3', title: '动态连线算法', desc: '基于步行距离阈值，在聚类簇中挑选最优路径组合。', highlight: true },
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
                {['LLM意图识别', '高德Maps API', 'Geopandas', 'FastAPI', 'React'].map(t => (
                  <span key={t} className="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-xs rounded-lg shadow-sm">{t}</span>
                ))}
              </div>

              <Badge variant="outline" className="w-fit border-blue-100 bg-blue-50 text-blue-600 text-sm">GIS  LLM 跨界  敏捷AI辅助开发</Badge>
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
                skills: ['Python', 'SQL', 'GIS', 'Tableau'],
              },
              {
                category: '设计',
                color: 'text-red-500',
                skills: ['Figma', 'PS', 'AI', 'CAD'],
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
              联系我  me@example.com
            </button>
            <button className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold transition-all text-base">
              <ExternalLink size={18} />
              查看完整简历 PDF
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100 bg-[#F8F9FA]">
        <p>© {new Date().getFullYear()} 陈明远. All rights reserved.</p>
      </footer>
    </div>
  );
}
