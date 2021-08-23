import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Movie } from '../../interfaces/movieInterface';
import Moviecard from '../MovieCard';

interface Props {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: (!!title) ? 260 : 220 }}>
            {title &&
                <View style={styles.containerText}>
                    <Text style={styles.text}>{title}</Text>
                </View>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <Moviecard movie={item} width={140} height={200} />
                )}
                keyExtractor={item => String(item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerText: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontVariant: ['tabular-nums'],
        marginLeft: 8,
        marginBottom: 5,
        includeFontPadding: true,
        textTransform: 'capitalize'
    }
});
export default HorizontalSlider;
