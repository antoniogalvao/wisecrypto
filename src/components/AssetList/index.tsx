import React from 'react';

import { ScrollView } from 'react-native';
import { AssetCard } from '../AssetCard';

import { styles } from './styles';

export function AssetList() {
  const assets = [
    {
      id: '1',
      code: 'BTC',
      name: 'Bitcoin',
      icon: 'bitcoin.png',
      amount: '0.00012',
      value: '26.46',
      increase: '15.3',
    },
    {
      id: '2',
      code: 'ETH',
      name: 'Etherium',
      icon: 'bitcoin.png',
      amount: '0.00012',
      value: '37.30',
      increase: '-15.3',
    },
    {
      id: '3',
      code: 'LTC',
      name: 'Litecoin',
      icon: 'bitcoin.png',
      amount: '0.00012',
      value: '89.40',
      increase: '-1.1',
    },
    {
      id: '4',
      code: 'SOL',
      name: 'Solana',
      icon: 'bitcoin.png',
      amount: '0.00012',
      value: '142.50',
      increase: '15.3',
    },
    {
      id: '5',
      code: 'XRP',
      name: 'Ripple',
      icon: 'bitcoin.png',
      amount: '0.00012',
      value: '895.40',
      increase: '15.3',
    },
  ];

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
