import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getWorklogTC} from "./worklogSlice";
import {useParams} from "react-router-dom";
import s from "../employees/employee/Employee.module.css";

export const Worklog = () => {
  const employees = useAppSelector((state) => state.employees.employees)
  const worklogs = useAppSelector((state) => state.worklog.worklog)

  const params = useParams<{ id: string }>()
  const employeeWorklog = worklogs?.filter((el) => params.id ? el.employee_id === +params.id : el)
  const employee = employees?.find((el) => params.id ? el.id === +params.id : el)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getWorklogTC())
  }, [dispatch])

  return (
    <div>
      <table>
        <caption><h3>{employee?.lastName} {employee?.firstName} {employee?.middleName}</h3></caption>
        <tbody>
        {employeeWorklog?.map((el) =>
          (<tr className={s.tr} key={el.id}>
            <td>{el.from}</td>
            <td>{el.to}</td>
          </tr>)
        )}
        </tbody>
      </table>
    </div>
  );
};
