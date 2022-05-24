import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

interface Props {}

const Settings = (props: Props) => {
  const [count, setCount] = useState(1);

  return (
    <View>
      <Pressable onPress={() => setCount(prev => prev + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
