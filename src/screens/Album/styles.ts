import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#1E1E1E',
  },
  coverImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  albumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  artistName: {
    fontSize: 16,
    color: '#B3B3B3',
    marginTop: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  trackNumber: {
    color: '#B3B3B3',
    fontSize: 16,
    marginRight: 10,
    width: 25,
  },
  trackInfo: {
    flex: 1,
    marginRight: 10,
  },
  trackTitle: {
    color: 'white',
    fontSize: 16,
  },
  trackArtist: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  playButton: {
    padding: 5,
    marginRight: 10,
  },
  favoriteButton: {
    padding: 5,
  }

});