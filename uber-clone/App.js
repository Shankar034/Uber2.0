import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//1 )Setup redux

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Build UBER!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});