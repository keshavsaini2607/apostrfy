import {Text, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

const TopNavigation = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.tile}>
          <Text style={styles.tileText}>All</Text>
        </View>
        <View style={styles.tile}>
          <Text style={styles.tileText}>30506</Text>
        </View>
        <View style={styles.tile}>
          <Text style={styles.tileText}>30507</Text>
        </View>
        <View style={styles.tile}>
          <Text style={styles.tileText}>30508</Text>
        </View>
        <View style={styles.tile}>
          <Text style={styles.tileText}>30509</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TopNavigation;

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    maxHeight: 40,
    marginTop: 10,
  },
  contentContainer: {
    paddingLeft: 10,
    gap: 12,
    height: 40,
    alignItems: 'center',
  },
  tile: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#fff',
    height: 'auto',
    borderColor: '#F1F5F9',
    borderWidth: 2,
  },
  tileText: {
    fontSize: 15,
  },
});
