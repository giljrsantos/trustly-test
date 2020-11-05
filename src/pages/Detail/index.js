import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './style';
import ImgDetail from '../../assets/1.png';
import bannerCard from '../../assets/bannercard.png';
import card from '../../assets/card.png';
import applecard from '../../assets/applecard.png';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Back'
  });
 return (
   <ScrollView>
        <View>
          <Text style={styles.titlePrice}>Checkout</Text>
        </View>

      <View style={styles.viewInfo}>

          <Image
            style={styles.image}
            source={ImgDetail}
          />  

          <Text style={styles.descriptionContent}>
            <Text style={styles.name}>SS Snaker</Text>
            <Text style={styles.DescriptionName}>x 1, Green, Size 41 Item #2839u512401</Text>
            <Text style={styles.name}>Delivery details</Text>
            <Text style={styles.DescriptionName}>x 1, Green, Size 41 Item #2839u512401</Text>
          </Text>  

         

      </View>

      <View style={styles.total}>
              <View style={styles.totalinfo}>
                <Text style={styles.cost}>Total Cost</Text>
                <Text style={styles.TextCost}>Delivery included</Text>
              </View>
              <View style={styles.value}>
                <Text style={styles.TextValue}>$ 100,00</Text>
              </View>
      </View>  

       <View>

        <View>
          <Text style={styles.payment}>Payment method</Text>
        </View>
        <View style={styles.formpayment}>
          <View>
            <Text style={styles.titleBanking}>Online Banking</Text>
            <Text style={styles.save}>SAVE $10</Text>
          </View>

          <View>
          <Image style={styles.imagebank} source={bannerCard} />             
          </View>          
          
        </View>
        <View style={styles.paycard}>
          <View>
            <Text style={styles.titleBanking}>Card Payment</Text>
          </View>

          <View>
          <Image style={styles.card} source={card} />             
          </View>          
          
        </View>
        <View style={styles.paycard}>
          <View>
            <Text style={styles.titleBanking}>Apple Pay</Text>
          </View>

          <View>
          <Image style={styles.applecard} source={applecard} />             
          </View>          
          
        </View>

        <Button/>

        <View style={styles.line}/>

        <View>
          <Footer/>
        </View>

       </View>
   </ScrollView>
  );
}

export default Detail;