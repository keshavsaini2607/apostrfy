export interface BarGrpahData {
  label: string;
  value: number;
  netRevenue: string;
  avgRoomRate: number;
}

export const barGraphData: BarGrpahData[] = [
  {label: 'Jan', value: 50, netRevenue: '93.9k', avgRoomRate: 1000},
  {label: 'Feb', value: 70, netRevenue: '89.0k', avgRoomRate: 2200},
  {label: 'Mar', value: 90, netRevenue: '100.23k', avgRoomRate: 4000},
  {label: 'Apr', value: 67, netRevenue: '90.4k', avgRoomRate: 3200},
  {label: 'May', value: 34, netRevenue: '45.9k', avgRoomRate: 1200},
  {label: 'Jun', value: 80, netRevenue: '65.98k', avgRoomRate: 3400},
];
