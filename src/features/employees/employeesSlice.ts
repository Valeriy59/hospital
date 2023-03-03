import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEmployees } from "../../api/api";
import {convertDate} from "../../common/utils/convertDate";


export interface EmployeeState {
  id: number,
  firstName: string,
  lastName: string,
  middleName: string,
  birthDate: string,
  phone: string
}

interface EmployeesStateType {
  employees: EmployeeState[]
}

export const getEmployeesTC = createAsyncThunk(
  'employees/getEmployees',
  async () => {
    const response = await getEmployees();
    const sorted = response.sort((a: EmployeeState, b: EmployeeState) => a.lastName.localeCompare(b.lastName));
    const converted = sorted.map((el: EmployeeState) => ({...el, birthDate: convertDate(el.birthDate)}))
    return converted
  }
);

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {} as EmployeesStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeesTC.fulfilled, (state, action) => {
        state.employees = action.payload
      })
  },
});

