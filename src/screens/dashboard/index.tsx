import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TopNavigation from './TopNavigation';
import Stats from '../../components/stats';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <TopNavigation />
      <View style={styles.contentContainer}>
        <Stats />
      </View>
    </View>
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
});
