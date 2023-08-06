import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStack from './stacks/HomeStack';

const Router = () => {
  return (
    <>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </>
  );
};

export default Router;
