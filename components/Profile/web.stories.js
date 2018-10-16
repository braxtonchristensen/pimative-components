import React from 'react';
import { storiesOf } from '@storybook/react';
import DATA from './data';
import Profile from '.';

storiesOf('Profile', module)
  .add('default', () => (
    <Profile user={ DATA[0] } />
  ));