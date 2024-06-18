import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Word!</Text>
      <Text style={styles.subTitle}>
        This is my first APP using React Native!
      </Text>
      <Button title="Press me" onPress={() => alert("Hello World!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
    backgroundColor: "#141516",
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
});
