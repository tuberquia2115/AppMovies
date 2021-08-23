import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GradientContext } from '../../context/GradientContext';
import { useFade } from '../../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
    const {
        prevColors: { primary, secondary },
        colors,
        setPrevMainColors,
    } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0);
        });
    }, [colors]);

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[primary, secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.7, y: 0.7 }}
            />
            <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.7, y: 0.7 }}
                />
            </Animated.View>

            {children}
        </View>
    );
};

export default GradientBackground;
