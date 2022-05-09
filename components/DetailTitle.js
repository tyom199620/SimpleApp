import { StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';
import scale from '../helpers/Theme';

export default function DetailTitle({
    title
}) {

    return (
        <Text style={styles.title}>{title || 'Information'}</Text>
    )
};

const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        marginTop: 19 / scale,
        lineHeight: 18 / scale,
        marginBottom: 9 / scale,
        color: Colors.button.background
    }
});