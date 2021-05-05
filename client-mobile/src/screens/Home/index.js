import MasonryList from '@react-native-seoul/masonry-list';
import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ActionCard from '../../components/ActionCard';
import BackgroundCurve from '../../components/BackgroundCurve';
import { colors } from '../../consts/styles';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([
        {
            id: '1',
            title: 'Je ramasse les déchets',
            description: 'Lorem ipsum',
            category: 'xxx',
            image_url: 'http://8-second.com/static/images/recom/dechets.jpg'
        },
        {
            id: '2',
            title: 'Les 4 saisons',
            description: 'Lorem ipsum',
            category: 'xxx',
            image_url:
                'https://i.pinimg.com/236x/a5/b6/13/a5b613dd09e57e2f4bb31eb85854deb6.jpg'
        },
        {
            id: '3',
            title: "Le train plutôt que l'avion",
            description: 'Lorem ipsum',
            category: 'xxx',
            image_url:
                'https://i.pinimg.com/564x/70/b5/bf/70b5bff131e3d876aa2b6bb3e33ca3c1.jpg'
        },
        {
            id: '4',
            title: 'Eteindre ses appareils en veille',
            description: 'Lorem ipsum',
            category: 'xxx',
            image_url:
                'https://i.pinimg.com/564x/d4/64/44/d46444fa464310f6c94abf6fa29b12ff.jpg'
        }
    ]);

    return (
        <SafeAreaProvider>
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center'
                }}
            >
                <MasonryList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ActionCard key={item.id} item={item} focused={true} />
                    )}
                    numColumns={2}
                />
            </View>

            <BackgroundCurve
                firstColor='white'
                secondColor={colors.lightGreen}
            />
        </SafeAreaProvider>
    );
};

export default HomeScreen;
