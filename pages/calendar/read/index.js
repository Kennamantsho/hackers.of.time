
import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

import {Review} from './review.js';
import {TaskRead} from './taskRead.js';

import { Button, Switch } from 'react-native-paper';


class Header extends Component {

 render() {
 
    return(
      
      <View style={{ flex:1, flexDirection: 'row-reverse', 
          alignItems: 'center', marginTop: 10, marginBottom: 15}}>
        <View>
	        <Switch value='false' color='#fc354c' />
	      </View>
	      <View>
	        <Button mode='text' onPress={() => this.props.navigation.navigate('CalendarCreate')} 
            color='#fc354c'>+ task</Button>
        </View>
      </View>
    ); 
  }
}


export class CalendarRead extends Component {


  render() {
 
    return (
 
        <ScrollView>
	        <Header />
	        <View style={{marginLeft: 10, marginBottom: 25}}>
            <Review />
          </View>
	        <Calendar style={{marginBottom: 40}} 
            onDayPress={ (day) => { } }  
	          theme={{arrowColor: '#fc354c', todayTextColor:'#fc354c'}} />
	        <TaskRead />
        </ScrollView>
    ); 
  }
}
