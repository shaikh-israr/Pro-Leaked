import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const ReferUI = () => {
  const [referCode, setReferCode] = useState('ab25tr');

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Sign up for an account and we both get upto ₹10000. usign this link: http://gestyy.com/ei2LUO`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Text style={styles.headerText}>Invite your friends</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Image
            source={require('../assets/refer.png')}
            style={styles.imagesStyle}
          />
        </View>

        <Text style={styles.textCode}>
          Share your referral code and invite your friends. You earn upto{' '}
          <Text style={{ fontSize: 16, color: '#f99999', fontWeight: 'bold' }}>
            ₹10000
          </Text>
        </Text>
        <View style={styles.refercode}>
          <Text style={styles.retext}>You Referral code</Text>
          <View style={styles.referbox}>
            <Text style={styles.retext1}>{referCode}</Text>
          </View>
          <TouchableOpacity
            style={{ paddingTop: 15 }}
            onPress={() => onShare()}
          >
            <LinearGradient
              start={{ x: 0, y: 3 }}
              end={{ x: 1, y: 3 }}
              locations={[0, 0, 1]}
              colors={['#08d4c4', '#01ab9d', '#567AEF']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>REFER NOW</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReferUI;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  imagesStyle: {
    width: '100%',
    height: 250,
  },

  textCode: {
    color: '#009378',
  },
  refercode: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  retext: {
    color: '#009378',
    fontSize: 18,
    paddingTop: 10,
  },
  retext1: {
    color: '#009378',
    fontSize: 25,
    fontWeight: 'bold',
  },
  referbox: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderRadius: 8,
    width: 140,
    backgroundColor: '#d5e5ed',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
