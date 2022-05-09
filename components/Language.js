import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Germany from '../assets/images/germany';
import Russia from '../assets/images/russia';
import UK from '../assets/images/uk';

const languages = [
    {
        lang: 'gr',
        icon: Germany
    },
    {
        lang: 'ru',
        icon: Russia
    },
    {
        lang: 'uk',
        icon: UK
    }
];

export default function Language({
    containerStyle = {}
}) {

    return (
        <View style={[styles.container, containerStyle]}>
            {languages.map(language => {
                return (
                    <TouchableOpacity
                        key={language.lang}
                        activeOpacity={0.7}
                        onPress={() => {

                        }}>
                        <language.icon />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});