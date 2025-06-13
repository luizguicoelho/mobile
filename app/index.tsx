import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [localidade, setLocalidade] = useState("");

  const [fotoUri, setFotoUri] = useState<string | null>(null);

  async function escolherFoto() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão para acessar a galeria é necessária!");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!resultado.canceled) {
      setFotoUri(resultado.assets[0].uri); 
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <View style={styles.containerImg}>
        {}
        <TouchableOpacity onPress={escolherFoto}>
          <Image
            source={
              fotoUri
                ? { uri: fotoUri }
                : require("../assets/images/icon.png")
            }
            style={styles.estiloFoto}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerConteudo}>
        <View style={styles.containerNome}>
          <TextInput
            style={[styles.nome, styles.textInput]}
            placeholder="Luiz Guilherme Coelho"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.linhaContainer}>
          <View style={styles.linha} />
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="person" size={24} color="white" />
          <TextInput
            style={[styles.textoDados, styles.textInput]}
            placeholder="16 anos"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="mail" size={24} color="white" />
          <TextInput
            style={[styles.textoDados, styles.textInput]}
            placeholder="Luiz.Guilherme.Coelho@escola.pr.gov.br"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="call" size={24} color="white" />
          <TextInput
            style={[styles.textoDados, styles.textInput]}
            placeholder="(42) 995649-0266"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.containerDados}>
          <Ionicons name="home" size={24} color="white" />
          <TextInput
            style={[styles.textoDados, styles.textInput]}
            placeholder="Ponta Grossa / PR"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={localidade}
            onChangeText={setLocalidade}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },
  estiloFoto: {
    width: 300,
    height: 175,
    resizeMode: "contain",
    borderRadius: 10,
  },
  containerConteudo: {
    flex: 1,
  },
  containerNome: {
    alignItems: "center",
    marginBottom: 10,
  },
  nome: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  linhaContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  linha: {
    width: "80%",
    height: 1,
    backgroundColor: "white",
  },
  containerDados: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
    flex: 1,
  },
  textInput: {
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.3)",
    color: "white",
  },
});