import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import TopNavigation from './TopNavigation';
import Stats from '../../components/stats';
import CalendarWidget from '../../components/calendar/Calendar';
import Card from '../../components/discover/Card';
import {discoverData} from '../../utils/constants';
import ContactUs from '../../components/contact/ContactUs';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
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

          <FlatList
            data={discoverData}
            horizontal
            contentContainerStyle={styles.cards}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Card data={item} />}
          />
        </View>
        <View style={{...styles.contentContainer, marginBottom: 20}}>
          <ContactUs />
        </View>
      </SafeAreaView>
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
    elevation: 2,
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
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 4,
  },
});
