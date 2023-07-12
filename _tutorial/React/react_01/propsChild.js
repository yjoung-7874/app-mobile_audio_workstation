import React from 'react';
import {View, Text} from 'react-native'

// child component could freely use data from parents component as follow 
const PropsChild = (props) => {
    return (
        <View>
            <Text onPress={props.cState}>
                {props.sText}
            </Text>
        </View>
    )
} 

// reference : https://studyingych.tistory.com/52

export default PropsChild;