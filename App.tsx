import React, { useState } from 'react';
import { SafeAreaView,TouchableOpacity, StyleSheet, Text, TextInput, View, Switch, Button, ScrollView } from 'react-native';
import Apps from './componenet/PasswordGenerator'
import App2 from './componenet/App2'

export default function App() {
  



  return (
    <SafeAreaView>
      <ScrollView>
     {/* <Apps/>  */}
     <App2/>
     </ScrollView>
    </SafeAreaView>
  );
}

