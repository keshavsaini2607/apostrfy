import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BarGrpahData} from '../../utils/constants';

// Auth state interface
interface DashboardState {
  activeGraph: BarGrpahData | any;
  revenueMonth: any;
  currentDate: any;
}

// Initial auth state
const initialState: DashboardState = {
  activeGraph: null,
  revenueMonth: 0,
  currentDate: '2023-08-01',
};

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActiveGraph: (state: DashboardState, action: PayloadAction) => {
      state.activeGraph = action.payload;
    },
    setRevenueMonth: (state: DashboardState, action: PayloadAction) => {
      state.revenueMonth = action.payload;
    },
    setCurrentDate(state: DashboardState, action: PayloadAction) {
      state.currentDate = action.payload;
    },
  },
});

export const {setActiveGraph, setRevenueMonth, setCurrentDate} = DashboardSlice.actions;

export default DashboardSlice.reducer;
