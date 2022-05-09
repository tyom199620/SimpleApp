import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import Colors from '../../constants/Colors';
import Read from '../../assets/images/read';
import scale from '../../helpers/Theme';

export default function Bubble(props) {
    const { currentMessage: {
        text,
        createdAt,
    } } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onLongPress={() => {
                props.onLongPress(props.currentMessage);
            }}
            style={bubbleStyle[props.position].container}>
            {props.position === 'left' && (
                <View style={styles.triangle}>
                    <View style={styles.miniCircle} />
                    <View style={styles.circle} />
                    <View style={styles.square} />
                </View>
            )}
            <View style={[bubbleStyle[props.position].chat, props.currentMessage.user?._id === props.nextMessage.user?._id && { borderBottomRightRadius: 5 / scale }]}>
                {props.position === 'left' && (<Text style={styles.name}>{props.currentMessage?.user?.name}</Text>)}
                <Text style={styles.mesasge}>{text}</Text>
                <View style={styles.row}>
                    <Text style={[styles.time, props.position === 'right' && { marginRight: 3 / scale }]}>{moment(createdAt).format('LT')}</Text>
                    {props.position === 'right' && (<Read size={18} color={'green'} />)}
                </View>
            </View>
            {props.position === 'right' && (
                props.currentMessage.user?._id !== props.nextMessage.user?._id ?
                    <View style={[styles.triangle, { transform: [{ rotateY: '180deg' }] }]}>
                        <View style={[styles.miniCircle, { backgroundColor: Colors.chat.main, marginRight: -12 / scale }]} />
                        <View style={[styles.circle, { marginRight: -5 / scale }]} />
                        <View style={[styles.square, { backgroundColor: Colors.chat.main }]} />
                    </View>
                    : <View style={{ width: 6 / scale }} />
            )}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    triangle: {
        marginLeft: 0,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    },
    miniCircle: {
        zIndex: 1,
        width: 1.5 / scale,
        height: 1.5 / scale,
        marginRight: -11 / scale,
        backgroundColor: Colors.dark.text,
        borderTopLeftRadius: 0.75 / scale,
        borderBottomLeftRadius: 0.75 / scale
    },
    circle: {
        zIndex: 1,
        width: 17 / scale,
        height: 17 / scale,
        marginBottom: 1 / scale,
        marginRight: -6 / scale,
        borderRadius: 8.5 / scale,
        backgroundColor: Colors.chat.background
    },
    square: {
        width: 5 / scale,
        height: 10 / scale,
        backgroundColor: Colors.dark.text,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    name: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 14 / scale,
        lineHeight: 16 / scale,
        marginBottom: 5 / scale,
        color: Colors.button.background
    },
    mesasge: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16 / scale,
        lineHeight: 19 / scale,
        color: Colors.light.text,
        marginBottom: 2.5 / scale
    },
    time: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12 / scale,
        lineHeight: 14 / scale,
        color: Colors.chat.placeholder
    }
});

const bubbleStyle = {
    left: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start'
        },
        chat: {
            paddingTop: 6 / scale,
            paddingLeft: 8 / scale,
            paddingRight: 6 / scale,
            backgroundColor: 'white',
            paddingBottom: 3.5 / scale,
            borderTopLeftRadius: 5 / scale,
            borderTopRightRadius: 9 / scale,
            borderBottomRightRadius: 9 / scale,
        }
    }),
    right: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        chat: {
            paddingTop: 5 / scale,
            paddingLeft: 9 / scale,
            paddingRight: 6 / scale,
            paddingBottom: 3.5 / scale,
            borderTopLeftRadius: 9 / scale,
            borderTopRightRadius: 5 / scale,
            backgroundColor: Colors.chat.main,
            borderBottomLeftRadius: 9 / scale
        }
    })
};