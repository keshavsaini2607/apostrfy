export interface BarGrpahData {
  label: string;
  value: number;
  netRevenue: number;
  avgRoomRate: number;
  currentDate?: string;
  max?: string;
}

export const barGraphData: BarGrpahData[] = [
  {
    label: 'Jan',
    value: 50,
    netRevenue: 93.3,
    avgRoomRate: 1000,
    currentDate: '2023-01-01',
    max: '750',
  },
  {
    label: 'Feb',
    value: 70,
    netRevenue: 89,
    avgRoomRate: 2200,
    currentDate: '2023-02-01',
    max: '340',
  },
  {
    label: 'Mar',
    value: 90,
    netRevenue: 100.23,
    avgRoomRate: 4000,
    currentDate: '2023-03-01',
    max: '990',
  },
  {
    label: 'Apr',
    value: 67,
    netRevenue: 90.4,
    avgRoomRate: 3200,
    currentDate: '2023-04-01',
    max: '410',
  },
  {
    label: 'May',
    value: 34,
    netRevenue: 45.9,
    avgRoomRate: 1200,
    currentDate: '2023-05-01',
    max: '790',
  },
  {
    label: 'Jun',
    value: 80,
    netRevenue: 65.98,
    avgRoomRate: 3400,
    currentDate: '2023-06-01',
    max: '670',
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

export interface DiscoverData {
  id: string;
  image: string;
  title: string;
  dates: string[];
  description: string;
}

export const discoverData = [
  {
    id: '1',
    image: 'img1',
    title: 'Bohemia Rapper',
    dates: ['12/09/2023', '14/09/2023'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt',
  },
  {
    id: '2',
    image: 'img2',
    title: 'Anjunadeep',
    dates: ['15/09/2023', '16/09/2023'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt',
  },
];
