import React from 'react';
import { Text, Button } from 'react-native';
import Common from '../styles/Common';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (
            <>
                <Text style={Common.text}>
                    This is an example app. It shows the basics of how to 
                    create a new miniapp for the Telos App. 
                    {'\n\n'}
                    Make sure that you update App.js to add a Stack.Screen
                    with the name and component of your miniapp.
                </Text>

                <Button
                    title="Go back to AppList"
                    onPress={() => {
                        this.navigation.navigate({name:"Home"});
                    }}
                />
            </>
        )
    }
}