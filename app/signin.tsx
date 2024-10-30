import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSenhaFocused, setIsSenhaFocused] = useState(false);

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null; 
  }

  // Verifica se ambos os campos estão preenchidos
  const isLoginEnabled = email !== '' && senha !== '';

  return (
    <View style={styles.container}>
      <IconButton onClick={() => navigation.navigate('Index')} style={styles.closeButton}>
        <CloseIcon />
      </IconButton>

      <Text style={styles.title}>Digite seus dados de usuário</Text>

      <View style={styles.inputContainer}>
        <Text style={[styles.placeholder, isEmailFocused || email ? styles.focusedPlaceholder : null]}>
          E-mail
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

      {/* Estiliza o botão de login dinamicamente */}
      <TouchableOpacity
        style={[styles.loginButton, isLoginEnabled && styles.loginButtonEnabled]}
        disabled={!isLoginEnabled}
      >
        <Text style={[styles.loginButtonText, isLoginEnabled && styles.loginButtonTextEnabled]}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    width: '100%',
  },
  closeButton: {
    alignSelf: 'flex-start',
    color: '#FFF',
    padding: 0,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Roboto_500Medium',
    marginTop: 32,
    marginBottom: 24,
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
    color: '#1DA1F2',
    backgroundColor: '#000',
    paddingHorizontal: 2,
    marginLeft: 4,
  },
  input: {
    color: '#FFF',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
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
  loginButtonEnabled: {
    backgroundColor: '#1DA1F2', // Muda a cor para azul quando habilitado
  },
  loginButtonText: {
    color: '#AAA',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },
  loginButtonTextEnabled: {
    color: '#FFF', // Muda a cor do texto para branco quando habilitado
  },
});
