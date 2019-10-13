import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>LOL</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Home);
