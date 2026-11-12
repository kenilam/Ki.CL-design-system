import React from 'react';

import { Button, Dialog, Heading, Table } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button command='show-modal' commandfor='dialog-wide'>
        Open
      </Button>
      <Dialog
        header={
          <Heading dense is='h2' lookLike='h4'>
            Daylight by city
          </Heading>
        }
        id='dialog-wide'
        size={9}
        {...props}
      >
        <Table>
          <thead>
            <tr>
              <th scope='col'>City</th>
              <th scope='col'>Sunrise</th>
              <th scope='col'>Sunset</th>
              <th scope='col'>Daylight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>London</td>
              <td>07:12</td>
              <td>16:21</td>
              <td>9 hours 9 minutes</td>
            </tr>
            <tr>
              <td>Hong Kong</td>
              <td>06:32</td>
              <td>17:44</td>
              <td>11 hours 12 minutes</td>
            </tr>
            <tr>
              <td>Sydney</td>
              <td>05:51</td>
              <td>19:38</td>
              <td>13 hours 47 minutes</td>
            </tr>
          </tbody>
        </Table>
      </Dialog>
    </>
  );
};

export { Preview };
