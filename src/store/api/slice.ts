import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  [key: string]: any;
}

const initialState: AppState = {
  dataSet: [],
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addToDataSet: (state, action: PayloadAction<string>) => {
      state.dataSet.push(action.payload);
    },
    removeFromDataSet: (state, action: PayloadAction<string>) => {
      state.dataSet = state.dataSet.filter((item: string) => item !== action.payload);
    },
  },
});

export const sliceActions = slice.actions;
export const sliceReducer = slice.reducer;
