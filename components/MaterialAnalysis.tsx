
import React from 'react';
import { 
  Search, 
  Calendar, 
  HelpCircle, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Zap,
  Sparkles,
  Image as ImageIcon,
  Play
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

const AttributeCard = ({ title, tags, color }: { title: string, tags: {label: string, pct: string}[], color: 'blue' | 'green' | 'purple' | 'yellow' | 'pink' }) => {
  const colorStyles = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    pink: 'bg-pink-50 text-pink-600 border-pink-100',
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className={`text-xs px-2.5 py-1 rounded border ${colorStyles[color]}`}>
            {tag.label} ({tag.pct})
          </span>
        ))}
      </div>
    </div>
  );
};

export const MaterialAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {['全部人员', '全部渠道', '全部平台', '全部平台'].map((label, i) => (
          <div key={i} className="relative group">
            <select className="appearance-none bg-white border border-gray-200 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-blue-500 min-w-[140px]">
              <option>{label}</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600">
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        ))}

        <div className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 hover:border-gray-300 cursor-pointer bg-white">
          <span>2023-10-01 至 2023-10-07</span>
          <Calendar className="w-4 h-4 text-gray-400" />
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
            <h3 className="font-semibold text-gray-800">爆款视频TOP10</h3>
            <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">数据处理规则为"按照素材名称相同的视频在不同平台同指标数据直接相加"</span>
          </div>
          <button className="text-sm bg-[#0EA5E9] text-white px-4 py-1.5 rounded hover:bg-[#0284c7] transition-colors">
            更多素材数据
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-medium text-center w-16">排名</th>
                <th className="px-6 py-4 font-medium w-24">素材预览</th>
                <th className="px-6 py-4 font-medium">视频名称/ID</th>
                <th className="px-4 py-4 font-medium text-right">消耗(元)</th>
                <th className="px-4 py-4 font-medium text-right">展现量</th>
                <th className="px-4 py-4 font-medium text-right">点击量</th>
                <th className="px-4 py-4 font-medium text-right">点击率</th>
                <th className="px-4 py-4 font-medium text-right">注册数</th>
                <th className="px-4 py-4 font-medium text-right">注册成本</th>
                <th className="px-4 py-4 font-medium text-right">综合得分</th>
                <th className="px-6 py-4 font-medium">平台分布</th>
                <th className="px-6 py-4 font-medium text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3, 4].map((rank) => (
                <tr key={rank} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-center font-medium text-gray-700">{rank}</td>
                  <td className="px-6 py-4">
                    <div className="w-16 h-16 bg-gray-100 rounded border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                      <span className="text-[10px] mb-1">封面</span>
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 max-w-xs">
                      <div className="font-medium text-gray-900 line-clamp-2">
                        {rank === 1 && "25120206-抖音S-校企-APP01-视频-情景剧多人-竖版-20753"}
                        {rank === 2 && "25120901-抖音S-校企-APP01-视频-情景剧多人-横版-20754"}
                        {rank === 3 && "25120903-抖音S-校企-APP01-视频-真人口播单人-横版-20755"}
                        {rank === 4 && "25121501-抖音S-新媒体-APP01-视频-情景剧多人-横版-20777"}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>ID: 8782738172387{rank}</span>
                        {rank <= 3 && <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px]">优质素材</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-600">{rank === 4 ? '31832.09' : rank === 3 ? '3392.07' : '58824.06'}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{rank === 4 ? '531899' : rank === 3 ? '402030' : '3394601'}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{rank === 4 ? '764' : '3190'}</td>
                  <td className="px-4 py-4 text-right text-gray-600">0.{95 - rank * 10}%</td>
                  <td className="px-4 py-4 text-right text-gray-600">{1596 - rank * 100}</td>
                  <td className="px-4 py-4 text-right text-gray-600">{36.86 + rank}</td>
                  <td className="px-4 py-4 text-right text-gray-900 font-medium">{92.5 - rank * 2}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-[10px] text-gray-500 w-24">
                       <div className="flex justify-between"><span>抖音</span><span>{50+rank}%</span></div>
                       <div className="flex justify-between"><span>快手</span><span>{20+rank}%</span></div>
                       <div className="flex justify-between"><span>百度</span><span>10%</span></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 px-3 py-1.5 rounded text-xs font-medium transition-colors">
                      AI 智能分析
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Feature Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-3">
             <div className="p-2 bg-blue-50 rounded-lg">
                <Layers className="w-5 h-5 text-blue-600" />
             </div>
             <div>
               <h3 className="font-semibold text-gray-900 text-lg">Top 20% 素材特征归因</h3>
               <p className="text-sm text-gray-500 mt-1">AI已自动拆解为10类核心标签，以下为TOP素材关键维度分析</p>
             </div>
          </div>
          <Layers className="w-24 h-24 text-gray-50 opacity-50" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AttributeCard 
            title="拍摄方式" 
            color="blue"
            tags={[{label:'剧情', pct:'85%'}, {label:'口播', pct:'62%'}, {label:'对比测评', pct:'45%'}]} 
          />
          <AttributeCard 
            title="开头类型" 
            color="green"
            tags={[{label:'冲突场景', pct:'92%'}, {label:'产品展示', pct:'68%'}, {label:'问题提问', pct:'55%'}]} 
          />
          <AttributeCard 
            title="核心卖点方向" 
            color="purple"
            tags={[{label:'AI诊断', pct:'88%'}, {label:'个性化辅导', pct:'75%'}, {label:'效率提升', pct:'62%'}]} 
          />
          <AttributeCard 
            title="场景设置" 
            color="yellow"
            tags={[{label:'真实家庭场景', pct:'95%'}, {label:'书桌学习环境', pct:'82%'}, {label:'客厅互动场景', pct:'65%'}]} 
          />
          <AttributeCard 
            title="演员类型" 
            color="pink"
            tags={[{label:'真实学生', pct:'90%'}, {label:'家长角色', pct:'78%'}, {label:'老师角色', pct:'52%'}]} 
          />
           <AttributeCard 
            title="视频节奏" 
            color="blue"
            tags={[{label:'30秒闭环', pct:'85%'}, {label:'快速转场', pct:'68%'}, {label:'渐进式展开', pct:'58%'}]} 
          />
        </div>
      </div>

      {/* AI Strategy */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 text-lg mb-6">AI 策略建议 (基于全网数据加权)</h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex gap-4 p-4 rounded-lg bg-green-50/50 border border-green-100">
            <div className="mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">优先复刻: 【真实家庭场景 + 冲突开头】组合</h4>
              <p className="text-sm text-gray-600">历史数据显示，此类素材在全平台CTR平均超 8%。请务必在脚本前3秒展示"孩子皱眉做题"或"家长叹气"画面。</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-lg bg-red-50/50 border border-red-100">
            <div className="mt-0.5">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">规避元素: 【纯口播 + 老师角色】</h4>
              <p className="text-sm text-gray-600">数据显示"老师角色"仅有52%的转化表现，且"纯口播"形式完播率低。建议替换为家长视角的真实记录风格。</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
            <div className="mt-0.5">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">核心卖点强化: AI诊断</h4>
              <p className="text-sm text-gray-600">包含"AI扫描诊断"过程的素材转化率高达88%。请确保视频中间段（6-15秒）清晰展示APP扫描作业并出具报告的UI界面。</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-400">上次自动计算: 今日 04:00 AM</span>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-600/20">
            <Sparkles className="w-4 h-4" />
            生成下周拍摄策略
          </button>
        </div>
      </div>
    </div>
  );
};
