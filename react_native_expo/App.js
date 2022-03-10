import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
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
      />
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
  image: {height: 200, width: 200, borderRadius: 100, marginBottom: 5.5, opacity: 15}
});

export default App;