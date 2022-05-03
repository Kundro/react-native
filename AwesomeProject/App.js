import React from 'react';
import { Component, StyleSheet, View, Text, ScrollView } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}> Hi! I'am Alexey Kundro.</Text><Text style={styles.commonText}>Let me introduce myself</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
        <Text style={styles.mainText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</Text>
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
    padding: 10,
    width: 412,
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
    fontSize: 20,
    color: 'black',
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