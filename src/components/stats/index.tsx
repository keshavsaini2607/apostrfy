import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ArrowIcon from '../../assets/Arrow.png';
import BarGraph from './BarGraph';

const Stats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.heading}>Stats</Text>
        <View style={styles.flex}>
          <Text style={styles.linkText}>Details</Text>
          <Image source={ArrowIcon} style={styles.icon} />
        </View>
      </View>
      <BarGraph />
      <View>
        <Text style={{...styles.heading, alignSelf: 'center'}}>
          Net Revenue
        </Text>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 15,
    color: '#000',
    fontWeight: '700',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  linkText: {
    color: '#F36921',
  },
  icon: {
    width: 16,
    height: 'auto',
    minHeight: 20,
    resizeMode: 'contain',
  },
});
