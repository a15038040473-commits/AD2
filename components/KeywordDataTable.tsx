
import React from 'react';
import { ChevronsUpDown, ChevronLeft, ChevronRight, MoreHorizontal, Download, Search } from 'lucide-react';

interface KeywordRow {
  id: string;
  name: string;
  adName: string;
  projectName: string;
  spend: string;
  impressions: number;
  clicks: number;
  ctr: string;
  registrations: number;
  regCost: string;
  regRate: string;
  isTotal?: boolean;
}

const SortHeader = ({ label }: { label: string }) => (
  <div className="flex items-center justify-end gap-1 cursor-pointer hover:text-gray-900 group">
    <span>{label}</span>
    <ChevronsUpDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
  </div>
);

export const KeywordDataTable: React.FC = () => {
  const data: KeywordRow[] = [
    {
       id: 'total',
       name: '合计',
       adName: '-',
       projectName: '-',
       spend: '12500.00',
       impressions: 980000,
       clicks: 24500,
       ctr: '2.50%',
       registrations: 350,
       regCost: '35.71',
       regRate: '1.43%',
       isTotal: true
    },
    {
      id: 'kw1',
      name: '专升本报名条件',
      adName: '10-10-智投-搜索-安卓',
      projectName: '1010-急速智投-搜索',
      spend: '542.00',
      impressions: 48210,
      clicks: 1205,
      ctr: '2.50%',
      registrations: 15,
      regCost: '36.13',
      regRate: '1.24%'
    },
    {
      id: 'kw2',
      name: '成人高考学历提升',
      adName: '10-10-智投-搜索-安卓',
      projectName: '1010-急速智投-搜索',
      spend: '321.50',
      impressions: 21500,
      clicks: 680,
      ctr: '3.16%',
      registrations: 10,
      regCost: '32.15',
      regRate: '1.47%'
    },
    {
      id: 'kw3',
      name: '自考本科需要什么条件',
      adName: '10-10-智投-搜索-安卓',
      projectName: '1010-急速智投-搜索',
      spend: '156.00',
      impressions: 8900,
      clicks: 345,
      ctr: '3.88%',
      registrations: 5,
      regCost: '31.20',
      regRate: '1.45%'
    },
    {
      id: 'kw4',
      name: '库课网校APP下载',
      adName: '10-10-智投-搜索-安卓',
      projectName: '1010-急速智投-搜索',
      spend: '89.00',
      impressions: 1200,
      clicks: 150,
      ctr: '12.50%',
      registrations: 25,
      regCost: '3.56',
      regRate: '16.67%'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
         <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            导出关键词列表
         </button>

         <div className="relative">
            <input 
              type="text" 
              placeholder="请输入关键词名称/ID" 
              className="pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-300"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
         </div>
      </div>
      
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-200">
            <tr>
              <th className="p-4 w-10 text-center border-r border-gray-200">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="p-4 min-w-[200px] border-r border-gray-200">关键词名称</th>
              <th className="p-4 min-w-[180px] border-r border-gray-200">所属广告</th>
              <th className="p-4 min-w-[180px] border-r border-gray-200">所属项目</th>
              <th className="p-4 text-right bg-gray-50 border-r border-gray-200"><SortHeader label="消耗(元)" /></th>
              <th className="p-4 text-right bg-gray-50 border-r border-gray-200"><SortHeader label="展示数" /></th>
              <th className="p-4 text-right bg-gray-50 border-r border-gray-200"><SortHeader label="点击数" /></th>
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
                     <td className="p-4 font-medium text-gray-900 border-r border-gray-100">合计</td>
                     <td className="p-4 border-r border-gray-100">-</td>
                     <td className="p-4 border-r border-gray-100">-</td>
                  </>
                ) : (
                  <>
                    <td className="p-4 border-r border-gray-100 font-medium text-gray-900">
                       {row.name}
                    </td>
                    <td className="p-4 border-r border-gray-100 text-gray-500">{row.adName}</td>
                    <td className="p-4 border-r border-gray-100 text-gray-500">{row.projectName}</td>
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
      
      <div className="flex items-center justify-end gap-3 mt-4 text-sm text-gray-500">
        <span>共 4 条</span>
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
