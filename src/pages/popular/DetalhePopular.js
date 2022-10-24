import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

import api from '../../service/Api'

export default function DetalhePopular(props) {

    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(() => {
        api.get('/movie/'+props.route.params).then(result => {
           setDados(result.data)
       })
           .catch(() => (alert('erro')))
           .finally(() => setCarregando(false))
   }, [])

    return (
        <View style={styles.container}>
            {
                carregando ? <ActivityIndicator /> : (
                    <>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Image style={styles.tinyLogo}
                            source={{
                                uri: 'https://image.tmdb.org/t/p/w500/' + dados.poster_path,
                            }} />
                    </>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:50
    },
    nomeFilme: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    tinyLogo: {
        width: 150,
        height: 250
    }
})