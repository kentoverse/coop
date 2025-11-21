import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');

interface SplashScreenProps {
    nextScreen?: string; // target screen
    duration?: number;   // duration in ms
}

export default function SplashScreen({
    nextScreen = 'Profile',
    duration = 3000,
}: SplashScreenProps) {
    const navigation = useNavigation<NavigationProp<any>>();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const animationRef = useRef<LottieView>(null);

    // Fade in
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    // Navigate after animation completes
    useEffect(() => {
        const timer = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => navigation.navigate(nextScreen));
        }, duration);

        return () => clearTimeout(timer);
    }, [fadeAnim, navigation, nextScreen, duration]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <LottieView
                ref={animationRef}
                source={require('@/assets/animations/splash.json')}
                autoPlay
                loop={false}
                style={{ width: width * 0.6, height: width * 0.6 }}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
    },
});