import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>

        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profil Saya</Text>

          <Text style={styles.headerSubtitle}>
            Informasi akun dan profil pengguna
          </Text>
        </View>

        {/* ================= PROFILE CARD ================= */}
        <View style={styles.profileCard}>

          {/* Foto Profil */}
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../assets/Foto.jpeg')}
              style={styles.avatar}
            />
          </View>

          {/* Nama */}
          <Text style={styles.name}>
            Maya Trisnawati
          </Text>

          {/* Email */}
          <Text style={styles.email}>
            mayatrissnawati@email.com
          </Text>

          {/* Garis */}
          <View style={styles.divider} />

          {/* ================= INFORMASI ================= */}

          {/* Status */}
          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🎓</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>
                Status
              </Text>

              <Text style={styles.value}>
                Mahasiswa
              </Text>
            </View>
          </View>

          {/* Program Studi */}
          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>💻</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>
                Program Studi
              </Text>

              <Text style={styles.value}>
                Informatika
              </Text>
            </View>
          </View>

          {/* Semester */}
          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📚</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>
                Semester
              </Text>

              <Text style={styles.value}>
                Semester 5
              </Text>
            </View>
          </View>

          {/* Email */}
          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>✉️</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>
                Email
              </Text>

              <Text style={styles.value}>
                mayatrissnawati@email.com
              </Text>
            </View>
          </View>

          {/* ================= BUTTON ================= */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              ✏️  Edit Profil
            </Text>
          </TouchableOpacity>

        </View>

        {/* ================= INFORMASI TAMBAHAN ================= */}

        <View style={styles.aboutCard}>

          <Text style={styles.aboutTitle}>
            Tentang Saya
          </Text>

          <Text style={styles.aboutText}>
            Saya adalah mahasiswa Informatika yang sedang
            mempelajari teknologi informasi, pemrograman,
            dan pengembangan aplikasi.
          </Text>

        </View>

        {/* ================= FOOTER ================= */}

        <Text style={styles.footer}>
          © 2026 My Profile App
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 35,
  },

  /* ================= HEADER ================= */

  header: {
    marginBottom: 22,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#252A34',
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#7A8190',
    marginTop: 5,
  },

  /* ================= PROFILE CARD ================= */

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 5,
  },

  /* ================= FOTO ================= */

  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,

    padding: 4,

    backgroundColor: '#6C63FF',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 15,
  },

  avatar: {
    width: 102,
    height: 102,
    borderRadius: 51,
  },

  /* ================= IDENTITAS ================= */

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#252A34',
    textAlign: 'center',
  },

  email: {
    fontSize: 14,
    color: '#858B98',
    marginTop: 5,
    textAlign: 'center',
  },

  /* ================= DIVIDER ================= */

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 22,
  },

  /* ================= INFO ROW ================= */

  infoRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 13,

    backgroundColor: '#F0EEFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 15,
  },

  icon: {
    fontSize: 20,
  },

  infoContent: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: '#8A8F9C',
    marginBottom: 3,
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#303642',
  },

  /* ================= BUTTON ================= */

  button: {
    width: '100%',

    backgroundColor: '#6C63FF',

    paddingVertical: 15,

    borderRadius: 15,

    alignItems: 'center',

    marginTop: 8,

    shadowColor: '#6C63FF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  /* ================= ABOUT ================= */

  aboutCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    padding: 20,

    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 7,

    elevation: 3,
  },

  aboutTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#252A34',
    marginBottom: 8,
  },

  aboutText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#7A8190',
  },

  /* ================= FOOTER ================= */

  footer: {
    textAlign: 'center',

    color: '#A0A5B1',

    fontSize: 12,

    marginTop: 25,
  },

});