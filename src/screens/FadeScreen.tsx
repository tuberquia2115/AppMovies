import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
    const { fadeIn, fadeOut, opacity } = useFade();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey',
            }}>
            <Animated.View
                style={{
                    width: 100,
                    height: 100,
                    borderWidth: 5,
                    backgroundColor: 'yellow',
                    marginBottom: 10,
                    opacity,
                }}
            />

            <Button title="fadeIn" onPress={() => fadeIn()} />
            <Button title="fadeOut" onPress={() =>fadeOut()} />
        </View>
    );
};
