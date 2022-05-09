import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import scale from '../helpers/Theme';

export default function TopicCard({

}) {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
                navigate('Chat', { id: 1 });
            }}
            style={styles.container}>
            <View>
                <Text style={styles.topic}>Equipment</Text>
                <Text style={styles.date}>11:38 AM</Text>
            </View>
            <View style={styles.circle}>
                <Text style={styles.unreadCount}>2</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20 / scale,
        paddingRight: 13 / scale,
        paddingVertical: 11 / scale,
        borderBottomWidth: 0.3 / scale,
        justifyContent: 'space-between',
        borderBottomColor: Colors.tab.border
    },
    topic: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 16 / scale,
        lineHeight: 19 / scale,
        marginBottom: 4 / scale,
        color: Colors.tab.title
    },
    date: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 13 / scale,
        lineHeight: 15 / scale,
        color: Colors.tab.placeholder
    },
    circle: {
        width: 24 / scale,
        height: 24 / scale,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12 / scale,
        backgroundColor: Colors.button.background
    },
    unreadCount: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 13 / scale,
        lineHeight: 16 / scale,
        color: Colors.dark.text
    }
});