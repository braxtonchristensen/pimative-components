import * as React from 'react';
import { render, Artboard } from 'react-sketchapp';
import { Text, View } from 'react-primitives';
import { fonts, spacing } from '../designSystem';
import Row from '../components/Row';
import Profile from '../components/Profile';
import Space from '../components/Space';
import DATA from '../components/Profile/data';

const Page = ({ users }) => (
  <View>
    <Text style={fonts['Title 1']}>Profile Cards w/ React Primitives</Text>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: users.length * 300,
      }}
    >
      {users.map(user => (
        <Space key={user.screen_name} h={spacing} v={spacing}>
          <Profile user={user} />
        </Space>
      ))}
    </View>
  </View>
);

const Document = () => (
  <Artboard
    name="Test"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 900,
    }}
  >
    <Row title="hello" subtitle="there" />
    <Page users={DATA} />
  </Artboard>
);


export default () => {
  render(<Document />, context.document.currentPage());
};