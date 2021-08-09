import * as React from 'react';
import { Avatar, Button, Card, } from 'react-native-paper';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import NID from "../../assets/images/nid.jpg";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const NIDScan = (props) => (
    <View style={styles.container}>
            <View style={styles.nidComment}>Place your NID to take a clear photo</View>
            <Card>
            <Card.Cover style={styles.personNID} source={NID} />
            <Card.Actions style={styles.nidActions}>
            <TouchableOpacity>
                    <Button icon="swap-horizontal"></Button>
            </TouchableOpacity>
            <TouchableOpacity >
                    <Button style={{ color: 'primary' }} icon="camera" ></Button>
            </TouchableOpacity>
            <TouchableOpacity>
                    <Button icon="camera-retake-outline" ></Button>
            </TouchableOpacity>
            </Card.Actions>
        </Card>
        <View>
            <TouchableOpacity>
                <Button onPress ={()=>{
                    props.navigation.navigate("FaceScan")
                }} style={styles.nextActions}> <View style={styles.nextActionsView}>Next</View> </Button>
            </TouchableOpacity>
        </View>
    </View>
  

);

const styles = StyleSheet.create({
          container: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
          },
          nidComment:{
              color: 'gray',
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
          },
          personNID:{
                    maxHeight:  150,
                    Width: 350,

          },
          nidActions:{
            flexDirection:'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        nextActions: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            color: "white",
            backgroundColor: 'blue'
        },
        nextActionsView:{
            color: "white",
        }
})

export default NIDScan;