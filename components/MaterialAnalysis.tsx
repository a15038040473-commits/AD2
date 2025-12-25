
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
  User,
  Table as TableIcon,
  BarChart2,
  Plus,
  ScanEye,
  Network,
  RotateCcw
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
      tabTitle: "V1",
      title: "V1 - 侧重个性化辅导",
      summary: {
        goal: "快速吸引26专升本考生，精准戳中痛点，清晰展示核心卖点，引导下载。",
        duration: "40秒",
        tone: "亲切、高效、紧迫、充满希望。主播表情生动，语速稍快，配合动感的视觉特效和转场。"
      },
      shots: [
        {
          title: "镜头1 (0-3秒) | 开场钩子 - 锁定人群",
          details: [
            { label: "画面", content: "固定中景。主播坐在橙色沙发上，背景简洁明亮。左上角“库课”Logo常驻。" },
            { label: "动作/表情", content: "主播突然睁大眼睛，身体前倾，语气急切地对着镜头说。" },
            { label: "字幕 (大号黄色，带轻微弹跳效果)", content: "“26专升本的同学注意了！”" },
            { label: "音效", content: "短促、清脆的“叮”声，配合字幕出现。" },
            { label: "旁白 (主播)", content: "“26专升本的同学注意了！”" }
          ]
        },
        {
          title: "镜头2 (3-6秒) | 痛点深化 - 引发共鸣",
          details: [
            { label: "画面", content: "镜头保持不变。主播表情从急切转为略带无奈和理解。" },
            { label: "动作/表情", content: "双手摊开，做一个“你懂的”的手势。" },
            { label: "字幕 (红色裂纹特效)", content: "“复习没方向？”" },
            { label: "旁白 (主播)", content: "“你是不是...复习没方向？”" }
          ]
        },
        {
          title: "镜头3 (6-9秒) | 痛点深化 - 加强代入感",
          details: [
            { label: "画面", content: "同上。" },
            { label: "动作/表情", content: "主播耸耸肩，露出一丝狡黠又无奈的笑容。" },
            { label: "字幕 (橙色火焰特效)", content: "“没人盯着就偷懒？”" },
            { label: "旁白 (主播)", content: "“没人盯着就偷懒？”" }
          ]
        }
      ]
    },
    {
      tabTitle: "V2",
      title: "V2 - 侧重备考焦虑",
      summary: {
        goal: "利用考前焦虑情绪，转化为对高效学习工具的需求。",
        duration: "35秒",
        tone: "严肃转轻松，先抑后扬。背景音乐从低沉转为轻快。"
      },
      shots: [
        {
          title: "镜头1 (0-5秒) | 焦虑场景再现",
          details: [
            { label: "画面", content: "黑白滤镜。堆满资料的书桌，考生抓头发，叹气。" },
            { label: "音效", content: "沉重的钟表滴答声。" },
            { label: "旁白", content: "“离考试还有30天，你还在盲目刷题吗？”" }
          ]
        }
      ]
    },
    {
      tabTitle: "V3",
      title: "V3 - 侧重名师背书",
      summary: {
        goal: "建立专业信任感，强调师资力量。",
        duration: "45秒",
        tone: "专业、权威、稳重。画面色调偏冷暖结合。"
      },
      shots: [
        {
          title: "镜头1 (0-4秒) | 权威展示",
          details: [
            { label: "画面", content: "名师正在讲课的特写，剪辑快速切换不同老师。" },
            { label: "字幕", content: "“10年教龄天团”" },
            { label: "旁白", content: "“选对老师，专升本就成功了一半。”" }
          ]
        }
      ]
    }
  ];

  const currentScript = scripts[activeTab];

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-in fade-in duration-500 shadow-sm">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-100">
        {scripts.map((script, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-4 text-sm font-semibold transition-all relative ${
              activeTab === idx 
                ? 'text-blue-600 bg-blue-50/30' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {script.tabTitle}
            {activeTab === idx && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        ))}
      </div>

      {/* Script Content */}
      <div className="p-8 min-h-[500px]">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-6">{currentScript.title}</h3>

        {/* Summary Info */}
        <div className="space-y-4 mb-8 text-sm text-gray-700">
            <div className="flex gap-2">
                <span className="font-bold flex-shrink-0">核心目标：</span>
                <span className="leading-relaxed">{currentScript.summary.goal}</span>
            </div>
            <div className="flex gap-2">
                <span className="font-bold flex-shrink-0">视频总时长：</span>
                <span>{currentScript.summary.duration}</span>
            </div>
            <div className="flex gap-2">
                <span className="font-bold flex-shrink-0">风格基调：</span>
                <span className="leading-relaxed">{currentScript.summary.tone}</span>
            </div>
        </div>

        <div className="w-full h-px bg-gray-100 mb-8" />

        {/* Shots List */}
        <div className="space-y-8">
            {currentScript.shots.map((shot, idx) => (
                <div key={idx} className="space-y-3">
                    <h4 className="font-bold text-gray-800 text-sm mb-2">{shot.title}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        {shot.details.map((detail, dIdx) => (
                            <li key={dIdx} className="leading-relaxed">
                                <span className="font-bold text-gray-900">{detail.label}：</span>
                                <span>{detail.content}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
         <button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
            复制此脚本
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
        <ScanEye className="w-10 h-10 text-blue-600" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">AI 正在生成策略</h3>
    <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
      <p className="animate-pulse flex items-center gap-2">
        <Video className="w-3 h-3" /> 正在进行多模态特征提取(CV/ASR/OCR)...
      </p>
      <p className="animate-pulse delay-75 flex items-center gap-2">
        <Network className="w-3 h-3" /> 正在比对全网Top 5%优质素材库...
      </p>
      <p className="animate-pulse delay-150 flex items-center gap-2">
        <FileText className="w-3 h-3" /> 正在生成30秒闭环脚本(NLP)...
      </p>
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
    }, 2000);
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
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                素材AI分析
            </h2>
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
            
            {/* Conditional Rendering: Show analysis content OR generated result */}
            {generationStatus !== 'complete' ? (
                <>
                    {/* Script Analysis */}
                    <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                        脚本结构化分析 (NLP)
                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-normal">基于ASR转录文本</span>
                    </h3>
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex items-center gap-4 text-xs mb-4 flex-wrap">
                        <span className="text-gray-500 font-medium">内容公式序列：</span>
                        <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-gray-800 rounded-sm"></span><span className="text-gray-700">情绪营销(Hook)</span></div>
                        <span className="text-gray-300">→</span>
                        <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-600 rounded-sm"></span><span className="text-gray-700">痛点阐述(Pain)</span></div>
                        <span className="text-gray-300">→</span>
                        <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-purple-600 rounded-sm"></span><span className="text-gray-700">解决方案(Sol)</span></div>
                        <span className="text-gray-300">→</span>
                        <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-pink-500 rounded-sm"></span><span className="text-gray-700">产品功能(Feat)</span></div>
                        <span className="text-gray-300">→</span>
                        <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-600 rounded-sm"></span><span className="text-gray-700">转化引导(CTA)</span></div>
                        <button className="ml-auto text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1">
                            <Copy className="w-3 h-3" /> 复制全文
                        </button>
                        </div>
                        
                        <div className="text-sm leading-relaxed text-gray-600 text-justify font-mono">
                        <span className="bg-gray-200 px-1 rounded text-[10px] mr-1 align-middle text-gray-700 font-bold">HOOK</span>
                        你是否还在盲目刷题？没有规划，每天学的疲惫，却看不到进步？
                        <span className="bg-blue-100 px-1 rounded text-[10px] mx-1 align-middle text-blue-700 font-bold">PAIN</span>
                        <span className="text-blue-600">别急，库克网校app来帮你啦！</span>
                        <span className="bg-purple-100 px-1 rounded text-[10px] mx-1 align-middle text-purple-700 font-bold">SOL</span>
                        专属老师定制学习计划，计划到每一天，一线老师在线指导，避免自学走弯路！而且啊，库克网校深耕专升本领域十八年，三十家省市考试资讯、院校信息实时更新，一千家课时直播课、录播课实时互动，反复观看，海量免费题库，历年真题专项练习必刷考题做完还能自动生成答题报告！
                        <span className="bg-pink-100 px-1 rounded text-[10px] mx-1 align-middle text-pink-700 font-bold">FEAT</span>
                        <span className="text-pink-600">还有一v一报考指导，科学陪伴恩不，专属答疑，助力学习不留盲点！</span>
                        <span className="bg-blue-100 px-1 rounded text-[10px] mx-1 align-middle text-blue-700 font-bold">CTA</span>
                        <span className="text-blue-600">还在等什么？赶紧点击下方链接，解锁科学备考计划，让你每一次努力都直击考点！专升本备考刷题尽在库科网校app！</span>
                        </div>
                    </div>
                    </div>

                    {/* Key Dimension Analysis */}
                    <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                        关键维度诊断 (CV/Benchmark)
                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-normal">对比行业Top 5%素材</span>
                    </h3>
                    <div className="space-y-3">
                        {[
                        { 
                            label: '拍摄方式 (CV)', 
                            content: '识别为：单人口播。数据库显示：同类高转素材中“教室学习环境”场景转化率高出30%。', 
                            highlight: '教室学习环境' 
                        },
                        { 
                            label: '黄金前3秒 (Hook)', 
                            content: '未检测到强视觉冲突。Top素材规则：0-3秒必须包含“提问”或“矛盾画面”。建议增加：学习习惯问题引入。', 
                            highlight: '学习习惯问题引入' 
                        },
                        { 
                            label: '核心卖点 (NLP)', 
                            content: '当前卖点（海量题库）属于红海词。归因分析显示：解决拖延、系统化方案 的相关性系数更高（R>0.8）。', 
                            highlight: '解决拖延、系统化方案' 
                        },
                        { 
                            label: '视频节奏 (Time)', 
                            content: '30秒闭环检测：通过。各阶段时长误差控制在 ±2秒 内。' 
                        }
                        ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${item.highlight ? 'bg-orange-500' : 'bg-green-500'}`}></span>
                            <div className="text-gray-600">
                            <span className="font-bold text-gray-900">{item.label}：</span>
                            {item.content.split(/ (教室学习环境|学习习惯问题引入|解决拖延、系统化方案) /g).map((part, i) => (
                                ['教室学习环境', '学习习惯问题引入', '解决拖延、系统化方案'].includes(part) 
                                ? <span key={i} className="text-orange-600 font-medium bg-orange-50 px-1 rounded">{part}</span> 
                                : part
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* AI Strategy Suggestions - Only shown when NOT loading */}
                    {generationStatus === 'idle' && (
                        <div className="space-y-4">
                        <h3 className="font-bold text-gray-900 text-base">AI 策略生成 (Strategy)</h3>
                        
                        <div className="border border-green-100 bg-green-50/50 rounded-xl p-5 flex gap-4">
                            <div className="mt-0.5">
                            <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center bg-white">
                                <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                优先复刻 (Replicate)
                                <span className="text-[10px] font-normal text-green-700 bg-green-100 px-1.5 rounded">特征交集: Positive</span>
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                <span className="font-semibold">【真实家庭场景 + 冲突开头】</span>：识别到该组合在Top 5%素材库中高频出现（覆盖率82%），预计提升CTR 8%以上。
                            </div>
                            </div>
                        </div>

                        <div className="border border-red-100 bg-red-50/50 rounded-xl p-5 flex gap-4">
                            <div className="mt-0.5">
                            <div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center bg-white">
                                <AlertCircle className="w-4 h-4 text-red-600" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                规避元素 (Avoid)
                                <span className="text-[10px] font-normal text-red-700 bg-red-100 px-1.5 rounded">特征交集: Negative</span>
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                <span className="font-semibold">【纯口播 + 老师角色】</span>：该组合在历史Bottom 20%素材中占比过高，且容易触发平台“过度营销”限流规则。
                            </div>
                            </div>
                        </div>

                        <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-5 flex gap-4">
                            <div className="mt-0.5">
                            <div className="w-6 h-6 rounded-full border-transparent bg-white flex items-center justify-center shadow-sm">
                                <Zap className="w-4 h-4 text-blue-500 fill-blue-500" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                核心强化 (Strengthen)
                                <span className="text-[10px] font-normal text-blue-700 bg-blue-100 px-1.5 rounded">潜力特征</span>
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                <span className="font-semibold">【AI诊断演示】</span>：当前展示时长不足，建议在6-15秒黄金段延长UI演示时长至3秒以上，强化视觉显著性。
                            </div>
                            </div>
                        </div>
                        </div>
                    )}

                    {/* Loading State */}
                    {generationStatus === 'loading' && <LoadingState />}
                </>
            ) : (
                <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-base">AI 推荐脚本</h3>
                    <GeneratedScripts />
                </div>
            )}
          </div>
        </div>

        {/* Footer Action - Only show if idle */}
        {generationStatus === 'idle' && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 z-20">
            <button 
                onClick={handleGenerate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg font-medium shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
            >
                <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                生成优化脚本 (LLM)
            </button>
            </div>
        )}
      </div>
    </div>
  );
};

const BatchEditModal = ({ 
  isOpen, 
  onClose, 
  data, 
  onSave 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  data: any[]; 
  onSave: (updatedData: any[]) => void; 
}) => {
  const [localData, setLocalData] = useState(data);

  // Sync with prop when opened
  useEffect(() => {
    if (isOpen) {
        setLocalData(JSON.parse(JSON.stringify(data)));
    }
  }, [isOpen, data]);

  const handleInputChange = (id: string, field: string, value: string) => {
    setLocalData(prev => prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    onSave(localData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-white flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-lg">批量补充素材属性</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Table Area */}
        <div className="flex-1 overflow-auto p-0">
             <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-50 text-gray-700 font-medium sticky top-0 z-10 shadow-sm">
                    <tr>
                        <th className="px-6 py-3 w-20 text-center border-b border-gray-200">排名</th>
                        <th className="px-6 py-3 border-b border-gray-200">视频名称</th>
                        <th className="px-6 py-3 w-40 border-b border-gray-200">导演</th>
                        <th className="px-6 py-3 w-40 border-b border-gray-200">演员</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {localData.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                            <td className="px-6 py-3 text-center text-gray-500">{row.rank}</td>
                            <td className="px-6 py-3 text-gray-900">
                                <div className="line-clamp-1 max-w-md" title={row.name}>{row.name}</div>
                            </td>
                            <td className="px-6 py-2">
                                <input 
                                    type="text" 
                                    value={row.director || ''}
                                    placeholder="请输入"
                                    onChange={(e) => handleInputChange(row.id, 'director', e.target.value)}
                                    className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300"
                                />
                            </td>
                            <td className="px-6 py-2">
                                <input 
                                    type="text" 
                                    value={row.actor || ''}
                                    placeholder="请输入"
                                    onChange={(e) => handleInputChange(row.id, 'actor', e.target.value)}
                                    className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </div>

        {/* Footer Buttons */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50/50">
            <button 
                onClick={onClose}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors text-sm font-medium"
            >
                取消
            </button>
            <button 
                onClick={handleSave}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium"
            >
                保存并生效
            </button>
        </div>
      </div>
    </div>
  );
};

export const MaterialAnalysis: React.FC<{ onNavigateToMaterials: () => void }> = ({ onNavigateToMaterials }) => {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isBatchEditOpen, setIsBatchEditOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);
  const [tableData, setTableData] = useState([
    { id: '1', rank: 1, name: '25120206-抖音S-校企-APP01-视频-情景剧多人-竖版', director: '张三', actor: '李四', score: 95, status: '已优选' },
    { id: '2', rank: 2, name: '25120207-抖音S-校企-APP01-视频-口播单人-横版', director: '王五', actor: '赵六', score: 88, status: '待分析' },
    { id: '3', rank: 3, name: '25120208-抖音S-校企-APP01-视频-混剪-竖版', director: '陈七', actor: '孙八', score: 72, status: '待优化' },
    { id: '4', rank: 4, name: '25120209-抖音S-校企-APP01-视频-特效-竖版', director: '李四', actor: '王五', score: 65, status: '待优化' },
    { id: '5', rank: 5, name: '25120210-抖音S-校企-APP01-视频-剧情-横版', director: '赵六', actor: '陈七', score: 92, status: '已优选' },
  ]);

  const handleAnalysis = (material: any) => {
    setSelectedMaterial(material);
    setIsAnalysisOpen(true);
  };

  const handleBatchEdit = () => {
    setIsBatchEditOpen(true);
  };

  const handleSaveBatchEdit = (updatedData: any[]) => {
    setTableData(prev => prev.map(item => {
        const update = updatedData.find(u => u.id === item.id);
        return update ? { ...item, ...update } : item;
    }));
    setIsBatchEditOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="优质素材数" value="128" tooltip="综合评分超过85分的素材" />
        <MetricCard title="爆量概率" value="35%" tooltip="预估素材成为爆款的概率" />
        <MetricCard title="平均生命周期" value="15天" tooltip="优质素材的平均投放时长" />
        <MetricCard title="素材利用率" value="82%" tooltip="已投放素材/生产总素材" />
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
            <button 
                onClick={handleBatchEdit}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
            >
                <TableIcon className="w-4 h-4" /> 批量补充属性
            </button>
            <div className="h-6 w-px bg-gray-200 mx-1" />
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="搜索素材名称/ID" 
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500 placeholder:text-gray-300"
                />
            </div>
        </div>
        <div className="flex items-center gap-2">
            <button 
                onClick={onNavigateToMaterials}
                className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1"
            >
                返回列表 <ChevronRight className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-200">
                <tr>
                    <th className="p-4 w-20 text-center">排名</th>
                    <th className="p-4">素材名称</th>
                    <th className="p-4 w-32">导演</th>
                    <th className="p-4 w-32">演员</th>
                    <th className="p-4 w-32 text-center">AI评分</th>
                    <th className="p-4 w-32">状态</th>
                    <th className="p-4 w-32 text-center">操作</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-center font-bold text-gray-900">{row.rank}</td>
                        <td className="p-4">
                            <div className="font-medium text-gray-900 mb-1 line-clamp-1">{row.name}</div>
                            <div className="text-xs text-gray-400">ID: {row.id}</div>
                        </td>
                        <td className="p-4">{row.director || '-'}</td>
                        <td className="p-4">{row.actor || '-'}</td>
                        <td className="p-4 text-center">
                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                                row.score >= 90 ? 'bg-green-100 text-green-700' :
                                row.score >= 80 ? 'bg-blue-100 text-blue-700' :
                                'bg-yellow-100 text-yellow-700'
                            }`}>
                                {row.score}
                            </span>
                        </td>
                        <td className="p-4">
                            <div className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                    row.status === '已优选' ? 'bg-green-500' : 
                                    row.status === '待分析' ? 'bg-gray-300' : 'bg-orange-500'
                                }`} />
                                <span>{row.status}</span>
                            </div>
                        </td>
                        <td className="p-4 text-center">
                            <button 
                                onClick={() => handleAnalysis(row)}
                                className="text-blue-600 hover:text-blue-700 font-medium text-xs bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded transition-colors"
                            >
                                AI分析
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      <AnalysisDrawer 
        isOpen={isAnalysisOpen} 
        onClose={() => setIsAnalysisOpen(false)}
        materialName={selectedMaterial?.name}
      />

      <BatchEditModal
        isOpen={isBatchEditOpen}
        onClose={() => setIsBatchEditOpen(false)}
        data={tableData}
        onSave={handleSaveBatchEdit}
      />
    </div>
  );
};
