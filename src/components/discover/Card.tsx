import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'native-base';
import {DiscoverData} from '../../utils/constants';

interface CardProps {
  data: DiscoverData;
}

const getImageSource = (imageName: string) => {
  switch (imageName) {
    case 'img1':
      return require('../../assets/img1.png');
    case 'img2':
      return require('../../assets/img2.png');
  }
};

const Card: React.FC<CardProps> = ({data}) => {
  const imageSource = getImageSource(data.image);

  return (
    <View style={styles.container}>
      {data?.image && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.heading}>{data.title}</Text>
      <View style={styles.dateContainer}>
        {data.dates.map((date: string) => (
          <View style={styles.dateTile} key={date}>
            <Text>{date}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.paragraph}>{data.description}</Text>
      <View style={styles.flex}>
        <Text style={styles.linkText}>Details</Text>
        <Image source={require('../../assets/Arrow.png')} style={styles.icon} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 20,
    backgroundColor: '#fff',
    width: 320,
    paddingVertical: 20,
    height: 'auto',
  },
  heading: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 6,
  },
  dateTile: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    backgroundColor: '#FBDEB5',
  },
  paragraph: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
    paddingHorizontal: 20,
    marginTop: 10,
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
