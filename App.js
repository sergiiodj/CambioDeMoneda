import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrencyComboBox from './components/CurrencyComboBox';

const currencies = {
  "USD": {
    "emoji": "🇺🇸",
    "exchangeRate": 1,
    "name": "US Dollar"
  },
  "EUR": {
    "emoji": "🇪🇺",
    "exchangeRate": 0.89,
    "name": "Euro"
  },
  "JPY": {
    "emoji": "🇯🇵",
    "exchangeRate": 114.42,
    "name": "Japanese Yen"
  },
  "GBP": {
    "emoji": "🇬🇧",
    "exchangeRate": 0.75,
    "name": "British Pound"
  },
  "AUD": {
    "emoji": "🇦🇺",
    "exchangeRate": 1.35,
    "name": "Australian Dollar"
  },
  "CAD": {
    "emoji": "🇨🇦",
    "exchangeRate": 1.28,
    "name": "Canadian Dollar"
  },
  "CHF": {
    "emoji": "🇨🇭",
    "exchangeRate": 0.93,
    "name": "Swiss Franc"
  },
  "CNY": {
    "emoji": "🇨🇳",
    "exchangeRate": 6.36,
    "name": "Chinese Yuan"
  },
  "SEK": {
    "emoji": "🇸🇪",
    "exchangeRate": 8.51,
    "name": "Swedish Krona"
  },
  "NZD": {
    "emoji": "🇳🇿",
    "exchangeRate": 1.49,
    "name": "New Zealand Dollar"
  },
  "INR": {
    "emoji": "🇮🇳",
    "exchangeRate": 74.57,
    "name": "Indian Rupee"
  },
  "BRL": {
    "emoji": "🇧🇷",
    "exchangeRate": 5.22,
    "name": "Brazilian Real"
  },
  "RUB": {
    "emoji": "🇷🇺",
    "exchangeRate": 73.96,
    "name": "Russian Ruble"
  },
  "ZAR": {
    "emoji": "🇿🇦",
    "exchangeRate": 16.96,
    "name": "South African Rand"
  },
  "MXN": {
    "emoji": "🇲🇽",
    "exchangeRate": 20.45,
    "name": "Mexican Peso"
  }
  // Puedes agregar más códigos de moneda, emojis de banderas y nombres de moneda según tus necesidades
}

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleSelectCurrency = (currency) => {
    setSelectedCurrency(currency);
    // Puedes realizar acciones adicionales cuando se selecciona una moneda, si es necesario.
  };

  return (
    <View style={styles.container}>
      <Text>Selected Currency: {selectedCurrency}</Text>
      <CurrencyComboBox currencies={currencies} onSelectCurrency={handleSelectCurrency} />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    marginTop: 100,
  }
});

export default App;
