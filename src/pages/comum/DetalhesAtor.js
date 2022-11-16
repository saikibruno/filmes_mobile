import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import api from '../../service/Api'

function DetalhesAtor(props) {
    const [carregando, setCarregando] = useState(true)
    const [atores, setAtores] = useState([])
    const [dados, setDados] = useState([])

    useEffect(() => {
        api.get('/person/' + props.route.params + '?language=pt-BR').then(result => {
            setAtores(result.data)
        })
            .catch(() => (alert('erro')))
            .finally(() => setCarregando(false))

        api.get('/person/' + props.route.params + '/movie_credits?language=pt-BR').then(result => {
            setDados(result.data.cast)
        })
            .catch(() => (alert('erro')))
            .finally(() => setCarregando(false))
    }, [])

    return (
        <View>
            {
                carregando ? <ActivityIndicator /> : (
                    <ScrollView style={styles.scroll} horizontal={false}>
                        <Text style={styles.nomeAtor}>{atores.name}</Text>
                        <View style={styles.container} >
                            <Image style={styles.tinyLogo}
                                source={{
                                    uri: 'https://image.tmdb.org/t/p/w500/' + atores.profile_path,
                                }} />
                            <Text style={styles.tituloo}>Popularidade:</Text>
                            <Text style={styles.vote}><Icon name={'instagram'} size={20} color={'#A9CCE3'} /> {atores.popularity}</Text>
                            <Text style={styles.tituloo}>Aniversário:</Text>
                            <Text style={styles.vote}><Icon1 name={'birthday-cake'} size={20} color={'#A9CCE3'} /> {atores.birthday}</Text>
                            <Text style={styles.tituloo}>Resumo: </Text>
                            <Paragraph style={styles.resumo}>{atores.biography}</Paragraph>
                            <Text style={styles.tituloo}>Filmes: </Text>
                            <FlatList
                                data={dados}
                                horizontal={true}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) =>
                                    <View style={{ padding: 3 }}>
                                        {item.poster_path === null ?
                                            <Card style={styles.cardImgNull}><Text style={styles.textCard}>{item.title}</Text></Card> :
                                            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} style={styles.cardImg} />
                                        }
                                    </View>
                                }
                            />
                        </View>
                    </ScrollView>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    nomeAtor: {
        color: '#A9CCE3',
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 15,
        width: 300
    },
    scroll: {
        width: '100%',
        backgroundColor: '#4F4F4F',
        paddingBottom: 50
    },
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
    cardImg: {
        alignSelf: 'center',
        width:270,
        height:400,        
        borderRadius:20
    },
    cardImgNull: {
        alignSelf: 'center',
        width:270,
        height:400,        
        borderRadius:20,
        backgroundColor:"#000"
    },
    textCard: {
        alignSelf: 'center',
        fontSize: 50,
        paddingTop:100,
        color: '#A9CCE3',
    },

})

export default DetalhesAtor;