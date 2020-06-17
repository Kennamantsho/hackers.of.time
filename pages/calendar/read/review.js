
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Chip } from 'react-native-paper';


export class Review extends Component {

  render() {
  
    return (
    
      <View style={{maxWidth: 150}}>
	      <Chip icon='check-circle' >4 of 23 | missed 3 </Chip>
      </View>
    );
  }
}
