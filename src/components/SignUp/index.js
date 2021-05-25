import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, View} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo2.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Witaj w manadżerze kontaktów</Text>
        <Text style={styles.subTitle}>Stwórz konto</Text>

        <View style={styles.form}>
          <Input
            label="Nazwa użytkownika"
            iconPosition="right"
            placeholder="Podaj nazwę użytkownika"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />

          <Input
            label="Imię"
            iconPosition="right"
            placeholder="Podaj imię"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />

          <Input
            label="Nazwisko"
            iconPosition="right"
            placeholder="Podaj nazwisko"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Podaj email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />

          <Input
            label="Hasło"
            placeholder="Podaj hasło"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Masz już konto?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Logowanie</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
