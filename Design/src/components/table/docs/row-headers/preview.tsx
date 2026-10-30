import React from 'react';

import { Table } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Table>
      <caption>Plans</caption>
      <thead>
        <tr>
          <th scope='col'>Plan</th>
          <th scope='col'>Storage</th>
          <th scope='col'>Seats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>Starter</th>
          <td>10 GB</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope='row'>Team</th>
          <td>100 GB</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope='row'>Business</th>
          <td>1 TB</td>
          <td>50</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { Preview };
