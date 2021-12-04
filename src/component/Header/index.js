import React from "react";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";

export default function Header(){
  return(
    <View style={styles.header}>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Image source={require("../../img/logo.png")}/>
        </TouchableOpacity>
      </View>
      <View style={styles.viewDireita}>
        <TouchableOpacity style={styles.btn}>
          <Image style={{height: 22, width: 22}} source={{uri: "https://img.icons8.com/fluency-systems-regular/48/000000/plus-math.png"}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Image style={styles.send} source={require("../../img/like.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Image style={{height: 22, width: 22}} source={{uri: "https://img.icons8.com/fluency-systems-regular/48/000000/speech-bubble-with-dots.png"}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    height: 55,
    shadowColor: "#121212",
    elevation: 2,
  },
  viewDireita:{
    flexDirection: "row",
    alignItems: "center",
  },
  btn:{
    marginHorizontal: 7
  },
  send:{
    height: 20,
    width: 20,
  }
})