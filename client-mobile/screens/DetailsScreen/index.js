import React, { useContext } from 'react';
import { ImageBackground, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import PressableIcon from '../../components/PressableIcon';
import { ThemeContext } from '../../contexts/Theme';
import styles from './styles';

const DetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const { width } = useWindowDimensions();
    const { theme } = useContext(ThemeContext);
    const colors = Object.values(theme.colors);

    const arrowIconPressHandler = () => navigation.goBack();

    return (
        <SafeAreaView style={styles.container}>
            {item.image ? (
                <ImageBackground
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                    source={{ uri: item.image }}
                >
                    <PressableIcon
                        name='arrow-left'
                        size={28}
                        onPress={arrowIconPressHandler}
                    />
                </ImageBackground>
            ) : (
                <View
                    style={[
                        styles.image,
                        styles.imageContainer,
                        {
                            backgroundColor:
                                colors[
                                    Math.floor(Math.random() * colors.length)
                                ]
                        }
                    ]}
                >
                    <PressableIcon
                        name='arrow-left'
                        size={28}
                        onPress={arrowIconPressHandler}
                    />
                </View>
            )}

            <View style={styles.body}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Button
                    containerStyle={[styles.button, { width: width * 0.6 }]}
                    title='Add action'
                />
            </View>
        </SafeAreaView>
    );
};

export default DetailsScreen;
