declare module 'lottie-react-native' {
    import { Component } from 'react';
    import { ViewProps } from 'react-native';

    interface LottieViewProps extends ViewProps {
        source: any;
        autoPlay?: boolean;
        loop?: boolean;
        speed?: number;
        progress?: number;
        resizeMode?: 'cover' | 'contain' | 'center';
        style?: any;
        ref?: any;
    }

    export default class LottieView extends Component<LottieViewProps> { }
}