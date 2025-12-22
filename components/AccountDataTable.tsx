
import React from 'react';
import { ChevronsUpDown } from 'lucide-react';

interface AccountRow {
  id?: string;
  name: string;
  platform: string;
  spend: string;
  impressions: number;
  clicks: number;
  ctr: string;
  registrations: number;
  regCost: string;
  regRate: string;
  isTotal?: boolean;
}

interface AccountDataTableProps {
  onDrillDown?: (name: string) => void;
}

const SortHeader = ({ label }: { label: string }) => (
  <div className="flex items-center justify-end gap-1 cursor-pointer hover:text-gray-900 group">
    <span>{label}</span>
    <ChevronsUpDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
  </div>
);

export const AccountDataTable: React.FC<AccountDataTableProps> = ({ onDrillDown }) => {
  const data: AccountRow[] = [
    {
      name: '合计',
      platform: '-',
      spend: '15080.88',
      impressions: 1238308,
      clicks: 33270,
      ctr: '2.68%',
      registrations: 385,
      regCost: '39.17',
      regRate: '1.16%',
      isTotal: true
    },
    {
      id: '1764025427351565',
      name: 'jxzz-库课文化-ZJ主户',
      platform: '巨量引擎',
      spend: '0.00',
      impressions: 0,
      clicks: 0,
      ctr: '0.00%',
      registrations: 0,
      regCost: '0.00',
      regRate: '0.00%'
    },
    {
      id: '1764960362668126',
      name: 'jxzz-库课文化-ZJ1',
      platform: '巨量引擎',
      spend: '1988.68',
      impressions: 16369,
      clicks: 463,
      ctr: '2.83%',
      registrations: 12,
      regCost: '165.72',
      regRate: '2.59%'
    },
    {
      id: '1764960362668129',
      name: 'jxzz-库课文化-ZJ2',
      platform: '巨量引擎',
      spend: '5420.50',
      impressions: 48210,
      clicks: 1205,
      ctr: '2.50%',
      registrations: 85,
      regCost: '63.77',
      regRate: '7.05%'
    },
    {
      id: '1764960362668133',
      name: 'jxzz-库课文化-ZJ3',
      platform: '腾讯广告',
      spend: '7671.70',
      impressions: 1173729,
      clicks: 31602,
      ctr: '2.69%',
      registrations: 288,
      regCost: '26.63',
      regRate: '0.91%'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-blue-600 rounded-full" />
          <h2 className="text-base font-semibold text-gray-800">账户数据</h2>
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
              <th className="p-4 min-w-[160px] border-r border-gray-200">账户ID</th>
              <th className="p-4 min-w-[180px] border-r border-gray-200">账户名称</th>
              <th className="p-4 min-w-[100px]">所属平台</th>
              <th className="p-4 text-right bg-gray-50"><SortHeader label="花费(元)" /></th>
              <th className="p-4 text-right bg-gray-50"><SortHeader label="展现量" /></th>
              <th className="p-4 text-right bg-gray-50"><SortHeader label="点击量" /></th>
              <th className="p-4 text-right border-l border-gray-200">点击率</th>
              <th className="p-4 text-right border-l border-gray-200">注册量</th>
              <th className="p-4 text-right border-l border-gray-200">注册成本</th>
              <th className="p-4 text-right border-l border-gray-200">注册率</th>
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
                  </>
                ) : (
                  <>
                    <td className="p-4 text-gray-500 border-r border-gray-100">{row.id}</td>
                    <td className="p-4 border-r border-gray-100">
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); onDrillDown && onDrillDown(row.name); }}
                        className="text-blue-600 hover:underline"
                      >
                        {row.name}
                      </a>
                    </td>
                  </>
                )}
                
                <td className="p-4 text-gray-600">{row.platform}</td>
                <td className="p-4 text-right font-medium text-gray-700 bg-gray-50/30">{row.spend}</td>
                <td className="p-4 text-right text-gray-600 bg-gray-50/30">{row.impressions.toLocaleString()}</td>
                <td className="p-4 text-right text-gray-600 bg-gray-50/30">{row.clicks.toLocaleString()}</td>
                <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.ctr}</td>
                <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.registrations}</td>
                <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.regCost}</td>
                <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.regRate}</td>
              </tr>
            ))}
            {/* Empty rows to simulate table height */}
            <tr>
              <td className="p-4 border-r border-gray-100 text-center"><input type="checkbox" className="rounded border-gray-300" /></td>
              <td className="p-4 border-r border-gray-100"></td>
              <td className="p-4 border-r border-gray-100"></td>
              <td className="p-4"></td>
              <td className="p-4 bg-gray-50/30"></td>
              <td className="p-4 bg-gray-50/30"></td>
              <td className="p-4 bg-gray-50/30"></td>
              <td className="p-4 border-l border-gray-100"></td>
              <td className="p-4 border-l border-gray-100"></td>
              <td className="p-4 border-l border-gray-100"></td>
              <td className="p-4 border-l border-gray-100"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
