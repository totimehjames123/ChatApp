import { useState } from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
export default function ChatItem() {
  
  return (
    <View>
    {[...Array(30)].map((_, index) => (
      <TouchableOpacity key={index} style={{height: 80, backgroundColor: 'whitesmoke',paddingLeft: 15, paddingVertical: 10, flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 0.5}}>
        <Image source={require('../assets/logo.jpg')} style={{maxWidth: 60, maxHeight: 60, borderRadius: 100}} resizeMode='cover' />
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '70%', paddingVertical: 10, paddingHorizontal: 15}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}} numberOfLines={1}>Mr.Owusu 😎😎😎</Text>
            <Text style={{fontSize: 15, color: 'gray'}} numberOfLines={1}>Hi, I'm Mr.Owusu. Hope you'll be going to work today?</Text>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 10, justifyContent: 'center', textAlign: 'right', paddingTop: 30}}>
            <Text style={{fontSize: 10, color: 'gray', fontWeight: 'bold'}}>10:50 am</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 18, marginVertical: 5}}>
              <TouchableOpacity style={{backgroundColor: '#0078D4', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 20, height: 20}}>
                <Text style={{color: 'white', fontSize: 10}}>{index + 1}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ))}
      
      
      
      
    </View>
  )
}
