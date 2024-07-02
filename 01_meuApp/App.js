import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: "Iphone 14 Pro Max" };

    this.modificar = this.modificar.bind(this);
    this.mudarNome = this.mudarNome.bind(this);
  }

  modificar() {
    this.setState({ nome: "Iphone 15 Pro Max" });
  }

  mudarNome = (nome) => {
    this.setState({ nome: nome });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subTitle}>
          This is my first app using React Native!
        </Text>
        <Text style={styles.text}>Sujeito Programador</Text>
        <Text style={styles.span}>Iphone</Text>
        <Product />
        <Text style={styles.text}>Nome do Produto: {this.state.nome}</Text>

        <Button
          title="Ver outro"
          color={"#000"}
          backgroundColor={"#fff"}
          onPress={this.modificar}
        />
        <Button
          title="Mudar"
          color={"#000"}
          backgroundColor={"#fff"}
          onPress={() => this.mudarNome("Iphone 16 Pro Max")} // Arrow function -> vai mandar o nome quando clicar
        />
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
    zIndex: 10,
  },
  span: {
    backgroundColor: "#fff",
    position: "relative",
    top: 65,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    right: 148,
    zIndex: 20,
  },
  button: {
    marginTop: 25,
  },
});

export default App;
