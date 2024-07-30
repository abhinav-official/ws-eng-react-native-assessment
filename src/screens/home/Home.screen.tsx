import { Icon } from '@rneui/base';
import { Image } from 'expo-image';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import ActionButtonsHome from './components/action-buttons-home/ActionButtonsHome';
import HeaderHome from './components/header-home/HeaderHome';
import MCQCard from './components/mcq-card/MCQCard';
import styles from './styles';
import playlistImage from '../../../assets/playlist.svg';
import api from '../../utils/api';

const HomeScreen = () => {
    const [mcqs, setMcqs] = useState<MCQ[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchMCQs = async () => {
        const response = await api.fetchMCQs();
        const newData = [...mcqs, response];
        setMcqs(newData);
    };
    useEffect(() => {
        if (mcqs.length < 2) {
            fetchMCQs();
        }
    }, [mcqs]);

    const handleScrollEnd = (event) => {
        const newIndex = Math.floor(event.nativeEvent.contentOffset.y / event.nativeEvent.layoutMeasurement.height);
        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
            onScrollToNextItem(newIndex);
        }
    };

    const onScrollToNextItem = (index) => {
        // if (index === mcqs.length) {
        fetchMCQs();
        // }
    };

    const renderItem = ({ item }: { item: MCQ }) => {
        return (
            <View style={styles.contentContainer}>
                <Image style={styles.bgImage} source={item.image} />
                <MCQCard question={item} />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>AP US History</Text>
                    <Text style={styles.infoText}>{item.description}</Text>
                </View>
                <View style={styles.playlistContainer}>
                    <View style={styles.playlistLeftContainer}>
                        <Image source={playlistImage} style={styles.playlistImage} />
                        <Text style={styles.playlistText}> Playlist - {item.playlist}</Text>
                    </View>
                    <Icon name="chevron-right" color="white" />
                </View>
                <ActionButtonsHome profile={item.user} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <HeaderHome />
            <FlatList
                data={mcqs}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                pagingEnabled
                onMomentumScrollEnd={handleScrollEnd}
            />
        </View>
    );
};

export default HomeScreen;
