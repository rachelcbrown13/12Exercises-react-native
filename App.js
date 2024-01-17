import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MyTabs from './navigation/tabs';



function App() {

  return (
    <>
      <MyTabs/>
      <StatusBar style="auto" />
    </>
  );
};


export default App;