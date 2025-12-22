
import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Wrench, 
  Rocket, 
  Settings, 
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

const menuConfig = [
  {
    title: '数据报表',
    icon: <BarChart3 className="w-4 h-4" />,
    items: ['推广看板', '广告投放看板', '素材分析看板']
  },
  {
    title: '推广线索',
    icon: <Users className="w-4 h-4" />,
    items: ['推广线索管理']
  },
  {
    title: '推广工具',
    icon: <Wrench className="w-4 h-4" />,
    items: [
      '推广链接管理', '付费推广链接', '免费推广链接', '落地页', 
      '落地页统计', '图片库', '视频库', '表单管理', 
      '筛选查询管理', '模版管理', '模块管理', '问答管理', '筛分表单管理'
    ]
  },
  {
    title: '推广活动',
    icon: <Rocket className="w-4 h-4" />,
    items: ['活动管理', '我的推广']
  },
  {
    title: '推广设置',
    icon: <Settings className="w-4 h-4" />,
    items: ['平台渠道', '全部账户', 'SEM账户', '信息流账户', 'ASO账户', 'Openinstall设置']
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, onNavigate }) => {
  const [openSections, setOpenSections] = useState<string[]>(['数据报表', '推广工具', '推广设置', '推广线索', '推广活动']);

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) ? prev.filter(s => s !== title) : [...prev, title]
    );
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex-shrink-0 overflow-y-auto custom-scrollbar">
      <div className="p-4 mb-4">
        <div className="h-8 bg-gray-50 rounded animate-pulse" /> {/* Logo Placeholder */}
      </div>
      
      <nav className="px-2 space-y-1">
        {menuConfig.map((section) => (
          <div key={section.title} className="mb-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-400">{section.icon}</span>
                <span>{section.title}</span>
              </div>
              {openSections.includes(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </button>
            
            {openSections.includes(section.title) && (
              <div className="mt-1 ml-9 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => onNavigate(item)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      item === activeItem 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
