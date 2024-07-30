import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import activityImage from '../../../../../assets/activity.svg';
import searchImage from '../../../../../assets/search.svg';

const HeaderHome = () => {
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTimeSpent(timeSpent + 1);
        }, 1000 * 60);
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerLeftContainer}>
                    <Image source={activityImage} style={styles.headerLeftImage} />
                    <Text style={styles.headerLeftText}>{timeSpent}m</Text>
                </View>
                <View style={styles.headerCenterContainer}>
                    <Text style={styles.headerCenterTitle}>For You</Text>
                    <View style={styles.headerCenterTitleUnderline} />
                </View>
                <View style={styles.headerRightContainer}>
                    <Image source={searchImage} style={styles.headerRightSearchImage} />
                </View>
            </View>
        </>
    );
};

export default HeaderHome;
