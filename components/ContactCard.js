import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Mute from '../assets/images/mute';

import Colors from '../constants/Colors';
import scale from '../helpers/Theme';
import Avatar from './Avatar';

export default function ContactCard({

}) {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={() => {
                navigate('Chat', { id: 1 });
            }}>
            <Avatar />
            <View style={styles.detail}>
                <View style={[styles.row, styles.sb]}>
                    <View>
                        <View style={[styles.row, { marginBottom: 4 / scale }]}>
                            <Text style={styles.title}>Stefan</Text>
                            <Mute size={18} color={Colors.tab.icon} />
                        </View>
                        <Text style={styles.date}>Online</Text>
                    </View>
                    <View style={styles.circle}>
                        <Text style={styles.unreadCount}>2</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5 / scale,
        paddingLeft: 10 / scale,
        paddingRight: 13 / scale,
        paddingVertical: 12 / scale,
        borderBottomWidth: 0.3 / scale,
        borderBottomColor: Colors.tab.border
    },
    detail: {
        flex: 1,
        paddingLeft: 12 / scale
    },
    title: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 17 / scale,
        lineHeight: 20 / scale,
        color: Colors.tab.name
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 13 / scale,
        lineHeight: 15 / scale,
        color: Colors.tab.placeholder
    },
    sb: {
        justifyContent: 'space-between'
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