import { Text, TextInput, View } from "react-native";


const ContainerLine = ({line, setTarget, setProduction, setRemarks}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.linetext}>Line No. {line}</Text>
      <View style={styles.dataContainer}>
        <View style={styles.datafield}>
          <Text style={styles.text}>TARGET</Text>
          <TextInput
            //  multiline={true}
            //  numberOfLines={1}
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={setTarget}
          ></TextInput>
        </View>
        <View style={styles.datafield}>
          <Text style={styles.text}>PRODUCTION</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={setProduction}
          ></TextInput>
        </View>
      </View>
      <View style={styles.dataformbundle}>
        <Text style={styles.text}>REMARKS</Text>
        <TextInput
          style={[styles.textInput, { width: screen_width * 0.92 }]}
          onChangeText={setRemarks}
        ></TextInput>
      </View>
    </View>
  );
};

export default ContainerLine;

const styles = StyleSheet.create({
    mainContainer:{
        marginLeft:screen_width *  0.03,
        marginBottom: screen_width * 0.03,
    },
    textInput:{
        width: "100%",
        height: 40,
        borderWidth: 0.5,
        borderColor:"#6c757d",
        borderRadius:5,
        textAlign:'center',
        backgroundColor: 'white',
        fontSize: 16,

    },
    dataContainer:{
        flexDirection: 'row',
    },
    datafield:{
        paddingRight:20,
        width: "50%"
    },
    scrollview:{
        marginBottom:screen_height * 0.32,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    linetext:{
        color:'#43aa8b',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button:{
        width: screen_width * 0.5,
        alignSelf: 'center',
        marginTop: 10,
        // marginBottom: 10,
    }
})
