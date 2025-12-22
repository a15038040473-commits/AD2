
export interface NavItem {
  id: string;
  label: string;
  icon?: string;
  children?: NavItem[];
}

export interface MetricCardData {
  title: string;
  value: string | number;
  hasDetail?: boolean;
  tooltip?: string;
}

export enum DashboardTab {
  Account = '账户',
  Project = '项目层',
  Group = '广告组层',
  Creative = '创意层'
}
