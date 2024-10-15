import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(1, 'Password should be at least 1 digit')
    .max(16, 'Password cannot be longer than 16 digits')
    .required('Password length is required')
});

export default function App2() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generate = (passwordLength) => {
    let characters = '';
    if (uppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (number) {
      characters += '1234567890';
    }
    generatePassword(characters, passwordLength);
  };

  const generatePassword = (characters, passwordLength) => {
    let passGenerate = '';
    for (let i = 0; i < Number(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      passGenerate += characters[randomIndex];
    }
    setGeneratedPassword(passGenerate);
  };

  const reset = () => {
    setLowercase(false);
    setUppercase(false);
    setNumber(false);
    setGeneratedPassword('');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ passwordLength: '' }}
        validationSchema={PasswordSchema}
        onSubmit={(values) => {
          generate(values.passwordLength);
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        }) => (
          <>
            <Text style={styles.heading}>Password Generator</Text>
            <View style={styles.input}>
              <Text style={styles.passlenText}>Password Length</Text>
              <TextInput
                style={styles.inputNumber}
                placeholder="Ex: 8"
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                onBlur={handleBlur('passwordLength')}
                keyboardType="numeric"
              />
              
            </View>
              <View style={styles.error} >
              {touched.passwordLength && errors.passwordLength && (
                <Text style={styles.error}>{errors.passwordLength}</Text>
              )}
              </View>
            <View>
              <View style={styles.option}>
                <Text style={styles.optionText}>Include Uppercase</Text>
                <BouncyCheckbox
                  size={25}
                  fillColor="red"
                  unFillColor="#FFFFFF"
                  isChecked={uppercase}
                  onPress={() => setUppercase(!uppercase)}
                />
              </View>

              <View style={styles.option}>
                <Text style={styles.optionText}>Include Lowercase</Text>

                <BouncyCheckbox
                  size={25}
                  fillColor="red"
                  unFillColor="#FFFFFF"
                  isChecked={lowercase}
                  onPress={() => setLowercase(!lowercase)}
                />
              </View>

              <View style={styles.option}>
                <Text style={styles.optionText}>Include Number</Text>
                <BouncyCheckbox
                  size={25}
                  fillColor="red"
                  unFillColor="#FFFFFF"
                  isChecked={number}
                  onPress={() => setNumber(!number)}
                />
              </View>
            </View>

            <View style={styles.control}>
              <TouchableOpacity
                disabled={!isValid}
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Generate</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
            </View>

            {/* <Text>Generated Password: {generatedPassword}</Text>
            <Text>Uppercase is {uppercase ? 'enabled' : 'disabled'}.</Text>
            <Text>Lowercase is {lowercase ? 'enabled' : 'disabled'}.</Text>
            <Text>Number is {number ? 'enabled' : 'disabled'}.</Text> */}

            <View style={styles.passwordTab}>
              <View style={styles.passView}>
                <Text style={styles.passText} selectable={true}>{generatedPassword}</Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 20,
  },
  input: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  passlenText: {
    fontSize: 25,
    color: '#990099'
  },
  inputNumber: {
    borderWidth: 2,
    width: 125,
    fontSize: 25,
    paddingLeft: 15,
    borderRadius: 10
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight:50,
  },
  optionText: {
    fontWeight: '600',
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#389029"
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#ffbd33',
    padding: 15,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 25,
  },
  passwordTab: {
    height: 200,
    display: 'flex',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  passView: {
    borderRadius: 10,
    backgroundColor: '#33ffbd',
    height: 150,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  passText: {
    fontSize: 35,
    color: 'black',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 5,
    position:'relative',
    top : -15,
    alignItems : 'center'
  }, 
});
