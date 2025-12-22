
import React from 'react';
import { HelpCircle } from 'lucide-react';

export const AccountOverview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-4 bg-blue-600 rounded-full" />
        <h2 className="text-base font-semibold text-gray-800">数据概览</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50/50 p-6 rounded-lg">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
            消耗(元) <HelpCircle className="w-3.5 h-3.5 text-gray-300" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">15,080.88</div>
        </div>

        <div className="bg-gray-50/50 p-6 rounded-lg">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
            展示数(次) <HelpCircle className="w-3.5 h-3.5 text-gray-300" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">1,238,308</div>
        </div>

        <div className="bg-gray-50/50 p-6 rounded-lg">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
            点击数(次) <HelpCircle className="w-3.5 h-3.5 text-gray-300" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">33,270</div>
        </div>
      </div>
    </div>
  );
};
