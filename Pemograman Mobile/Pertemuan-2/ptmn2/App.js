import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>CURRICULUM VITAE</Text>

      <Text style={styles.label}>Nama Lengkap</Text>
      <Text style={styles.text}>Maya Trisnawati</Text>

      <Text style={styles.label}>NIM</Text>
      <Text style={styles.text}>2488010050</Text>

      <Text style={styles.label}>Asal Sekolah</Text>
      <Text style={styles.text}>MAS Tihamah Putri</Text>

      <Text style={styles.label}>Cita-cita</Text>
      <Text style={styles.text}>Pengusaha Sukses</Text>

      <Text style={styles.label}>Rencana Menggapai Cita-cita</Text>
      <Text style={styles.text}>
        Terus belajar, mengembangkan kemampuan, menambah pengalaman, dan membangun relasi untuk menjadi pengusaha yang sukses dan profesional.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  }, 

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },

  text: {
    fontSize: 16,
    marginTop: 5,
  },
});