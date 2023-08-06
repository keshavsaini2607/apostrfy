import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Pressable} from 'react-native';

const BarGraph = () => {
  const [activeTile, setActiveTile] = useState<String>('');
  const data = [
    {label: 'Jan', value: 50},
    {label: 'Feb', value: 70},
    {label: 'Mar', value: 90},
    {label: 'Apr', value: 67},
    {label: 'May', value: 34},
    {label: 'Jun', value: 80},
  ];

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}>
      {data.map(dataPoint => (
        <Pressable
          key={dataPoint.label}
          style={styles.flexCol}
          onPress={() => setActiveTile(dataPoint.label)}>
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
