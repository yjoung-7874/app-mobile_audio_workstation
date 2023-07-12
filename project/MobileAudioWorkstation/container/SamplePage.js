/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from "react";
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';

import SampleList from 'MobileAudioWorkstation/component/sample/SampleList';


export default function SamplePage() {
  
  return (
    <SafeAreaView>
      <SampleList />
    </SafeAreaView>
  );
}
