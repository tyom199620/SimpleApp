import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Back from '../assets/images/back';
import Dots from '../assets/images/dots';
import Colors from '../constants/Colors';
import scale from '../helpers/Theme';
import Avatar from './Avatar';

export default function Header({ setOpen, opened, title, subTitle }) {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <TouchableOpacity
                    delayPressIn={0}
                    style={styles.btn}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Back />
                </TouchableOpacity>
                <TouchableOpacity
                    delayPressIn={0}
                    style={styles.btn}
                    onPress={() => {
                        setOpen && setOpen(!opened);
                    }}>
                    <Dots />
                </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <Avatar avatarStyle={styles.avatar} />
                <View>
                    <Text style={styles.name}>{title || 'Stefan'}</Text>
                    <Text style={styles.status}>{subTitle || 'Online'}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        padding: 8.5 / scale,
        backgroundColor: Colors.button.background
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 60 / scale,
        height: 60 / scale,
        marginRight: 20 / scale,
        borderRadius: 30 / scale
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2 / scale,
        paddingBottom: 11.5 / scale,
        paddingHorizontal: 11.5 / scale
    },
    name: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 20 / scale,
        lineHeight: 23 / scale,
        color: Colors.dark.text,
        marginBottom: 3 / scale
    },
    status: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14 / scale,
        lineHeight: 16 / scale,
        color: Colors.dark.text
    },
    btn: {
        width: 40 / scale,
        height: 40 / scale,
        alignItems: 'center',
        justifyContent: 'center'
    }
});