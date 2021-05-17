import React, { useState } from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import estilo from '../estilo'

export default props => {
    const [texto, setTexto] = useState(0)
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={estilo.grande}>{texto} {num}</Text>
            <Filho
                min={1}
                max={60}
                função={exibirValor}
            />
        </>
    )
}