import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ViewStyle } from 'react-native';

interface GradientBackgroundProps {
    colors?: string[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    style?: ViewStyle;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
    colors = ['transparent', '#aa00a9'],
    start = { x: 0, y: 1 },
    end = { x: 6, y: 1 },
    style,
}) => {
    return (
        <LinearGradient
            colors={colors}
            start={start}
            end={end}
            style={[styles.gradient, style]}
        />
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        zIndex: -1,
    },
});

export default GradientBackground;
