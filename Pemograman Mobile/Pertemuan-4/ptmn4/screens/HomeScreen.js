import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Selamat Datang 👋</Text>
            <Text style={styles.name}>Maya Trisnawati</Text>
          </View>

          {/* FOTO PROFIL */}
          <Image
            source={require('../assets/Foto.jpeg')}
            style={styles.profileImage}
          />
        </View>

        {/* WELCOME CARD */}
        <View style={styles.welcomeCard}>
          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeTitle}>
              Halo, Maya! 👋
            </Text>

            <Text style={styles.welcomeSubtitle}>
              Senang melihat kamu kembali.
              {'\n'}Semoga harimu menyenangkan!
            </Text>
          </View>

          <Text style={styles.welcomeEmoji}>🌸</Text>
        </View>

        {/* MENU UTAMA */}
        <Text style={styles.sectionTitle}>Menu Utama</Text>

        <View style={styles.menuContainer}>

          {/* MATERI */}
          <TouchableOpacity
            style={styles.menuCard}
            activeOpacity={0.8}
          >
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📚</Text>
            </View>

            <Text style={styles.menuTitle}>Materi</Text>

            <Text style={styles.menuSubtitle}>
              Lihat materi pembelajaran
            </Text>
          </TouchableOpacity>

          {/* TUGAS */}
          <TouchableOpacity
            style={styles.menuCard}
            activeOpacity={0.8}
          >
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📝</Text>
            </View>

            <Text style={styles.menuTitle}>Tugas</Text>

            <Text style={styles.menuSubtitle}>
              Cek tugas kamu
            </Text>
          </TouchableOpacity>

          {/* PROGRESS */}
          <TouchableOpacity
            style={styles.menuCard}
            activeOpacity={0.8}
          >
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📊</Text>
            </View>

            <Text style={styles.menuTitle}>Progress</Text>

            <Text style={styles.menuSubtitle}>
              Lihat perkembangan
            </Text>
          </TouchableOpacity>

          {/* PENGATURAN */}
          <TouchableOpacity
            style={styles.menuCard}
            activeOpacity={0.8}
          >
            <View style={styles.iconBox}>
              <Text style={styles.icon}>⚙️</Text>
            </View>

            <Text style={styles.menuTitle}>Pengaturan</Text>

            <Text style={styles.menuSubtitle}>
              Atur aplikasi
            </Text>
          </TouchableOpacity>

        </View>

        {/* INFORMASI */}
        <Text style={styles.sectionTitle}>Informasi</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoIconBox}>
            <Text style={styles.infoIcon}>💡</Text>
          </View>

          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>
              Tetap Semangat!
            </Text>

            <Text style={styles.infoSubtitle}>
              Jangan lupa menyelesaikan tugas dan
              terus belajar setiap hari.
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>
          © 2026 My Profile App
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 30,
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  headerText: {
    flex: 1,
  },

  greeting: {
    fontSize: 14,
    color: '#8A8F9C',
    marginBottom: 5,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#252A34',
  },

  profileImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  /* WELCOME */

  welcomeCard: {
    backgroundColor: '#6C63FF',
    borderRadius: 22,
    padding: 22,
    minHeight: 145,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 28,

    shadowColor: '#6C63FF',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10,

    elevation: 5,
  },

  welcomeContent: {
    flex: 1,
  },

  welcomeTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  welcomeSubtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: '#F1EFFF',
  },

  welcomeEmoji: {
    fontSize: 42,
    marginLeft: 10,
  },

  /* SECTION */

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#252A34',
    marginBottom: 15,
  },

  /* MENU */

  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  menuCard: {
    width: '48%',
    minHeight: 145,

    backgroundColor: '#FFFFFF',
    borderRadius: 18,

    padding: 17,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 7,

    elevation: 3,
  },

  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 13,

    backgroundColor: '#F0EEFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 12,
  },

  icon: {
    fontSize: 22,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#303642',
    marginBottom: 5,
  },

  menuSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    color: '#8A8F9C',
  },

  /* INFORMATION */

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,

    padding: 17,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 7,

    elevation: 3,
  },

  infoIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,

    backgroundColor: '#FFF4D9',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 14,
  },

  infoIcon: {
    fontSize: 25,
  },

  infoText: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#303642',
    marginBottom: 5,
  },

  infoSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#8A8F9C',
  },

  /* FOOTER */

  footer: {
    textAlign: 'center',
    fontSize: 11,
    color: '#A0A5B1',
    marginTop: 25,
  },
});