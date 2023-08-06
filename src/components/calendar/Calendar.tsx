import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {useAppSelector} from '../../app/hooks';
import {selectedCalendarDates} from '../../utils/constants';
import ArrowIcon from '../../assets/Arrow.png';

const CalendarWidget = () => {
  const [selected, setSelected] = useState('');
  const [markedDates, setMarkedDates] = useState<any>({});
  const {activeGraph, currentDate} = useAppSelector(state => state.dashboard);

  useEffect(() => {
    if (activeGraph && Object.keys(activeGraph).length > 0) {
      const dates = selectedCalendarDates.find(
        (item: any) => item.key === activeGraph?.label,
      );
      setMarkedDates(dates?.value);
    }
  }, [activeGraph]);
  console.log(markedDates);

  return (
    <View>
      <View style={styles.flexContainer}>
        <Text style={styles.heading}>Bookings</Text>
        <View style={styles.flex}>
          <Text style={styles.linkText}>Details</Text>
          <Image source={ArrowIcon} style={styles.icon} />
        </View>
      </View>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            selectedColor: 'orange',
            disableTouchEvent: true,
          },
          ...markedDates,
        }}
        monthFormat="MMM"
        current={currentDate}
        key={currentDate}
        theme={{
          arrowColor: 'red',
        }}
      />
    </View>
  );
};

export default CalendarWidget;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
