import React from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Colors from '../constants/Colors';
import scale from '../helpers/Theme';

export default function Switch({
    value,
    onSwitch,
    circleStyle,
    selectionStyle
}) {
    const [status, setStatus] = React.useState(value || false);
    const anim = React.useRef(new Animated.Value(-2 / scale)).current;

    const press = () => {
        Animated.timing(anim, {
            duration: 300,
            toValue: (status ? -2 : 15) / scale,
            useNativeDriver: false
        }).start();
        onSwitch && onSwitch(!status);
        setStatus(!status);
    };

    return (
        <TouchableOpacity
            onPress={press}
            style={[styles.selection, selectionStyle]}>
            <Animated.View style={[styles.circle, { marginLeft: anim }, circleStyle]} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    selection: {
        width: 30 / scale,
        height: 13 / scale,
        borderRadius: 6.5 / scale,
        backgroundColor: Colors.button.background
    },
    circle: {
        width: 19 / scale,
        height: 19 / scale,
        marginTop: -3 / scale,
        borderWidth: 2 / scale,
        borderRadius: 9.5 / scale,
        backgroundColor: Colors.dark.text,
        borderColor: Colors.button.background
    }
});