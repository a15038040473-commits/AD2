
import React from 'react';
import { ChevronsUpDown, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface CreativeRow {
  id: string;
  name: string;
  adGroup: string;
  spend: string;
  impressions: number;
  clicks: number;
  ctr: string;
  registrations: number;
  regCost: string;
  regRate: string;
  isTotal?: boolean;
}

interface CreativeDataTableProps {
  onDrillDown?: (name: string) => void;
}

const SortHeader = ({ label }: { label: string }) => (
  <div className="flex items-center justify-end gap-1 cursor-pointer hover:text-gray-900 group">
    <span>{label}</span>
    <ChevronsUpDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
  </div>
);

export const CreativeDataTable: React.FC<CreativeDataTableProps> = ({ onDrillDown }) => {
  const data: CreativeRow[] = [
    {
      id: '',
      name: '',
      adGroup: '-',
      spend: '6293.13',
      impressions: 758875,
      clicks: 25351,
      ctr: '3.34%',
      registrations: 410,
      regCost: '15.35',
      regRate: '1.62%',
      isTotal: true
    },
    {
      id: '7684708003847111...',
      name: '创意_情景剧_1216',
      adGroup: '1216安卓-注册',
      spend: '24.88',
      impressions: 2368,
      clicks: 46,
      ctr: '1.94%',
      registrations: 1,
      regCost: '24.88',
      regRate: '2.17%'
    },
    {
      id: '7673969484484222...',
      name: '创意_口播_1018',
      adGroup: '10.18-安卓-注册',
      spend: '160.79',
      impressions: 3478,
      clicks: 232,
      ctr: '6.67%',
      registrations: 5,
      regCost: '32.16',
      regRate: '2.16%'
    },
    {
      id: '7671731948360333...',
      name: '创意_混剪_1112',
      adGroup: '1112-安卓-注册',
      spend: '51.09',
      impressions: 10748,
      clicks: 177,
      ctr: '1.65%',
      registrations: 2,
      regCost: '25.55',
      regRate: '1.13%'
    },
    {
      id: '7659891304857444...',
      name: '创意_图文_1008',
      adGroup: '10.8-安卓-注册',
      spend: '17.16',
      impressions: 572,
      clicks: 28,
      ctr: '4.90%',
      registrations: 0,
      regCost: '0.00',
      regRate: '0.00%'
    },
    {
      id: '7653536375143555...',
      name: '创意_真人口播_922',
      adGroup: '9.22-安卓-注册',
      spend: '214.10',
      impressions: 11263,
      clicks: 376,
      ctr: '3.34%',
      registrations: 8,
      regCost: '26.76',
      regRate: '2.13%'
    },
    {
      id: '7649089012658666...',
      name: '创意_单人_912',
      adGroup: '9.12-安卓-注册',
      spend: '11.76',
      impressions: 30,
      clicks: 1,
      ctr: '3.33%',
      registrations: 0,
      regCost: '0.00',
      regRate: '0.00%'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-blue-600 rounded-full" />
          <h2 className="text-base font-semibold text-gray-800">创意数据</h2>
        </div>
      </div>

      <div className="mb-4">
        <button className="px-4 py-1.5 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          导出
        </button>
      </div>
      
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-200">
            <tr>
              <th className="p-4 w-10 text-center border-r border-gray-200">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="p-4 min-w-[140px] border-r border-gray-200">创意ID</th>
              <th className="p-4 min-w-[180px] border-r border-gray-200">创意名称</th>
              <th className="p-4 min-w-[180px] border-r border-gray-200">所属广告</th>
              <th className="p-4 text-right bg-gray-50 border-r border-gray-200"><SortHeader label="花费(元)" /></th>
              <th className="p-4 text-right bg-gray-50 border-r border-gray-200"><SortHeader label="展现量" /></th>
              <th className="p-4 text-right bg-gray-50 border-r border-gray-200"><SortHeader label="点击量" /></th>
              <th className="p-4 text-right border-r border-gray-200">点击率</th>
              <th className="p-4 text-right border-r border-gray-200">注册量</th>
              <th className="p-4 text-right border-r border-gray-200">注册成本</th>
              <th className="p-4 text-right">注册率</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-center border-r border-gray-100">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                </td>
                
                {row.isTotal ? (
                  <>
                    <td className="p-4 border-r border-gray-100"></td>
                    <td className="p-4 font-medium text-gray-900 border-r border-gray-100">合计</td>
                    <td className="p-4 text-gray-500 border-r border-gray-100">{row.adGroup}</td>
                  </>
                ) : (
                  <>
                    <td className="p-4 text-gray-500 border-r border-gray-100 font-mono text-xs">{row.id}</td>
                    <td className="p-4 border-r border-gray-100">
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); onDrillDown && onDrillDown(row.name); }}
                        className="text-blue-600 hover:underline"
                      >
                        {row.name}
                      </a>
                    </td>
                    <td className="p-4 text-gray-500 border-r border-gray-100">{row.adGroup}</td>
                  </>
                )}
                
                <td className="p-4 text-right font-medium text-gray-700 bg-gray-50/30 border-r border-gray-100">{row.spend}</td>
                <td className="p-4 text-right text-gray-600 bg-gray-50/30 border-r border-gray-100">{row.impressions.toLocaleString()}</td>
                <td className="p-4 text-right text-gray-600 bg-gray-50/30 border-r border-gray-100">{row.clicks.toLocaleString()}</td>
                <td className="p-4 text-right text-gray-600 border-r border-gray-100">{row.ctr}</td>
                <td className="p-4 text-right text-gray-600 border-r border-gray-100">{row.registrations}</td>
                <td className="p-4 text-right text-gray-600 border-r border-gray-100">{row.regCost}</td>
                <td className="p-4 text-right text-gray-600">{row.regRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-3 mt-4 text-sm text-gray-500">
        <span>共 160 条</span>
        <select className="border border-gray-200 rounded px-2 py-1 bg-white">
          <option>10条/页</option>
          <option>20条/页</option>
          <option>50条/页</option>
        </select>
        
        <div className="flex items-center gap-1">
          <button className="p-1 border border-gray-200 rounded bg-gray-50 text-gray-300 disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded border border-blue-600">1</button>
          <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">4</button>
          <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">5</button>
          <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">6</button>
          <span className="px-1"><MoreHorizontal className="w-4 h-4" /></span>
          <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">16</button>
          <button className="p-1 border border-gray-200 rounded hover:bg-gray-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 ml-2">
          <span>前往</span>
          <input type="text" defaultValue="1" className="w-12 border border-gray-200 rounded px-2 py-1 text-center" />
          <span>页</span>
        </div>
      </div>
    </div>
  );
};
