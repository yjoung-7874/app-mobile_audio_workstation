/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from "react";
import { Image, TouchableOpacity, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

export default function SampleList() {
  // functions and states 
  // Reading directories
  const [files, setFiles] = useState([]);  
  const getFileContent = async (path) => {
    const reader = await RNFS.readDir(path);
    setFiles(reader);
  };

  // create directories
  const folderPath = RNFS.DocumentDirectoryPath + "/assets"; // example
  const makeDirectory = async (folderPath) => {
  await RNFS.mkdir(folderPath); //create a new folder on folderPath
  };

  // create file
  const filePath = RNFS.DocumentDirectoryPath + "/joke.txt"; // example - absolute path of our file
  const fileContent = "Why do programmers wear glasses? \nThey can't C#!";
  const makeFile = async (filePath, content) => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.writeFile(filePath, content, "utf8");
      console.log("written to file");
    } catch (error) { //if the function throws an error, log it out.
      console.log(error);
    }
  };

  // read files
  const [fileData, setFileData] = useState();
  const readFile = async (path) => {
    const response = await RNFS.readFile(path);
    setFileData(response); //set the value of response to the fileData Hook.
  };


  // Hooks
  // Reading directories
  useEffect(() => {
    getFileContent(RNFS.DocumentDirectoryPath); //run the function on the first render.
  }, []);
  
  // create directories
  useEffect(() => {
    makeDirectory(folderPath); //execute this function on first mount
    getFileContent(RNFS.DocumentDirectoryPath); //this function was defined in the previous example
  }, []);

  // create file
  useEffect(() => {
    makeFile(filePath, fileContent);
    getFileContent(RNFS.DocumentDirectoryPath);
  }, []);

  //read files
  useEffect(() => {
    readFile(filePath);
  }, []);

  //this component will render our list item to the UI
  const Item = ({ name, isFile }) => {
    return (
      <View>
        {/* TODO:: make list for samples */}
        {/* ref : https://rn-master.com/react-native-flatlist-example/ */}
        {/* https://github.com/Alhydra/React-Native-Flatlist-Example/blob/master/App.js */}
        {/* <View style={styles.listItem}>
          <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
          <View style={{alignItems:"center",flex:1}}>
            <Text style={{fontWeight:"bold"}}>{item.name}</Text>
            <Text>{item.position}</Text>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"green"}}>Call</Text>
          </TouchableOpacity>
        </View> */}
        <View>
          <Text style={styles.name}>Name: {name}</Text>
          <Text> {isFile ? "It is a file" : "It's a folder"}</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.title}>{index}</Text>
        {/* The isFile method indicates whether the scanned content is a file or a folder*/}
        <Item name={item.name} isFile={item.isFile()} />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      <Text style={styles.name}>{fileData}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  title2: {
    fontSize: 30,
  },
  name: {
    fontSize: 20,
  },
  file: {
    fontSize: 18,
  },
});