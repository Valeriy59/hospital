import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getEmployeesTC} from "./employeesSlice";
import {Employee} from "./employee/Employee";
import {TableHead} from "./tableHead/TableHead";

export const Employees: FC = () => {
  const employees = useAppSelector((state) => state.employees.employees)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getEmployeesTC())
  }, [dispatch])

  return (
    <div>
      <TableHead/>
      {employees?.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
};
