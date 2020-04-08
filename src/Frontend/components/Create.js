import React from 'react'
import {View, Button, TextInput} from 'react-native'

class Create extends React.Component {
    render () {
        return (
            <View style={{marginTop: 30}}>
                <TextInput style={{ marginLeft: 5, marginRight: 5, height: 50, borderColor: '#088554', borderWidth: 1, paddingLeft: 5 }} placeholder="Joueur 1"/>
                <Button style={{height: 50}} title="Valider" onPress={() => {}}/>
            </View>
        )
    }
}

export default Create