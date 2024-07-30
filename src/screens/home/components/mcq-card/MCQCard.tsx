import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import correctGif from '../../../../../assets/correct.gif';
import wrongGif from '../../../../../assets/wrong.gif';
import api from '../../../../utils/api';

interface MCQCardProps {
    question: MCQ;
}

const MCQCard: React.FC<MCQCardProps> = ({ question }) => {
    const [correctAnswers, setCorrectAnswers] = useState<MCQOption[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>();

    useEffect(() => {
        getAnswer();
    }, []);

    const getAnswer = async () => {
        const res = await api.revealAnswer(String(question.id));
        setCorrectAnswers(res.correct_options || []);
    };

    const onPressOption = (id: string) => {
        setSelectedOption(id);
    };

    return (
        <View style={styles.card}>
            <Text style={styles.question}>{question.question}</Text>
            {question.options.map((option, index) => {
                const isThisOptionSelected = option.id === selectedOption;
                const isCorrectOption = correctAnswers.some((e) => e.id === option.id);
                const isSelectedCorrect = isThisOptionSelected && isCorrectOption;
                const isSelectedIncorrect = isThisOptionSelected && !isCorrectOption;

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onPressOption(option.id)}
                        disabled={!!selectedOption}
                        style={[
                            styles.optionContainer,
                            isSelectedCorrect && { backgroundColor: 'rgba(19, 128, 48,0.8)' },
                            isSelectedIncorrect && { backgroundColor: 'rgba(230, 99, 90,0.8)' },
                            selectedOption && !isThisOptionSelected && isCorrectOption
                                ? { backgroundColor: 'green' }
                                : {},
                        ]}>
                        <Text style={styles.option}>{option.answer}</Text>
                        {selectedOption && isThisOptionSelected && (
                            <Image
                                source={isCorrectOption ? correctGif : wrongGif}
                                style={isCorrectOption ? styles.optionCorrectImage : styles.optionWrongImage}
                            />
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default MCQCard;
