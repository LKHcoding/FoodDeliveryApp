import * as React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Pressable, Text, TouchableHighlight, View } from 'react-native';
import { useCallback } from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// navigation 타입핑 하는 방식 예제 ( 공식문서 참고 )
// type HomeScreenProps = NativeStackScreenProps<RootStackParamList'>;
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({ navigation }: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  // const obj = {
  //   asdf: (
  //     <View>
  //       <Text>asdf</Text>
  //     </View>
  //   ),
  //   test: (
  //     <View>
  //       <Text>test</Text>
  //     </View>
  //   ),
  // };
  //
  // const valid = false;

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* Pressable, TouchableOpacity, TouchableNativeFeedback 등등 버튼의 종류가 있다. */}
        {/* 쓰면서 각 차이를 알아볼것 ( 공식문서 참고 ) */}
        {/* android, ios 스타일 차이없이 공통으로 하려면 보통 Pressable을 추천 */}
        <Pressable
          onPress={onClick}
          style={{ padding: 20, backgroundColor: 'blue' }}>
          <Text style={{ color: 'white' }}>Home Screen</Text>
        </Pressable>
        {/* {obj[valid ? 'asdf' : 'test']} */}
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Second View</Text>
      </View>
    </>
  );
}

function DetailsScreen({ navigation }: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    // NavigationContainer 가 있어야 리액트 네비게이션이 작동한다.
    <NavigationContainer>
      {/* Stack.Navigator 가 Stack.Screen 들을 그룹으로 묶어줘서  네비게이터 안에서 스크린 왔다갔다 함 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          // navigation, route 를 컴포넌트에 자동으로 넣어준다.
          component={HomeScreen}
          // react navigation 공식문서가서 options 종류 뭐있는지 살펴볼것
          options={{ title: '홈화면' }}
        />

        {/* <Stack.Screen name={'Details'} component={DetailsScreen} /> */}
        {/* props를 추가적으로 넘기고 싶을때 아래와 같은 방식 사용 ( 위에 방식이랑 별 차이없음 ) */}
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
