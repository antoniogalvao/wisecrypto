import React from 'react';

import { ScrollView, ScrollViewProps } from 'react-native';
import { CurrencyCard } from '../CurrencyCard';

import { styles } from './styles';

import { currencies } from '../../mocks/currencies';

type Props = ScrollViewProps;

export function CurrencyList({ ...rest }: Props) {
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
