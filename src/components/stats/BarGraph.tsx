import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Pressable} from 'react-native';
import {BarGrpahData, barGraphData} from '../../utils/constants';
import {useAppDispatch} from '../../app/hooks';
import {setActiveGraph} from '../../app/slices/dashboardSlice';

const BarGraph = () => {
  const dispatch = useAppDispatch();
  const [activeTile, setActiveTile] = useState<String>('');

  const handleActiveTile = (dataPoint: BarGrpahData) => {
    setActiveTile(dataPoint.label);
    dispatch(setActiveGraph(dataPoint));
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}>
      {barGraphData.map(dataPoint => (
        <Pressable
          key={dataPoint.label}
          style={styles.flexCol}
          onPress={() => handleActiveTile(dataPoint)}>
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
        </Pressable>
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
});

export default BarGraph;
