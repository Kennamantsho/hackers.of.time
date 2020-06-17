
import React, {Component} from 'react';

import {CalendarCreate} from './create/index.js';
import {CalendarRead} from './read/index.js';
import {TaskRead} from './read/taskRead.js';
import {Review} from './read/review.js';
import {CalendarUpdate} from './update/index.js';
import {CalendarDelete} from './delete/index.js';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const HomeStack = createStackNavigator({

    CalendarCreate: { screen: CalendarCreate, },
    CalendarRead: { screen: CalendarRead, },
    CalendarUpdate: { screen: CalendarUpdate, },
    CalendarDelete: { screen: CalendarDelete, },
    TaskRead: { screen: TaskRead },
    Review: { screen: Review }
  },
  {

    initialRouteName: 'CalendarRead',
    headerMode: 'none'
});

const AppContainer = createAppContainer(HomeStack);

export class CalendarView extends Component {

  render() { 

    return(
      
      <AppContainer />
    ); 
  }
}

