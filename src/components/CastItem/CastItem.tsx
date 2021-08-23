import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    return (
        <View style={styles.castRoot}>
            {actor.profile_path && <Image source={{ uri }} style={styles.img} />}
            <View style={styles.actorInfo}>
                <Text style={styles.name}>{actor.name}</Text>
                <Text style={styles.character}>{actor.character}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    castRoot: {
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        borderRadius: 10,
        height: 50,
        marginLeft: 20,
        paddingRight: 15,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    character: {
        fontSize: 16,
        opacity: 0.6,
    },
});

export default CastItem;
