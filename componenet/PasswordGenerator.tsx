import React, { useState } from 'react';
import { SafeAreaView,TouchableOpacity, StyleSheet, Text, TextInput, View, Switch, Button } from 'react-native';



export default function Apps() {
  const [passwordLength, setPasswordLength] = useState(''); 
  const [uppercase, setuppercase] = useState(false); 
  const [lowercase, setLowercase] = useState(false);
  const [number, setnumber] = useState(false);
  const [generatepassword, setgeneratepassword] = useState ('')
  var character = ''; 


  const handleCheckboxChange = () => {
    setuppercase(!uppercase);
  };

 const handlelowercaseChange = () => {
    setLowercase(!lowercase); // Correct way to update state
  };

  
 const handlenumberChange = () => {
    setnumber(!number); // Correct way to update state
  };


  const Generate = () => {
    if(uppercase){
      character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(lowercase){
      character += "abcdefghijklmnopqrstuvwxyz"
    }

    if(number){
      character += '1234567890'
    }

    passwordGenerate();
  }

  const passwordGenerate = () => {
    let passgenerate =''; 
    for (let i = 0; i < Number(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * character.length);
      passgenerate += character[randomIndex];
    }
    setgeneratepassword(passgenerate);
  }

  const reset =()=>{
    setLowercase(false); 
    setPasswordLength('');
    setuppercase(false);
    setnumber(false);
    setgeneratepassword('')
  }

  return (
    <SafeAreaView>
      <Text style ={ styles.heading }> Password Generator </Text>
      <View style ={styles.input}>
        <Text style = {styles.passlenText}> PasswordLength </Text>
        <TextInput
          style = {styles.inputNumber}
          placeholder=' Ex : 8'
          value={passwordLength}
          
          onChangeText={text => setPasswordLength(text)}
        />
      </View>

      <View>
        <View style ={styles.option}>
          <Text style = {styles.optiontext}>Include uppercase</Text>
          <Switch
          value={uppercase}
          onValueChange={handleCheckboxChange}
        />
        </View>

        <View style ={styles.option}>
          <Text style = {styles.optiontext}>Include lowercase</Text>
          <Switch
          value={lowercase}
          onValueChange={handlelowercaseChange}
        />
        </View>


        <View style ={styles.option}>
          <Text style = {styles.optiontext}>Include Number</Text>
          <Switch
          value={number}
          onValueChange={handlenumberChange}
        />
        </View>
        

      </View>

      <View style = {styles.control}>
         {/* <Button
        title="Generate"
        onPress={Generate}
       
      />
         <Button
        title=" Reset"
        onPress={reset}
      /> */}

      <TouchableOpacity style={styles.button} onPress={Generate}>
        <Text style={styles.buttonText}>Generate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      </View>


      {/* <Text>{passwordLength}</Text>
       <Text>{generatepassword}</Text>
      <Text>Uppercase is {uppercase ? 'enabled' : 'disabled'}.</Text>
      <Text>lowercase is {lowercase ? 'enabled' : 'disabled'}.</Text>
      <Text>number is {number ? 'enabled' : 'disabled'}.</Text> */}

        <View style = {styles.passwordtab}>
          <View style = {styles.passview}>
              <Text style ={ styles.passtext}>{generatepassword}</Text>
          </View>
         
        </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    heading : {
      fontSize : 30, 
      fontWeight: 'bold',
      alignSelf : 'center',
      paddingTop : 20, 
    }, 
    input:{
      display: 'flex', 
      flexDirection : 'row',
      margin : 20 , 
      alignItems : 'center',
      justifyContent : 'space-between'
    },  

    passlenText:{ 
      fontSize : 25,
      color: '#990099'
      
    }, 
    inputNumber : {
      borderWidth: 2 , 
      width : 125,
      fontSize : 25,
      paddingLeft: 15, 
      borderRadius :10
    }, 

    option : {
      flexDirection: 'row',
      justifyContent : 'space-between',
      alignItems : 'center',
      marginRight : 50

    }, 
    generate : {
      backgroundColor: "#47580"
    }, 
    control:{
      flexDirection: 'row',
      justifyContent:'space-evenly',
      paddingTop: 20,
    }, 
    optiontext:{
      fontWeight :'600',
      fontSize: 20,
      paddingLeft: 10 ,
      paddingBottom: 5, 
      color : "#389029"
    }, 
    button: {
      backgroundColor: '#ffbd33',
      padding : 15,
      borderRadius : 15

    }, 
    buttonText:{
      fontSize : 25 , 
    }, 
  passwordtab:{
    // backgroundColor: '#33ffbd',
    height : 200, 
    display: 'flex', 
    borderRadius : 25,
    justifyContent : 'center', 
    alignItems : 'center'
  }, 
  
  passview: {
    borderRadius: 10 , 
    backgroundColor: '#33ffbd',
    height : 150,
    width : 350, 
    justifyContent: 'center', 
    alignItems : 'center', 
    elevation : 5 ,
  }, 
  passtext:{
    fontSize: 35, 
    color:'black',
    //fontWeight :'40'
  }

  }) 