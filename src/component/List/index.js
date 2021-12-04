import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

function carregaLike(likeada){
  return likeada ? require("../../img/likeada.png") : require("../../img/like.png")
};

function mostraLikes(likers){
  if(likers === 0){
    return;
  }

  return (
    <View style={styles.viewCurtida}>
      <View>
        <Text style={{fontWeight: "bold", fontSize: 16}}>{likers} {likers > 1 ? "curtidas" : "curtida"}</Text>
      </View>
    </View>
  )

}

export default function List(props){
  return(
    <View style={styles.list}>
      <View style={styles.viewPerfil}>
        <View>
          <TouchableOpacity style={styles.perfil}>
            <Image
            source={{uri: props.data.imgperfil}}
            style={styles.fotoPerfil}
            />
            <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image style={{height: 22, width: 22}} source={{uri: "https://img.icons8.com/fluency-systems-regular/48/000000/menu-2--v1.png"}}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewConteudo}>
        <View style={styles.post}>
          <Image
          style={styles.postImg} 
          resizeMode="cover"
          source={{uri: props.data.imgPublicacao}}
          />
        </View>

        <View style={styles.viewDescSuperior}>
          <View style={styles.descEsq}>
            <TouchableOpacity>
              <Image
              style={styles.btnDesc}
              source={carregaLike(props.data.likeada)}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
              style={styles.btnDescDois}
              source={require("../../img/comment.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
              style={styles.btnDescDois}
              source={require("../../img/send.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.descDir}>
            <Image 
            style={styles.btnDesc}
            source={require("../../img/save.png")}
            />
          </View>
        </View>

        {mostraLikes(props.data.likers)}
        {/* <View style={styles.viewCurtida}>
          <View>
            {mostraLikes(props.data.likers)}
          </View>
        </View> */}
        
        <View style={styles.viewDescricao}>
          <Text style={{fontSize: 16}}><Text style={{fontWeight: "bold"}}>{props.data.nome}</Text> {props.data.descricao}</Text>
        </View>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  list:{
    height: 535,
    // backgroundColor: "white",
    marginBottom: 10,
  },


  viewPerfil:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
    height: 60,
    padding: 6,
  },
  perfil:{
    flexDirection: "row",
    alignItems: "center",
  },
  fotoPerfil:{
    height: 45,
    width: 45,
    borderRadius: 25,
    borderColor: "#ff0000",
    borderWidth: 2,
  },
  nomeUsuario:{
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },


  viewConteudo:{
    flex: 1,
    // height: 550,
    // backgroundColor: "blue",
  },
  postImg:{
    height: 350,
    alignItems: "center",
  },

  viewDescSuperior:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    padding: 6
  },
  descEsq:{
    flexDirection: "row",
  },
  btnDesc:{
    height: 22,
    width: 22,
  },
  btnDescDois:{
    height: 22,
    width: 22,
    marginLeft: 10,
  },

  viewCurtida:{
    height: 30,
    paddingHorizontal: 6,
    // backgroundColor: "red",
  },

  viewDescricao:{
    flex: 1,
    paddingHorizontal: 6,
    paddingBottom: 5,
    // backgroundColor: "yellow",
  }
})