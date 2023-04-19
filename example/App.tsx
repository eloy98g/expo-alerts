import { StyleSheet, Text, View } from 'react-native';

import * as ExpoAlerts from 'expo-alerts';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoAlerts.hello()}</Text>
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
