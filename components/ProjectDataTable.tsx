
import React from 'react';
import { ChevronsUpDown, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface ProjectRow {
  id: string;
  name: string;
  account: string;
  spend: string;
  impressions: number;
  clicks: number;
  ctr: string;
  registrations: number;
  regCost: string;
  regRate: string;
  isTotal?: boolean;
}

interface ProjectDataTableProps {
  onDrillDown?: (name: string) => void;
}

const SortHeader = ({ label }: { label: string }) => (
  <div className="flex items-center justify-end gap-1 cursor-pointer hover:text-gray-900 group">
    <span>{label}</span>
    <ChevronsUpDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
  </div>
);

export const ProjectDataTable: React.FC<ProjectDataTableProps> = ({ onDrillDown }) => {
  const data: ProjectRow[] = [
    {
      id: '',
      name: '',
      account: '-',
      spend: '6289.16',
      impressions: 758831,
      clicks: 25348,
      ctr: '3.34%',
      registrations: 412,
      regCost: '15.26',
      regRate: '1.63%',
      isTotal: true
    },
    {
      id: '7559480096148209...',
      name: '1010-急速智投-搜索',
      account: 'HDP-库课文化科技股份JL03',
      spend: '0.00',
      impressions: 0,
      clicks: 0,
      ctr: '0.00%',
      registrations: 0,
      regCost: '0.00',
      regRate: '0.00%'
    },
    {
      id: '7549132814571765779',
      name: '912-急速智投-搜索',
      account: 'HDP-库课文化科技股份JL03',
      spend: '0.83',
      impressions: 1,
      clicks: 0,
      ctr: '0.00%',
      registrations: 0,
      regCost: '0.00',
      regRate: '0.00%'
    },
    {
      id: '7540198048934674...',
      name: '8月20日-安卓-注册',
      account: 'HDP-库课文化科技股份JL03',
      spend: '479.78',
      impressions: 28459,
      clicks: 860,
      ctr: '3.02%',
      registrations: 15,
      regCost: '31.99',
      regRate: '1.74%'
    },
    {
      id: '7416624107835080...',
      name: '3.20-安卓-注册',
      account: 'HDP-库课文化科技股份JL03',
      spend: '622.31',
      impressions: 16388,
      clicks: 942,
      ctr: '5.75%',
      registrations: 22,
      regCost: '28.29',
      regRate: '2.34%'
    },
    {
      id: '7582878545971494...',
      name: '12-12-智投-ios-搜索',
      account: 'HDP-库课文化科技股份JL01',
      spend: '14.81',
      impressions: 211,
      clicks: 2,
      ctr: '0.95%',
      registrations: 0,
      regCost: '0.00',
      regRate: '0.00%'
    },
    {
      id: '7472592518322552...',
      name: '2.18-ios注册-搜索-年龄-2省',
      account: 'HDP-库课文化科技股份JL01',
      spend: '2.25',
      impressions: 39,
      clicks: 0,
      ctr: '0.00%',
      registrations: 0,
      regCost: '0.00',
      regRate: '0.00%'
    },
    {
      id: '7472323537278091...',
      name: '2.17-ios-注册-行为兴趣_6省',
      account: 'HDP-库课文化科技股份JL01',
      spend: '2.12',
      impressions: 132,
      clicks: 0,
      ctr: '0.00%',
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
          <h2 className="text-base font-semibold text-gray-800">项目数据</h2>
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
              <th className="p-4 min-w-[120px] border-r border-gray-200">项目ID</th>
              <th className="p-4 min-w-[180px] border-r border-gray-200">项目名称</th>
              <th className="p-4 min-w-[180px] border-r border-gray-200">所属推广账户</th>
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
                    <td className="p-4 text-gray-500 border-r border-gray-100">{row.account}</td>
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
                    <td className="p-4 text-gray-500 border-r border-gray-100">{row.account}</td>
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
        <span>共 84 条</span>
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
          <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">9</button>
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
