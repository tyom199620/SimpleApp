import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Attach from '../../assets/images/attach';
import Send from '../../assets/images/send';
import Colors from '../../constants/Colors';
import scale from '../../helpers/Theme';

export default function Composer(props) {
    let contentSize = undefined;
    const onContentSizeChange = (e) => {
        const { contentSize: cs } = e.nativeEvent;
        // Support earlier versions of React Native on Android.
        if (!cs) {
            return;
        }
        if (!contentSize ||
            (contentSize &&
                (contentSize.width !== cs.width ||
                    contentSize.height !== cs.height))) {
            contentSize = cs;
            props.onInputSizeChanged(contentSize);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7}>
                <Attach />
            </TouchableOpacity>
            <TextInput
                accessible
                multiline={true}
                value={props.text}
                testID={props.placeholder}
                style={styles.textContainer}
                enablesReturnKeyAutomatically
                onChange={onContentSizeChange}
                placeholder={props.placeholder}
                editable={!props.disableComposer}
                onChangeText={props.onTextChanged}
                underlineColorAndroid='transparent'
                autoFocus={props.textInputAutoFocus}
                accessibilityLabel={props.placeholder}
                onContentSizeChange={onContentSizeChange}
                placeholderTextColor={props.placeholderTextColor || Colors.input.placeholder}
            />
            <TouchableOpacity
                style={styles.send}
                activeOpacity={0.7}
                onPress={() => {
                    const { text, onSend } = props;
                    if (text && onSend) {
                        onSend({ text: text.trim() }, true);
                    }
                }}>
                <Send size={25} color={Colors.dark.text} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10 / scale,
        paddingBottom: 12 / scale,
        paddingHorizontal: 13 / scale,
        backgroundColor: Colors.dark.text
    },
    textContainer: {
        flex: 1,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16 / scale,
        lineHeight: 19 / scale,
        color: Colors.light.text,
        marginHorizontal: 14 / scale
    },
    send: {
        top: -19 / scale,
        right: 13 / scale,
        width: 53 / scale,
        height: 53 / scale,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        borderRadius: 53 / 2 / scale,
        backgroundColor: Colors.button.background
    }
});