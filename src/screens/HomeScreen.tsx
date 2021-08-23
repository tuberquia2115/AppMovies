import React, { useContext, useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors';

import HorizontalSlider from '../components/HorizontalSlider.tsx';
import Moviecard from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import GradientBackground from '../components/GradientBackground';
import { useFade } from '../hooks/useFade';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, popular, toprated, upcoming, isLoading } = useMovies();
  const { setMainColors, setPrevMainColors } = useContext(GradientContext)
  const { top: marginTop } = useSafeAreaInsets();

  const getCardColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getCardColors(0);
    }

  }, [nowPlaying])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="green" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop }}>
          <Text style={styles.text}>En cine</Text>
          {/** Carousel princiapl react native snap caurusel */}
          <View style={styles.containerCarousel}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <Moviecard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getCardColors(index)}
            />
          </View>

          {/** Peliculas populares */}
          <HorizontalSlider title="Peliculas Populares" movies={popular} />
          <HorizontalSlider title="Peliculas mas valoradas" movies={toprated} />
          <HorizontalSlider title="Peliculas Proximas" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  containerCarousel: {
    height: 440,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
export default HomeScreen;
