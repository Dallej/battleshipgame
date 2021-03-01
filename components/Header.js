import React, {Component} from 'react'
import {Text, View} from 'react-native'
import styles from '../style/style'

export default function Header() {
    
        return(
            <View style={styles.header}>
                <Text style={styles.title}> Battleship game</Text>
            </View>
        )
    
}