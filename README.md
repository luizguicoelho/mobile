
## 1. 🧩 Lógica de funcionamento

### 🧠 Jogo da Velha

O jogo da velha é um jogo de tabuleiro simples, com **nove casas** (3x3).  
Dois jogadores se alternam para marcar os espaços com “X” e “O”.  
O objetivo é **alinhar três símbolos iguais**, seja **na horizontal, vertical ou diagonal**.

A cada jogada:
- O jogador atual toca em uma célula vazia.
- O símbolo (“X” ou “O”) aparece e o turno muda para o outro jogador.
- O sistema verifica se houve um vencedor ou empate.
- Se alguém vencer, as casas da linha vencedora são destacadas e o placar é atualizado.
- Há botões para **reiniciar o tabuleiro** ou **zerar o placar**.

Toda a lógica é controlada por **estados** (variáveis internas) que guardam as jogadas, o turno atual, e quem venceu.  
Animações leves dão um efeito visual agradável ao toque, deixando o jogo mais fluido.



### 🧠 Jogo da Forca

O jogo inicia sorteando um tema, sendo cada tema uma lista, depois ele sorteia uma palavra de dentro da lista, após isso ele monta o visual do jogo.
Enquanto ele roda, o jogo faz uma comparação entre as letra, como assim? O jogo pega a palavra sorteada e a separa em letras, 
sempre que você digita uma letra, ele compara os caracteres com as letras, e coloca na tela, as palavras que vc já usou, e vai completando a palavra.
se errar o jogo vai completando o bonequinho e se completa-lo você perde, se completar a palavra você ganha.

---

## ⚙️ 2. Linguagens e ferramentas

O projeto foi criado com:

### 🖥️ **VS Code**
O **Visual Studio Code (VSCode)** é o programa usado para escrever o código.  
Ele permite visualizar, editar e testar o aplicativo de forma prática e organizada.

### ⚛️ **React Native**
É uma tecnologia que permite criar **aplicativos móveis** usando **JavaScript**.  
Com ele, podemos desenvolver um app que roda tanto em **Android quanto em iOS**.

### 🚀 **Expo Go**
O **Expo Go** é um aplicativo que facilita o teste de apps React Native.  
Ele evita que o desenvolvedor precise compilar tudo manualmente.  
Basta abrir o app no celular, escanear um QR Code e o jogo é executado instantaneamente.

---

## ▶️ 3. Execução do projeto

Para jogar os **Jogos**, siga estes passos:

### 📱 No celular
1. Instale o app **Expo Go** (gratuito) na **Play Store** ou **App Store**.  
2. O desenvolvedor do projeto precisa compartilhar o link ou QR Code do projeto (gerado pelo Expo).  
3. Abra o **Expo Go**, escaneie o QR Code e o jogo iniciará automaticamente.  

### 💻 Para rodar no computador (opcional)
1. Baixe e instale o **Node.js** e o **VSCode**.  
2. No terminal, rode:
   ```bash
   npx create-expo-app jogo-da-velha
   cd jogo-da-velha




Jogo da Velha 
Lógica de funcionamento

O Jogo da Velha é um jogo de estratégia simples em que dois jogadores se alternam para marcar posições em um tabuleiro 3x3, usando “X” e “O”. O objetivo é conseguir três símbolos iguais na horizontal, vertical ou diagonal antes do adversário.
No início, o tabuleiro está vazio e o jogador “X” começa a partida. Cada vez que um jogador toca em uma posição, o símbolo correspondente aparece e a vez passa para o outro jogador. O jogo verifica automaticamente se alguém ganhou ou se houve empate, mostrando uma mensagem de resultado e destacando a linha vencedora.
O jogo mantém um placar atualizado, registrando quantas partidas cada jogador venceu. Também é possível reiniciar apenas o tabuleiro para continuar jogando mantendo o placar, ou reiniciar tudo, zerando o placar. Animações foram adicionadas para tornar o jogo mais divertido, fazendo com que os símbolos pulsem ao aparecer e destacando visualmente a linha vencedora.





----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







Jogo da Forca 
Lógica de funcionamento

O Jogo da Forca é um jogo de adivinhação em que o objetivo é descobrir uma palavra antes que o bonequinho seja completamente desenhado na forca. Ao iniciar o jogo, ele escolhe aleatoriamente um tema, como animais, frutas, países ou objetos,
e uma palavra dentro desse tema. Na tela, a palavra aparece como tracinhos, cada um representando uma letra que precisa ser adivinhada. O jogador digita uma letra por vez. Se a letra estiver correta, ela é revelada no lugar certo;
se estiver errada, uma parte do boneco é desenhada e o número de tentativas restantes diminui. Durante a partida, o jogo também mostra quais letras já foram tentadas, ajudando o jogador a se organizar.
A partida termina quando o jogador completa a palavra, vencendo, ou quando todas as tentativas acabam, perdendo. Além disso, existe um botão de “Reiniciar Jogo”, que permite começar uma nova partida a qualquer momento.
O jogo combina sorte, atenção e estratégia, tornando cada partida divertida e desafiadora.

Linguagens e ferramentas

Este jogo foi desenvolvido usando React Native, uma tecnologia que permite criar aplicativos para celular usando a linguagem de programação JavaScript. O código foi escrito em VSCode, que é como um caderno digital onde o desenvolvedor escreve as
instruções que o computador deve seguir para o jogo funcionar. Para jogar e testar o aplicativo no celular, utilizamos o Expo Go, um aplicativo que permite abrir e executar projetos feitos em React Native sem precisar instalar o jogo na loja do celular. 
Em outras palavras, o React Native faz o jogo acontecer, o VSCode serve para escrever e organizar o código, e o Expo Go permite que qualquer pessoa abra e jogue diretamente no celular.

Execução do projeto

Para jogar o Jogo da Forca, o usuário precisa apenas de um celular com o aplicativo Expo Go instalado, disponível na Google Play ou App Store. 
No computador, é necessário abrir o projeto no VSCode e rodá-lo usando o Expo, que vai gerar um QR Code. O jogador escaneia esse QR Code com o celular através do Expo Go, e o jogo é carregado imediatamente. 
Não é necessário instalar nada complicado no celular. Ao abrir o jogo, o jogador verá a forca, os tracinhos da palavra, as letras digitadas e o número de tentativas restantes, podendo se divertir imediatamente e reiniciar a partida quantas vezes quiser.
