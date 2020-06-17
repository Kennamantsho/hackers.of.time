
import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { 

  DefaultTheme, Provider as PaperProvider, Appbar, BottomNavigation
} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import {CalendarView} from './pages/calendar/index.js';


const theme = {

  ...DefaultTheme,
  roundness: 2,
  colors: {
  
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#000',
    background: '#fff'
  }
};

const btnColor = '#f83600';


const ModalStack = createMaterialBottomTabNavigator({
 
    Calendar: {screen: CalendarView, 
      navigationOptions: {

        tabBarLabel: 'Calendar',
        tabBarIcon: () => 
          <View>
            <Icon style={{color: '#000'}} name={'ios-calendar'} size={21} />
          </View>
      }
    }
},
{
  initialRouteName: 'Calendar',
  activeColor: '#f83600',
  inactiveColor: '#000',
  barStyle: {backgroundColor: '#fff'}
});

const AppContainer = createAppContainer(ModalStack);

export default class App extends Component {


  render(){
  
    return(
    
      <PaperProvider theme={theme} settings={{icon: props => <Icon {...props} /> }}>
        <Appbar.Header>
          <Appbar.Content title="Task Manager"/>	    
        </Appbar.Header>
        <AppContainer />
      </PaperProvider>
    );
  }
} 
