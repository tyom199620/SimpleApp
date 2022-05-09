import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

import Colors from '../../constants/Colors';
import scale from '../../helpers/Theme';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function Day(props) {
    const { currentMessage, previousMessage, containerStyle, labelStyle } = props;

    if (new Date(currentMessage.createdAt).getDate() === new Date(previousMessage.createdAt).getDate()) {
        return null;
    }
    const date = new Date(currentMessage.createdAt);
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.label, labelStyle]}>{date.getDate() + ' ' + monthNames[date.getMonth()]}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 8 / scale,
        marginBottom: 12 / scale,
        borderRadius: 31 / scale,
        paddingVertical: 3 / scale,
        paddingHorizontal: 7 / scale,
        backgroundColor: Colors.chat.day
    },
    label: {
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'center',
        fontSize: 13 / scale,
        lineHeight: 15 / scale,
        color: Colors.dark.text
    }
});