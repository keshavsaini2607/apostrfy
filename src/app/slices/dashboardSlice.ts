import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BarGrpahData} from '../../utils/constants';

// Auth state interface
interface DashboardState {
  activeGraph: BarGrpahData | any;
}

// Initial auth state
const initialState: DashboardState = {
  activeGraph: null,
};

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActiveGraph: (state: DashboardState, action: any) => {
      state.activeGraph = action.payload;
    },
  },
});

export const {setActiveGraph} = DashboardSlice.actions;

export default DashboardSlice.reducer;
