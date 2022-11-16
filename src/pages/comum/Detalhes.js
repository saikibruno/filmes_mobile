import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, ScrollView } from 'react-native';

import api from '../../service/Api'

function Detalhes(props) {

    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(() => {
        api.get('/movie/' + props.route.params + '?language=pt-BR').then(result => {
            setDados(result.data)
        })
            .catch(() => (alert('erro')))
            .finally(() => setCarregando(false))
    }, [])

    return (
        <View style={styles.container} >
            {
                carregando ? <ActivityIndicator /> : (
                    <ScrollView style={styles.scroll} horizontal={true}>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Image style={styles.tinyLogo}
                            source={{
                                uri: 'https://image.tmdb.org/t/p/w500/' + dados.poster_path,
                            }} />
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <Text style={styles.nomeFilme}>{dados.title}ok</Text>
                    </ScrollView>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',        
        backgroundColor: '#4F4F4F',
    },
    nomeFilme: {
        color: '#A9CCE3',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    tinyLogo: {
        width: 150,
        height: 250,
        alignSelf:'center'
    },
    scroll:{
        alignSelf:'center',
        width:'150%',
        backgroundColor:'#4F4F4F',
        paddingBottom:50
    }
})

export default Detalhes;