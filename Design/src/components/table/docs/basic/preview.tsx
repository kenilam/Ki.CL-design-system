import React from 'react';

import { Table } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Table>
      <caption>Opening hours</caption>
      <thead>
        <tr>
          <th scope='col'>Day</th>
          <th scope='col'>Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday to Friday</td>
          <td>9:00 to 18:00</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>10:00 to 16:00</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>Closed</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { Preview };
