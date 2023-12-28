import { View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React from 'react';
import styles from '@/components/home/header/custom-header.styles';

const CustomHeader = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image
                        source={require('@/assets/images/delivery-bike.png')}
                        style={styles.bike}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CustomHeader;