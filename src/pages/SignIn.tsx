import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { RootStackParamList } from '../../App';
import DismissKeyboardView from '../components/DismissKeyboardView';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({ navigation }: SignInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onSubmit = () => {
    if (!email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    Alert.alert('알림', '로그인 성공');
  };
  const toSignUp = () => {
    navigation.navigate('SignUp');
  };

  const canNotLogin = !email.trim() || !password.trim();
  return (
    <DismissKeyboardView>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          ref={emailRef}
          style={styles.textInput}
          placeholder={'이메일을 입력해주세요'}
          value={email}
          onChangeText={text => setEmail(text)}
          importantForAutofill={'yes'}
          autoComplete={'email'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          // 다음이 있는 키보드라고 알려주기
          returnKeyType={'next'}
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          // 다음 인풋으로 넘어갈때 키보드 내려가는거 방지
          blurOnSubmit={false}
          // ios만 적용되는 옵션 ( 공식문서 참고 )
          clearButtonMode={'while-editing'}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          ref={passwordRef}
          style={styles.textInput}
          placeholder={'비밀번호를 입력해주세요'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          importantForAutofill={'yes'}
          autoComplete={'password'}
          textContentType={'password'}
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            canNotLogin
              ? styles.loginButton
              : [styles.loginButton, styles.loginButtonActive]
          }
          disabled={canNotLogin}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={toSignUp}>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
    </DismissKeyboardView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  buttonZone: {
    alignItems: 'center',
  },
});
