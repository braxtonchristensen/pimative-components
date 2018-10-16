import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from '.';

storiesOf('Row', module)
  .add('default', () => (
    <Row title="hi" subtitle="there" />
  ));