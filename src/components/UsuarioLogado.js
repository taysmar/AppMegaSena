import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import If from './if'

export default ({ usuario = 1 }) => {
    const usuario = props.usuario || {}
    return (
        <>
        <If teste={usuario && usuario.nome && usuario.email}>
            <Text style={Estilo.grande}>Usuário Logado: </Text>
            <Text style={Estilo.grande}>{usuario.nome} - {usuario.email}</Text>
        </If>
        </>
    )
}