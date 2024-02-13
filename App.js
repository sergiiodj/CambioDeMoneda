import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Modal, TextInput } from 'react-native';

// Definición de las monedas
const currencies = {
  USD: { emoji: '$', exchangeRate: 1.0 },
  EUR: { emoji: '€', exchangeRate: 0.84 },
  GBP: { emoji: '£', exchangeRate: 0.73 }
};

const ExchangeCard = ({ title, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Image
          source={require('./img/eliminar.png')}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const initialData = Object.keys(currencies).map(currencyCode => ({
      id: currencyCode,
      title: `1 USD ${currencies[currencyCode].emoji} to ${currencies[currencyCode].exchangeRate} ${currencyCode} ${currencies[currencyCode].emoji}`,
    }));

    setData(initialData);
  }, []);

  const addItem = () => {
    const newItemObject = {
      id: Math.random().toString(),
      title: newItem || `Nuevo objeto ${data.length + 1}`,
    };

    setData(prevData => [...prevData, newItemObject]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./img/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Currency Exchanger</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setNewItem}
          value={newItem}
        />
        <TouchableOpacity onPress={addItem} style={styles.button}>
          <Image
            source={require('./img/añadir.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ExchangeCard
            title={item.title}
            onDelete={() => deleteItem(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContent}>
          <Text>Contenido del Modal</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fffee1'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  card: {
    backgroundColor: '#abc35c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 24,
  },
  deleteButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  button: {
    // Estilos para el botón
  },
  buttonImage: {
    // Estilos para la imagen del botón
  },
  textInput: {
    // Estilos para el cuadro de texto
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default App;
