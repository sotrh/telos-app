import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppList from './components/AppList';
import Common from './styles/Common';
import Example from './components/Example';
import Recipes from './components/Recipes';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer style={Common.container}>

        <Stack.Navigator
          screenOptions={{
            headerStyle: Common.statusBar,
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="Home"
            component={AppList}
          />
          <Stack.Screen
            name="Example"
            component={Example}
          />
			<Stack.Screen
            name="Recipes"
            component={Recipes}
          />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}
