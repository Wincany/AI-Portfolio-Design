import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileAudio, 
  Mic, 
  AlignLeft, 
  Sparkles, 
  BarChart, 
  FileText,
  ArrowRight,
  ArrowDown,
  User,
  Bot,
  Send,
  MapPin,
  Search,
  Coffee,
  Sun,
  Flame,
  ChevronRight
} from 'lucide-react';

export function AudioFlowDiagram() {
  const steps = [
    { icon: FileAudio, label: "音视频输入" },
    { icon: Mic, label: "ASR语音识别" },
    { icon: AlignLeft, label: "时间戳对齐" },
    { icon: Sparkles, label: "文本降噪模型", highlight: true },
    { icon: BarChart, label: "冗余度分析" },
    { icon: FileText, label: "结构化摘要输出" }
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center p-8 bg-gray-50/50 rounded-2xl border border-gray-100">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`
              flex flex-col items-center justify-center p-4 min-w-[120px] aspect-square rounded-xl bg-white shadow-sm border transition-all duration-300 hover:shadow-md
              ${step.highlight ? 'border-primary shadow-primary/10 ring-4 ring-primary/5' : 'border-gray-200'}
            `}
          >
            <step.icon className={`w-8 h-8 mb-3 ${step.highlight ? 'text-primary' : 'text-gray-700'}`} strokeWidth={1.5} />
            <span className={`text-xs font-medium text-center ${step.highlight ? 'text-primary font-semibold' : 'text-gray-600'}`}>
              {step.label}
            </span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.05 }}
              className="hidden md:block text-gray-300"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          )}
          {i < steps.length - 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.05 }}
              className="md:hidden text-gray-300 my-2"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function InterviewChatMockup() {
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[500px]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Bot size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">面试官 AI</div>
            <div className="text-[10px] text-gray-500">Senior PM @ 字节跳动</div>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>

      {/* Body */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#FAFAFA]">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center mt-1">
            <Bot size={14} />
          </div>
          <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-700 shadow-sm">
            看到你简历中提到主导了推荐策略的优化，能具体展开讲讲当时面临的业务痛点是什么？以及你如何拆解指标的吗？
          </div>
        </div>
        
        <div className="flex gap-2 flex-row-reverse">
          <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex-shrink-0 flex items-center justify-center mt-1">
            <User size={14} />
          </div>
          <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-sm text-sm shadow-sm">
            当时核心痛点是点击率达到瓶颈。我首先将大盘点击率拆解为...
          </div>
        </div>

        {/* Evaluation Card embedded in chat */}
        <div className="mt-4 bg-white border border-primary/20 rounded-xl p-4 shadow-sm">
          <div className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
            <Sparkles size={12} /> 实时评估分析
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {[
              { label: '逻辑结构', val: '85%' },
              { label: '业务深度', val: '92%' },
              { label: '表达清晰', val: '78%' },
              { label: '数据意识', val: '90%' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="text-[10px] text-gray-500">{stat.label}</div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: stat.val }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100 bg-white">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
          <input type="text" placeholder="输入回答..." className="flex-1 bg-transparent text-sm outline-none text-gray-700" readOnly />
          <button className="text-primary p-1 hover:bg-primary/5 rounded-full transition-colors">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function DietAppMockup() {
  return (
    <div className="w-[280px] h-[580px] mx-auto bg-white rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden flex flex-col relative">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
      
      {/* Header */}
      <div className="pt-12 pb-4 px-5 bg-gradient-to-b from-primary/10 to-white">
        <h3 className="text-lg font-bold text-gray-900">今日餐饮计划</h3>
        <div className="flex gap-2 mt-3 bg-gray-100 p-1 rounded-full">
          <div className="flex-1 text-center py-1 bg-white rounded-full shadow-sm text-xs font-semibold text-gray-800">减脂模式</div>
          <div className="flex-1 text-center py-1 text-xs font-medium text-gray-500">默认模式</div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">今日摄入</span>
          <span className="font-semibold text-primary">1,240 / 1,800 kcal</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '68%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 overflow-y-auto pb-6">
        <div className="text-sm font-semibold text-gray-900 mb-3">午餐推荐 (周边1km)</div>
        
        <div className="flex flex-col gap-3">
          {[
            { name: "轻食沙拉碗", desc: "Wagas (国贸店)", cal: 320, match: 98 },
            { name: "藜麦鸡胸肉饭", desc: "新元素", cal: 410, match: 92 },
            { name: "低卡荞麦面", desc: "沙拉实验室", cal: 380, match: 85 }
          ].map((item, i) => (
            <div key={i} className="p-3 border border-gray-100 rounded-xl bg-white shadow-sm flex items-center gap-3 relative overflow-hidden group hover:border-primary/30 transition-colors">
              {i === 0 && <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>}
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                <Flame size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                <div className="text-[10px] text-gray-500">{item.desc}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-orange-500">{item.cal} <span className="text-[9px] font-normal">kcal</span></div>
                <div className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded text-center mt-1">
                  匹配 {item.match}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CityRouteMockup() {
  return (
    <div className="w-full h-full min-h-[400px] bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col">
      {/* Top Bar */}
      <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="ml-4 flex-1 h-7 bg-white border border-gray-200 rounded text-[11px] text-gray-400 flex items-center px-3 justify-center">
          ai-city-vibe.app
        </div>
      </div>

      <div className="flex-1 relative bg-[#F4F4F5] overflow-hidden flex flex-col">
        {/* Fake Map Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Search Bar Overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-10">
          <div className="bg-white shadow-lg rounded-2xl p-2 flex items-center gap-3 border border-gray-100">
            <Search className="text-gray-400 ml-2" size={18} />
            <input 
              type="text" 
              value="想找个安静角落喝咖啡看日落" 
              readOnly 
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 font-medium"
            />
            <button className="bg-primary text-white p-2 rounded-xl">
              <Sparkles size={16} />
            </button>
          </div>
        </div>

        {/* Map Elements (Abstract) */}
        <div className="relative flex-1 mt-16">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <path 
              d="M 100 80 Q 200 150 250 100 T 400 200" 
              stroke="url(#gradient)" 
              strokeWidth="3" 
              strokeDasharray="6 6" 
              fill="none" 
              className="animate-[dash_20s_linear_infinite]"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Map Pins */}
          <div className="absolute top-[60px] left-[80px] group cursor-pointer">
            <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-primary border-2 border-primary/20 relative z-10">
              <Coffee size={14} />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              后海咖啡馆
            </div>
          </div>

          <div className="absolute top-[80px] left-[230px] group cursor-pointer">
            <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-primary border-2 border-primary/20 relative z-10">
              <MapPin size={14} />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              南锣鼓巷书店
            </div>
          </div>

          <div className="absolute top-[180px] left-[380px] group cursor-pointer">
            <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-primary border-2 border-primary/20 relative z-10">
              <Sun size={14} />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              景山公园西门
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white shadow-xl rounded-2xl p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-xs text-primary font-semibold tracking-wider uppercase mb-1">GENERATED ROUTE</div>
              <h4 className="font-bold text-gray-900">日落独处漫游线</h4>
            </div>
            <div className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded font-medium">全程 3.2km</div>
          </div>
          <p className="text-xs text-gray-500">避开人潮，从咖啡馆出发，在书店消磨午后，最后在景山看日落。</p>
        </div>
      </div>
    </div>
  );
}
