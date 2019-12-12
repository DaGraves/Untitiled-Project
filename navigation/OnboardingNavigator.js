import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '../screens/Onboard/SignIn';
import SignUp from '../screens/Onboard/SignUp';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const OnboardStack = createStackNavigator(
  {
    SignUp: SignUp,
    SignIn: SignIn,
  },
  config
);

OnboardStack.path = '';

export default OnboardStack;