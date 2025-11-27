import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface AvatarProps {
    iconName?: keyof typeof Feather.glyphMap;
    size?: number;
    color?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
    iconName = 'user',
    size = 80,
    color = '#fff',
}) => {
    return (
        <View style={styles.avatarContainer}>
            <Feather name={iconName} size={size} color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
});

export default Avatar;
