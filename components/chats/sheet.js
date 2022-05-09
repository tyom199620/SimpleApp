import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ShareMessage from '../../assets/images/messageShare';
import Pencil from '../../assets/images/pencil';
import Share from '../../assets/images/share';
import Trash from '../../assets/images/trash';
import Colors from '../../constants/Colors';
import scale from '../../helpers/Theme';

export default function Sheet({ message }) {

    return (
        <View style={styles.sheet}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {

                }}
                style={styles.container}>
                <ShareMessage size={25} color={Colors.drawer.icon} />
                <Text style={styles.title}>Reply</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {

                }}
                style={styles.container}>
                <Share size={25} color={Colors.drawer.icon} />
                <Text style={styles.title}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {

                }}
                style={styles.container}>
                <Pencil size={25} color={Colors.drawer.icon} />
                <Text style={styles.title}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {

                }}
                style={styles.container}>
                <Trash size={25} color={Colors.button.red} />
                <Text style={styles.title}>Delete</Text>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({
    sheet: {
        borderRadius: 5 / scale,
        paddingVertical: 7 / scale,
        backgroundColor: Colors.dark.text
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 13 / scale,
        paddingLeft: 21 / scale,
        paddingBottom: 14 / scale
    },
    title: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        lineHeight: 18 / scale,
        marginLeft: 29 / scale,
        color: Colors.light.text
    }
});