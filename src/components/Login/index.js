import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, View} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {REGISTER} from '../../constants/routeName';

const LoginComponent = () => {
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
        <Text style={styles.subTitle}>Zaloguj się</Text>

        <View style={styles.form}>
          <Input
            label="Nazwa użytkownika"
            iconPosition="right"
            placeholder="Podaj nazwę użytkownika"
            error={'to pole jest wymagane'}
          />

          <Input
            label="Hasło"
            placeholder="Podaj hasło"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Nie masz jeszcze konta?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Rejstracja</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
