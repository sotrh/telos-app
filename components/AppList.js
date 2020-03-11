import React from 'react';
import { View, FlatList, Text } from 'react-native';

import Common, { highlightColor } from '../styles/Common';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class AppList extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;

        this.apps = [
            { name: "Example" },
            { name: "Recipes" },
        ]
    }

    navigateToApp(app) {
        this.navigation.navigate(app);
    }

    render() {
        return (
            <FlatList
                style={Common.list}
                data={this.apps}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <TouchableHighlight 
                        style={Common.listItem}
                        underlayColor={highlightColor}
                        onPress={()=>{
                            this.navigateToApp(item);
                        }}
                    >
                        <Text>{item.name}</Text>
                    </TouchableHighlight>
                )}
            //   ItemSeparatorComponent={this.renderSeparator}
            />
        )
    }
}