import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity, Animated, Easing } from 'react-native';
import Game from './components/Game';
import { useEffect, useState } from 'react';
import BackGroundImage from './components/BackGroundImage';
import { GestureEventType } from './Imports/Types';
const { height, width } = Dimensions.get('window');

export default function App() {

  const [game, setGame] = useState(false);
  const [topScore, setTopScore] = useState(0);

  const [boxHeight, setBoxHeight] = useState(0.9);
  const [animation] = useState(new Animated.Value(height * 0.9));
  const [buttonPressed, setButtonPressed] = useState(true);

  const handleButtonPress = () => {
    setGame(!game);
    setBoxHeight(boxHeight === 0.1 ? 0.9 : 0.1);
    setButtonPressed(true);
  };

  useEffect(() => {
    if (buttonPressed) {
      Animated.timing(animation, {
        toValue: height * boxHeight,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
    }
  }, [boxHeight, buttonPressed]);


  return (
    <View style={styles.container}>

      {/* Background */}

      <BackGroundImage/>

      {/* Introduction */}

 <View style={styles.IntroBackground}>
        <Animated.View style={[styles.IntroContainer, { width: width * 0.9, height: animation, top: height * 0.05 }]}>
          {!game ? (
            <>
              <View><Text>the logo</Text></View>
              <View><Text>best score</Text></View>
              <View>
                <TouchableOpacity onPress={handleButtonPress}>
                  <Text style={styles.IntroButton}>Start</Text>
                </TouchableOpacity>
              </View>
              <View><Text>scare a friend</Text></View>
              <View><Text>information on game</Text></View>
              <View><Text>Turn of sound / music</Text></View>
              <View><Text>The score you just got</Text></View>
            </>
          ) : (
            <>
              <View><Text>your current score</Text></View>
            </>
          )}
        </Animated.View>
      </View> 
    
      {/* <Game/> */}


       <Game/> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },

  // Introduction

  IntroBackground: {
    width: width,
    height: height,
    position: "absolute",
  },
  IntroContainer: {
    backgroundColor: '#FFFFFF',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "black",
    alignSelf: 'center',
    zIndex: 20,
  },
  IntroButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
});