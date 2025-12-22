
import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  hasDetail?: boolean;
  tooltip?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, hasDetail, tooltip }) => (
  <div className="bg-gray-50/50 p-5 rounded-lg border border-transparent hover:border-gray-100 transition-all">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1.5 group">
        <span className="text-sm text-gray-500">{title}</span>
        {tooltip && (
          <div className="relative">
             <HelpCircle className="w-3.5 h-3.5 text-gray-300 cursor-help group-hover:text-gray-400 transition-colors" />
             <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity z-10">
               {tooltip}
             </div>
          </div>
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

export const DataOverview: React.FC = () => {
  const metrics = [
    { title: '花费(元)', value: '15,080.88', tooltip: '广告总花费' },
    { title: '展现量(次)', value: '1,238,308', tooltip: '广告展示次数' },
    { title: '点击量(次)', value: '33,270', tooltip: '广告点击次数' },
    { title: '点击率', value: '2.68%', tooltip: '点击量/展现量' },
    { title: '注册量(个)', value: '385', tooltip: '注册用户数' },
    { title: '注册成本(元)', value: '39.17', tooltip: '花费/注册量' },
    { title: '注册率', value: '1.16%', tooltip: '注册量/点击量' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-4 bg-blue-600 rounded-full" />
        <h2 className="text-base font-semibold text-gray-800">核心指标</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <MetricCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
};
