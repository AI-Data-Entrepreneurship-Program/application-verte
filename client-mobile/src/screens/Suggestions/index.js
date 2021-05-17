import React, { useState } from 'react';
import { FlatList, Modal, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCurve from '../../components/BackgroundCurve';
import PostButton from '../../components/PostButton';
import SuggestionCard from '../../components/SuggestionCard';
import { colors } from '../../consts/styles';
import styles from './styles';

const SuggestionsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const newPostHandler = props => {
        console.log('new post !');
    };

    const fakeSuggest = [
        { title: 'Alex', id: '1', content: 'Je poste un message ici' },
        {
            title: 'Good News',
            id: '2',
            content: 'Baisse des émissions Co2 en 2020'
        },
        { title: 'Alex', id: '3', content: 'Je poste un message ici' },
        { title: 'Alex', id: '4', content: 'Je poste un message ici' },
        { title: 'Alex', id: '5', content: 'Je poste un message ici' },
        { title: 'Alex', id: '6', content: 'Je poste un message ici' }
    ];

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.buttonContainer}>
                <PostButton onPress={() => setModalVisible(!modalVisible)} />
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={fakeSuggest}
                    renderItem={item => (
                        <SuggestionCard
                            title={item.item.title}
                            content={item.item.content}
                        />
                    )}
                />
            </View>
            <BackgroundCurve
                firstColor='white'
                secondColor={colors.lightGreen}
            />
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Mon message'
                                style={styles.input}
                            />
                        </View>
                        <PostButton
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default SuggestionsScreen;
