import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

function PosterFilme({ screenName, idNumber, poster, }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName, idNumber)}>            
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster }} style={styles.cardImg} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardImg: {
        alignSelf: 'center',
        width:270,
        height:400,        
        borderRadius:20
    },
    
})

export default PosterFilme;