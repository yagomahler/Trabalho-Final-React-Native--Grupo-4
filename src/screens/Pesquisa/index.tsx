import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { usePlayer } from '../../contexts/playerContext';
import { HomePageNavigationProp, Parametros } from '../../routes/navigators/StackNavigator';
import { AlbumDetails, ApiMusical, Artist, Track } from '../../services/ApiMusical';
import { styles } from './styles'


interface SearchResults {
    tracks: Track[];
    albums: AlbumDetails[];
    artists: Artist[];
}

export const Search: React.FC<{ navigation: HomePageNavigationProp }> = ({ navigation }) => {
    const { play, currentTrack, isPlaying } = usePlayer();
    const [queryTrack, setQueryTrack] = useState('');
    const [queryAlbum, setQueryAlbum] = useState('');
    const [queryArtist, setQueryArtist] = useState('');

    const [results, setResults] = useState<SearchResults>({ tracks: [], albums: [], artists: [] });
    const [loading, setLoading] = useState(false);

    const handleSearch = async (type: keyof SearchResults, query: string) => {
        if (query.length < 3) return; 

        setLoading(true);

        try {
            let data: Track[] | AlbumDetails[] | Artist[] = [];
            
            switch (type) {
                case 'tracks':
                    data = (await ApiMusical.searchTracks(query)).data.data;
                    break;
                case 'albums':
                    data = (await ApiMusical.searchAlbums(query)).data.data;
                    break;
                case 'artists':
                    data = (await ApiMusical.searchArtists(query)).data.data;
                    break;
            }
            
            setResults(prev => ({ ...prev, [type]: data }));
        } catch (error) {
            console.error(`Erro ao buscar ${type}:`, error);
        } finally {
            setLoading(false);
        }
    };

    const handlePlayTrack = async (track: Track, tracksList: Track[], index: number) => {
        let trackToPlay = track;
        try {
            const response = await ApiMusical.getTrack(track.id.toString());
            trackToPlay = response.data as Track;
            console.log("Link de preview da faixa recarregado para reprodução.");
        } catch (error) {
            console.error("Erro ao recarregar a faixa da API:", error); 
        }
        
        await play(trackToPlay, tracksList, index);
    };

    const renderTrackItem = ({ item, index }: { item: Track, index: number }) => (
        <View style={styles.resultItem}>
            <Image source={{ uri: item.album?.cover_medium }} style={styles.resultImage} />
            <View style={styles.resultInfo}>
                <Text style={styles.resultTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.resultSubtitle} numberOfLines={1}>{item.artist.name} - {item.album?.title}</Text>
            </View>
            <TouchableOpacity 
                onPress={() => handlePlayTrack(item, results.tracks, index)} 
                style={styles.playButton}
            >
                {currentTrack?.id === item.id && isPlaying ? (
                    <Icon name="pause-circle" size={30} color="#1DB954" />
                ) : (
                    <Icon name="play-circle-outline" size={30} color="#FFF" />
                )}
            </TouchableOpacity>
        </View>
    );

    const renderAlbumItem = ({ item }: { item: AlbumDetails }) => (
        <TouchableOpacity 
            style={styles.resultItem} 
            onPress={() => navigation.navigate('Album', { albumId: item.id.toString() })}
        >
            <Image source={{ uri: item.cover_medium }} style={styles.resultImage} />
            <View style={styles.resultInfo}>
                <Text style={styles.resultTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.resultSubtitle} numberOfLines={1}>{item.artist.name}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#B3B3B3" />
        </TouchableOpacity>
    );

    const renderArtistItem = ({ item }: { item: Artist }) => (
        <TouchableOpacity 
            style={styles.resultItem} 
            onPress={() => alert(`Navegar para Artista: ${item.name}. (A tela do artista ainda não foi implementada!)`)}
        >
            <Image 
                source={{ uri: item.picture_medium || 'https://placehold.co/50x50/333/FFF?text=Artista' }} 
                style={[styles.resultImage, { borderRadius: 25 }]}
            />
            <View style={styles.resultInfo}>
                <Text style={styles.resultTitle} numberOfLines={1}>{item.name}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#B3B3B3" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Buscar</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.inputTitle}>Buscar Músicas</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome da música..."
                    placeholderTextColor="#777"
                    value={queryTrack}
                    onChangeText={setQueryTrack}
                    onSubmitEditing={() => handleSearch('tracks', queryTrack)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputTitle}>Buscar Álbuns</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome do álbum..."
                    placeholderTextColor="#777"
                    value={queryAlbum}
                    onChangeText={setQueryAlbum}
                    onSubmitEditing={() => handleSearch('albums', queryAlbum)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputTitle}>Buscar Artistas</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome do artista..."
                    placeholderTextColor="#777"
                    value={queryArtist}
                    onChangeText={setQueryArtist}
                    onSubmitEditing={() => handleSearch('artists', queryArtist)}
                />
            </View>

            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#1DB954" />
                </View>
            )}

            <View style={styles.resultsSection}>
                {results.tracks.length > 0 && (
                    <>
                        <Text style={styles.sectionTitle}>Músicas</Text>
                        <FlatList
                            data={results.tracks}
                            renderItem={renderTrackItem}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            ListEmptyComponent={<Text style={styles.noResultsText}>Nenhuma música encontrada.</Text>}
                            style={{ maxHeight: 200 }} 
                        />
                    </>
                )}

                {results.albums.length > 0 && (
                    <>
                        <Text style={styles.sectionTitle}>Álbuns</Text>
                        <FlatList
                            data={results.albums}
                            renderItem={renderAlbumItem}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            ListEmptyComponent={<Text style={styles.noResultsText}>Nenhum álbum encontrado.</Text>}
                            style={{ maxHeight: 200 }} 
                        />
                    </>
                )}

                {results.artists.length > 0 && (
                    <>
                        <Text style={styles.sectionTitle}>Artistas</Text>
                        <FlatList
                            data={results.artists}
                            renderItem={renderArtistItem}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            ListEmptyComponent={<Text style={styles.noResultsText}>Nenhum artista encontrado.</Text>}
                            style={{ maxHeight: 200 }} 
                        />
                    </>
                )}
            </View>
        </View>
    );
};

export default Search;