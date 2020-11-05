import React from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Tenis1 from '../../assets/1.png';
import Tenis2 from '../../assets/2.png';
import Tenis3 from '../../assets/3.png';


import styles from './style';
import Shoes from '../../components/Shoes';

function Home() {

const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
   

        <View style={styles.textContainer}>
          
          <EvilIcons name="search" size={32} color="#e8e8e8" />
          <TextInput
              style={styles.textGray}
              placeholder="Search for your sneaker"
          />
          
       
         
        </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        
        <View style={styles.lancamentos}>
          
          <Shoes img={Tenis1} cost="$ 100,00" onClick={() => navigation.navigate('Detail')}>SS Sneaker</Shoes>
          <Shoes img={Tenis2} cost="$ 100,00" onClick={() => navigation.navigate('Detail')}>SS Sneaker</Shoes>
          <Shoes img={Tenis3} cost="$ 100,00" onClick={() => alert('Esse Tênis: *SS Sneaker')}>SS Sneaker</Shoes>

        </View>
   
      </ScrollView>

   </View>
  );
}

export default Home;