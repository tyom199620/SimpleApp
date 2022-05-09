import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { GiftedChat } from 'react-native-gifted-chat'
import Modal from 'react-native-modal';

import MuteOutline from '../assets/images/MuteOutline';
import Composer from '../components/chats/composer';
import ChatHeader from '../components/ChatHeader';
import Footer from '../components/chats/footer';
import Bubble from '../components/chats/bubble';
import Sheet from '../components/chats/sheet';
import Trash from '../assets/images/trash';
import Share from '../assets/images/share';
import Day from '../components/chats/day';
import Colors from '../constants/Colors';
import Mask from '../assets/images/mask';
import scale from '../helpers/Theme';

export default function ChatScreen() {
    const [opened, setOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState(null);

    React.useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, []);

    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    // const [state, dispatch] = React.us

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <ChatHeader
                    withDots={true}
                    opened={opened}
                    setOpen={setOpen}
                />
            </View>
            <View style={{ ...StyleSheet.absoluteFill, backgroundColor: Colors.chat.background }}>
                <Mask color={Colors.chat.placeholder} width={'100%'} />
            </View>
            <GiftedChat
                onLongPress={(msg) => {
                    setMessage(msg);
                    SheetManager.show('chat');
                }}
                renderDay={(props) => {
                    return <Day {...props} />
                }}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                showAvatarForEveryMessage={true}
                renderBubble={(props) => {
                    return <Bubble {...props} />;
                }}
                renderChatFooter={() => {
                    return <Footer />;
                }}
                renderComposer={(props) => {
                    return (
                        <Composer
                            {...props}
                            multiline={true}
                            placeholder={'Message'}
                            placeholderTextColor={Colors.chat.messagePlaceholder}
                        />
                    )
                }}
            />
            <ActionSheet id="chat">
                <Sheet
                    message={message}
                />
            </ActionSheet>
            <Modal
                isVisible={opened}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setOpen(false)}
                onBackButtonPress={() => setOpen(false)}
                style={{ margin: 0, marginRight: 10 / scale }}
                children={
                    <View style={styles.popup}>
                        <View style={styles.row}>
                            <Share size={25} />
                            <Text style={styles.title}>Share topic</Text>
                        </View>
                        <View style={styles.row}>
                            <MuteOutline size={25} />
                            <Text style={styles.title}>Disable notifications</Text>
                        </View>
                        <View style={styles.row}>
                            <Trash size={25} color={Colors.button.red} />
                            <Text style={[styles.title, { color: Colors.button.red }]}>Delete</Text>
                        </View>
                    </View>
                }
            />
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    header: {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        position: 'absolute'
    },
    popup: {
        right: 0,
        position: 'absolute',
        borderRadius: 5 / scale,
        paddingVertical: 7 / scale,
        paddingHorizontal: 16 / scale,
        backgroundColor: Colors.dark.text,
        top: getStatusBarHeight() + 10 / scale
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14 / scale
    },
    title: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        lineHeight: 18 / scale,
        marginLeft: 29 / scale,
        marginRight: 84 / scale,
        color: Colors.light.text
    }
});