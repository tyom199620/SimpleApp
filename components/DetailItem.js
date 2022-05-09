import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

import Colors from '../constants/Colors';
import scale from '../helpers/Theme';

export default function DetailItem({
    title,
    subTitle,
    children,
    titleStyle,
    subTitleStyle,
    titleComponent,
    containerStyle,
    withMap = false,
    withTitle = true
}) {

    return (
        <View style={[styles.type, containerStyle]}>
            <View>
                {titleComponent}
                {withTitle && !titleComponent && (<Text style={[styles.title, titleStyle]}>{title || 'Stefan'}</Text>)}
                <Text style={[styles.subTitle, subTitleStyle, withMap && { marginBottom: 6 / scale }]}>{subTitle || 'Username'}</Text>
                {withMap && (
                    <MapView
                        style={styles.map}
                        provider={'google'}
                        cacheEnabled={true}
                        mapType={'standard'}
                        toolbarEnabled={true}
                    />
                )}
            </View>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    type: {
        paddingRight: 20 / scale,
        paddingVertical: 12 / scale
    },
    title: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        lineHeight: 18 / scale,
        marginBottom: 6 / scale,
        color: Colors.profile.name
    },
    subTitle: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12 / scale,
        lineHeight: 14 / scale,
        color: Colors.profile.userName
    },
    map: {
        height: 120 / scale
    }
});