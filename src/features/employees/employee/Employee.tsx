import React, {FC} from 'react';
import {EmployeeState} from "../employeesSlice";
import s from "./Employee.module.css"
import {NavLink} from "react-router-dom";

type EmployeePropsType = {
  employee: EmployeeState
}

export const Employee: FC<EmployeePropsType> = ({employee}) => {
  return (
    <NavLink to={`/worklog/${employee.id}`} className={s.link}>
      <div>
        <table>
          <tbody>
          <tr className={s.tr}>
            <td>{employee.lastName}</td>
            <td>{employee.firstName}</td>
            <td>{employee.middleName}</td>
            <td>{employee.birthDate}</td>
            <td>{employee.phone}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </NavLink>
  );
}