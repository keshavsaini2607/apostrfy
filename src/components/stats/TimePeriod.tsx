import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import {TimePeriodData, timePeriodData} from '../../utils/constants';
import {useAppDispatch} from '../../app/hooks';
import {setRevenueMonth} from '../../app/slices/dashboardSlice';

const TimePeriod = () => {
  const [activeTile, setActiveTile] = useState<string>('');
  const dispatch = useAppDispatch();

  const activeStyle = (label: string) => {
    const isActive = activeTile === label;
    return {
      backgroundColor: isActive ? '#FFFFFF' : '#FBDEB5',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: isActive ? 2 : 0},
          shadowOpacity: isActive ? 0.3 : 0,
          shadowRadius: isActive ? 5 : 0,
        },
        android: {
          elevation: isActive ? 12 : 0,
        },
      }),
    };
  };

  const activeTextStyle = (label: string) => {
    return {
      color: activeTile === label ? '#F36921' : '#000000',
    };
  };

  const handleTilePress = (data: any) => {
    setActiveTile(data.label);
    dispatch(setRevenueMonth(data.value));
  };

  return (
    <View style={styles.container}>
      {timePeriodData.map((data: TimePeriodData) => (
        <TouchableOpacity
          key={data.label}
          style={{...styles.dataTile, ...activeStyle(data.label)}}
          onPress={() => handleTilePress(data)}>
          <Text style={{...styles.label, ...activeTextStyle(data.label)}}>
            {data.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TimePeriod;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    marginTop: 10,
  },
  dataTile: {
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 12,
  },
  label: {
    fontSize: 15,
    color: '#000',
  },
});
