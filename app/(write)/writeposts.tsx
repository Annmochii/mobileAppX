import React, { useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { router } from 'expo-router';

const PostScreen = () => { 
  const inputRef = useRef<TextInput>(null);
  
  
    useEffect(() => {
      // Foca automaticamente no campo de texto ao carregar a tela
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);



  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <IconButton  onClick={() => router.push("../(tabs)")} style={styles.closeButton}>
          <CloseIcon />
        </IconButton>

        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="O que está acontecendo?"
        placeholderTextColor="#888"
        multiline
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    justifyContent: 'space-between',
  },
  topContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    color: '#FFF',
    padding: 0,
    zIndex: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    marginTop: 40,
  },
  publishButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#1d9bf0',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  publishText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostScreen;
