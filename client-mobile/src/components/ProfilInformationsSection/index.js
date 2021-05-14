import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


const ProfilInformationsSection = ({  }) => {
    return(
        <TouchableOpacity
            style={[styles.container]}
            activeOpacity={0.8}
        >
            <Image
                style={[styles.image]}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Icone_%C3%A9cologie_humaine.svg/480px-Icone_%C3%A9cologie_humaine.svg.png'}}
                resizeMode='contain'
            />
            <View style={styles.header}>
                <Text style={styles.User}>
                    Jean Ecolo
                </Text>
                <Text style={styles.City}>
                    Marseille
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProfilInformationsSection;
