import React from 'react';
import { View, Text,Image, StyleSheet, StatusBar, TouchableOpacity,ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Swiper from "react-native-swiper";

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>

          <View style={styles.sliderContainer}>
            <Swiper autoplay={true}  height={150}  activeDotColor="#3D9C9C">
              <View style={styles.slide}>
                <Image style={styles.sliderImage}
                source = {require('../assets/banner1.jpg')}/> 
              </View>
              <View style={styles.slide}>
                <Image style={styles.sliderImage}
                source = {require('../assets/banner2.jpg')}/>
              </View>
              <View style={styles.slide}>
                <Image style={styles.sliderImage}
                source = {require('../assets/banner3.jpg')}/>
              </View>
            </Swiper>
          </View>

          <View style={styles.categoryContainer}>

            <TouchableOpacity style={styles.categoryBtn}
              onPress={() => navigation.navigate('CategoryListScreen', {title: 'Facial'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/facial.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Facial</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => navigation.navigate('CategoryListScreen', {title: 'Makeup'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/makeup.jpg')} style={styles.imagetag} />

              </View>
              <Text style={styles.categoryBtnTxt}>Makeup</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CategoryListScreen', {title: 'Manicure'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/manicure.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Manicure</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.categoryContainer, {marginTop: 10}]}>

            <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CategoryListScreen', {title: 'Pedicure'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/pedicure.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Pedicure</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CategoryListScreen', {title: 'Hair Dressing'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/hairdressing.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Hair Dressing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CategoryListScreen', {title: 'Hair Styling'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/hairstyling.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Hair Styling</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.categoryContainer, {marginTop: 10}]}>

            <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CategoryListScreen', {title: 'Spa'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/spa.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Spa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CategoryListScreen', {title: 'Waxing'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/waxing.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Waxing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CategoryListScreen', {title: 'Massage'})}>
              <View style={styles.categoryIcon}>
              <Image  source = {require('../assets/Massage.jpg')} style={styles.imagetag} />
              </View>
              <Text style={styles.categoryBtnTxt}>Massage</Text>
            </TouchableOpacity>
          </View>

      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  // header:{
  //   resizeMode: "cover"
  // },
  sliderContainer:{
    height: 150,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper:{},
  slide:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius:8,
      },
  sliderImage:{
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    resizeMode: "cover",
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 110,
    height: 110,
    backgroundColor: '#40E0D0' /* '#FF6347' */,
    borderRadius: 0,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000000',
    fontSize: 18,
  },
  imagetag:{
    height:110,
    width:110
  }
  
 
});
