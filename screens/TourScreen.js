import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Rating } from 'react-native-ratings';
import Modal from 'react-native-modal';

import DetailTitle from '../components/DetailTitle';
import DetailItem from '../components/DetailItem';
import Share from '../assets/images/share';
import Header from '../components/Header';
import Link from '../assets/images/link';
import Colors from '../constants/Colors';
import scale from '../helpers/Theme';

export default function TourScreen() {
    const [opened, setOpen] = React.useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                opened={opened}
                setOpen={setOpen}
                title={'4000er mit Frank'}
                subTitle={'High mountains tour'}
            />
            <ScrollView
                style={styles.container}
                ontentContainerStyle={{ paddingBottom: 8 / scale }}>
                <DetailTitle title={'Tour info'} />
                <DetailItem
                    title={'Switzerland'}
                    subTitle={'Country'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'Mountaineering - II, WS, PD'}
                    subTitle={'Tour type complexity'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'Up to 5000 m'}
                    subTitle={'Tour conditions'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'Open'}
                    subTitle={'Status'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    titleComponent={
                        <Rating
                            ratingCount={5}
                            style={styles.rating}
                            imageSize={12 / scale}
                        />
                    }
                    subTitle={'Type rating'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    titleComponent={
                        <Rating
                            ratingCount={5}
                            style={styles.rating}
                            imageSize={12 / scale}
                        />
                    }
                    subTitle={'Condition rating'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'You climb to glacier-free and glaciated peaks over stepped, in places exposed (steeply sloping terrain) rock and firn ridges, some of which are also easy alpine climbing in the I. and II. Degrees and require crampons to incline up to 35 degrees.'}
                    subTitle={'Type description'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'up to 900 m or walking times up to 9 hours'}
                    subTitle={'Conditions description'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'2022-06-20 00:00:00'}
                    subTitle={'Start date'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'2022-06-20 00:00:00'}
                    subTitle={'End date'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'No'}
                    subTitle={'Private tour'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'No'}
                    subTitle={'Guide needed'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'No'}
                    subTitle={'Guided'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'3'}
                    subTitle={'Attendees min.'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'3'}
                    subTitle={'Attendees max.'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    title={'2'}
                    subTitle={'Open spots'}
                    containerStyle={styles.item}
                />
                <DetailItem
                    withMap={true}
                    withTitle={false}
                    subTitle={'Main destination'}
                    containerStyle={styles.item}
                />
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
                                <Text style={styles.title}>Share tour</Text>
                            </View>
                            <View style={styles.row}>
                                <Link size={25} />
                                <Text style={styles.title}>Open on site</Text>
                            </View>
                        </View>
                    }
                />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20 / scale,
        backgroundColor: Colors.dark.text
    },
    item: {
        borderTopWidth: 0.3 / scale,
        borderTopColor: Colors.profile.border
    },
    popup: {
        right: 0,
        position: 'absolute',
        borderRadius: 5 / scale,
        paddingVertical: 7 / scale,
        paddingHorizontal: 26 / scale,
        backgroundColor: Colors.dark.text,
        top: getStatusBarHeight() + 35 / scale
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14 / scale
    },
    rating: {
        marginBottom: 8 / scale,
        alignItems: 'flex-start'
    },
    title: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15 / scale,
        lineHeight: 18 / scale,
        marginLeft: 29 / scale,
        marginRight: 111 / scale,
        color: Colors.light.text
    }
});