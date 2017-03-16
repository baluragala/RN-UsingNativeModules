/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as globalStyles from './style.global'

export default class UsingNativeModules extends Component {
  render() {
    return (
      <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
          <Icon
        name="user"
        style={styles.avatarIcon}
      />
        <Text style={styles.text}>baluragla</Text>
        <Text style={styles.text}>BalaKrishna Ragala</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    color: globalStyles.HEADER_TEXT_COLOR,
    fontSize: 200
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  text:{
    color:'white'
  }
});

AppRegistry.registerComponent('UsingNativeModules', () => UsingNativeModules);
