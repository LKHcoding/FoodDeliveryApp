import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardView: React.FC<{ style?: StyleProp<ViewStyle> }> = ({
  children,
  ...props
}) => (
  // keyboard.dismiss 는 키보드가 내려가는거
  <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    // accessible 은 스크린 리더기에 속성 전달용
    accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
