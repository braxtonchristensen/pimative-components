import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Row from '.';

storiesOf('Row', module)
  .add('default', () => (
    <Row title="hi" subtitle="there" />
  ));