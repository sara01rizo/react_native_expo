import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Image 
        source={{uri: "https://i.picsum.photos/id/881/200/300.jpg?hmac=OaIsS2cuxcnUpCVdxcFoc8JwfJgzWEv2Z9F_qEN9tHU"}}
        style={styles.image}
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
  image: {height: 200, width: 200}
});

export default App;