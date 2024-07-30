import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        marginLeft: 20,
        // bottom: 0,
    },
    question: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
        width: '70%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        marginTop: 40,
        padding: 5,
        lineHeight: 35,
        position: 'absolute',
        zIndex: 10,
        top: -(Dimensions.get('screen').height * 0.3),
    },
    optionContainer: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        width: '70%',
        marginBottom: 8,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    option: {
        padding: 10,
        color: 'white',
        width: '80%',
        fontWeight: 'bold',
        fontSize: 17,
    },
    optionCorrectImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    optionWrongImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        transform: [{ rotate: '180deg' }],
    },
});

export default styles;
