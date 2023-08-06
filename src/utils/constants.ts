export interface BarGrpahData {
  label: string;
  value: number;
  netRevenue: string;
  avgRoomRate: number;
  currentDate?: string;
}

export const barGraphData: BarGrpahData[] = [
  {
    label: 'Jan',
    value: 50,
    netRevenue: '93.9k',
    avgRoomRate: 1000,
    currentDate: '2023-01-01',
  },
  {
    label: 'Feb',
    value: 70,
    netRevenue: '89.0k',
    avgRoomRate: 2200,
    currentDate: '2023-02-01',
  },
  {
    label: 'Mar',
    value: 90,
    netRevenue: '100.23k',
    avgRoomRate: 4000,
    currentDate: '2023-03-01',
  },
  {
    label: 'Apr',
    value: 67,
    netRevenue: '90.4k',
    avgRoomRate: 3200,
    currentDate: '2023-04-01',
  },
  {
    label: 'May',
    value: 34,
    netRevenue: '45.9k',
    avgRoomRate: 1200,
    currentDate: '2023-05-01',
  },
  {
    label: 'Jun',
    value: 80,
    netRevenue: '65.98k',
    avgRoomRate: 3400,
    currentDate: '2023-06-01',
  },
];

export const monthToNumber = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
};

export interface TimePeriodData {
  label: string;
  value: number | string;
}

export const timePeriodData: TimePeriodData[] = [
  {
    label: '3m',
    value: 3,
  },
  {
    label: '6m',
    value: 6,
  },
  {
    label: '1 yr',
    value: 12,
  },
  {
    label: '2 yrs',
    value: 24,
  },
  {
    label: 'Max',
    value: 'max',
  },
];

export const selectedCalendarDates = [
  {
    key: 'Jan',
    value: {
      '2023-01-01': {marked: true, dotColor: 'red'},
      '2023-01-14': {marked: true, dotColor: 'red'},
      '2023-01-12': {marked: true, dotColor: 'red'},
      '2023-01-11': {marked: true, dotColor: 'red'},
      '2023-01-16': {marked: true, dotColor: 'green'},
      '2023-01-17': {marked: true, dotColor: 'green'},
      '2023-01-18': {marked: true, dotColor: 'green'},
    },
  },
  {
    key: 'Feb',
    value: {
      '2023-02-01': {marked: true, dotColor: 'red'},
      '2023-02-14': {marked: true, dotColor: 'red'},
      '2023-02-12': {marked: true, dotColor: 'red'},
      '2023-02-11': {marked: true, dotColor: 'red'},
      '2023-02-16': {marked: true, dotColor: 'green'},
      '2023-02-17': {marked: true, dotColor: 'green'},
      '2023-02-18': {marked: true, dotColor: 'green'},
    },
  },
  {
    key: 'Mar',
    value: {
      '2023-03-01': {marked: true, dotColor: 'red'},
      '2023-03-14': {marked: true, dotColor: 'red'},
      '2023-03-12': {marked: true, dotColor: 'red'},
      '2023-03-11': {marked: true, dotColor: 'red'},
      '2023-03-16': {marked: true, dotColor: 'green'},
      '2023-03-17': {marked: true, dotColor: 'green'},
      '2023-03-18': {marked: true, dotColor: 'green'},
    },
  },
  {
    key: 'Apr',
    value: {
      '2023-04-01': {marked: true, dotColor: 'red'},
      '2023-04-14': {marked: true, dotColor: 'red'},
      '2023-04-12': {marked: true, dotColor: 'red'},
      '2023-04-11': {marked: true, dotColor: 'red'},
      '2023-04-16': {marked: true, dotColor: 'green'},
      '2023-04-17': {marked: true, dotColor: 'green'},
      '2023-04-18': {marked: true, dotColor: 'green'},
    },
  },
  {
    key: 'May',
    value: {
      '2023-05-01': {marked: true, dotColor: 'red'},
      '2023-05-14': {marked: true, dotColor: 'red'},
      '2023-05-12': {marked: true, dotColor: 'red'},
      '2023-05-11': {marked: true, dotColor: 'red'},
      '2023-05-16': {marked: true, dotColor: 'green'},
      '2023-05-17': {marked: true, dotColor: 'green'},
      '2023-05-18': {marked: true, dotColor: 'green'},
    },
  },
  {
    key: 'Jun',
    value: {
      '2023-06-01': {marked: true, dotColor: 'red'},
      '2023-06-14': {marked: true, dotColor: 'red'},
      '2023-06-12': {marked: true, dotColor: 'red'},
      '2023-06-11': {marked: true, dotColor: 'red'},
      '2023-06-16': {marked: true, dotColor: 'green'},
      '2023-06-17': {marked: true, dotColor: 'green'},
      '2023-06-18': {marked: true, dotColor: 'green'},
    },
  },
];
