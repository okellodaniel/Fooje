import { View, TouchableOpacity, SafeAreaView, Image, Text } from 'react-native';
import React from 'react';
import styles from '@/components/home/header/custom-header.styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import SearchBar from '../search-bar/search-bar';

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
                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={styles.title}>Delivery · Now</Text>
                    <View style={styles.location}>
                        <Text style={styles.subtitle}>Kampala, UG</Text>
                        <Ionicons name='chevron-down-outline' size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name="person-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
            </View>
            <SearchBar/>
        </SafeAreaView>
    )
}

export default CustomHeader;