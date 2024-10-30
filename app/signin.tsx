import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSenhaFocused, setIsSenhaFocused] = useState(false);

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Evitar o AppLoading, apenas renderize null até a fonte ser carregada.
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Digite sua senha</Text>

      <View style={styles.inputContainer}>
        <Text style={[styles.placeholder, isEmailFocused || email ? styles.focusedPlaceholder : null]}>
          Celular, e-mail ou nome de usuário
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.placeholder, isSenhaFocused || senha ? styles.focusedPlaceholder : null]}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          onFocus={() => setIsSenhaFocused(true)}
          onBlur={() => setIsSenhaFocused(false)}
        />
      </View>

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  closeText: {
    color: '#FFF',
    fontSize: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Roboto_400Regular',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    position: 'relative',
  },
  placeholder: {
    color: '#777',
    position: 'absolute',
    left: 0,
    top: 10,
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },
  focusedPlaceholder: {
    top: -10,
    fontSize: 12,
    color: '#FFF',
  },
  input: {
    color: '#FFF',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 8,
    fontFamily: 'Roboto_400Regular',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#1DA1F2',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },
  loginButton: {
    backgroundColor: '#444',
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#AAA',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },
});
