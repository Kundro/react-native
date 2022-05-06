import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './AboutMe.styles';
import BreakLine from '../../components/breakline';

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.boldText}>Alexey Kundro</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.mainText}>
            Let me introduce myself.<BreakLine /> My full name is Alexey Kundro. I'm 23. I
            graduated from Belarusian National Technical University with an
            engineering degree in 2020. After graduating I worked as a gas
            supply engineer.
            Throughout this work I've been interested in IT.I
            started learning the programming basics using the C++ language as an
            example. But I was interested in the designing aspect at start. I'm
            interested in working with the visual elements of a websites or
            applications, the parts of this applications which i'll can see when
            the work is completed. So i decided to opt for the frontend. I
            thought it would be great for me. But also i have a good logical
            thinking.
            {'\n'}Contacts: exey.kundro@gmail.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutMe;
