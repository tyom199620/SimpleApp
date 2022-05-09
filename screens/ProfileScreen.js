import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Modal from 'react-native-modal';

import DetailTitle from '../components/DetailTitle';
import BlockUser from '../assets/images/userBlock';
import DetailItem from '../components/DetailItem';
import AddUser from '../assets/images/addUser';
import Pencil from '../assets/images/pencil';
import Trash from '../assets/images/trash';
import Header from '../components/Header';
import Switch from '../components/Switch';
import Colors from '../constants/Colors';
import { AuthContext } from '../context';
import scale from '../helpers/Theme';

export default function ProfileScreen({ navigation }) {
    const [opened, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState(false);
    const { state: { user } } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Header opened={opened} title={user.name} setOpen={setOpen} />
            <View style={styles.body}>
                <DetailTitle />
                <DetailItem
                    withTitle={false}
                    subTitle={'Administrator'}
                    containerStyle={styles.border}
                    subTitleStyle={styles.subTitle}
                />
                <DetailItem
                    title={user.email}
                />
                <DetailItem
                    title={'Notifications'}
                    containerStyle={styles.row}
                    subTitle={status ? 'On' : 'Off'}
                    children={<Switch value={status} onSwitch={setStatus} />}
                />
            </View>
            <Modal
                isVisible={opened}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setOpen(false)}
                onBackButtonPress={() => setOpen(false)}
                style={{ margin: 0, marginRight: 10 / scale }}
                children={
                    <View style={styles.popup}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.row, styles.item]}>
                            <AddUser size={23} />
                            <Text style={styles.itemTitle}>Add contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.row, styles.item]}>
                            <Trash size={23} />
                            <Text style={styles.itemTitle}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.row, styles.item]}>
                            <BlockUser size={23} />
                            <Text style={styles.itemTitle}>Complaint</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.row, styles.item]}>
                            <Pencil size={23} />
                            <Text style={styles.itemTitle}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.profile.background
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    body: {
        paddingLeft: 20 / scale,
        paddingBottom: 20 / scale,
        backgroundColor: Colors.dark.text
    },
    border: {
        borderBottomWidth: 0.3 / scale,
        borderBottomColor: Colors.profile.border
    },
    subTitle: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14 / scale,
        lineHeight: 16 / scale,
        color: Colors.profile.subTitle
    },
    popup: {
        right: 0,
        position: 'absolute',
        borderRadius: 5 / scale,
        paddingHorizontal: 16 / scale,
        backgroundColor: Colors.dark.text,
        top: getStatusBarHeight() + 10 / scale
    },
    item: {
        width: 163 / scale,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 11 / scale
    },
    itemTitle: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        lineHeight: 18 / scale,
        marginLeft: 20 / scale,
        color: Colors.tab.title
    }
});