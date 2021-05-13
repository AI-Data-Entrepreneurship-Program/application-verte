import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

const RankingDescriptionSection = () => {
    return (
        <View style={styles.eventDescription}>
            <Text style={styles.title}>Lissive DIY</Text>

            <View style={styles.eventInfoHeader}>
                <View style={styles.eventDate}>
                    <View style={styles.bubble}>
                        <Text>02 avr</Text>
                    </View>
                    <Text>au</Text>
                    <View style={styles.bubble}>
                        <Text>09 avr</Text>
                    </View>
                </View>

                <View style={styles.bubble}>
                    <Text>144 participants</Text>
                </View>
            </View>

            <Text style={styles.subtitle}>A propos</Text>
            <Text style={styles.about}>
                Consectetur tempor dolor consequat tempor. Adipisicing commodo
                cillum voluptate nostrud ipsum elit incididunt do. In irure ex
                do quis Lorem mollit do aliqua et voluptate. Occaecat sit
                officia enim irure irure aliqua non esse magna laboris eu magna.
                Labore veniam reprehenderit veniam commodo minim duis cupidatat
                aliqua eiusmod. Ad incididunt est pariatur mollit reprehenderit
                laboris dolor cillum laborum cupidatat qui.
            </Text>
        </View>
    );
};

export default RankingDescriptionSection;
