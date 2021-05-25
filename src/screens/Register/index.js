import {useState} from 'react';
import {useContext} from 'react';
import React from 'react';
import RegisterComponent from '../../components/SignUp';
import register from '../../context/actions/auth/register';
//import axios from '../../helpers/axiosInterceptor';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

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
    //console.log('form', form);

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

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
