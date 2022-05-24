import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ing from './Ing';
import Complete from './Complete';

interface Props {}

const Stack = createNativeStackNavigator();

const Delivery = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName={'Ing'}>
      {/* 지도화면이 Ing 인데 지도는 로딩시간, 메모리 문제 많이 생기기 때문에 */}
      {/* 지도는 Stack 으로 화면을 구성함 */}
      <Stack.Screen
        name={'Ing'}
        component={Ing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Complete'}
        component={Complete}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Delivery;
