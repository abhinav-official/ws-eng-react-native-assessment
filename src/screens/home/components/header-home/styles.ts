import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        paddingTop: '14%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
    },

    headerLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerCenterContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
    },
    headerRightContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
    },
    headerLeftImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    headerLeftText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: `rgba(255, 255, 255, 0.7)`,
    },
    headerCenterTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    headerCenterTitleUnderline: {
        width: 40,
        height: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 5,
    },
    headerRightSearchImage: {
        width: 20,
        height: 20,
    },
});
