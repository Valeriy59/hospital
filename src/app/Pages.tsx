import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../common/constants/path';
import { Employees } from "../features/employees/Employees";
import { Worklog } from "../features/worklog/Worklog";

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} index element={<Employees/>}/>
        <Route path={PATH.employees} element={<Employees/>}/>
        <Route path={PATH.worklog} element={<Worklog/>}/>
      </Routes>
    </div>
  );
};
