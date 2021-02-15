import React, {Component} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import Picker from '@react-native-firebase/Picker';
import {Picker} from '@react-native-picker/picker';
// import Textarea from 'react-native-textarea';
// import Button from '@react-native-firebase/Button';
// import {Button} from 'react-native-paper';

class Laporan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      kejadian: '',
      alamat: '',
      keterangan: '',
    };
  }

  registerUser = () => {
    console.log('Test Register');
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        console.log('User account created & signed in!');
        console.log('RESPONSE' + response);

        firestore()
          .collection('users')
          .doc(this.state.email)
          .set({
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
          })
          .then(() => {
            this.props.navigation.navigate('Dashboard');
            console.log('User added!');
          })
          .catch((error) => {
            Alert.alert('Maaf Gagal Simpan', JSON.stringify(error));
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{flex: 1, width: '100%'}}
          keyboardShouldPersistTaps="always">
          <Text style={{fontSize: 50, textAlign: 'center', marginBottom: 12}}>
            LAPORAN
          </Text>
          <View>
            <Text style={{marginLeft: 33}}> Name : </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              onChangeText={(name) => this.setState({name: name})}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text style={{marginLeft: 33, marginBottom: 9}}> Kejadian : </Text>
            <Picker
              selectedValue={this.state.language}
              style={{
                width: '82%',
                backgroundColor: 'white',
                marginBottom: 10,
                alignSelf: 'center',
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Pemerkosaan" value="java" />
              <Picker.Item label="Perampokaan" value="js" />
              <Picker.Item label="Bencana" value="java" />
              <Picker.Item label="Pemunuhan" value="js" />
            </Picker>
          </View>
          <View>
            <Text style={{marginLeft: 33}}> Alamat : </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              onChangeText={(password) => this.setState({password: password})}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text style={{marginLeft: 33, marginBottom: 9}}>
              {' '}
              Keterangan :{' '}
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              style={{
                borderWidth: 1,
                marginHorizontal: 30,
                borderRadius: 5,
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => captureImage('photo')}>
              <Text style={styles.textStyle}>Launch Camera for Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => chooseFile('photo')}>
              <Text style={styles.textStyle}>Choose Image</Text>
            </TouchableOpacity>
          </View>

          <View></View>
          <View></View>
          <TouchableOpacity style={styles.button} onPress={this.registerUser}>
            <Text style={styles.buttonTitle}>LAPORAN</Text>
          </TouchableOpacity>
          <View style={styles.footerView}></View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Laporan;
