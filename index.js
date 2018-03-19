import PropTypes from 'prop-types'
import React, {Component} from 'react';
import { View, Animated} from 'react-native';


export default class AnimatedForm extends React.PureComponent {
    constructor(props) {
        super(props);
        const numberOfChildren = React.Children.toArray(props.children).length;
        this.state = {
            animations: [...new Array(numberOfChildren)].map(a => new Animated.Value(0)),
        }
    }

    componentDidMount() {
        const animated = this.state.animations.map(animation => {
            return Animated.timing(animation, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        });
        Animated.stagger(this.props.delay, animated).start(() => {
            // fix text input opacity was set to 0
            this.forceUpdate();
        });
    }

    render() {
        const children = React.Children.toArray(this.props.children);
        const {animations} = this.state;
        const elements = children.map((element, index) => {
            const translateY = animations[index].interpolate({
                inputRange: [0, 1],
                outputRange: [-this.props.distance, 0]
            });
            const style = [element.props.style, {
                opacity: animations[index],
                transform: [
                    {
                        translateY
                    }
                ]
            }];
            return React.cloneElement(element, {style});
        });

        return <View style={this.props.style}>{elements}</View>
    }

}

AnimatedForm.defaultProps = {
    delay: 100,
    distance: 5
};

AnimatedForm.propTypes = {
    children: PropTypes.any,
    delay: PropTypes.number,
    distance: PropTypes.number,
    style: PropTypes.any,
};