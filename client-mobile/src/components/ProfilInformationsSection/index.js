import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


const ProfilInformationsSection = ({  }) => {
    return(
        <TouchableOpacity
            style={[styles.container, { height: 150, width: 150 }]}
            activeOpacity={0.8}
        >
            <Image
                style={[styles.image]}
                source={{ uri: 'http://static.hitek.fr/img/actualite/2017/07/11/1w0qfi1.jpg'}}
                resizeMode='contain'
            />
            <View style={styles.header}>
                <Text
                    style={styles.User}
                >
                    Jean Neige
                </Text>
                <Text
                    style={styles.City}
                >
                    Castle Black
                </Text>
            </View>
        </TouchableOpacity>
    );

};

export default ProfilInformationsSection;
