import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Pressable} from 'react-native';
import {barGraphData} from '../../utils/constants';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {setActiveGraph, setCurrentDate} from '../../app/slices/dashboardSlice';

const BarGraph = () => {
  const dispatch = useAppDispatch();
  const [activeTile, setActiveTile] = useState<String>('');
  const {revenueMonth} = useAppSelector(state => state.dashboard);

  const handleActiveTile = (dataPoint: any) => {
    setActiveTile(dataPoint.label);
    dispatch(setActiveGraph(dataPoint));
    dispatch(setCurrentDate(dataPoint.currentDate));
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}>
      {barGraphData.map(dataPoint => (
        <View style={styles.barContainer} key={dataPoint.label}>
          {activeTile === dataPoint.label && (
            <View style={styles.popover}>
              <Text style={styles.smallText}>
                {revenueMonth
                  ? revenueMonth === 'max'
                    ? dataPoint.max
                    : (dataPoint.netRevenue * revenueMonth).toFixed(2)
                  : dataPoint.netRevenue.toFixed(2)}
                k
              </Text>
            </View>
          )}
          <Pressable onPress={() => handleActiveTile(dataPoint)}>
            <View style={styles.flexCol}>
              <View
                style={{
                  ...styles.tile,
                  height: dataPoint.value * 1.4,
                  backgroundColor: `${
                    activeTile === dataPoint.label ? '#FEB626' : '#FBDEB5'
                  }`,
                }}></View>
              <Text
                style={{
                  color: `${
                    activeTile === dataPoint.label ? '#F36921' : '#C7CCDC'
                  }`,
                }}>
                {dataPoint.label}
              </Text>
            </View>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
    minHeight: 140,
  },
  barContainer: {
    paddingVertical: 24,
  },
  tile: {
    width: 50,
    borderRadius: 15,
  },
  flexCol: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  label: {
    color: '#C7CCDC',
  },
  popover: {
    elevation: 3,
    borderRadius: 2,
    backgroundColor: '#fff',
    padding: 2,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginBottom: 3,
    position: 'absolute',
    top: -4,
  },
  smallText: {
    fontSize: 12,
  },
});

export default BarGraph;
