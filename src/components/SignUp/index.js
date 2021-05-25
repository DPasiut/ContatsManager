import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, View} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = () => {
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
            error={'to pole jest wymagane'}
          />

            <Input
                label="Imię"
                iconPosition="right"
                placeholder="Podaj imię"
                error={'to pole jest wymagane'}
            />

            <Input
                label="Nazwisko"
                iconPosition="right"
                placeholder="Podaj nazwisko"
                error={'to pole jest wymagane'}
            />
            <Input
                label="Email"
                iconPosition="right"
                placeholder="Podaj email"
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
