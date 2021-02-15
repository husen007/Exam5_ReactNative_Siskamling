import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

class Laporan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{flex: 1, width: '100%'}}
          keyboardShouldPersistTaps="always">
          <Text style={{fontSize: 50, textAlign: 'center'}}>History</Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Laporan;
