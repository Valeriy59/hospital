import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWorklog} from "../../api/api";


export interface WorklogState {
  id: number,
  employee_id: number,
  from: string,
  to: string
}

interface WorklogStateType {
  worklog: WorklogState[]
}

export const getWorklogTC = createAsyncThunk(
  'worklog/getWorklog',
  async () => {
    const response = await getWorklog();

    return response;
  }
);

export const worklogSlice = createSlice({
  name: 'worklog',
  initialState: {} as WorklogStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorklogTC.fulfilled, (state, action) => {
        state.worklog = action.payload
      })
  },
});

