import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputTitle: {
    fontSize: 16,
    color: '#B3B3B3',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textInput: {
    height: 45,
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  resultsSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 5,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  resultImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  resultInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  resultTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  resultSubtitle: {
    fontSize: 14,
    color: '#B3B3B3',
  },
  playButton: {
    padding: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#1C1C1C',
  },
  noResultsText: {
    color: '#B3B3B3',
    textAlign: 'center',
    marginTop: 20,
  },
  loadingContainer: {
    paddingVertical: 20,
  }
});