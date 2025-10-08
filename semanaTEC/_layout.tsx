
import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Alert, StyleSheet, Animated, TouchableOpacity } from "react-native";
import Svg, { Line, Circle } from "react-native-svg";

// Função que remove acentos para comparação
const normalize = (text: string) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const themes: Record<string, string[]> = {
  Animais: ["cachorro","gato","elefante","leão","tigre","girafa","zebra","cavalo","pato","galinha","ovelha","boi","vaca","camelo","coelho","porco","urso","crocodilo","jacaré","sapo","golfinho","baleia","tubarão","águia","pomba","coruja","pinguim","lagarto","cobra","onça","guepardo","rinoceronte","hipopotamo","macaco","chimpanzé","gorila","antilope","tatu","capivara","lobo","raposa","canguru","panda","formiga","abelha","aranha","escorpião","caranguejo","polvo"],
  Frutas: ["banana","maçã","uva","laranja","melancia","melão","abacaxi","pera","ameixa","cereja","morango","kiwi","manga","goiaba","caju","açaí","graviola","jabuticaba","lichia","figo","romã","pitanga","carambola","tamarindo","abacate","framboesa","mirtilo","maracujá","cupuaçu","sapoti","seriguela","cacau","umbu","jaca","longan","nêspera","pitaya","pupunha","pequi","bacaba","buriti","camucamu","jenipapo","guaraná","araticum","tucumã"],
  Países: ["brasil","argentina","chile","uruguai","paraguai","bolivia","peru","equador","colombia","venezuela","canadá","méxico","cuba","panamá","alemanha","frança","itália","espanha","portugal","inglaterra","irlanda","suiça","áustria","polônia","ucrânia","rússia","china","japão","coreia","austrália","egito","marrocos","argélia","nigéria","angola","moçambique","índia","nepal","butão","tailândia","vietnã","filipinas","indonésia","turquia","israel","arábia saudita"],
  Objetos: ["cadeira","mesa","computador","teclado","mouse","garrafa","copo","prato","colher","garfo","faca","livro","caderno","caneta","lápis","borracha","regua","mochila","celular","televisão","rádio","ventilador","sofá","cama","travesseiro","lençol","cobertor","quadro","espelho","armário","estante","controle","relógio","carteira","óculos","sapato","chinelo","camisa","calça","boné","bola","bicicleta","carro","moto","avião","navio","ônibus","trem","panela","frigideira"]
};

export default function Index() {
  const [word, setWord] = useState<string>("");
  const [displayWord, setDisplayWord] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(6);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<string>("Em jogo");
  const [theme, setTheme] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const shakeAnim = useState(new Animated.Value(0))[0];
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const startNewGame = () => {
    const themeNames = Object.keys(themes);
    const randomTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
    const randomWord = themes[randomTheme][Math.floor(Math.random() * themes[randomTheme].length)];

    setTheme(randomTheme);
    setWord(randomWord);
    setDisplayWord("_".repeat(randomWord.length));
    setAttempts(6);
    setGuessedLetters([]);
    setGameStatus("Em jogo");
    setInput("");
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const checkGameStatus = (updatedWord: string, updatedAttempts: number) => {
    if (updatedWord === word) setGameStatus("🎉 Você Venceu!");
    else if (updatedAttempts <= 0) setGameStatus(`☠️ Você Perdeu! Palavra: "${word}"`);
  };

  const handleGuess = (letter: string) => {
    if (gameStatus !== "Em jogo") return;

    const normalizedWord = normalize(word);
    const normalizedLetter = normalize(letter);

    if (!normalizedLetter.match(/[a-z]/i)) {
      Alert.alert("Digite apenas uma letra válida.");
      setInput("");
      return;
    }

    if (guessedLetters.includes(normalizedLetter)) {
      Alert.alert("Você já tentou essa letra!");
      setInput("");
      return;
    }

    const updatedGuessed = [...guessedLetters, normalizedLetter];
    setGuessedLetters(updatedGuessed);

    if (normalizedWord.includes(normalizedLetter)) {
      const updatedDisplay = displayWord
        .split("")
        .map((c, i) =>
          normalizedWord[i] === normalizedLetter ? word[i] : c
        )
        .join("");
      setDisplayWord(updatedDisplay);
      checkGameStatus(updatedDisplay, attempts);
    } else {
      const updatedAttempts = attempts - 1;
      setAttempts(updatedAttempts);
      checkGameStatus(displayWord, updatedAttempts);
      shake();
    }

    setInput("");
  };

  const renderHangman = () => {
    const errors = 6 - attempts;
    return (
      <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
        <Svg height="250" width="200" stroke="#fff" strokeWidth="4">
          <Line x1="10" y1="230" x2="150" y2="230" />
          <Line x1="40" y1="230" x2="40" y2="20" />
          <Line x1="40" y1="20" x2="120" y2="20" />
          <Line x1="120" y1="20" x2="120" y2="50" />
          {errors > 0 && <Circle cx="120" cy="70" r="20" />}
          {errors > 1 && <Line x1="120" y1="90" x2="120" y2="150" />}
          {errors > 2 && <Line x1="120" y1="110" x2="90" y2="140" />}
          {errors > 3 && <Line x1="120" y1="110" x2="150" y2="140" />}
          {errors > 4 && <Line x1="120" y1="150" x2="95" y2="190" />}
          {errors > 5 && <Line x1="120" y1="150" x2="145" y2="190" />}
        </Svg>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Jogo da Forca</Text>
      <Text style={styles.status}>{gameStatus}</Text>
      <Text style={styles.theme}>Tema: {theme}</Text>

      {renderHangman()}

      <Text style={styles.word}>{displayWord.split("").join(" ")}</Text>
      <Text style={styles.attempts}>Tentativas restantes: {attempts}</Text>
      <Text style={styles.guessedLetters}>
        Letras tentadas: {guessedLetters.join(", ")}
      </Text>

      <TextInput
        style={styles.input}
        maxLength={1}
        value={input}
        onChangeText={(text) => {
          const onlyLetters = text.replace(/[^a-záàâãéèêíïóôõúçñ]/gi, "");
          setInput(onlyLetters);
          if (onlyLetters.length === 1) handleGuess(onlyLetters.toLowerCase());
        }}
        placeholder="Digite uma letra"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={startNewGame}>
        <Text style={styles.buttonText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#3e2f2f" },
  title: { fontSize: 36, fontWeight: "bold", marginBottom: 20, color: "#f0d9b5", textShadowColor: "#000", textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 3 },
  status: { fontSize: 20, marginBottom: 10, fontWeight: "bold", color: "#ffcc00" },
  theme: { fontSize: 18, marginBottom: 15, fontStyle: "italic", color: "#e0c097" },
  word: { fontSize: 40, marginBottom: 20, letterSpacing: 6, fontWeight: "bold", color: "#fff" },
  attempts: { fontSize: 18, marginBottom: 10, color: "#fff" },
  guessedLetters: { fontSize: 16, marginBottom: 20, color: "#f0d9b5" },
  input: { height: 50, borderColor: "#d4af37", borderWidth: 2, marginBottom: 10, width: "50%", textAlign: "center", fontSize: 22, backgroundColor: "#2e1f1f", borderRadius: 8, color: "#fff" },
  button: { backgroundColor: "#8b4513", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
