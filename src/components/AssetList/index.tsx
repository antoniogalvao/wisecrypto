import React from 'react';

import { ScrollView } from 'react-native';
import { AssetCard } from '../AssetCard';

import { styles } from './styles';

import { assets } from '../../mocks/assets';

export function AssetList() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {assets.map((asset) => (
        <AssetCard
          key={asset.id}
          code={asset.code}
          name={asset.name}
          amount={asset.amount}
          value={asset.value}
          increase={asset.increase}
        />
      ))}
    </ScrollView>
  );
}
