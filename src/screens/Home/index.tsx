import React from 'react';
import { Image, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { AssetList } from '../../components/AssetList';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://github.com/antoniogalvao.png' }}
          />
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.username}>Antonio Galvão</Text>
          </View>
        </View>
        <View style={styles.bellContainer}>
          <FontAwesome5 name='bell' size={24} color='black' />
        </View>
      </View>

      <View style={styles.portfolio}>
        <View>
          <Text style={styles.portfolioTitle}>Total Portfolio</Text>
          <Text style={styles.portfolioValue}>$56.98</Text>
        </View>

        <View style={styles.portfolioBox}>
          <Feather
            style={styles.portfolioArrow}
            name='arrow-up-right'
            size={24}
            color='black'
          />
          <Text style={styles.portfolioPercentage}>15.93%</Text>
        </View>
      </View>

      <View style={styles.assetsContainer}>
        <View style={styles.assetsHeader}>
          <Text style={styles.title}>Your assets</Text>
          <Text style={styles.subtitle}>Show more</Text>
        </View>
        <AssetList />
      </View>

      <View>
        <View style={styles.watchlistContainer}>
          <View style={styles.watchlistHeader}>
            <Text style={styles.title}>Watchlist</Text>
            <View style={styles.watchlistContent} />
          </View>
        </View>

        <View></View>
      </View>
    </View>
  );
}
