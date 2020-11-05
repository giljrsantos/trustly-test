import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Tenis1 from '../../assets/1.png';
import styles from './styles';

function Shoes(props) {

  function filterDesc(desc){
    if(desc.length < 27){
      return desc;
    }
    return `${desc.substring(0, 20)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.shoesImg}
      />
      <Text style={styles.shoesText}>{filterDesc(props.children)}</Text>
        <View style={styles.SizeQuantity}>
            <View style={styles.ViewSize}>
                <Text style={styles.TextSize}>Size</Text>
                <Text style={styles.size}>
                  41 <Ionicons name="ios-arrow-down" size={24} color="#e8e8e8" />
                </Text>
            </View>
            <View style={styles.ViewQuantity}>
                <Text style={styles.TextQuantity}>Quantity</Text>
                <Text style={styles.quantity}>
                  1 <Ionicons style={styles.imageShoe} name="ios-arrow-down" size={24} color="#e8e8e8" />
                </Text>
            </View>            
        </View>
      <Text style={styles.shoesPrice}>{props.cost}</Text>


     
    </TouchableOpacity>
    

    
  );
}


export default Shoes;