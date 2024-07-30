import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        right: 10,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 70,
    },
    profileImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'white',
    },
    iconContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    iconImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    iconText: {
        fontSize: 14,
        color: 'white',
    },
});
