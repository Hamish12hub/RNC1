import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
        {/* <View style={styles.Top}></View>
        <View style={styles.Middle}></View>
        <View style={styles.Bottom}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "green",
    zIndex: 100,
    position: "absolute",
  },
//   Top: {
//     flex: 1,
//   },
//   Middle: {
//     flex: 1,
//   },
//   Bottom: {
//     flex: 1,
//   },
});