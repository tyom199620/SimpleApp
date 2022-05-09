import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../constants/Colors';
import scale from '../helpers/Theme';

export default function CustomButton({
    label = '',
    labelStyle = {},
    disabled = false,
    onPress = () => { },
    containerStyle = {},
}) {

    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={onPress} style={[styles.container, containerStyle]}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4 / scale,
        alignItems: 'center',
        paddingVertical: 16 / scale,
        shadowOffset: {
            width: 0,
            height: 2 / scale
        },
        shadowRadius: 5 / scale,
        shadowOpacity: 0.3 / scale,
        backgroundColor: Colors.button.background
    },
    label: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 13 / scale,
        lineHeight: 15 / scale,
        color: Colors.input.text
    }
});