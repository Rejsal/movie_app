import React, {memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {getPoster} from '../helper';
import {colors} from '../theme/color';
import {fonts} from '../theme/font';
import {size} from '../theme/size';

//Movie card item
const MovieCard = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getPoster(image)} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(MovieCard);

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    paddingHorizontal: size.s8,
  },
  image: {
    width: '100%',
    height: 160,
  },
  title: {
    marginTop: size.s12,
    fontFamily: fonts.FLight,
    fontSize: size.s18,
    color: colors.white,
  },
});
