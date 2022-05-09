import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';

import Group from '../assets/images/Group';
import Colors from '../constants/Colors';
import scale from '../helpers/Theme';
import Avatar from './Avatar';

export default function TourCard({

}) {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigate('Tour', { id: 1 });
                }}>
                <Avatar />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigate('Topics', { id: 1 });
                }}
                style={styles.detail}>
                <View style={[styles.row, styles.sb]}>
                    <Text style={styles.title}>4000er mit Frank</Text>
                    <Text style={styles.date}>2022-06-24</Text>
                </View>
                <View style={[styles.row, styles.sb]}>
                    <View>
                        <Text style={styles.message}>High mountains tour</Text>
                        <View style={styles.row}>
                            <Group size={20} />
                            <Text style={styles.count}>7</Text>
                            <Rating
                                minValue={5}
                                ratingCount={5}
                                imageSize={16 / scale}
                            />
                        </View>
                    </View>
                    <View style={styles.circle}>
                        <Text style={styles.unreadCount}>2</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10 / scale
    },
    detail: {
        flex: 1,
        marginLeft: 6 / scale,
        paddingLeft: 6 / scale,
        paddingRight: 13 / scale,
        paddingVertical: 9 / scale,
        borderBottomWidth: 0.3 / scale,
        borderBottomColor: Colors.tab.border
    },
    title: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 16 / scale,
        lineHeight: 19 / scale,
        color: Colors.tab.title
    },
    message: {
        fontWeight: '500',
        fontStyle: 'normal',
        marginTop: 4 / scale,
        fontSize: 14 / scale,
        lineHeight: 16 / scale,
        marginBottom: 8 / scale,
        color: Colors.tab.message
    },
    count: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 14 / scale,
        marginLeft: 5 / scale,
        lineHeight: 16 / scale,
        marginRight: 16 / scale,
        color: Colors.button.background
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row'
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