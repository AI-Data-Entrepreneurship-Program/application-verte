import React, { useState } from 'react';
import { View } from 'react-native';
import RadioButton from './RadioButton';

export default function RadioButtonContainer({ values, onPress }) {
    const [currentSelectedItem, setCurrentSelectedItem] = useState(-1);

    const _onPress = idx => {
        setCurrentSelectedItem(idx);
        onPress(idx);
    };

    const _renderRadioButtons = () => {
        return (values || []).map((item, idx) => {
            let isChecked = currentSelectedItem === idx ? true : false;

            return (
                <RadioButton
                    key={idx}
                    onRadioButtonPress={() => _onPress(idx)}
                    isChecked={isChecked}
                    text={item}
                />
            );
        });
    };

    return <View>{_renderRadioButtons()}</View>;
}
