import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <>
      <View style={[styles.header, {color: 'blue'}]}>
        <View style={styles.headerContainer}>
          <Text style={styles.HeaderText}>ChatApp</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon style={[styles.cameraIcon, styles.icon]} name="camera"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon style={[styles.searchIcon, styles.icon]} name="search"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon style={[[styles.ellipsisIcon, styles.icon]]} name="ellipsis-v"/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0078D4',
        height: 50,
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',       
    },
    HeaderText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
        marginLeft: 20,
        width: 100, 
    },
    iconContainer : {
      width: 150,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    icon: {
      color: 'white',
      paddingHorizontal: 15,
      fontSize: 18,
      fontWeight: '100',
    },
    iconButton: {

    }

})