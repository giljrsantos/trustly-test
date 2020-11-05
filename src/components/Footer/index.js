import React from 'react';
import { View, Text, ScrollView } from 'react-native';


import Tenis2 from '../../assets/2.png';
import Tenis3 from '../../assets/3.png';

import styles from './style';
import Shoes from '../Shoes';

const Footer = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.titleGostar}>VOCÊ TAMBÉM PODE GOSTAR</Text>
          <View style={styles.listRow}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.listGroupTenisGostar}>
                    <Shoes img={Tenis2} cost="$ 100,00" onClick={() => alert('Esse Tênis: *SS Sneaker')}>SS Sneaker</Shoes>
                </View>
                <View style={styles.listGroupTenisGostar}>
                    <Shoes img={Tenis3} cost="$ 100,00" onClick={() => alert('Esse Tênis: *SS Sneaker')}>SS Sneaker</Shoes>
                </View>
              </ScrollView>
          </View>
      </View>
  );
}

export default Footer;