import React from 'react';
import s from '../employee/Employee.module.css'

export const TableHead = () => {
  return (
    <div className="Employee.module.css">
      <table>
        <caption><h3>Список врачей клиники</h3></caption>
        <tbody>
        <tr className={s.tr}>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Дата рождения</th>
          <th>Телефон</th>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
