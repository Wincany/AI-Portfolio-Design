import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileAudio, Mic, AlignLeft, Sparkles, BarChart3, FileText,
  ArrowRight, UploadCloud, User, Bot, Send, MapPin, 
  Search, Coffee, Sun, Flame, Brain, Cpu, Apple
} from 'lucide-react';

export function AudioFlowDiagram() {
  const steps = [
    { icon: UploadCloud, label: "音视频上传", desc: "支持 MP3/MP4/WAV" },
    { icon: Mic, label: "ASR语音识别", desc: "Whisper大模型" },
    { icon: AlignLeft, label: "时间戳对齐", desc: "字级精准映射" },
    { icon: Sparkles, label: "语义降噪", desc: "去除口语冗余", highlight: true },
    { icon: BarChart3, label: "冗余分析", desc: "重复度评估" },
    { icon: FileText, label: "结构化输出", desc: "JSON/Markdown" }
  ];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col p-6">
      {/* Upload Zone */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 mb-8 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors">
        <UploadCloud className="w-10 h-10 text-primary mb-4" />
        <p className="text-gray-900 font-medium mb-2">拖拽或点击上传音视频文件</p>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500">MP3</span>
          <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500">WAV</span>
          <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500">MP4</span>
        </div>
      </div>

      {/* Pipeline */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 mb-8 overflow-x-auto pb-4">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`
                flex flex-col items-center justify-center p-4 min-w-[130px] rounded-xl bg-white transition-all duration-300
                ${step.highlight ? 'border-2 border-primary glow-blue shadow-lg' : 'border border-gray-200 shadow-sm'}
              `}
            >
              <step.icon className={`w-6 h-6 mb-3 ${step.highlight ? 'text-primary' : 'text-gray-700'}`} strokeWidth={1.5} />
              <span className={`text-sm font-bold text-center mb-1 ${step.highlight ? 'text-primary' : 'text-gray-900'}`}>
                {step.label}
              </span>
              <span className="text-[10px] text-gray-500 text-center">{step.desc}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.05 }}
                className="text-gray-300 rotate-90 lg:rotate-0 my-2 lg:my-0 flex-shrink-0"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Split View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50/50 border border-red-100 p-4 rounded-xl">
          <div className="text-xs font-bold text-red-600 mb-2 uppercase tracking-wider">RAW TEXT</div>
          <p className="text-sm text-gray-700 leading-relaxed">
            那个<span className="line-through text-red-400 opacity-70">嗯</span>，我们今天<span className="line-through text-red-400 opacity-70">就是说</span>主要讲一下<span className="line-through text-red-400 opacity-70">这个</span>推荐系统的架构<span className="line-through text-red-400 opacity-70">啊对</span>。
          </p>
        </div>
        <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl relative">
          <div className="absolute top-2 right-2 text-emerald-500">
            <Sparkles size={14} />
          </div>
          <div className="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-wider">CLEAN OUTPUT</div>
          <p className="text-sm text-gray-800 leading-relaxed font-medium">
            我们今天主要讲一下推荐系统的架构。
          </p>
        </div>
      </div>

      {/* User Flow */}
      <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-500 pt-4 border-t border-gray-100">
        <span className="text-gray-900">① 上传文件</span>
        <ArrowRight size={12} className="text-gray-300" />
        <span>② AI解析中</span>
        <ArrowRight size={12} className="text-gray-300" />
        <span>③ 查看结果</span>
        <ArrowRight size={12} className="text-gray-300" />
        <span>④ 一键导出</span>
      </div>
    </div>
  );
}

export function InterviewChatMockup() {
  return (
    <div className="w-full mx-auto bg-[#0A0F1C] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      {/* Persona Selector */}
      <div className="p-4 border-b border-gray-800 bg-[#0A0F1C]">
        <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">选择面试官风格</div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5"></div>
            <Bot size={20} className="text-primary" />
            <span className="text-xs font-bold text-white">严厉面试官</span>
            <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full">压力测试</span>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors">
            <User size={20} className="text-gray-400" />
            <span className="text-xs font-bold text-gray-300">温和导师</span>
            <span className="text-[10px] bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full">引导式</span>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors">
            <Cpu size={20} className="text-gray-400" />
            <span className="text-xs font-bold text-gray-300">技术专家</span>
            <span className="text-[10px] bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full">深度技术</span>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="flex gap-4 p-4 border-b border-gray-800 bg-gray-900/50">
        <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-primary" />
            <span className="text-xs text-gray-300">resume_v3.pdf</span>
          </div>
          <CheckCircle2Icon className="text-emerald-500" />
        </div>
        <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-orange-500" />
            <span className="text-xs text-gray-300">JD_字节产品.txt</span>
          </div>
          <CheckCircle2Icon className="text-emerald-500" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-64 border-b border-gray-800">
        {/* Chat */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex-shrink-0 flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div className="bg-gray-800 text-gray-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-gray-700">
              请描述你最有挑战性的产品决策。在数据表现和用户体验冲突时，你如何权衡？
            </div>
          </div>
          
          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex-shrink-0 flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-sm text-sm">
              在设计推荐系统时，我面临了商业化指标与用户停留时长的冲突...
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex-shrink-0 flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div className="bg-gray-800 text-gray-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-gray-700 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>

          {/* Quick Replies */}
          <div className="flex gap-2 justify-end mt-auto">
            <span className="text-xs px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">继续详细说明</span>
            <span className="text-xs px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">换个角度</span>
            <span className="text-xs px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">追加数据支撑</span>
          </div>
        </div>

        {/* Radar Chart Panel */}
        <div className="w-48 border-l border-gray-800 p-4 bg-gray-900/50 flex flex-col items-center">
          <div className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider w-full text-center">实时能力评估</div>
          <div className="relative w-32 h-32">
            {/* Hexagon background */}
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#1f2937" strokeWidth="1" />
              <polygon points="50,20 80,37 80,63 50,80 20,63 20,37" fill="none" stroke="#1f2937" strokeWidth="1" />
              <polygon points="50,35 65,43.5 65,56.5 50,65 35,56.5 35,43.5" fill="none" stroke="#1f2937" strokeWidth="1" />
              {/* Lines from center */}
              <line x1="50" y1="50" x2="50" y2="5" stroke="#1f2937" strokeWidth="1" />
              <line x1="50" y1="50" x2="95" y2="27.5" stroke="#1f2937" strokeWidth="1" />
              <line x1="50" y1="50" x2="95" y2="72.5" stroke="#1f2937" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="95" stroke="#1f2937" strokeWidth="1" />
              <line x1="50" y1="50" x2="5" y2="72.5" stroke="#1f2937" strokeWidth="1" />
              <line x1="50" y1="50" x2="5" y2="27.5" stroke="#1f2937" strokeWidth="1" />
              
              {/* Data polygon (85, 78, 92, 88, 75, 82) mapped approx */}
              <polygon points="50,12 85,32 90,68 50,85 15,68 18,30" fill="rgba(37, 99, 235, 0.2)" stroke="#2563EB" strokeWidth="2" />
              <circle cx="50" cy="12" r="2" fill="#2563EB" />
              <circle cx="85" cy="32" r="2" fill="#2563EB" />
              <circle cx="90" cy="68" r="2" fill="#2563EB" />
              <circle cx="50" cy="85" r="2" fill="#2563EB" />
              <circle cx="15" cy="68" r="2" fill="#2563EB" />
              <circle cx="18" cy="30" r="2" fill="#2563EB" />
            </svg>
            {/* Labels */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] text-gray-400">逻辑性</div>
            <div className="absolute top-6 -right-5 text-[8px] text-gray-400">表达力</div>
            <div className="absolute bottom-6 -right-5 text-[8px] text-gray-400">技术深度</div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] text-gray-400">数据意识</div>
            <div className="absolute bottom-6 -left-4 text-[8px] text-gray-400">执行力</div>
            <div className="absolute top-6 -left-4 text-[8px] text-gray-400">创新性</div>
          </div>
        </div>
      </div>

      {/* System Prompt Showcase */}
      <div className="bg-black p-4">
        <pre className="text-[10px] text-emerald-400 font-mono leading-relaxed overflow-x-auto">
{`System Prompt (精简版):
You are a senior PM interviewer at ByteDance.
Role: Strict, data-focused. Ask follow-up when vague.
Context: {resume_embedding} + {jd_requirements}
Rules: Never break character. Score every answer on 6 dimensions.`}
        </pre>
      </div>
    </div>
  );
}

export function DietAppMockup() {
  return (
    <div className="w-[300px] h-[600px] mx-auto bg-[#FAFAFA] rounded-[3rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden flex flex-col relative">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
      
      {/* Header */}
      <div className="pt-12 pb-6 px-5 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <h3 className="text-xl font-bold text-gray-900 mb-1">今日餐饮规划</h3>
        <p className="text-xs text-gray-500 font-medium">10月24日 · 周四</p>
        
        {/* Mode Tabs */}
        <div className="flex gap-2 mt-4 bg-gray-100/80 p-1 rounded-full border border-gray-200/50 backdrop-blur-sm">
          <div className="flex-1 text-center py-1.5 text-xs font-medium text-gray-500 cursor-pointer">日常模式</div>
          <div className="flex-1 text-center py-1.5 bg-white rounded-full shadow-sm text-xs font-bold text-primary flex items-center justify-center gap-1">
            减脂模式 <CheckCircle2Icon className="w-3 h-3" />
          </div>
          <div className="flex-1 text-center py-1.5 text-xs font-medium text-gray-500 cursor-pointer">增肌模式</div>
        </div>
      </div>

      {/* Main Stats */}
      <div className="px-5 -mt-2 relative z-10 flex flex-col items-center">
        {/* Circular Progress (CSS based) */}
        <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center relative">
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#blue-gradient)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="90" strokeLinecap="round" className="drop-shadow-md" />
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-center">
            <div className="text-2xl font-black text-gray-900 tracking-tighter">1,240 <span className="text-sm font-medium text-gray-500">kcal</span></div>
            <div className="text-xs text-gray-400 mt-1 font-medium">剩余 560</div>
          </div>
        </div>

        {/* Macros */}
        <div className="w-full grid grid-cols-3 gap-3 mt-6">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="text-[10px] text-gray-500 mb-1">蛋白质</div>
            <div className="text-xs font-bold text-blue-600 mb-1">62g<span className="text-[9px] text-gray-400 font-normal">/80g</span></div>
            <div className="w-full h-1 bg-blue-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[75%]"></div></div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="text-[10px] text-gray-500 mb-1">碳水</div>
            <div className="text-xs font-bold text-orange-500 mb-1">145g<span className="text-[9px] text-gray-400 font-normal">/200g</span></div>
            <div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden"><div className="h-full bg-orange-500 w-[72%]"></div></div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="text-[10px] text-gray-500 mb-1">脂肪</div>
            <div className="text-xs font-bold text-purple-600 mb-1">35g<span className="text-[9px] text-gray-400 font-normal">/50g</span></div>
            <div className="w-full h-1 bg-purple-100 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[70%]"></div></div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="flex-1 px-5 mt-6 overflow-y-auto pb-24">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-bold text-gray-900">午餐推荐 · 周边1km</div>
          <div className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-medium flex items-center gap-1">
            <MapPin size={10} /> 智能筛选
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          {[
            { icon: Apple, name: "轻食沙拉碗", rest: "Wagas (国贸店)", cal: 320, match: 98, active: true },
            { icon: Flame, name: "藜麦鸡胸肉饭", rest: "新元素", cal: 410, match: 92, active: false },
            { icon: Coffee, name: "低卡荞麦面", rest: "沙拉实验室", cal: 380, match: 85, active: false }
          ].map((item, i) => (
            <div key={i} className={`
              p-3 rounded-xl flex items-center gap-3 relative overflow-hidden transition-all
              ${item.active ? 'bg-emerald-50/50 border-2 border-emerald-500 shadow-sm' : 'bg-white border border-gray-100 shadow-sm'}
            `}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.active ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-50 text-gray-500'}`}>
                <item.icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-gray-900 truncate">{item.name}</div>
                <div className="text-[10px] text-gray-500 truncate">{item.rest}</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-xs font-bold text-orange-500">{item.cal} <span className="text-[9px] font-normal text-gray-400">kcal</span></div>
                <div className="text-[9px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded mt-1">匹配 {item.match}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 pt-3">
        <div className="text-[10px] text-gray-400 text-center mb-2 flex items-center justify-center gap-1">
          📍 已接入美团/高德 API 获取实时数据
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-3 px-4 border border-gray-200 text-gray-700 text-sm font-bold rounded-xl bg-white shadow-sm hover:bg-gray-50 transition-colors">重新规划</button>
          <button className="flex-[2] py-3 px-4 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-blue-700 transition-colors">确认今日方案</button>
        </div>
      </div>
    </div>
  );
}

export function CityRouteMockup() {
  return (
    <div className="w-full h-full min-h-[500px] bg-[#0A0F1C] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-gray-200">
      {/* Browser Chrome */}
      <div className="h-10 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto bg-black/50 border border-gray-700 rounded-md text-[10px] text-gray-400 px-6 py-1 flex items-center gap-2">
          <span className="text-gray-500">🔒</span> city-vibe.ai
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 h-full">
        {/* Left: Input Area */}
        <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800 bg-gradient-to-b from-gray-900 to-[#0A0F1C]">
          <h2 className="text-2xl font-black text-white mb-6">描述你的心情...</h2>
          
          <div className="relative mb-6">
            <textarea 
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-sm text-gray-200 resize-none h-24 outline-none focus:border-primary transition-colors"
              value="想找个安静角落喝咖啡看日落 ☕"
              readOnly
            />
            <button className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
              <Sparkles size={16} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs">孤独感</span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs">浪漫</span>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs">探索欲</span>
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full text-xs">治愈系</span>
            <span className="px-3 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded-full text-xs">赛博感</span>
          </div>

          {/* User Flow */}
          <div className="mt-auto flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-400"><div className="w-5 h-5 rounded bg-gray-800 flex items-center justify-center text-[10px]">①</div> 输入情绪</div>
            <div className="flex items-center gap-2 text-xs text-primary"><div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-[10px]">②</div> AI理解意图</div>
            <div className="flex items-center gap-2 text-xs text-gray-400"><div className="w-5 h-5 rounded bg-gray-800 flex items-center justify-center text-[10px]">③</div> GIS筛选POI</div>
            <div className="flex items-center gap-2 text-xs text-gray-400"><div className="w-5 h-5 rounded bg-gray-800 flex items-center justify-center text-[10px]">④</div> 生成漫游卡片</div>
          </div>
        </div>

        {/* Right: Map Area */}
        <div className="flex-1 relative bg-[#1a2535] overflow-hidden flex flex-col">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Map Content */}
          <div className="relative flex-1">
            {/* Connection Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path 
                d="M 150 150 Q 250 100 350 250" 
                stroke="url(#route-gradient)" 
                strokeWidth="3" 
                strokeDasharray="6 6" 
                fill="none" 
              />
              <defs>
                <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>

            {/* Pins */}
            <div className="absolute top-[130px] left-[130px] flex flex-col items-center">
              <div className="bg-gray-900 text-gray-300 text-[10px] px-2 py-1 rounded border border-gray-700 mb-1 whitespace-nowrap shadow-lg">① 出发点 <span className="text-white font-bold ml-1">后海咖啡馆</span></div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white border-2 border-[#1a2535] relative z-10">
                  <Coffee size={14} />
                </div>
              </div>
            </div>

            <div className="absolute top-[80px] left-[230px] flex flex-col items-center">
              <div className="bg-gray-900 text-gray-300 text-[10px] px-2 py-1 rounded border border-gray-700 mb-1 whitespace-nowrap shadow-lg">② 中途 <span className="text-white font-bold ml-1">南锣鼓巷书店</span></div>
              <div className="w-6 h-6 bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-300 border-2 border-[#1a2535] relative z-10">
                <FileText size={12} />
              </div>
            </div>

            <div className="absolute top-[230px] left-[330px] flex flex-col items-center">
              <div className="bg-gray-900 text-gray-300 text-[10px] px-2 py-1 rounded border border-gray-700 mb-1 whitespace-nowrap shadow-lg">③ 终点·日落 <span className="text-white font-bold ml-1">景山公园</span></div>
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg flex items-center justify-center text-white border-2 border-[#1a2535] relative z-10">
                  <Sun size={18} />
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur border border-gray-700 text-gray-300 text-[10px] px-3 py-1.5 rounded-full font-medium">
              步行全程 3.2km
            </div>
          </div>

          {/* Generated Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-black text-white text-lg tracking-tight">日落独处漫游线</h4>
              </div>
              <div className="bg-gray-800 text-gray-300 text-[10px] px-2 py-1 rounded border border-gray-700">漫游卡片</div>
            </div>
            <div className="flex gap-2 mb-3">
              <span className="bg-gray-800 text-gray-300 text-[10px] px-2 py-1 rounded-full border border-gray-700">☕ 咖啡馆</span>
              <span className="bg-gray-800 text-gray-300 text-[10px] px-2 py-1 rounded-full border border-gray-700">📚 书店</span>
              <span className="bg-gray-800 text-gray-300 text-[10px] px-2 py-1 rounded-full border border-gray-700">🌅 景山</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 italic">
              "避开人潮，在咖啡香气里开始，书页里消磨午后，最终在夕阳里与城市独处。"
            </p>
            <div className="flex gap-2">
              <button className="flex-1 bg-white text-black text-xs font-bold py-2 rounded-lg hover:bg-gray-200 transition-colors">保存卡片</button>
              <button className="flex-1 bg-gray-800 text-white border border-gray-700 text-xs font-bold py-2 rounded-lg hover:bg-gray-700 transition-colors">分享朋友圈</button>
              <button className="bg-gray-800 text-gray-400 border border-gray-700 text-xs font-bold py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors">↻</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy icon for CheckCircle since CheckCircle doesn't exist directly or might be CheckCircle2
function CheckCircle2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
