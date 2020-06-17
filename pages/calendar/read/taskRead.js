

import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';

import {Calendar} from 'react-native-calendars';
import {Review} from './review.js';

import { 

   Switch, Title, Paragraph, IconButton, Divider, Avatar, Chip, Button
} from 'react-native-paper';


class TaskReadSmall extends Component {

  render() {

    return(

      <View>
      	<Divider />
      	<View style={{ padding: 5, flexDirection: 'row' }}>
      		<View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
      			<Avatar.Icon size={40} icon='notifications' /> 
      		</View>
      		<View>
      			<View style={{flexDirection: 'row', alignItems: 'center'}}>
      				<Title>05:00</Title>
      				<Text style={{color: '#fc354c', marginLeft: 5}}>0:17</Text>
      			</View>
      			<Paragraph>Wake Up</Paragraph>
      		</View>
      		<View style={{flex: 1, flexDirection: 'row-reverse'}}>
      			<Switch value='false' color='#fc354c' />
      			<IconButton icon='repeat' color='#000' />
      			<IconButton icon='check' color='#000' />
      		</View>
      	</View>
      </View>

    );
  }
}


class TaskReadMedium extends Component {

  render() {

    return(

      <View>
      	<Divider />
      	<View style={{ padding: 5, flexDirection: 'row' }}>
      		<View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
      			<Avatar.Icon size={40} icon='notifications' /> 
      		</View>
      		<View>
      			<View style={{flexDirection: 'row', alignItems: 'center'}}>
      				<Title>Wake Up</Title>
      				<Text style={{color: '#fc354c', marginLeft: 5}}>0:17</Text>
      			</View>
      		</View>
      		<View style={{flex: 1, flexDirection: 'row-reverse', alignItems: 'center'}}>
            <Review />
      		</View>
      	</View>
      </View>

    );
  }
}


class TaskRepeats extends Component {

  render(){

    return(

      <View>
        <View style={{marginTop: 25, marginBottom: 15}}>
				<Calendar style={{marginBottom: 15}} 
					onDayPress={ (day) => { } }  
					theme={{arrowColor: '#fc354c', todayTextColor:'#fc354c'}} />
        </View>
        <View>
          <View style={{marginBottom: 10}}>
            <Button mode='text' color='#fc354c'>+repeat</Button>
          </View>
          <TaskReadSmall />
        </View>
      </View>
    );
  }
}


class SubTasks extends Component {

  render(){

    return(

      <View>
        <Button mode='text' color='#fc354c'>+subtask</Button>
        <TaskReadMedium />
      </View>
    );
  }
}


class TaskReadLarge extends Component {

  render(){

    return(

      <ScrollView style={{margin: 10}}>
        <View style={{marginBottom: 25}}>
      <View style={{marginBottom: 25}}>
        <Text>SUMMER BODY / Eat Healthy / Drink Water</Text>
      </View>
      <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
	      <View>
	        <Avatar.Image size={128} source={require('../../../assets/img/fitness_goal.jpg')} />
	      </View>
	      <View style={{paddingLeft: 5}}>    
            <Title>Drink Water</Title>
	        <View><Review /></View>
          <View style={{maxWidth: 115}}>
            <Chip icon='schedule' mode='flat'>Until Forever</Chip>
          </View>
	      </View>
      </View>
          <View>
            <Title>Notes</Title>
	          <Paragraph>
              At least 8 glasses a day would make my body more active, 
              positive and full of life.
	          </Paragraph>
	        </View>
        </View>
        <View>
        <TaskRepeats />
        </View>
      </ScrollView>
    );
  }
}


export class TaskRead extends Component {

  
  constructor(props){

    super(props);
    this.state = {daySelected: new Date()};
  }

  render() {
  
      {if(1){
    return (
  
      <View>
        <TaskReadSmall />
      </View>
    );}
    
    else{

      return (

        <View style={{flexDirection:'row', justifyContent: 'center', padding: 20}}>
          <Text style={{color: '#fc354c'}}>No Events</Text>
        </View>
      );
    }
    }
  }
}

