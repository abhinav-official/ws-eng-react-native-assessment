import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - (Platform.select({ android: 0, ios: 78 }) ?? 0),
        justifyContent: 'flex-end',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
    },
    infoContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    infoTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
    },
    infoText: {
        fontSize: 14,
        color: 'white',
        marginTop: 5,
        // fontWeight: '600',
    },
    playlistContainer: {
        flexDirection: 'row',
        backgroundColor: '#191a19',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    playlistLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playlistImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    playlistText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    },
});
