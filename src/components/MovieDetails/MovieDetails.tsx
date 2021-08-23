import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { MovieFull } from '../../interfaces/movieInterface';
import { Cast } from '../../interfaces/creditsInterface';
import CastItem from '../CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={styles.rootDetails}>
                <View style={styles.voteAverageGenres}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={styles.genres}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                {/** HISTORY */}
                <Text style={styles.title}>Historia</Text>
                <Text style={styles.descriptionHistory}>{movieFull.overview}</Text>

                {/** presupuesto */}
                <Text style={styles.title}>Presupuesto</Text>
                <Text style={styles.budget}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            {/** Casting */}
            <View style={styles.casting}>
                <Text style={styles.titleActor}>Actores</Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.flatList}
                />

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    rootDetails: {
        marginHorizontal: 20,
    },
    voteAverageGenres: {
        flexDirection: 'row',
    },
    genres: {
        marginLeft: 5,
    },

    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    titleActor: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginHorizontal: 20,
    },
    descriptionHistory: {
        textAlignVertical: 'center',
        fontSize: 16,
        opacity: 0.7,
    },
    budget: {
        fontSize: 20,
    },
    casting: {
        marginTop: 10,
        marginBottom: 10,
    },

    flatList: {
        marginTop: 10,
        height: 70

    }
});

export default MovieDetails;
