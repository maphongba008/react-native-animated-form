# react-native-animated-form
Animated form for both Android and iOS


## Installation

```bash
npm install --save react-native-animated-form
```

## Demo
![](https://raw.githubusercontent.com/maphongba008/react-native-animated-form/master/anim.gif)

## Usage

```javascript
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import AnimatedForm from 'react-native-animated-form';
import Background from './bg.jpg';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);
export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={[StyleSheet.absoluteFill, {width: null, height: null}]} source={Background} />
                <AnimatedForm delay={100} distance={5}>
                    <AnimatedInput placeholder='User name' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='Email' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='Password' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='Confirm password' underlineColorAndroid='transparent' style={styles.text} />

                    <Animated.View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: '#fff'}}>Register</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </AnimatedForm>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#919191',
    },
    text: {
        width: 250,
        height: 35,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
      },
      buttonView: {
        height: 40,
        marginTop: 10,
        backgroundColor: "tomato",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
      },
      button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
});

```

## Properties

 name                  | description                                 | type     | default
:--------------------- |:------------------------------------------- | --------:|:------------------
 delay (ms)            | The delay between components in form        |   Number | 100
 distance              | The distance that component will move       |   Number | 5

## Warning
All component in AnimatedForm must be animated.

## Copyright and License

MIT License

Copyright (c) 2018 maphongba008