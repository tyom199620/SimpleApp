import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Avatar from '../components/Avatar';
import Back from '../assets/images/back';
import Colors from '../constants/Colors';
import Dots from '../assets/images/dots';
import scale from '../helpers/Theme';

export default function ChatHeader({
    title,
    opened,
    setOpen,
    subTitle,
    containerStyle,
    withDots = false
}) {
    const navigation = useNavigation();

    return (
        <View style={[styles.header, containerStyle]}>
            <View style={[styles.row, withDots && { justifyContent: 'space-between' }]}>
                <TouchableOpacity
                    delayPressIn={0}
                    style={[styles.btn, !withDots && { marginRight: 3 / scale }]}
                    onPress={() => {
                        console.log('clicked');
                        navigation.goBack();
                    }}>
                    <Back />
                </TouchableOpacity>
                <Avatar />
                <View style={styles.about}>
                    <Text style={styles.topic}>{title || 'Zugspitze mit den Kinder'}</Text>
                    <Text style={styles.date}>{subTitle || '2022-06-24'}</Text>
                </View>
                {withDots && (<TouchableOpacity
                    delayPressIn={0}
                    style={styles.btn}
                    onPress={() => {
                        setOpen && setOpen(!opened);
                    }}>
                    <Dots />
                </TouchableOpacity>)}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 9 / scale,
        paddingBottom: 6 / scale,
        paddingHorizontal: 8.5 / scale,
        backgroundColor: Colors.button.background
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        width: 40 / scale,
        height: 40 / scale,
        alignItems: 'center',
        justifyContent: 'center'
    },
    about: {
        marginLeft: 12 / scale
    },
    topic: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 17 / scale,
        lineHeight: 20 / scale,
        marginBottom: 3 / scale,
        color: Colors.dark.text
    },
    date: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14 / scale,
        lineHeight: 16 / scale,
        color: Colors.topic.subTitle
    }
});