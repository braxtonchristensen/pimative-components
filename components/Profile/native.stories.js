import React from 'react';
import { storiesOf } from '@storybook/react-native';
import DATA from './data';
import Profile from '.';

storiesOf('Profile', module)
  .add('default', () => console.log(DATA[0]) || (
    <Profile user={ DATA[0] } />
  ));