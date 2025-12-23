
import React, { useState } from 'react';
import { Image as ImageIcon, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { KeywordDataTable } from './KeywordDataTable';

interface MaterialRow {
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
  thumbnailUrl?: string;
  isSummary?: boolean;
}

const MaterialDataTable: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'creative' | 'keyword'>('creative');

  const data: MaterialRow[] = [
    {
      id: '',
      name: '-',
      adName: '-',
      projectName: '-',
      spend: '150.80',
      impressions: 12383,
      clicks: 332,
      ctr: '2.68%',
      registrations: 4,
      regCost: '37.70',
      regRate: '1.20%',
      isSummary: true
    },
    {
      name: '25120206-抖音S-校企-APP01-视频-情景剧多人-竖版-20753',
      id: '7559479044947345408',
      adName: '10-10-智投-搜索-安卓',
      projectName: '1010-急速智投-搜索',
      spend: '54.20',
      impressions: 4821,
      clicks: 120,
      ctr: '2.49%',
      registrations: 2,
      regCost: '27.10',
      regRate: '1.66%'
    },
    {
      name: '25120903-抖音S-校企-APP01-视频-真人口播单人-横版-20755',
      id: '7559479032039964691',
      adName: '10-10-智投-搜索-安卓',
      projectName: '1010-急速智投-搜索',
      spend: '32.15',
      impressions: 2150,
      clicks: 68,
      ctr: '3.16%',
      registrations: 1,
      regCost: '32.15',
      regRate: '1.47%'
    },
    {
      name: '25120906-抖音S-校企-APP01-视频-真人口播单人-竖版-20756',
      id: '7559479024260120595',
      adName: '10-10-智投-搜索-安卓',
      projectName: '1010-急速智投-搜索',
      spend: '64.45',
      impressions: 5412,
      clicks: 144,
      ctr: '2.66%',
      registrations: 1,
      regCost: '64.45',
      regRate: '0.69%'
    }
  ];

  return (
    <div className="mt-8">
      {/* Sub-tabs */}
      <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
         <button 
           onClick={() => setActiveSubTab('creative')}
           className={`pb-3 text-sm font-medium transition-all relative ${
             activeSubTab === 'creative' 
               ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
               : 'text-gray-500 hover:text-gray-700'
           }`}
         >
           视频/图文
         </button>
         <button 
           onClick={() => setActiveSubTab('keyword')}
           className={`pb-3 text-sm font-medium transition-all relative ${
             activeSubTab === 'keyword' 
               ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
               : 'text-gray-500 hover:text-gray-700'
           }`}
         >
           关键词
         </button>
      </div>

      {activeSubTab === 'keyword' ? (
        <KeywordDataTable />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">素材数据</h2>
          
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-200">
                <tr>
                  <th className="p-4 w-10 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </th>
                  <th className="p-4 w-24">素材预览</th>
                  <th className="p-4 min-w-[240px]">素材名称/ID</th>
                  <th className="p-4 min-w-[160px]">所属广告</th>
                  <th className="p-4 min-w-[160px]">所属项目</th>
                  <th className="p-4 text-right bg-gray-50">花费(元)</th>
                  <th className="p-4 text-right bg-gray-50">展现量</th>
                  <th className="p-4 text-right bg-gray-50">点击量</th>
                  <th className="p-4 text-right border-l border-gray-200">点击率</th>
                  <th className="p-4 text-right border-l border-gray-200">注册量</th>
                  <th className="p-4 text-right border-l border-gray-200">注册成本</th>
                  <th className="p-4 text-right border-l border-gray-200">注册率</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.map((row, index) => (
                  <tr key={index} className={`hover:bg-gray-50 transition-colors ${row.isSummary ? 'bg-gray-50/30' : ''}`}>
                    <td className="p-4 text-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </td>
                    
                    {row.isSummary ? (
                      <>
                        <td className="p-4 text-gray-900 font-medium whitespace-nowrap" colSpan={1}>
                          总计 {data.length - 1} 条数据
                        </td>
                        <td className="p-4 font-medium">-</td>
                        <td className="p-4 text-gray-500">-</td>
                        <td className="p-4 text-gray-500">-</td>
                      </>
                    ) : (
                      <>
                        <td className="p-4">
                          <div className="w-20 h-12 bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden relative group cursor-pointer">
                            {/* Placeholder for thumbnail */}
                            <ImageIcon className="w-5 h-5 text-gray-400" />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-gray-900 font-medium line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors" title={row.name}>
                              {row.name}
                            </span>
                            <span className="text-xs text-gray-400 font-mono">ID: {row.id}</span>
                          </div>
                        </td>
                        <td className="p-4 text-gray-600">{row.adName}</td>
                        <td className="p-4 text-gray-600">{row.projectName}</td>
                      </>
                    )}
                    
                    <td className="p-4 text-right font-medium text-gray-700 bg-gray-50/30">{row.spend}</td>
                    <td className="p-4 text-right text-gray-600 bg-gray-50/30">{row.impressions.toLocaleString()}</td>
                    <td className="p-4 text-right text-gray-600 bg-gray-50/30">{row.clicks.toLocaleString()}</td>
                    <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.ctr}</td>
                    <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.registrations}</td>
                    <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.regCost}</td>
                    <td className="p-4 text-right text-gray-600 border-l border-gray-100">{row.regRate}</td>
                  </tr>
                ))}
                <tr>
                    <td className="p-4 text-center"><input type="checkbox" className="rounded border-gray-300" /></td>
                    <td className="p-4 border-l border-transparent"></td>
                    <td className="p-4 border-l border-transparent"></td>
                    <td className="p-4 border-l border-transparent"></td>
                    <td className="p-4 border-l border-transparent"></td>
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
      )}
    </div>
  );
};

export default MaterialDataTable;
