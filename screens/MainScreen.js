import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { TabView } from 'react-native-tab-view';

import InifiniteList from '../components/InfiniteList';
import ContactCard from '../components/ContactCard';
import TourCard from '../components/TourCard';
import Menu from '../assets/images/menu';
import Colors from '../constants/Colors';
import APICalls from '../api/APICalls';
import scale from '../helpers/Theme';

export default function MainScreen({ navigation }) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const getTours = async (pageIndex, signal, pageSize) => {
        return APICalls.tours(pageIndex, signal, pageSize);
    };

    const getUsergroups = async (pageIndex, signal, pageSize) => {
        return APICalls.usergroups(pageIndex, signal, pageSize);
    };

    const [routes] = React.useState([
        { key: 'tours', title: 'My tours' },
        { key: 'usergroup', title: 'My usergroup ' },
        { key: 'contacts', title: 'Contacts' },
    ]);

    React.useEffect(() => {
        getTours(1).then(res => {
            console.log(res);
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.7}
                    onPress={() => {
                        navigation.openDrawer();
                    }}>
                    <Menu size={23} color={Colors.dark.text} />
                </TouchableOpacity>
                <Text style={styles.title}>SimplyTourIt</Text>
            </View>
            <TabView
                renderTabBar={(props) => {
                    const { navigationState: { index, routes }, jumpTo } = props;
                    return (
                        <View style={styles.tab}>
                            {routes.map((route, id) => {
                                return (
                                    <TouchableOpacity
                                        key={route.key}
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            jumpTo(route.key);
                                        }}>
                                        <View style={styles.row}>
                                            <Text style={styles.tabName}>{route.title}</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.count}>3</Text>
                                            </View>
                                        </View>
                                        {id === index ? <View style={styles.tabLine} /> : null}
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    )
                }}
                onIndexChange={setIndex}
                renderScene={(props) => {
                    const Component = props.route.key === 'tours' ? TourCard : props.route.key === 'usergroup' ? TourCard : ContactCard;
                    let request = index === 1 ? getUsergroups : getTours;
                    return (
                        <View style={{ flex: 1, backgroundColor: Colors.dark.text }}>
                            {/* <InifiniteList
                                request={request}
                                forComponent={index}
                                Component={Component}
                            /> */}
                        </View>
                    )
                }}
                navigationState={{ index, routes }}
                initialLayout={{ width: layout.width }}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.blue,
        paddingHorizontal: 17 / scale
    },
    title: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 20 / scale,
        marginLeft: -5 / scale,
        lineHeight: 23 / scale,
        color: Colors.dark.text
    },
    tab: {
        flexDirection: 'row',
        paddingTop: 8 / scale,
        backgroundColor: Colors.blue,
        justifyContent: 'space-around'
    },
    btn: {
        width: 57 / scale,
        height: 57 / scale,
        justifyContent: 'center'
    },
    tabName: {
        fontWeight: '500',
        textAlign: 'center',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        lineHeight: 18 / scale,
        color: Colors.dark.text
    },
    tabLine: {
        width: '100%',
        height: 4 / scale,
        marginTop: 10 / scale,
        borderTopLeftRadius: 6 / scale,
        borderTopRightRadius: 6 / scale,
        backgroundColor: Colors.dark.text
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    circle: {
        width: 20 / scale,
        height: 20 / scale,
        alignItems: 'center',
        marginLeft: 6 / scale,
        borderRadius: 10 / scale,
        justifyContent: 'center',
        backgroundColor: Colors.dark.text
    },
    count: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 13 / scale,
        lineHeight: 15 / scale,
        color: Colors.tab.text
    }
});