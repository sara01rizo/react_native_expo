import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
import palmtree from "./assets/palm-tree.jpg";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Image 
        source={palmtree}
        style={styles.image}
      />
      <Button 
        color="#000"
        title='Jump in'
        onPress={() => Alert.alert('Hi!!!!!')}
        style={styles.button}
      />
      <TouchableOpacity onPress={() => Alert.alert('Hello!!!')}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: "#282828",
    justifyContent: 'center',
  },
  title: {fontSize: 30, color: "#fff"},
  image: {height: 200, width: 200, borderRadius: 100, marginBottom: 5.5},
  button: {
    backgroundColor: '#00bfff',
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});

export default App;