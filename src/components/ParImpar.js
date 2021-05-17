import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
      return( 
      <View>
          <Text style={Estilo.grande}>O resultado é: </Text>
          {num % 2 === 0
          ?  <Text style={Estilo.grande}>Par </Text>
          :  <Text style={Estilo.grande}>Par </Text>


          }
          
         
              </View>
          )
      
}