import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class App extends Component {
  render() {
    const name = "iPhone 14 Pro Max";

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subTitle}>
          This is my first app using React Native!
        </Text>
        <Text style={styles.text}>Sujeito Programador</Text>
        <Product />
        <Text style={styles.text}>Nome do Produto: {name}</Text>
      </View>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: "https://www.apple.com/br/iphone/home/images/overview/welcome/startframe__d10cha77b2eu_xlarge.jpg",
          }}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141516",
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
  },
  title: {
    color: "#D8D5D0",
    fontSize: 50,
    fontWeight: "bold",
  },
  subTitle: {
    color: "white",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    marginTop: 25,
  },
  image: {
    width: 380,
    height: 300,
    marginTop: 25,
    borderRadius: 10,
  },
});

export default App;
