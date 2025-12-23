
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  HelpCircle, 
  ChevronRight, 
  Image as ImageIcon,
  ChevronDown,
  ChevronUp,
  UploadCloud,
  Sparkles,
  Check,
  X,
  Copy,
  AlertCircle,
  Zap,
  Loader2,
  Clock,
  Video,
  Mic,
  Brain,
  FileText,
  User
} from 'lucide-react';

const MetricCard = ({ title, value, hasDetail, tooltip }: { title: string, value: string, hasDetail?: boolean, tooltip?: string }) => (
  <div className="bg-gray-50/50 p-5 rounded-lg border border-transparent hover:border-gray-100 transition-all">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1.5 group">
        <span className="text-sm text-gray-500">{title}</span>
        {tooltip && (
          <HelpCircle className="w-3.5 h-3.5 text-gray-300 cursor-help group-hover:text-gray-400 transition-colors" />
        )}
      </div>
      {hasDetail && (
        <a href="#" className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-0.5">
          详情 <ChevronRight className="w-3 h-3" />
        </a>
      )}
    </div>
    <div className="text-2xl font-semibold text-gray-900 tracking-tight">
      {value}
    </div>
  </div>
);

const GeneratedScripts = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scripts = [
    {
      title: "V1 - 侧重个性化辅导",
      match: 92,
      tags: ["书桌场景", "无表演感", "家长焦虑"],
      meta: [
        { label: "场景", value: "真实家庭环境（书桌）" },
        { label: "演员", value: "真实学生对话（无台词腔）" }
      ],
      prediction: 45,
      segments: [
        {
          time: "00:00 - 00:05",
          visual: "孩子写作业皱眉，咬笔头。家长在一旁无奈叹气，手不知道往哪放。",
          audio: "(环境音) 笔尖戳纸声、重重的叹气声。"
        },
        {
          time: "00:06 - 00:15",
          visual: "家长拿出手机，特写App界面。手指点击“AI诊断”按钮，红框自动圈出作业错题。",
          audio: "家长：“别干着急了，用这个扫一下试试。”"
        },
        {
          time: "00:16 - 00:25",
          visual: "屏幕生成专属练习册。孩子看着新题目点头，眉头舒展，开始动笔。",
          audio: "孩子：“哦！原来是这个知识点没弄懂，现在的题我会了！”"
        },
        {
          time: "00:26 - 00:30",
          visual: "产品利益点大字卡（免费领AI诊断）。画面切回孩子笑脸，做引导手势。",
          audio: "口播：“现在注册，免费领AI专属诊断。”"
        }
      ]
    },
    {
      title: "V2 - 侧重错题举一反三",
      match: 89,
      tags: ["客厅茶几", "母子对话", "作业堆积"],
      meta: [
        { label: "场景", value: "真实家庭环境（客厅）" },
        { label: "演员", value: "真实母子（生活化穿搭）" }
      ],
      prediction: 45,
      segments: [
        {
          time: "00:00 - 00:05",
          visual: "茶几上堆满试卷。妈妈拿着红笔在卷子上打叉，孩子低头抠手。",
          audio: "妈妈：“怎么讲了三遍还是错？这道题很难吗？”"
        },
        {
          time: "00:06 - 00:15",
          visual: "画面变亮，手机App界面切入。AI分析报告弹出：“薄弱点：平面几何辅助线”。",
          audio: "画外音：“不是孩子笨，是没找到根源。AI一秒定位薄弱点。”"
        },
        {
          time: "00:16 - 00:25",
          visual: "AI推荐了3道变式题。孩子在草稿纸上画出辅助线，快速写出答案。",
          audio: "孩子：“妈，这题换个数字我也能做出来了！”"
        },
        {
          time: "00:26 - 00:30",
          visual: "全屏展示APP Logo与下载按钮。",
          audio: "口播：“别盲目刷题了，用AI精准提升。”"
        }
      ]
    },
    {
      title: "V3 - 侧重深夜辅导痛点",
      match: 85,
      tags: ["夜晚台灯", "父亲辅导", "时间紧迫"],
      meta: [
        { label: "场景", value: "真实家庭环境（夜晚书房）" },
        { label: "演员", value: "父女对话（疲惫感）" }
      ],
      prediction: 45,
      segments: [
        {
          time: "00:00 - 00:05",
          visual: "墙上时钟指向11点。爸爸打哈欠，孩子揉眼睛，作业只写了一半。",
          audio: "(音效) 钟表滴答声。爸爸：“还没写完？明天又要起不来了。”"
        },
        {
          time: "00:06 - 00:15",
          visual: "爸爸打开手机，扫描整页作业。AI瞬间批改完成，生成针对性讲解视频。",
          audio: "画外音：“太晚了别死磕。AI老师24小时在线讲解。”"
        },
        {
          time: "00:16 - 00:25",
          visual: "孩子看着讲解视频频频点头，快速补全剩下的题目，合上书本。",
          audio: "孩子：“懂了！原来这么简单。”"
        },
        {
          time: "00:26 - 00:30",
          visual: "父女击掌，画面定格在App界面。",
          audio: "口播：“高效学习不熬夜，下载试试吧。”"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden animate-in fade-in duration-500">
      {/* Header */}
      <div className="px-6 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-gray-900 text-base">AI 推荐脚本</h3>
          <span className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 text-xs rounded-full flex items-center gap-1">
             <Check className="w-3 h-3" /> 已自动校验30秒闭环规则
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-white">
        {scripts.map((script, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-3 px-2 text-sm font-medium transition-colors relative ${
              activeTab === idx 
                ? 'text-blue-600 bg-blue-50/50' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <span>{script.title.split(' - ')[0]}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === idx ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'}`}>
                匹配度 {script.match}%
              </span>
            </div>
            {activeTab === idx && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 bg-white min-h-[400px]">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            {scripts[activeTab].title}
        </h4>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {scripts[activeTab].tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">
                    {tag}
                </span>
            ))}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-gray-600 mb-6 bg-[#FFFBEB] border border-[#FEF3C7] p-3 rounded-lg">
           {scripts[activeTab].meta.map((m, i) => (
             <div key={i} className="flex items-center gap-1.5">
                <span className="text-orange-500"><Video className="w-3.5 h-3.5" /></span>
                <span className="font-medium text-gray-700">{m.label}:</span>
                <span>{m.value}</span>
             </div>
           ))}
        </div>

        {/* Timeline */}
        <div className="space-y-6 relative before:absolute before:left-[4.5rem] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
            {scripts[activeTab].segments.map((seg, i) => (
                <div key={i} className="relative flex gap-6">
                    <div className="w-14 pt-0.5 text-xs font-mono font-medium text-red-500 flex-shrink-0 text-right">
                        {seg.time.split(' - ').map(t => <div key={t}>{t}</div>)}
                    </div>
                    <div className="flex-1 space-y-2 pb-4">
                        <div className="flex gap-2 text-sm text-gray-800">
                            <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] h-fit font-medium border border-blue-100 shrink-0">画面</span>
                            <span className="leading-relaxed">{seg.visual}</span>
                        </div>
                        <div className="flex gap-2 text-sm text-gray-600">
                             <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded text-[10px] h-fit font-medium border border-gray-200 shrink-0">台词</span>
                            <span className="italic leading-relaxed">{seg.audio}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
         <div className="flex items-center gap-2 text-sm text-gray-600">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>AI预测完播率: <span className="font-bold text-gray-900">{scripts[activeTab].prediction}%</span></span>
         </div>
         <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
            使用此脚本
         </button>
      </div>
    </div>
  );
};

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-500">
    <div className="relative w-24 h-24 mb-8">
      <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Brain className="w-10 h-10 text-blue-600" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">AI 正在生成策略</h3>
    <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
      <p className="animate-pulse">正在聚合全网素材数据...</p>
      <p className="animate-pulse delay-75">正在识别 Top 20% 特征归因...</p>
      <p className="animate-pulse delay-150">正在构建 30秒 闭环脚本...</p>
    </div>
  </div>
);

interface AnalysisDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  materialName?: string;
}

const AnalysisDrawer: React.FC<AnalysisDrawerProps> = ({ isOpen, onClose, materialName }) => {
  const [generationStatus, setGenerationStatus] = useState<'idle' | 'loading' | 'complete'>('idle');

  // Reset status when drawer opens
  useEffect(() => {
    if (isOpen) {
        setGenerationStatus('idle');
    }
  }, [isOpen]);

  const handleGenerate = () => {
    setGenerationStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
        setGenerationStatus('complete');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer Panel */}
      <div className="relative w-[650px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <div>
            <h2 className="text-lg font-bold text-gray-900">素材AI分析</h2>
            <p className="text-xs text-gray-500 mt-1 truncate max-w-[400px]" title={materialName}>{materialName || '25120206-抖音S-校企-APP01-视频-情景剧多人-竖版'}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6 space-y-8 pb-32">
            {/* Script Analysis */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-base">脚本分析</h3>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-4 text-xs mb-4 flex-wrap">
                  <span className="text-gray-500">内容公式：</span>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-gray-800 rounded-sm"></span><span className="text-gray-700">情绪营销</span></div>
                  <span className="text-gray-300">+</span>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-600 rounded-sm"></span><span className="text-gray-700">引导购买</span></div>
                  <span className="text-gray-300">+</span>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-purple-600 rounded-sm"></span><span className="text-gray-700">商品信息</span></div>
                  <span className="text-gray-300">+</span>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-pink-500 rounded-sm"></span><span className="text-gray-700">产品功能</span></div>
                  <span className="text-gray-300">+</span>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-600 rounded-sm"></span><span className="text-gray-700">引导购买</span></div>
                  <button className="ml-auto text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1">
                    <Copy className="w-3 h-3" /> 一键复制
                  </button>
                </div>
                
                <div className="text-sm leading-relaxed text-gray-600 text-justify">
                  <span className="font-bold text-gray-900">【情绪营销】</span>
                  你是否还在盲目刷题？没有规划，每天学的疲惫，却看不到进步？
                  <span className="font-bold text-blue-600">【引导购买】</span>
                  <span className="text-blue-600">别急，库克网校app来帮你啦！</span>
                  <span className="font-bold text-gray-900">【商品信息】</span>
                  专属老师定制学习计划，计划到每一天，一线老师在线指导，避免自学走弯路！而且啊，库克网校深耕专升本领域十八年，三十家省市考试资讯、院校信息实时更新，一千家课时直播课、录播课实时互动，反复观看，海量免费题库，历年真题专项练习必刷考题做完还能自动生成答题报告！
                  <span className="font-bold text-pink-600">【产品功能】</span>
                  <span className="text-pink-600">还有一v一报考指导，科学陪伴恩不，专属答疑，助力学习不留盲点！</span>
                  <span className="font-bold text-blue-600">【引导购买】</span>
                  <span className="text-blue-600">还在等什么？赶紧点击下方链接，解锁科学备考计划，让你每一次努力都直击考点！专升本备考刷题尽在库科网校app！</span>
                </div>
              </div>
            </div>

            {/* Key Dimension Analysis */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-base">关键维度分析</h3>
              <div className="space-y-3">
                {[
                  { label: '拍摄方式', content: '我的素材主要为 单人口播，参考同行优质素材，建议增加对曝光有提升的 教室学习环境、教师真人教学演示' },
                  { label: '视频开头', content: '我的素材未识别出 视频开头，参考同行优质素材，建议尝试 学习习惯问题引入', highlight: '学习习惯问题引入' },
                  { label: '核心卖点', content: '我的素材未识别出 核心卖点，参考同行优质素材，建议尝试 解决孩子拖拉磨蹭、系统化学习方案、学习拖延磨蹭', highlight: '解决孩子拖拉磨蹭、系统化学习方案、学习拖延磨蹭' },
                  { label: '视频节奏', content: '30秒内完成【问题（0-5秒）→介入（6-15秒）→变化（16-25秒）→收尾（26-30秒）】的闭环，各阶段时长误差不超过2秒' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                    <div className="text-gray-600">
                      <span className="font-bold text-gray-900">{item.label}：</span>
                      {item.content.split(/ (教室学习环境、教师真人教学演示|学习习惯问题引入|解决孩子拖拉磨蹭、系统化学习方案、学习拖延磨蹭) /g).map((part, i) => (
                        ['教室学习环境、教师真人教学演示', '学习习惯问题引入', '解决孩子拖拉磨蹭、系统化学习方案、学习拖延磨蹭'].includes(part) 
                        ? <span key={i} className="text-orange-500">{part}</span> 
                        : part
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Strategy Suggestions */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-base">AI 策略建议 (基于全网数据加权)</h3>
              
              <div className="border border-green-100 bg-green-50/50 rounded-xl p-5 flex gap-4">
                <div className="mt-0.5">
                  <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">优先复刻：【真实家庭场景 + 冲突开头】组合</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    历史数据显示， 此类素材在全平台CTR平均超 8%。请务必在脚本前3秒展示“孩子皱眉做题”或“家长叹气”画面。
                  </div>
                </div>
              </div>

              <div className="border border-red-100 bg-red-50/50 rounded-xl p-5 flex gap-4">
                <div className="mt-0.5">
                  <div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">规避元素：【纯口播 + 老师角色】</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    数据显示“老师角色”仅有52%的转化表现，且“纯口播”形式完播率低。建议替换为家长视角的真实记录风格。
                  </div>
                </div>
              </div>

              <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-5 flex gap-4">
                <div className="mt-0.5">
                  <div className="w-6 h-6 rounded-full border-transparent bg-transparent flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-500 fill-blue-500" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">核心卖点强化：AI诊断</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    包含“AI扫描诊断”过程的素材转化率高达88%。请确保视频中间段（6-15秒）清晰展示APP扫描作业并出具报告的UI界面。
                  </div>
                </div>
              </div>
            </div>

            {/* AI Generation Result Section */}
            {generationStatus === 'loading' && <LoadingState />}
            {generationStatus === 'complete' && <GeneratedScripts />}
          </div>
        </div>

        {/* Footer Action - Only show if not generating or complete */}
        {generationStatus === 'idle' && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 z-20">
            <button 
                onClick={handleGenerate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg font-medium shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
            >
                <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                生成同类拍摄脚本
            </button>
            </div>
        )}
      </div>
    </div>
  );
};

const Top20MultiDimData = () => {
  const [activeTab, setActiveTab] = useState<'year' | 'dept' | 'cat'>('year');

  const yearData = [
    { label: '23', count: 1, spend: 45737, reg: 564, cost: 81, spendRatio: '14%', regRatio: '8%' },
    { label: '24', count: 4, spend: 143689, reg: 3218, cost: 45, spendRatio: '42%', regRatio: '43%' },
    { label: '25', count: 5, spend: 149249, reg: 3618, cost: 41, spendRatio: '44%', regRatio: '49%' },
    { label: '合计', count: 10, spend: 338675, reg: 7400, cost: 46, spendRatio: '100%', regRatio: '100%', isTotal: true },
  ];

  const deptData = [
    { label: '直播', count: 3, spend: 101515, reg: 1801, cost: 56, spendRatio: '32%', regRatio: '27%' },
    { label: '巨量', count: 2, spend: 87911, reg: 1981, cost: 44, spendRatio: '28%', regRatio: '29%' },
    { label: '视频直播', count: 1, spend: 27295, reg: 626, cost: 44, spendRatio: '9%', regRatio: '9%' },
    { label: '新媒体', count: 3, spend: 95915, reg: 2346, cost: 41, spendRatio: '31%', regRatio: '35%' },
    { label: '合计', count: 9, spend: 312637, reg: 6754, cost: 46, spendRatio: '100%', regRatio: '100%', isTotal: true },
  ];

  const catData = [
    { label: '口播', count: 7, spend: 242759, reg: 5054, cost: 48, spendRatio: '72%', regRatio: '68%' },
    { label: '情景剧', count: 3, spend: 95915, reg: 2346, cost: 41, spendRatio: '28%', regRatio: '32%' },
    { label: '合计', count: 10, spend: 338675, reg: 7400, cost: 46, spendRatio: '100%', regRatio: '100%', isTotal: true },
  ];

  const getCurrentData = () => {
    switch(activeTab) {
      case 'dept': return { data: deptData, header: '部门' };
      case 'cat': return { data: catData, header: '类别' };
      case 'year':
      default: return { data: yearData, header: '年份' };
    }
  };

  const { data, header } = getCurrentData();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">TOP20素材多维度数据</h2>
      
      <div className="flex gap-4 border-b border-gray-200 mb-6">
         {/* Custom Tabs */}
         <button 
           onClick={() => setActiveTab('year')}
           className={`pb-3 px-2 text-sm font-medium transition-all relative ${activeTab === 'year' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
         >
           年份
         </button>
         <button 
           onClick={() => setActiveTab('dept')}
           className={`pb-3 px-2 text-sm font-medium transition-all relative ${activeTab === 'dept' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
         >
           部门
         </button>
         <button 
           onClick={() => setActiveTab('cat')}
           className={`pb-3 px-2 text-sm font-medium transition-all relative ${activeTab === 'cat' ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
         >
           类别
         </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full text-sm">
          <thead className="bg-[#D4EADE] text-gray-900 font-semibold">
             <tr>
                <th className="px-6 py-3 border-r border-gray-300 text-center w-32">{header}</th>
                <th className="px-6 py-3 border-r border-gray-300 text-center">数目</th>
                <th className="px-6 py-3 border-r border-gray-300 text-center">消费</th>
                <th className="px-6 py-3 border-r border-gray-300 text-center">注册数</th>
                <th className="px-6 py-3 border-r border-gray-300 text-center">注册成本</th>
                <th className="px-6 py-3 border-r border-gray-300 text-center">消费占比</th>
                <th className="px-6 py-3 text-center">注册占比</th>
             </tr>
          </thead>
          <tbody className="bg-[#EAF6ED]">
             {data.map((row, idx) => (
               <tr key={idx} className={`border-t border-gray-300 ${idx === data.length - 1 ? 'font-bold' : ''}`}>
                  <td className="px-6 py-3 border-r border-gray-300 text-gray-900 text-center">{row.label}</td>
                  <td className="px-6 py-3 border-r border-gray-300 text-center text-gray-800">{row.count}</td>
                  <td className="px-6 py-3 border-r border-gray-300 text-center text-gray-800">{row.spend}</td>
                  <td className="px-6 py-3 border-r border-gray-300 text-center text-gray-800">{row.reg}</td>
                  <td className="px-6 py-3 border-r border-gray-300 text-center text-gray-800">{row.cost}</td>
                  <td className="px-6 py-3 border-r border-gray-300 text-center text-gray-800">{row.spendRatio}</td>
                  <td className="px-6 py-3 text-center text-gray-800">{row.regRatio}</td>
               </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface MaterialAnalysisProps {
  onNavigateToMaterials?: () => void;
}

export const MaterialAnalysis: React.FC<MaterialAnalysisProps> = ({ onNavigateToMaterials }) => {
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const topVideos = [
    { rank: 1, name: "25120206-抖音S-校企-APP01-视频-情景剧多人-竖版-20753", id: "87827381723871", spend: "58,824.06", impressions: "3,394,601", clicks: "3,190", ctr: "0.95%", reg: 1596, cost: 36.86, regRate: '50.03%', score: 92.5, platforms: {douyin: 51, kuaishou: 39, baidu: 10} },
    { rank: 2, name: "25120901-抖音S-校企-APP01-视频-情景剧多人-横版-20754", id: "87827381723872", spend: "42,156.80", impressions: "2,156,780", clicks: "2,845", ctr: "1.12%", reg: 1420, cost: 29.69, regRate: '49.91%', score: 90.5, platforms: {douyin: 60, kuaishou: 30, baidu: 10} },
    { rank: 3, name: "25120903-抖音S-校企-APP01-视频-真人口播单人-横版-20755", id: "87827381723873", spend: "31,832.09", impressions: "1,531,899", clicks: "1,764", ctr: "1.25%", reg: 856, cost: 37.19, regRate: '48.53%', score: 88.0, platforms: {douyin: 45, kuaishou: 45, baidu: 10} },
    { rank: 4, name: "25121501-抖音S-新媒体-APP01-视频-情景剧多人-横版-20777", id: "87827381723874", spend: "28,450.50", impressions: "1,245,600", clicks: "1,450", ctr: "1.16%", reg: 750, cost: 37.93, regRate: '51.72%', score: 86.5, platforms: {douyin: 55, kuaishou: 35, baidu: 10} },
    { rank: 5, name: "25122002-快手-校企-APP02-视频-口播-竖版-20801", id: "87827381723875", spend: "25,120.30", impressions: "980,500", clicks: "1,120", ctr: "1.14%", reg: 620, cost: 40.52, regRate: '55.36%', score: 85.0, platforms: {douyin: 20, kuaishou: 70, baidu: 10} },
    { rank: 6, name: "25122205-百度-成考-APP01-视频-情景剧-横版-20815", id: "87827381723876", spend: "21,560.80", impressions: "856,200", clicks: "980", ctr: "1.14%", reg: 510, cost: 42.28, regRate: '52.04%', score: 83.5, platforms: {douyin: 10, kuaishou: 20, baidu: 70} },
    { rank: 7, name: "25122508-抖音S-自考-APP01-视频-混剪-竖版-20833", id: "87827381723877", spend: "18,950.20", impressions: "720,150", clicks: "850", ctr: "1.18%", reg: 450, cost: 42.11, regRate: '52.94%', score: 82.0, platforms: {douyin: 80, kuaishou: 10, baidu: 10} },
    { rank: 8, name: "25122810-快手-二建-APP03-视频-口播-横版-20855", id: "87827381723878", spend: "15,680.60", impressions: "560,800", clicks: "620", ctr: "1.11%", reg: 380, cost: 41.26, regRate: '61.29%', score: 80.5, platforms: {douyin: 15, kuaishou: 75, baidu: 10} },
    { rank: 9, name: "25123012-百度-教资-APP01-视频-图文-横版-20888", id: "87827381723879", spend: "12,450.40", impressions: "450,200", clicks: "510", ctr: "1.13%", reg: 290, cost: 42.93, regRate: '56.86%', score: 79.0, platforms: {douyin: 10, kuaishou: 10, baidu: 80} },
    { rank: 10, name: "25123115-抖音S-会计-APP02-视频-情景剧-竖版-20901", id: "87827381723880", spend: "9,850.10", impressions: "320,100", clicks: "350", ctr: "1.09%", reg: 180, cost: 54.72, regRate: '51.43%', score: 77.5, platforms: {douyin: 60, kuaishou: 30, baidu: 10} },
    { rank: 11, name: "25123220-快手-会计-APP01-视频-混剪-横版-20922", id: "87827381723881", spend: "9,120.50", impressions: "305,200", clicks: "310", ctr: "1.02%", reg: 160, cost: 57.00, regRate: '51.61%', score: 76.0, platforms: {douyin: 20, kuaishou: 70, baidu: 10} },
    { rank: 12, name: "25123305-抖音S-公考-APP01-视频-口播-竖版-20935", id: "87827381723882", spend: "8,750.30", impressions: "298,500", clicks: "290", ctr: "0.97%", reg: 145, cost: 60.35, regRate: '50.00%', score: 75.5, platforms: {douyin: 80, kuaishou: 10, baidu: 10} },
    { rank: 13, name: "25123418-百度-考研-APP02-视频-图文-横版-20948", id: "87827381723883", spend: "8,320.10", impressions: "285,100", clicks: "275", ctr: "0.96%", reg: 135, cost: 61.63, regRate: '49.09%', score: 74.0, platforms: {douyin: 10, kuaishou: 10, baidu: 80} },
    { rank: 14, name: "25123512-抖音S-法考-APP01-视频-情景剧-竖版-20960", id: "87827381723884", spend: "7,890.60", impressions: "270,300", clicks: "260", ctr: "0.96%", reg: 125, cost: 63.12, regRate: '48.08%', score: 73.5, platforms: {douyin: 75, kuaishou: 20, baidu: 5} },
    { rank: 15, name: "25123625-快手-医考-APP03-视频-真人口播-横版-20975", id: "87827381723885", spend: "7,450.20", impressions: "255,800", clicks: "245", ctr: "0.96%", reg: 115, cost: 64.78, regRate: '46.94%', score: 72.0, platforms: {douyin: 15, kuaishou: 80, baidu: 5} },
    { rank: 16, name: "25123730-抖音S-雅思-APP01-视频-混剪-竖版-20988", id: "87827381723886", spend: "6,980.40", impressions: "240,500", clicks: "230", ctr: "0.96%", reg: 105, cost: 66.48, regRate: '45.65%', score: 71.5, platforms: {douyin: 85, kuaishou: 10, baidu: 5} },
    { rank: 17, name: "25123805-百度-托福-APP02-视频-图文-横版-21001", id: "87827381723887", spend: "6,520.10", impressions: "225,200", clicks: "215", ctr: "0.95%", reg: 95, cost: 68.63, regRate: '44.19%', score: 70.0, platforms: {douyin: 5, kuaishou: 5, baidu: 90} },
    { rank: 18, name: "25123915-快手-教资-APP01-视频-口播-竖版-21015", id: "87827381723888", spend: "6,150.30", impressions: "210,800", clicks: "200", ctr: "0.95%", reg: 85, cost: 72.36, regRate: '42.50%', score: 69.5, platforms: {douyin: 25, kuaishou: 70, baidu: 5} },
    { rank: 19, name: "25124020-抖音S-一建-APP03-视频-情景剧-横版-21028", id: "87827381723889", spend: "5,820.50", impressions: "195,600", clicks: "185", ctr: "0.95%", reg: 75, cost: 77.61, regRate: '40.54%', score: 68.0, platforms: {douyin: 65, kuaishou: 30, baidu: 5} },
    { rank: 20, name: "25124110-百度-二建-APP01-视频-真人口播-竖版-21042", id: "87827381723890", spend: "5,450.20", impressions: "180,400", clicks: "170", ctr: "0.94%", reg: 65, cost: 83.85, regRate: '38.24%', score: 67.5, platforms: {douyin: 10, kuaishou: 10, baidu: 80} },
  ];

  const displayedVideos = showAllVideos ? topVideos : topVideos.slice(0, 5);

  return (
    <div className="space-y-6">
      <AnalysisDrawer 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        materialName={selectedVideo ? topVideos.find(v => v.id === selectedVideo)?.name : ''}
      />

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 hover:border-gray-300 cursor-pointer bg-white">
          <span>2023-10-01 至 2023-10-07</span>
          <Calendar className="w-4 h-4 text-gray-400" />
        </div>

        <div className="relative group">
           <input 
              type="text" 
              placeholder="请输入素材名称"
              className="bg-white border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500 min-w-[240px]"
           />
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1.5 ml-auto md:ml-0">
          <Search className="w-4 h-4" />
          查询
        </button>
        <button className="border border-gray-200 text-gray-600 px-5 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors bg-white">
          重置
        </button>
      </div>

      {/* Core Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-4 bg-blue-600 rounded-full" />
          <h2 className="text-base font-semibold text-gray-800">核心指标</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="消耗(元)" value="128,560.80" tooltip="Total Spend" />
          <MetricCard title="展示数(次)" value="128,560" tooltip="Impressions" />
          <MetricCard title="点击数(次)" value="128,560" tooltip="Clicks" />
          <MetricCard title="点击率(%)" value="4.13%" tooltip="CTR" />
          <MetricCard title="线索量(条)" value="8,560" hasDetail tooltip="Leads" />
          <MetricCard title="订单量(单)" value="6,080" hasDetail tooltip="Orders" />
          <MetricCard title="销售额(元)" value="879,500,000.00" tooltip="Revenue" />
          <MetricCard title="平均千次展现费用(元)" value="8,560" tooltip="CPM" />
        </div>
      </div>

      {/* Sync Status Bar */}
      <div className="bg-blue-50/50 border border-blue-100 rounded-lg px-6 py-4 flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-medium">今日同步视频素材</span>
            <span className="text-blue-700 font-bold text-lg">98</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-medium">今日同步图片素材</span>
            <span className="text-blue-700 font-bold text-lg">76</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-gray-500 mt-2 sm:mt-0">
          <span>同步时间 2024-01-15 18:00:15</span>
          <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">查看同步详情</a>
        </div>
      </div>

      {/* Top Materials Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-gray-800">爆款视频TOP20</h3>
            <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">数据处理规则为"按照素材名称相同的视频在不同平台同指标数据直接相加"</span>
          </div>
          <button 
            onClick={onNavigateToMaterials}
            className="text-sm bg-[#0EA5E9] text-white px-4 py-1.5 rounded hover:bg-[#0284c7] transition-colors"
          >
            全部素材
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-medium text-center w-16">排名</th>
                <th className="px-6 py-4 font-medium w-24">素材预览</th>
                <th className="px-6 py-4 font-medium">视频名称</th>
                <th className="px-4 py-4 font-medium text-right">消耗(元)</th>
                <th className="px-4 py-4 font-medium text-right">展现量</th>
                <th className="px-4 py-4 font-medium text-right">点击量</th>
                <th className="px-4 py-4 font-medium text-right">点击率</th>
                <th className="px-4 py-4 font-medium text-right">注册数</th>
                <th className="px-4 py-4 font-medium text-right">注册成本</th>
                <th className="px-4 py-4 font-medium text-right">注册率</th>
                <th className="px-6 py-4 font-medium">平台分布</th>
                <th className="px-6 py-4 font-medium text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayedVideos.map((item) => (
                <tr key={item.rank} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-center font-medium text-gray-700">{item.rank}</td>
                  <td className="px-6 py-4">
                    <div className="w-16 h-16 bg-gray-100 rounded border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                      <span className="text-[10px] mb-1">封面</span>
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 max-w-xs">
                      <div className="font-medium text-gray-900 line-clamp-2">
                        {item.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        {item.rank <= 3 && <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px]">优质素材</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-600">{item.spend}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{item.impressions}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{item.clicks}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{item.ctr}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{item.reg}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{item.cost}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{item.regRate}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-[10px] text-gray-500 w-24">
                       {item.platforms.douyin > 0 && <div className="flex justify-between"><span>抖音</span><span>{item.platforms.douyin}%</span></div>}
                       {item.platforms.kuaishou > 0 && <div className="flex justify-between"><span>快手</span><span>{item.platforms.kuaishou}%</span></div>}
                       {item.platforms.baidu > 0 && <div className="flex justify-between"><span>百度</span><span>{item.platforms.baidu}%</span></div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => setSelectedVideo(item.id)}
                      className="text-white bg-[#8B5CF6] hover:bg-[#7C3AED] px-3 py-1.5 rounded text-xs font-medium transition-colors shadow-sm"
                    >
                      AI 智能分析
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Expand/Collapse Button */}
        <div 
            onClick={() => setShowAllVideos(!showAllVideos)}
            className="w-full py-3 bg-gray-50 border-t border-gray-100 text-gray-500 text-sm font-medium hover:bg-gray-100 hover:text-gray-700 transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
            {showAllVideos ? (
                <>
                    收起 <ChevronUp className="w-4 h-4" />
                </>
            ) : (
                <>
                    展开查看全部TOP20 <ChevronDown className="w-4 h-4" />
                </>
            )}
        </div>
      </div>

      {/* Top 20 Multi Dimension Data Table */}
      <Top20MultiDimData />
    </div>
  );
};
