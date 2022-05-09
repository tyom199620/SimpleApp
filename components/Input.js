import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import scale from '../helpers/Theme';

export default function CustomInput({
    Icon,
    name,
    onChange,
    lines = 1,
    size = 13,
    icon = '',
    secure = false,
    inputSyle = {},
    iconColor = '',
    editable = true,
    placeholder = '',
    containerStyle = {},
    placeholderColor = ''
}) {

    return (
        <View style={[styles.row, containerStyle]}>
            {Icon ? <Icon size={size} /> : icon ? (<Ionicons name={icon} size={size} color={iconColor || Colors.input.placeholder} />) : null}
            <TextInput
                editable={editable}
                multiline={lines > 1}
                numberOfLines={lines}
                secureTextEntry={secure}
                placeholder={placeholder || ''}
                style={[styles.input, inputSyle]}
                onChangeText={(text) => { onChange && onChange(name, text); }}
                placeholderTextColor={placeholderColor || Colors.input.placeholder}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20 / scale,
        paddingVertical: 10 / scale,
        paddingHorizontal: 15 / scale,
        backgroundColor: Colors.input.background
    },
    input: {
        width: '86%',
        marginHorizontal: 16 / scale
    }
});