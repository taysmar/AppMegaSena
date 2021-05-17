import React from 'react';
import {View, StyleSheet} from 'react-native';

import Mega from './components/mega/Mega'
//import FlexBoxV4 from './components/layout/FlexBoxV4';
//import FlexBoxV3 from './components/layout/FlexBoxV3';
//import FlexBoxV2 from './components/layout/FlexBoxV2';
//import FlexboxV1 from './components/layout/FlexBoxV1'
//import Quadrado from './components/layout/Quadrado'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import UsuarioLogado from './components/UsuarioLogado'
// import Pai from './components/relacao/Pai'
// import Filho from './components/relacao/Filho'
//import ParImpar from './components/ParImpar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo';
//import Aleatorio from './components/Aleatorio' 
//import X, { Comp1, Comp2} from './components/Multi';
//import MinMax from './components/MinMax'
//import Primeiro from './components/Primeiro'

export default () => (
    <View style={style.App}>
        <Mega qtdeNumeros={6} />
        {/*
        <FlexBoxV4 />
        <FlexBoxV2 />
        <Quadrado />
        <DigiteSeuNome />
        <ListaProdutos />
        <ListaProdutosV2 />
      <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gmail.com'}} />
        <Pai>
            <Filho nome="Bia" sobrenome="Arruda" />
            <Filho nome="Carlos" sobrenome="Arruda" />
        </Pai>
        <Pai>
            <Filho nome="Ana" sobrenome="Arruda" />
            <Filho nome="Julia" sobrenome="Arruda" />
        </Pai>
        <ParImpar num={3} />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} />
        <Botao />
        <Titulo principal="Cadastro Produto"
        secundario ="Tela de Cadastro do Produto" />

         <MinMax min="3" max="20" />
        <MinMax min="1" max="94" />
        <X />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
        {/* <Aleatorio min={10} max={60}        />
        <Aleatorio min={10} max={60}        />
        <Aleatorio min={10} max={60}        />
        <Aleatorio min={10} max={60}        />
        <Aleatorio min={10} max={60}        />
        <Aleatorio min={10} max={60}        /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow:1,
        justifyContent:"center",
        alignItems: "center",
        padding: 20
        
    }
})