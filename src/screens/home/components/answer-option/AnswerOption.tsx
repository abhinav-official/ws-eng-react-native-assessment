import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface AnswerOptionProps {
    option: string;
    onPress: () => void;
    isCorrect?: boolean;
    isSelected?: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, onPress, isCorrect, isSelected }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.option, isCorrect && styles.correct, isSelected && styles.selected]}>
            <Text>{option}</Text>
        </TouchableOpacity>
    );
};

export default AnswerOption;
