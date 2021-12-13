import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Badge } from '../../components/Badge';

import { CurrencyList } from '../../components/CurrencyList';
import { SearchBar } from '../../components/SearchBar';

import { styles } from './styles';

import { badges } from '../../mocks/badges';

export function Market() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.badgeList}
        >
          {badges.map((badge) => (
            <Badge
              key={badge.id}
              label={badge.label}
              isSelected={badge.isSelected}
            />
          ))}
        </ScrollView>
      </View>
      <CurrencyList />
    </View>
  );
}
