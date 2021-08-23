import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../../interfaces/movieInterface';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
type homeScreenProp = StackNavigationProp<RootStackParams, 'DetailScreen'>

const Moviecard = ({ movie, height = 420, width = 300 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation<homeScreenProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate({ key: 'Detail', name: 'DetailScreen', params: movie })}
      activeOpacity={0.8}
      style={{ width, height, marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 7 }}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Moviecard;
