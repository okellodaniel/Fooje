import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './search-bar.styles';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
                <View style={styles.searchField}>
                    <Link href={'/'} />
                    <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name='options' size={20} color={Colors.primary}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SearchBar;