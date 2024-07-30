import { Image } from 'expo-image';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import bookmarkImage from '../../../../../assets/bookmark.svg';
import commentImage from '../../../../../assets/comment.svg';
import heartImage from '../../../../../assets/heart.svg';
import shareImage from '../../../../../assets/share.svg';

const ActionButtonsHome = ({ profile }: { profile: MCQUser }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: profile.avatar }} style={styles.profileImage} />

            <View style={styles.iconContainer}>
                <Image source={heartImage} style={styles.iconImage} />
                <Text style={styles.iconText}>87</Text>
            </View>
            <View style={styles.iconContainer}>
                <Image source={commentImage} style={styles.iconImage} />
                <Text style={styles.iconText}>2</Text>
            </View>
            <View style={styles.iconContainer}>
                <Image source={bookmarkImage} style={styles.iconImage} />
                <Text style={styles.iconText}>203</Text>
            </View>
            <View style={styles.iconContainer}>
                <Image source={shareImage} style={styles.iconImage} />
                <Text style={styles.iconText}>17</Text>
            </View>
        </View>
    );
};

export default ActionButtonsHome;
