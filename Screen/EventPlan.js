import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import FreeFire from '../components/FreeFire';

const EventPlan = () => {
  const [amount, setAmount] = useState('10000');
  const renderItem = ({ item }) => <FreeFire data={item} />;
  const DATA = [
    {
      id: '1',
      title: 'First Item',
      image: require('../assets/freefire/fire1.jpg'),
    },
    {
      id: '2',
      title: 'Second Item',
      image: require('../assets/freefire/fire2.jpeg'),
    },
    {
      id: '3',
      title: 'Third Item',
      image: require('../assets/freefire/fire3.jpeg'),
    },
    {
      id: '4',
      title: 'fourth Item',
      image: require('../assets/freefire/fire4.jpg'),
    },
    {
      id: '5',
      title: 'fifth Item',
      image: require('../assets/freefire/fire5.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Text style={styles.headerText}>₹{amount}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.walletBtn}>
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              start={{ x: 0, y: 3 }}
              end={{ x: 1, y: 3 }}
              locations={[0, 0, 1]}
              colors={['#08d4c4', '#01ab9d', '#567AEF']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Add</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              start={{ x: 0, y: 3 }}
              end={{ x: 1, y: 3 }}
              locations={[0, 0, 1]}
              colors={['#08d4c4', '#01ab9d', '#567AEF']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Withdrawn</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text>Event</Text>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default EventPlan;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009378',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 5,
    backgroundColor: '#F0F2E6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
  },
  walletBtn: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: -20,
    left: 10,
    height: 50,
    alignItems: 'center',
    width: '100%',
  },
  signIn: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
