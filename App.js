import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import MainPage from './Components/MainPage';
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0078D4"/>
      <MainPage />
    </>
  );
}

