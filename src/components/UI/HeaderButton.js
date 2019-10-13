import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Platform} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      iconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS == 'android' ? 'white' : '#e683e6'}
    />
  );
};

export default CustomHeaderButton;
