import React from 'react';

import { ScrollView, ScrollViewProps } from 'react-native';
import { CurrencyCard } from '../CurrencyCard';

import { styles } from './styles';

type Props = ScrollViewProps;

export function CurrencyList({ ...rest }: Props) {
  const currencies = [
    {
      id: '1',
      code: 'BTC',
      name: 'Bitcoin',
      unitValue: '$54,382.64',
      increase: '15.3',
    },
    {
      id: '2',
      code: 'ETH',
      name: 'Etherium',
      unitValue: '$4,145.61',
      increase: '-2.1',
    },
    {
      id: '3',
      code: 'LTC',
      name: 'Litecoin',
      unitValue: '$207.3',
      increase: '-1.1',
    },
    {
      id: '4',
      code: 'SOL',
      name: 'Solana',
      unitValue: '$227.93',
      increase: '15.3',
    },
    {
      id: '5',
      code: 'XRP',
      name: 'Ripple',
      unitValue: '$1.0358',
      increase: '15.3',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      {...rest}
    >
      {currencies.map((currency) => (
        <CurrencyCard
          key={currency.id}
          code={currency.code}
          name={currency.name}
          unitValue={currency.unitValue}
          increase={currency.increase}
        />
      ))}
    </ScrollView>
  );
}
