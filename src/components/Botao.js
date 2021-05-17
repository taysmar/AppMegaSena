import React from 'react';
import {Button} from 'react-native';

export default props => {
    
    function executar() {
        console.warn('Exec!!!')
    }
    return(
        <>
        <Button 
        title="executar! #01"
        onPress={executar}
        />
        <Button 
        title="executar! #02"
        onPress={function() {
            console.warn('Exec #02!!!')
        }}
        />
        <Button 
        title="executar! #03"
        onPress={function() {
            console.warn('Exec #03!!!')
        }}
        />
        </>
    )
}