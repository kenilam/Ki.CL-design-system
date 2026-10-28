import React from 'react';
import * as Ri from 'react-icons/ri';

import {
  Button,
  Card,
  CardTitle,
  Layout,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from 'design/components';

const Preview: React.FC = () => (
  <Card is='section' header={<CardTitle is='h3'>Summary</CardTitle>} size={5}>
    <Layout alignItems='center' autoFlow='column' frames='auto--max-content'>
      <div>
        <Text is='span'>Total</Text>
        <Layout alignItems='center' autoFlow='column' gap='narrow'>
          <div>
            <Text className='kicl-font-weight-bold' is='span'>
              $26.00
            </Text>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  aria-label='About this price'
                  size='small'
                  variant='tertiary'
                >
                  <Ri.RiInformationLine aria-hidden />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Text>Includes $6 express delivery and sales tax.</Text>
              </PopoverContent>
            </Popover>
          </div>
        </Layout>
      </div>
    </Layout>
  </Card>
);

export { Preview };
