import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import Home from '../components/Home';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="Home" initial></Scene>
  </Scene>,
);

export default scenes;
