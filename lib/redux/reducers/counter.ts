import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
}

const deviceSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    modifyCount: (state, action: PayloadAction<number>) => {
      state.count = Math.min(Math.max(state.count + action.payload, 0), 9);
      // state.count = state.count + action.payload;
    }
  },  
})

export const { modifyCount } = deviceSlice.actions;
export default deviceSlice.reducer;
