import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

function renderIcon(iconame, iconsize, color='#000') {


    return <Icon name={iconame} size={18} color={color} />;
}

export { renderIcon };

