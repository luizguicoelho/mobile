import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  useColorScheme,
} from "react-native";

type Player = "X" | "O" | null;

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Index() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<Player>("X");
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [winnerLine, setWinnerLine] = useState<number[] | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const animValues = useRef(
    Array.from({ length: 9 }, () => new Animated.Value(1))
  ).current;
  const winAnim = useRef(new Animated.Value(0)).current;

  function checkWinner(b: Player[]) {
    for (const line of LINES) {
      const [a, c, d] = line;
      if (b[a] && b[a] === b[c] && b[a] === b[d]) {
        return { player: b[a] as Exclude<Player, null>, line };
      }
    }
    if (b.every((cell) => cell !== null)) return { player: null, line: [] };
    return null;
  }

  function restartBoard(keepScore = true) {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinnerLine(null);
    setIsGameOver(false);
    Animated.timing(winAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start();
    if (!keepScore) setScores({ X: 0, O: 0 });
  }

  function animateCell(i: number) {
    Animated.sequence([
      Animated.timing(animValues[i], {
        toValue: 1.2,
        duration: 120,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animValues[i], {
        toValue: 1,
        duration: 120,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }

  function handlePress(index: number) {
    if (isGameOver || board[index]) return;

    animateCell(index);

    const next = [...board];
    next[index] = turn;
    setBoard(next);

    const result = checkWinner(next);
    if (result) {
      if (result.player) {
        setIsGameOver(true);
        setWinnerLine(result.line);
        setScores((prev) => ({
          ...prev,
          [result.player!]: prev[result.player!] + 1,
        }));
        Animated.timing(winAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
        return;
      } else {
        setIsGameOver(true);
        setWinnerLine(null);
        return;
      }
    }

    setTurn(turn === "X" ? "O" : "X");
  }

  const statusText = useMemo(() => {
    if (isGameOver) {
      const result = checkWinner(board);
      if (result && result.player) return `🏆 Venceu: ${result.player}`;
      return "🤝 Empate!";
    }
    return `Vez de: ${turn}`;
  }, [board, turn, isGameOver]);

  const theme = {
    bg: isDark ? "#0d0d0d" : "#f5f5f5",
    text: isDark ? "#fff" : "#111",
    xColor: "#ff6b6b",
    oColor: "#4ecdc4",
    card: isDark ? "#1e1e1e" : "#fff",
    highlight: "#ffe066",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.title, { color: theme.text }]}>Jogo da Velha</Text>

      <Text style={[styles.info, { color: theme.text }]}>
        Placar — X: {scores.X} | O: {scores.O}
      </Text>

      <View style={styles.board}>
        {board.map((cell, i) => {
          const scale = animValues[i];
          const isWinning = winnerLine?.includes(i);
          return (
            <Pressable
              key={i}
              onPress={() => handlePress(i)}
              style={{ width: "33.33%", height: "33.33%" }}
            >
              <Animated.View
                style={[
                  styles.cell,
                  {
                    backgroundColor: isWinning ? theme.highlight : theme.card,
                    transform: [{ scale }],
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.cellText,
                    { color: cell === "O" ? theme.oColor : theme.xColor },
                  ]}
                >
                  {cell}
                </Text>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>

      <Animated.Text
        style={[
          styles.status,
          {
            color: theme.text,
            opacity: winAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0.6] }),
          },
        ]}
      >
        {statusText}
      </Animated.Text>

      <View style={styles.buttonsRow}>
        <Pressable style={styles.button} onPress={() => restartBoard(true)}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </Pressable>
        <Pressable style={styles.buttonOutline} onPress={() => restartBoard(false)}>Criar um "README.md" com um roteiro de explicação do projeto. 
O README deve ser separado em 3 tópicos, que possam ser entendidos por pessoas que não são da área da informática:
- Lógica de funcionamento: explicar a lógica utilizada em seu sistema no seu ponto de vista como desenvolvedor.
     Exemplo do T-Rex Game no Google Chrome: o jogo consiste em pular obstáculos para conseguir a maior pontuação possível. Foram criadas diferentes imagens para representar o T-Rex correndo e pulando. Também foi necessário criar diferentes obstáculos, que são sorteados aleatoriamente no decorrer do jogo. Para criar uma certa dificuldade, a velocidade dos obstáculos aumenta enquanto o jogador progride no jogo, o que requer reflexos mais rápidos. A pontuação mais alta do jogador fica armazenada, criando o desafio de aumentar seus pontos a cada rodada.
- Linguagens e ferramentas: explicação simples da linguagem de programação escolhida ou framework.
      Para sites: explicar de forma simplificada o que é o VSCode, HTML, CSS e JavaScript.
      Para aplicativos: explicar de forma simplificada o que é VSCode, framework e Expo Go.
- Execução do projeto: explicar o que o usuário precisa fazer para executar o código do projeto
      O usuário consegue executar através de um link? Precisa baixar algum aplicativo como o Expo Go? Precisa baixar algo no computador?
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "800", marginBottom: 10 },
  info: { fontSize: 16, marginVertical: 6, fontWeight: "600" },
  board: {
    width: 320,
    height: 320,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 12,
    backgroundColor: "#ccc",
  },
  cell: { flex: 1, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#888" },
  cellText: { fontSize: 52, fontWeight: "700" },
  status: { marginTop: 12, fontSize: 20, fontWeight: "600" },
  buttonsRow: { flexDirection: "row", marginTop: 24, justifyContent: "space-between", width: "80%" },
  button: { backgroundColor: "#007bff", paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10 },
  buttonText: { color: "#fff", fontWeight: "700", textAlign: "center" },
  buttonOutline: { borderWidth: 1, borderColor: "#007bff", paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10 },
  buttonOutlineText: { color: "#007bff", fontWeight: "700", textAlign: "center" },
});
