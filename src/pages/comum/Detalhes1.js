import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import PosterAtor from "../../components/PosterAtor";

import api from '../../service/Api'

function Detalhes1(props) {
    // const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])
    const [atores, setAtores] = useState([])

    useEffect(() => {
        api.get('/movie/' + props.route.params + '?language=pt-BR').then(result => {
            setDados(result.data)
        })
            // .catch(() => (alert('erro')))
            // .finally(() => setCarregando(false))

        api.get('/movie/' + props.route.params + '/credits?language=pt-BR').then(result => {
            setAtores(result.data.cast)
        })
            // .catch(() => (alert('erro')))
            // .finally(() => setCarregando(false))
    }, [])

    return (
        <View>
            {/* {
                carregando ? <ActivityIndicator /> : ( */}

                    <ScrollView style={styles.scroll} horizontal={false}>
                        <Text style={styles.nomeFilme}>{dados.title}</Text>
                        <View style={styles.container} >
                            <Image style={styles.tinyLogo}
                                source={{
                                    uri: 'https://image.tmdb.org/t/p/w500/' + dados.poster_path,
                                }} />
                            <Text style={styles.tituloo}>Votos:</Text>
                            <Text style={styles.vote}>{dados.vote_average} <Icon name={'staro'} size={20} color={'#A9CCE3'} /></Text>

                            <Text style={styles.tituloo}>Genero: </Text>
                            <View style={styles.containerGenero} >
                                {/* {dados.genres.map((item, i) => (
                                    <Text key={i} style={styles.nomeGenero}>{item.name}, </Text>
                                ))} */}
                            </View>
                            <Text style={styles.tituloo}>Resumo: </Text>
                            <Paragraph style={styles.resumo}>{dados.overview}</Paragraph>
                            <Text style={styles.tituloo}>Atores: </Text>
                            <FlatList
                                data={atores}
                                horizontal={true}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) =>
                                    <View style={{ padding: 3 }}>
                                        <PosterAtor screenName={'DetalhesAtor'} idNumber={item.id} poster={item.profile_path} nomeAtor={item.name}></PosterAtor>
                                    </View>
                                }
                            />

                        </View>
                    </ScrollView>
                {/* )
            } */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    containerGenero: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    nomeFilme: {
        color: '#A9CCE3',
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 15,
        width: 300
    },
    nomeGenero: {
        color: '#fff',
        fontSize: 18,
    },
    tituloo: {
        color: '#A9CCE3',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        alignSelf: 'flex-start'
    },
    tinyLogo: {
        width: 270,
        height: 400,
        borderRadius: 20
    },
    scroll: {
        width: '100%',
        backgroundColor: '#4F4F4F',
        paddingBottom: 50
    },
    resumo: {
        color: '#fff',
        fontSize: 15,
    },
    vote: {
        color: '#fff',
        fontSize: 15,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },

})

export default Detalhes1;