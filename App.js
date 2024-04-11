import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Monitoramento</Text>

      <View style={styles.containerView}>
        <Text style={styles.subtitle}>Alertas próximos</Text>

        <View style={styles.alertView}>
          <Image style={styles.icon} source={require('./assets/addressIcon.png')}/>
          <View>
            <Text style={styles.addressText}>Rua, Bairro</Text>
            <Text style={styles.distanceText}>10 metros de você</Text>
          </View>
        </View>

        <View style={styles.noAlertsView}>
          <Image style={styles.icon} source={require('./assets/dropIcon.png')}/>
          <Text style={styles.noAlertTitle}>Não há alagamentos próximos de você</Text>
          <Text style={styles.noAlertSubtitle}>Caso exista um alerta próximo, ele será mostrado aqui.</Text>
        </View>
      </View>

      <View style={styles.containerView}>
        <Text style={styles.subtitle}>Alertas na região</Text>

        <View style={styles.alertView}>
        <Image style={styles.icon} source={require('./assets/addressIcon.png')}/>
          <View>
            <Text style={styles.addressText}>Rua, Bairro</Text>
            <Text style={styles.distanceText}>10 metros de você</Text>
          </View>
        </View>
        
        <View style={styles.noAlertsView}>
          <Image style={styles.icon} source={require('./assets/dropIcon.png')}/>
          <Text style={styles.noAlertTitle}>Não há alagamentos na região</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: '#F7F8F2'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 40,
    color: '#072AC8'
  },
  containerView: {
    marginBottom: 45,
    width: '70%',
  },
  subtitle: {
    textAlign: 'left',
    textAlignVertical: 'bottom',
    marginBottom: 15,
    color: 'gray',
  },
  alertView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e7e8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15
  },
  addressText: {
    fontWeight: 'bold',
  },
  distanceText: {

  },

  noAlertsView: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e6e7e8',
    borderRadius: 10,
    padding: 25,
  },
  noAlertTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noAlertSubtitle: {
    textAlign: 'center',
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    opacity: 0.4,
    resizeMode: 'contain',
  },
});