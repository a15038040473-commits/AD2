
import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  RotateCcw, 
  Download, 
  LayoutGrid, 
  List, 
  BarChart2, 
  HelpCircle,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Info,
  ChevronRight
} from 'lucide-react';

// --- Types & Interfaces ---

interface MetricItem {
  title: string;
  value: string;
  subValue?: string; // For things like "订单金额>=90"
  trend: number; // percentage, positive or negative
  trendLabel?: string; // "环比"
  hasDetail?: boolean;
  tooltip?: string;
  prefix?: string;
  suffix?: string;
}

interface TableRow {
  id: string;
  name: string; // 负责人 or 渠道名称
  cashSpend: string;
  accountSpend: string;
  impressions: string;
  clicks: string;
  leads: string;
  keyLeads: string;
  orders: string;
  currentSales: string;
  totalSales: string;
  isTotal?: boolean;
}

// --- Components ---

const DashboardMetricCard: React.FC<{ item: MetricItem }> = ({ item }) => {
  const isPositive = item.trend >= 0;
  const isZero = item.trend === 0; // Special case if needed
  // Industry standard: Green for Up (Good/Growth) or Red for Up? 
  // In China stock market: Red = Up, Green = Down. 
  // In generic UI: Green = Good, Red = Bad.
  // Based on description "环比: -94.83% (Red)", assuming Red is for negative/drop here for simplicity, 
  // or sticking to the user's visual cues. Let's use Red for negative trends (drops) as is common in western dashboards 
  // unless specified otherwise. However, usually "Sales dropping" is bad (Red).
  
  const trendColor = item.trend < 0 ? 'text-red-500' : 'text-gray-400';
  const TrendIcon = item.trend < 0 ? ArrowDown : ArrowUp;

  return (
    <div className="bg-gray-50/50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-all hover:shadow-sm hover:bg-white">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 group">
          <span className="text-sm text-gray-600 font-medium">{item.title}</span>
          {item.subValue && <span className="text-xs text-gray-400">{item.subValue}</span>}
          {item.tooltip && (
            <HelpCircle className="w-3.5 h-3.5 text-gray-300 cursor-help group-hover:text-gray-400" />
          )}
        </div>
        {item.hasDetail && (
          <div className="flex items-center text-xs text-blue-600 cursor-pointer hover:underline">
            详情 <ChevronRight className="w-3 h-3" />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          {item.value}
        </div>
        
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-400">{item.trendLabel || '环比'}:</span>
          <div className={`flex items-center ${trendColor} font-medium`}>
            {Math.abs(item.trend)}%
            {item.trend !== 0 && <TrendIcon className="w-3 h-3 ml-0.5" />}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterDropdown = ({ label }: { label: string }) => (
  <div className="relative group">
    <button className="flex items-center justify-between w-32 px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-200 rounded-md hover:border-blue-500 hover:text-blue-600 transition-colors">
      <span>{label}</span>
      <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500" />
    </button>
  </div>
);

export const PromotionDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('人员数据');
  const [viewMode, setViewMode] = useState<'tabs' | 'tile'>('tabs');

  // Mock Data
  const metrics: MetricItem[] = [
    { title: '现金消费', value: '12.3W', trend: 94.83, tooltip: '实际花费现金' },
    { title: '账户消费', value: '10W', trend: 94.83, tooltip: '账户扣费金额' },
    { title: '线索总量', value: '10W', trend: 94.83, hasDetail: true, tooltip: '所有渠道线索总和' },
    { title: '重点线索量', value: '10W', trend: 94.83, tooltip: '被标记为重点的线索' },
    { title: '订单总量', value: '10W', trend: 94.83, hasDetail: true },
    { title: '销售额', subValue: '订单金额≥90', value: '9,988.8W', trend: -94.83, tooltip: '有效订单金额' },
    { title: '线索成本', value: '9.9', trend: 94.83 },
    { title: '当前转率', value: '9.9%', trend: 94.83 },
    { title: '销转率', value: '9.9%', trend: 94.83 },
    { title: 'ROI', value: '0', trend: -100, tooltip: '投入产出比' },
    { title: '订单金额', value: '9,988.8W', trend: -94.83 },
  ];

  const tableData: TableRow[] = [
    {
      id: 'total',
      name: '合计',
      cashSpend: '3,000.00',
      accountSpend: '3,000.00',
      impressions: '3,000',
      clicks: '3,000',
      leads: '3,000',
      keyLeads: '3,000',
      orders: '3,000',
      currentSales: '3,000',
      totalSales: '3,000',
      isTotal: true
    },
    {
      id: '1',
      name: activeTab === '人员数据' ? '张三三' : 'ASO',
      cashSpend: '3,000.00',
      accountSpend: '3,000.00',
      impressions: '3,000',
      clicks: '3,000',
      leads: '3,000',
      keyLeads: '3,000',
      orders: '3,000',
      currentSales: '3,000',
      totalSales: '3,000'
    },
    {
      id: '2',
      name: activeTab === '人员数据' ? '李四四' : '信息流',
      cashSpend: '3,000.00',
      accountSpend: '3,000.00',
      impressions: '3,000',
      clicks: '3,000',
      leads: '3,000',
      keyLeads: '3,000',
      orders: '3,000',
      currentSales: '3,000',
      totalSales: '3,000'
    },
    {
      id: '3',
      name: activeTab === '人员数据' ? '王五五' : 'SEM',
      cashSpend: '3,000.00',
      accountSpend: '3,000.00',
      impressions: '3,000',
      clicks: '3,000',
      leads: '3,000',
      keyLeads: '3,000',
      orders: '3,000',
      currentSales: '3,000',
      totalSales: '3,000'
    }
  ];

  const tabs = [
    '人员数据', '渠道数据', '平台数据', '账户数据', 
    '省份数据', '产品数据', '设备数据', '链路数据'
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Top Controls: View Mode */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-gray-900">推广看板</div>
        <div className="bg-white border border-gray-200 rounded-lg p-1 flex text-sm">
          <button 
            onClick={() => setViewMode('tabs')}
            className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all ${
              viewMode === 'tabs' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LayoutGrid className="w-4 h-4" /> tabs查看模式
          </button>
          <div className="w-px bg-gray-200 my-1 mx-1"></div>
          <button 
             onClick={() => setViewMode('tile')}
             className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all ${
              viewMode === 'tile' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <List className="w-4 h-4" /> 平铺查看模式
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <FilterDropdown label="全部人员" />
          <FilterDropdown label="全部渠道" />
          <FilterDropdown label="全部平台" />
          <FilterDropdown label="全部账户" />
          <FilterDropdown label="全部省份" />
          
          <div className="flex items-center gap-2 ml-auto">
             <div className="flex items-center border border-gray-200 rounded-md bg-white px-3 py-1.5 text-sm hover:border-blue-500 transition-colors cursor-pointer">
                <span>2023-10-01 至 2023-10-07</span>
                <Calendar className="w-4 h-4 ml-2 text-gray-400" />
             </div>
             
             <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 border-gray-300" defaultChecked />
                <span>比较</span>
             </label>

             <div className="flex items-center border border-gray-200 rounded-md bg-white px-3 py-1.5 text-sm text-gray-400 cursor-not-allowed">
                <span>2023-11-01 至 2023-11-07</span>
             </div>

             <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ml-2">
                <Search className="w-4 h-4" /> 查询
             </button>
             <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-5 py-1.5 rounded-md text-sm font-medium transition-colors">
                重置
             </button>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
           <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
           <h3 className="font-bold text-gray-900">数据统计</h3>
           <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
             当前数据更新截止到2025-06-15 10:30:13，数据半小时更新一次
           </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {metrics.map((item, idx) => (
            <DashboardMetricCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* Tabs & Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Tab Header */}
        <div className="border-b border-gray-100">
           <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                    activeTab === tab 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
           </div>
        </div>

        {/* Table Controls */}
        <div className="p-4 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                 <Download className="w-4 h-4" /> 导出
              </button>
              <div className="text-sm text-gray-500">
                 已选择 <span className="text-blue-600 font-bold">2</span> 个
                 <button className="ml-2 text-blue-600 hover:underline">清空</button>
              </div>
           </div>
           
           <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg">
              <button className="p-1.5 rounded hover:bg-white hover:shadow-sm text-blue-600 bg-white shadow-sm transition-all">
                 <List className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded hover:bg-white hover:shadow-sm text-gray-400 transition-all">
                 <BarChart2 className="w-4 h-4" />
              </button>
           </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-200">
              <tr>
                <th className="p-4 w-10 text-center border-r border-gray-200">
                   <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="p-4 min-w-[150px] border-r border-gray-200">
                    {activeTab === '人员数据' ? '负责人' : '名称'}
                </th>
                <th className="p-4 text-right bg-gray-50 border-r border-gray-200">现金消费(元) <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right bg-gray-50 border-r border-gray-200">账户消费(元) <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right border-r border-gray-200">展现量 <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right border-r border-gray-200">点击量 <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right border-r border-gray-200">线索总量 <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right border-r border-gray-200">重点线索量 <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right border-r border-gray-200">订单量 <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right border-r border-gray-200">当前销售额(元) <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
                <th className="p-4 text-right">销售额 <HelpCircle className="inline w-3 h-3 text-gray-300 mb-0.5" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableData.map((row) => (
                <tr key={row.id} className={`hover:bg-gray-50 transition-colors ${row.isTotal ? 'font-bold bg-gray-50/30' : ''}`}>
                  <td className="p-4 text-center border-r border-gray-100">
                     <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td className="p-4 text-gray-900 border-r border-gray-100">
                     {row.isTotal ? '合计' : <span className="text-blue-600 cursor-pointer hover:underline">{row.name}</span>}
                  </td>
                  <td className="p-4 text-right border-r border-gray-100">{row.cashSpend}</td>
                  <td className="p-4 text-right border-r border-gray-100">{row.accountSpend}</td>
                  <td className="p-4 text-right border-r border-gray-100">{row.impressions}</td>
                  <td className="p-4 text-right border-r border-gray-100">{row.clicks}</td>
                  <td className="p-4 text-right border-r border-gray-100">{row.leads}</td>
                  <td className="p-4 text-right border-r border-gray-100">{row.keyLeads}</td>
                  <td className="p-4 text-right border-r border-gray-100">{row.orders}</td>
                  <td className="p-4 text-right border-r border-gray-100">{row.currentSales}</td>
                  <td className="p-4 text-right">{row.totalSales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Simple Pagination Footer for Visual Completeness */}
        <div className="p-4 border-t border-gray-100 flex justify-end text-xs text-gray-500">
            共 {tableData.length} 条数据
        </div>
      </div>

    </div>
  );
};
