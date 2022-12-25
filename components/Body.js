import { Text, View, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <View>
        <Text>Body</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});