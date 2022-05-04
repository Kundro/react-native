import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}> Hi! I'am Alexey.</Text><Text style={styles.commonText}>Let me introduce myself</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
        <Text style={styles.mainText}>My full name is Alexey Kundro. I'm 23. {'\n'}_______________{'\n'}{'\n'} I graduated from Belarusian National Technical University with an Engineering degree in 2020. After graduating I worked as a gas supply engineer.{'\n'}_______________{'\n'}{'\n'}Throughout this work I've been interested in IT. I started learning the programming basics using the C++ language as an example. But I was interested in the designing aspect, the visual elements of a websites or applications, the parts of this applications which i'll can see. And i decided to opt for the frontend. I thought it would be great for me. But also i have a good logical thinking.{'\n'}_______________{'\n'}{'\n'}Contacts: exey.kundro@gmail.com</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(221, 221, 221, 1)',
    flex: 1
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 20,
    padding: 10,
    display: 'block',
    width: '100%',
    backgroundColor: 'rgba(255, 136, 136, 1)'
  },
  main:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  commonText:{
    fontSize: 22,
    color: 'white',
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  mainText:{
    padding: 10,
    fontSize: 18,
    color: 'dimgrey',
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  boldText:{
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    fontFamily:'Roboto',
    textAlign: 'center'
   },
  centerText:{
    textAlign: 'center'
  }
})

export default Header;