import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutText: {
    color: 'red',
  },
  formContainer: {
    padding: 20,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
  },
  smallButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
  },
  smallButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelText: {
    color: 'red',
    marginTop: 5,
    textAlign: 'right',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardEmail: {
    fontSize: 12,
    color: '#666',
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionTextEdit: {
    color: '#007bff',
    marginRight: 15,
  },
  actionTextDelete: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default styles;
