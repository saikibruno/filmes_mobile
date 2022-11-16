import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableHighlight } from "react-native";



function BotaoDetalhes({ screenName, idNumber }) {
    const navigation = useNavigation();
    return (
        <TouchableHighlight
            style={styles.botao}
            onPress={() => navigation.navigate(screenName, idNumber)}
            underlayColor='#ffb89e'            
        ><Text style={styles.texto}>Detalhes</Text></TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    botao: {
        width: 120,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FF7F50'
    },
    texto: {
        fontSize: 25,
        color: '#000',
        padding: 2,        
    }
})
export default BotaoDetalhes;