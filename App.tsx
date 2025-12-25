
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DataOverview } from './components/DataOverview';
import { AccountDataTable } from './components/AccountDataTable';
import { ProjectDataTable } from './components/ProjectDataTable';
import { AdGroupDataTable } from './components/AdGroupDataTable';
import { CreativeDataTable } from './components/CreativeDataTable';
import { MaterialAnalysis } from './components/MaterialAnalysis';
import { PromotionDashboard } from './components/PromotionDashboard';
import MaterialDataTable from './components/MaterialDataTable';
import { Search, Calendar, HelpCircle, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('广告投放看板');
  const [activeTab, setActiveTab] = useState('账户');
  const [searchText, setSearchText] = useState('');

  // Handle drill down: Account -> Project -> Ad -> Creative -> Material
  const handleDrillDown = (currentLevel: string, name: string) => {
    setSearchText(name); // Optional: simulate filtering by setting search text
    if (currentLevel === '账户') {
      setActiveTab('项目');
    } else if (currentLevel === '项目') {
      setActiveTab('广告');
    } else if (currentLevel === '广告') {
      setActiveTab('创意');
    } else if (currentLevel === '创意') {
      setActiveTab('素材');
    }
  };

  return (
    <div className="flex h-screen bg-white text-gray-900 font-sans">
      <Sidebar activeItem={activePage} onNavigate={setActivePage} />
      
      <main className="flex-1 overflow-y-auto bg-white p-6 custom-scrollbar">
        {activePage === '推广看板' ? (
          <PromotionDashboard />
        ) : activePage === '素材分析看板' ? (
          <>
            {/* Header section for Material Analysis */}
            <div className="flex justify-between items-center mb-6">
               <h1 className="text-xl font-semibold text-gray-900">{activePage}</h1>
               <div className="text-xs text-gray-400">最后更新：2024-11-11 14:30</div>
            </div>
            <MaterialAnalysis onNavigateToMaterials={() => {
              setActivePage('广告投放看板');
              setActiveTab('素材');
            }} />
          </>
        ) : (
          /* Default/Ad Delivery Dashboard View */
          <>
            {/* Header section */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold text-gray-900">{activePage}</h1>
              <div className="text-xs text-gray-400">最后更新：2024-11-11 14:30</div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="relative group">
                <select className="appearance-none bg-white border border-gray-200 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-blue-500 w-48">
                  <option>全部人员</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>

              <div className="relative group">
                <select className="appearance-none bg-white border border-gray-200 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-blue-500 w-48">
                  <option>全部渠道</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>

              <div className="relative group">
                <select className="appearance-none bg-white border border-gray-200 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-blue-500 w-48">
                  <option>全部平台</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>

              <div className="relative group">
                <select className="appearance-none bg-white border border-gray-200 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-blue-500 w-48">
                  <option>全部账户</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>

              <div className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 hover:border-gray-300 cursor-pointer">
                <span className="text-gray-400">2023-10-01 至 2023-10-07</span>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>

              <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1.5">
                <Search className="w-4 h-4" />
                查询
              </button>
              <button className="border border-gray-200 text-gray-600 px-6 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                重置
              </button>
            </div>

            {/* Tab Selection */}
            <div className="flex items-center justify-between border-b border-gray-100 mb-6">
              <div className="flex gap-8">
                {['账户', '项目', '广告', '创意', '素材'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm transition-all relative ${
                      activeTab === tab
                        ? 'text-blue-600 font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 cursor-pointer pb-3">
                层级映射关系说明 <HelpCircle className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Breadcrumbs & Inner Search */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-sm">
                <a href="#" onClick={() => setActiveTab('账户')} className="text-blue-600 hover:underline">全部账户</a>
                {activeTab !== '账户' && (
                  <>
                    <span className="text-gray-300">/</span>
                    <a href="#" onClick={() => setActiveTab('项目')} className="text-blue-600 hover:underline">库课专升本账户01</a>
                  </>
                )}
                {(activeTab === '广告' || activeTab === '创意' || activeTab === '素材') && (
                  <>
                    <span className="text-gray-300">/</span>
                    <a href="#" onClick={() => setActiveTab('广告')} className="text-blue-600 hover:underline">项目名称(20057716)</a>
                  </>
                )}
                 {(activeTab === '创意' || activeTab === '素材') && (
                   <>
                    <span className="text-gray-300">/</span>
                    <a href="#" onClick={() => setActiveTab('创意')} className="text-blue-600 hover:underline">广告组名称(20057716)</a>
                   </>
                )}
                {activeTab === '素材' && (
                   <>
                    <span className="text-gray-300">/</span>
                    <a href="#" className="text-blue-600 hover:underline">创意名称(20057716)</a>
                   </>
                )}
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={
                    activeTab === '账户' ? "请输入账户名称/ID" : 
                    activeTab === '项目' ? "请输入项目名称/ID" :
                    activeTab === '广告' ? "请输入广告名称/ID" :
                    activeTab === '创意' ? "请输入创意名称/ID" :
                    "请输入素材名称/ID"
                  }
                  className="bg-white border border-gray-200 rounded-md pl-4 pr-10 py-1.5 text-sm w-64 focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-300"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              </div>
            </div>

            {/* Unified Data Overview (Core Metrics) */}
            <DataOverview />
            
            {/* Render specific tables based on active tab */}
            {activeTab === '账户' && <AccountDataTable onDrillDown={(name) => handleDrillDown('账户', name)} />}
            {activeTab === '项目' && <ProjectDataTable onDrillDown={(name) => handleDrillDown('项目', name)} />}
            {activeTab === '广告' && <AdGroupDataTable onDrillDown={(name) => handleDrillDown('广告', name)} />}
            {activeTab === '创意' && <CreativeDataTable onDrillDown={(name) => handleDrillDown('创意', name)} />}
            {activeTab === '素材' && <MaterialDataTable />}
          </>
        )}
      </main>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}</style>
    </div>
  );
};

export default App;
