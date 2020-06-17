

import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import { 

   Button, Title, IconButton, TextInput, Switch, Subheading
} from 'react-native-paper';

class CalendarCreateStep1 extends Component {


    state = {isUrgencyOn: false}; 


  render(){

    return(

      <ScrollView style={{margin: 10 }}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10,
          justifyContent: 'center'}}>
            <Title>NEW TASK</Title>
            <IconButton icon='close' color='#fc354c' size={24} />
        </View>
        <View style={{flexDirection: 'row-reverse', marginBottom: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Is This Task Important?</Text>
            <Switch value={this.state.isUrgencyOn}  color='#fc354c' 
              onValueChange={() => this.setState({isUrgencyOn: !this.state.isUrgencyOn})} />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
          <TextInput label='Title' style={{width: '48%'}} mode='outlined' placeholder='e.g. ' />
          <TextInput label='Goal' style={{width: '48%'}} 
            mode='outlined' placeholder='e.g. ' />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
          <TextInput label='image' style={{width: '48%'}} mode='outlined' placeholder='e.g. ' />
          <TextInput label='date &amp; time' style={{width: '48%'}} 
            mode='outlined' placeholder='e.g. ' />
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput label='notes' mode='outlined' placeholder='e.g. ' />
        </View>
        <View style={{marginBottom: 15}}>
          <Button mode='contained' color='#fc354c'>create</Button>
        </View>
      </ScrollView>
    );
  }
}


class CalendarCreateStep2 extends Component {

  render(){

    return(
    
      <View>
      <View style={{padding: 40, backgroundColor: '#000'}}>
        <View>
          <View style={{marginBottom: 15, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
            <Subheading style={{color: '#fff'}}>Add Either (Optional):</Subheading>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Button mode='contained' color='#fff'>Repeats</Button>
            <Text style={{color: '#fff'}}>OR</Text> 
            <Button mode='contained' color='#fff'>Subtasks</Button>
          </View>
        </View>
     </View>
     <View style={{margin: 10}}>
        <View style={{marginBottom: 15}}>
          <Button mode='contained' color='#fc354c'>Done</Button>
        </View>
      </View>
      </View>
    );
  }
}


export class CalendarCreate extends Component {

  render(){

    return(

      <ScrollView>
        <CalendarCreateStep1 />
        <CalendarCreateStep2 />
      </ScrollView>
    );
  } 
}  
