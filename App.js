import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
     <Navbar/>
     <ScrollView>
     <Body/>
     </ScrollView>
    
     <Tabbar/>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
