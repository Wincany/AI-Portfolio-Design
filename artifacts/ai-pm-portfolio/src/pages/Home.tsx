import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { AudioFlowDiagram, InterviewChatMockup, DietAppMockup, CityRouteMockup } from '@/components/Mockups';
import { ArrowRight, Mail, ExternalLink, Zap, MapPin, Flame, Cpu, Navigation, Sparkles } from 'lucide-react';

const SectionHeader = ({ num, category, title, dark = false }: { num: string, category: string, title: string, dark?: boolean }) => (
  <div className="mb-12 md:mb-20">
    <div className="flex items-center gap-4 mb-4">
      <span className={`text-sm font-mono tracking-widest ${dark ? 'text-gray-400' : 'text-gray-400'}`}>{num}</span>
      <div className={`h-[1px] w-12 ${dark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
      <Badge variant="outline" className={`font-mono text-xs ${dark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : ''}`}>
        {category}
      </Badge>
    </div>
    <h2 className={`font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-gray-900'}`}>
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
    <div className="bg-background min-h-screen selection:bg-primary/20 selection:text-primary">
      
      {/* SLIDE 0: HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex gap-3 flex-wrap">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">AI 产品定义</Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">Agent 工作流设计</Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">数据驱动决策</Badge>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-6">
            陈明远
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-500 font-light tracking-wide max-w-2xl leading-relaxed mb-12">
            <strong className="font-medium text-gray-900">AI 产品经理</strong> · Agent 设计师 · 空间数据分析师
            <br />
            <span className="text-lg md:text-xl mt-4 inline-block text-gray-400">从 0 到 1 定义 AI 产品 · Prompt Engineering · 多模态系统落地</span>
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity, y }}
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-2 text-sm text-gray-400 font-mono tracking-widest uppercase"
        >
          <div className="w-1 h-12 bg-gray-200 rounded-full overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-primary rounded-full"
            />
          </div>
          <span className="writing-vertical-rl ml-2 rotate-180 text-[10px]">SCROLL TO EXPLORE</span>
        </motion.div>
      </section>

      {/* SLIDE 1: DATA CARDS */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="01" category="大厂背书" title="业务实战 · 数据驱动的底层素养" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-16">
            {/* Card 1 */}
            <div className="group relative bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-8 w-16 h-1 bg-primary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-b"></div>
              <div className="text-sm font-semibold text-gray-500 mb-2">百度地图 · 产品实习</div>
              <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 font-mono tracking-tighter">
                <span className="text-primary font-medium">+14%</span> <span className="text-2xl text-gray-400">/</span> -27%
              </h3>
              <p className="text-gray-800 font-medium mb-2">NLP 体验优化</p>
              <p className="text-sm text-gray-500 leading-relaxed">AI副驾播报降噪 · 智能播报体验重构。通过数据驱动提升识别率，显著降低用户负反馈。</p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-8 w-16 h-1 bg-primary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-b"></div>
              <div className="text-sm font-semibold text-gray-500 mb-2">腾讯 IEG · 产品实习</div>
              <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 font-mono tracking-tighter">
                <span className="text-primary font-medium">85%</span><span className="text-2xl text-gray-400">+</span>
              </h3>
              <p className="text-gray-800 font-medium mb-2">AI 业务孵化</p>
              <p className="text-sm text-gray-500 leading-relaxed">AI陪玩业务从0到1孵化。深入洞察玩家需求，核心功能首发即获极高接受度。</p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-8 w-16 h-1 bg-primary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-b"></div>
              <div className="text-sm font-semibold text-gray-500 mb-2">蚁群科技 · 产品经理</div>
              <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 font-mono tracking-tighter">
                <span className="text-primary font-medium">-40%</span>
              </h3>
              <p className="text-gray-800 font-medium mb-2">多智能体调度</p>
              <p className="text-sm text-gray-500 leading-relaxed">多智能体无人机调度系统。设计自主决策架构，大幅降低人工介入与运维成本。</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 2: PROJECT 01 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-gray-50/50 rounded-[3rem] my-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="02" category="自动化 Workflow" title="Audio Parsing Workflow · 让冗余无所遁形" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <AudioFlowDiagram />
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">场景痛点</h4>
                <p className="text-gray-600 leading-relaxed">海量播报内容难以快速提炼重点，人工筛选成本极高，信息密度低。</p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-4">解决方案架构</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">多模态输入：</strong>支持 Audio/Video 解析，自动生成带时间戳文本。</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">NLP 降噪：</strong>基于语义相似度删除冗余表达，显著提升信息密度。</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">结构化输出：</strong>自动生成章节摘要 + 关键词标签 + 全文时间轴。</p>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm mt-4">
                <p className="text-sm font-medium text-gray-800">
                  <span className="text-primary mr-2">✦ 业务价值</span>
                  信息处理效率提升 <strong className="text-2xl font-mono mx-1">60%</strong>，质检周期缩短 3 倍。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 3: PROJECT 02 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="03" category="对话式 Agent" title="Interview Simulator · 真实反馈精准备考" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">场景痛点</h4>
                <p className="text-gray-600 leading-relaxed">求职者针对特定 JD 备考时，缺乏具有真实感、针对性的面试反馈与情景模拟。</p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-4">核心 AI 功能</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">RAG 检索：</strong>上传简历 + JD，动态生成强相关面试问题。</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">多轮对话管理：</strong>支持深度追问与情景压力测试，Context 持久化。</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">System Prompt 调优：</strong>精细控制面试官风格（压力型/引导型），防越狱设计。</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-900">结构化评估：</strong>面试结束后，输出6维雷达图打分与可执行的改进建议。</p>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <Badge variant="accent" className="px-4 py-2">体现了 RAG 架构设计与高级 Prompt 调优能力</Badge>
              </div>
            </div>

            <div className="relative">
               {/* Decorative background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl -z-10"></div>
              <InterviewChatMockup />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 4: PROJECT 03 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-gray-900 text-white rounded-[3rem] my-12 overflow-hidden relative">
        {/* Subtle dark mode background noise/texture could go here if we had an image, using CSS gradient instead */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="04" category="C端高频应用" title="Diet AI Planner · 吃什么，让 AI 决定" dark />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mt-12">
            <div className="lg:col-span-5 flex justify-center">
              <DietAppMockup />
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-10">
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                年轻用户面临"选择困难症"与健康管理缺失的双重压力。这是一个结合 LBS 与 LLM 的高频决策工具。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-white">
                    <MapPin size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">LBS 外部 API 接入</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">调用高德/美团 API 获取周边餐厅与菜品实时数据，确保推荐<strong className="text-white">立即可执行</strong>。</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-white">
                    <Flame size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">LLM 营养成分识别</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">大模型解析菜品描述，估算卡路里与宏量营养素，适配<strong className="text-white">减脂/增肌</strong>等多模式权重算法。</p>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 mt-2">
                <Badge variant="outline" className="border-gray-700 text-gray-300">外部 API 整合</Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-300 ml-3">推荐策略算法</Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-300 mt-3 md:mt-0 md:ml-3">C端交互分层设计</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 5: PROJECT 04 */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono tracking-widest text-gray-400">05</span>
            <div className="h-[1px] w-12 bg-gray-200"></div>
            <Badge variant="outline" className="font-mono text-xs">地图可视化</Badge>
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-orange-500/20 shadow-lg">⚡ Vibe Coding · 1周落地</Badge>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-16">
            City Route Generator · <span className="text-primary">情绪变路线</span>
          </h2>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 order-2 xl:order-1">
              <p className="text-lg text-gray-600 leading-relaxed">
                结合空间规划与 GIS 数据分析能力，探索<strong className="text-gray-900">「非目的导向」</strong>的新型出行产品。仅需输入一段氛围描述，AI 自动生成漫游路线。
              </p>
              
              <div className="space-y-6 mt-4">
                <div className="flex gap-4">
                  <div className="text-primary mt-1"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">意图识别跨界</h4>
                    <p className="text-sm text-gray-600">LLM 解析自然语言情绪（如"想看日落"）转化为结构化的 POI 搜索需求。</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-primary mt-1"><MapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">GIS 空间分析</h4>
                    <p className="text-sm text-gray-600">使用 Geopandas 进行空间聚类，结合地图 API，筛选出符合步行/骑行距离的最优路线组合。</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-orange-500 mt-1"><Sparkles size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">敏捷执行力</h4>
                    <p className="text-sm text-gray-600">1周内利用 AI 辅助编程完成全栈 MVP 开发，验证产品核心假设，POI 选取精准度获 87%+ 用户认可。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-2 h-[500px] xl:h-[600px] w-full">
              <CityRouteMockup />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 6: OUTRO */}
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black text-gray-900 mb-6">
            寻找能定义 AI 产品的 PM？
          </h2>
          <p className="text-2xl text-gray-400 font-light mb-16">我在这里。</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-4">📐</div>
              <h3 className="font-bold text-gray-900 mb-2">产品定义</h3>
              <p className="text-sm text-gray-500">从 0 到 1 的 AI 场景设计、需求洞察与核心功能规划。</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">Agent 设计</h3>
              <p className="text-sm text-gray-500">高级 Prompt Engineering、工作流架构设计与多智能体协同。</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">数据驱动</h3>
              <p className="text-sm text-gray-500">GIS 空间分析、A/B 测试设计与核心业务指标拆解优化。</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-medium transition-transform hover:-translate-y-1 shadow-xl shadow-gray-900/20">
              <Mail size={18} />
              联系我 : me@example.com
            </button>
            <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-medium transition-colors">
              <ExternalLink size={18} />
              查看完整简历 PDF
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        <p>© {new Date().getFullYear()} 陈明远. All rights reserved.</p>
        <p className="mt-1 text-xs">Designed with minimalism in mind.</p>
      </footer>
    </div>
  );
}
