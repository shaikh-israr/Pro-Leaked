import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  CheckBox,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const Signup = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const handleClick = () => {
    console.log('login button click');
  };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Image source={require('../assets/pubg.png')} style={styles.logoimg} />
        <Text style={styles.headerText}>SignUp</Text>
      </View>
      <View style={styles.SignPart}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text1}>Name</Text>
          <TextInput style={styles.userEmailInpt} />

          <Text style={styles.text1}>Phone/Paytm No</Text>
          <TextInput style={styles.userEmailInpt} keyboardType='numeric' />

          <Text style={styles.text1}>Email</Text>
          <TextInput
            style={styles.userEmailInpt}
            keyboardType='email-address'
          />

          <Text style={styles.text2}>Password</Text>
          <TextInput style={styles.userPassword} secureTextEntry={true} />
          <View style={styles.termcondition}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text>I agree to the terms and conditions</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity onPress={handleClick}>
              <LinearGradient
                start={{ x: 0, y: 3 }}
                end={{ x: 1, y: 3 }}
                locations={[0, 0, 1]}
                colors={['#08d4c4', '#01ab9d', '#567AEF']}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Create Account</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
  logoimg: {
    width: 160,
    height: 150,
  },
  SignPart: {
    flex: 4,
    backgroundColor: '#F0F2E6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  userEmailInpt: {
    borderWidth: 2,
    color: 'black',
    borderColor: '#009387',
    padding: 5,
    borderRadius: 12,
    paddingLeft: 10,
    height: 45,
  },
  userPassword: {
    borderWidth: 2,
    color: 'black',
    borderColor: '#009387',
    padding: 5,
    borderRadius: 12,
    paddingLeft: 10,
    height: 45,
  },
  text1: {
    color: '#009387',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
    marginTop: 10,
  },
  text2: {
    marginBottom: 10,
    marginTop: 15,
    color: '#009387',
    fontSize: 20,
    fontWeight: '700',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },

  createaccount: {
    flexDirection: 'row',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  termcondition: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
