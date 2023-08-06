import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <View style={styles.flexContainer}>
        <Image source={require('../../assets/call.png')} style={styles.icon} />
        <Image source={require('../../assets/email.png')} style={styles.icon} />
        <Image
          source={require('../../assets/whatsapp.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  flexContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
