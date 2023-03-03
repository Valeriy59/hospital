import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {employeesSlice} from "../features/employees/employeesSlice";
import {worklogSlice} from "../features/worklog/worklogSlice";

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
    worklog: worklogSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// @ts-ignore
window.store = store // for dev

