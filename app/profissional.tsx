import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

// npm install expo-image (usar este código no terminal)


export default function Profissional() {
    return (
        <View style={styles.container} >
            <View style = {styles.containerConteudo}>
                <View style = {styles.containerNome}>
                    <Text style={styles.nome}>Luiz Guilherme Coelho</Text>
                </View>
                <Text style = {styles.linha}>
                    ________________________________________
                </Text>
                <View style = {styles.containerNome} >
                    <Text style = {styles.nome}> Experiências Profissionais</Text>
                </View>
                <View style = {styles.containerDados}>
                    <Ionicons name="ellipse" size={15} color="black" />
                    <Text style = {styles.textoDados}> Locais já trabalhados:</Text>
                </View>
                <View style = {styles.containerDados}>
                    <Text style = {styles.textoDados}>  1 - Comércio, 1 mês</Text>
                </View>
                <View style = {styles.containerDados}>
                    <Ionicons name="ellipse" size={15} color="black" />
                    <Text style = {styles.textoDados}> Escolaridade:</Text>
                </View>
                <View style = {styles.containerDados}>
                    <Text style = {styles.textoDados}>   Cursando o Ensino Médio Técnico</Text>
                </View>
                <View style = {styles.containerDados}>
                    <Text style = {styles.textoDados}>   De Desenvolvimento de Sistemas</Text>
                </View>
                <View style = {styles.containerDados}>
                    <Ionicons name="ellipse" size={15} color="black" />
                    <Text style = {styles.textoDados}>Habilidades Profissionais:</Text>
                </View>
                <View>
                    <Text style = {styles.textoDados}>  1 - JavaScript</Text>
                    <Text style = {styles.textoDados}>  2 - Python</Text>
                    <Text style = {styles.textoDados}>  3 - HTML e CSS</Text>
                    <Text style = {styles.textoDados}>  4 - Comunicação</Text>
                    <Text style = {styles.textoDados}>  5 - Trabalho em equipe</Text>

                </View>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey"
    },
    containerImg: {
        flex: 1,
        paddingTop: 60,
    },
    estiloFoto: {
        width: 300,
        height: 300,
    },
    containerConteudo: {
        flex: 1
    },
    containerNome:{
        alignItems:"center",
    },
    nome: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
    },
    linha:{
        color: "white",
        fontSize: 20,
        marginBottom: 20
    },
    containerDados: {
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    textoDados: {
        marginLeft: 10,
        color: "white",
        fontSize: 24,
    },
    textoDados1: {
        marginLeft: 10,
        color: "white",
        fontSize: 30,
    }
})