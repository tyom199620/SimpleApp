import React from 'react';
import { StyleSheet, Image } from 'react-native';

import scale from '../helpers/Theme';

export default function Avatar({
    avatarStyle
}) {

    return (
        <Image
            style={[styles.avatar, avatarStyle]}
            source={require('../assets/images/Avatar.png')}
        />
    )
};

const styles = StyleSheet.create({
    avatar: {
        width: 57 / scale,
        height: 57 / scale,
        borderRadius: 57 / 2 / scale
    }
});