import {useState} from 'react';
import React from 'react';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {BACKEND_URL} = envs;

  console.log('BACKEND_DEV', BACKEND_URL);
  console.log('__DEV__', __DEV__);
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'wymagane minimum 6 znaków'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'To pole jest wymagane'};
      });
    }
  };

  const onSubmit = () => {
    console.log('form', form);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Proszę podać nazwę użytkownika'};
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Proszę podać imię'};
      });
    }

    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Proszę podać nazwisko'};
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Proszę podać email'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Proszę podać hasło'};
      });
    }
    //validations
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
