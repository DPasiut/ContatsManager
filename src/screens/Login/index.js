import {Text, View, TextInput} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
        error={'to pole jest wymagane'}
      />

      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />

      <CustomButton secondary title="Submit" loading={true} disabled={true}/>
    </Container>
  );
};

export default Login;
