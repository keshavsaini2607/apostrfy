import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import TopNavigation from './TopNavigation';
import Stats from '../../components/stats';
import CalendarWidget from '../../components/calendar/Calendar';
import Card from '../../components/discover/Card';
import {DiscoverData, discoverData} from '../../utils/constants';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <TopNavigation />
      <View style={styles.contentContainer}>
        <Stats />
      </View>
      <View style={styles.contentContainer}>
        <CalendarWidget />
      </View>
      <View style={styles.discover}>
        <Text style={styles.sectionHeading}>Discover</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.cards}
          showsHorizontalScrollIndicator={false}>
          {discoverData.map((data: DiscoverData) => (
            <Card data={data} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 5,
  },
  heading: {
    fontSize: 17,
    color: '#000',
    alignSelf: 'center',
    fontWeight: '700',
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: '94%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.07,
  },
  discover: {
    padding: 10,
    paddingHorizontal: 20,
  },
  sectionHeading: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  cards: {
    gap: 14,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 4,
  },
});
