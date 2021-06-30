import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate('Dashboard');
  };
  const signClick = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Image source={require('../assets/pubg.png')} style={styles.logoimg} />
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.loginPart}>
        <Text style={styles.text1}>Username</Text>
        <TextInput style={styles.userEmailInpt} />
        <Text style={styles.text2}>Password</Text>
        <TextInput style={styles.userPassword} secureTextEntry={true} />
        <View style={styles.forgetView}>
          <TouchableOpacity style={styles.forget}>
            <Text style={{ color: '#009387' }}>forget Password</Text>
            <MaterialIcons name='navigate-next' color='#009387' size={20} />
          </TouchableOpacity>
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
              <Text style={styles.textSign}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.createaccount}
          onPress={() => signClick()}
        >
          <Text style={{ color: '#009387', fontSize: 16 }}>
            Creat you Account
          </Text>
          <MaterialIcons name='arrow-right-alt' color='#009387' size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
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
  loginPart: {
    flex: 3,
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
  forgetView: {
    alignItems: 'flex-end',
  },
  forget: {
    flexDirection: 'row',
    marginTop: 5,
  },
  createaccount: {
    flexDirection: 'row',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
