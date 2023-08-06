import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ArrowIcon from '../../assets/Arrow.png';
import BarGraph from './BarGraph';
import TimePeriod from './TimePeriod';
import Donut from './Donut';
import {useAppSelector} from '../../app/hooks';

const Stats = () => {
  const {activeGraph} = useAppSelector(state => state.dashboard);
  console.log({activeGraph});
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
      <TimePeriod />
      <View
        style={{
          ...styles.flexContainer,
          ...styles.donutContainer,
        }}>
        <View style={styles.flexColCenter}>
          <Donut progress={activeGraph.value / 100} />
          <Text>Occupancy</Text>
        </View>
        <View style={styles.flexColCenter}>
          <Text style={{...styles.linkText, ...styles.boldLabel}}>
            {activeGraph?.avgRoomRate}
          </Text>
          <Text>Avg Room Rate</Text>
        </View>
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
  flexColCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  donutContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  boldLabel: {
    fontWeight: '700',
    fontSize: 28,
  },
});
