import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";

function PosterAtor({ screenName, idNumber, poster,nomeAtor }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName,idNumber)}>
            {poster === null ?
                <Card style={styles.cardImg}><Text style={styles.nomeAtor}>{nomeAtor}</Text></Card> :
                <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster }} style={styles.cardImg} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardImg: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor:'#000'
    },
    nomeAtor: {
        alignItems:'center',
        padding:5,
        paddingTop:20,
        color: '#A9CCE3',
        fontSize: 15,
        fontWeight: 'bold',
    },

})

export default PosterAtor;