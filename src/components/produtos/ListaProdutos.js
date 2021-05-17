import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}>
                {p.id}) {p.nome} tem preço R$ {p.preço}
                </Text>

        })
    }
      return( 
          <>
          <Text style={Estilo.grande}>
              Lista de Produtos
          </Text>
          {obterLista()}
          </>
    )
}