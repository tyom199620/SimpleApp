import React from 'react';
import { SafeAreaView } from 'react-native';
import ChatHeader from '../components/ChatHeader';

import TopicCard from '../components/TopicCard';

export default function TopicsScreen() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChatHeader />
            <TopicCard />
            <TopicCard />
        </SafeAreaView>
    )
};