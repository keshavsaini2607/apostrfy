import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import {barGraphData} from '../../utils/constants';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {setActiveGraph, setCurrentDate} from '../../app/slices/dashboardSlice';
import {Tooltip} from 'native-base';

const BarGraph = () => {
  const dispatch = useAppDispatch();
  const [activeTile, setActiveTile] = useState<String>('');

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
        <View key={dataPoint.label}>
          <Tooltip
            label="Click here to read more"
            placement={'top'}
            openDelay={500}>
            <TouchableWithoutFeedback
              onPress={() => handleActiveTile(dataPoint)}>
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
            </TouchableWithoutFeedback>
          </Tooltip>
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
