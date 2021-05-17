import React, {Fragment} from 'react';
import { Text } from 'react-native';
import Estilo from './estilo'

export default props => {
        return(
            <Fragment>
            <Text style={Estilo.grande}> {props.principal} </Text>
            <Text>{props.secundario}</Text>
            
            </Fragment>
        )
    
}