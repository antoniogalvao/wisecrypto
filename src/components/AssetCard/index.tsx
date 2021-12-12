import React from 'react';
import { Image, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import BitcoinImg from '../../assets/bitcoin.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  code: string;
  name: string;
  amount: string;
  value: string;
  increase: number;
};

export function AssetCard({ code, name, amount, value, increase }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={BitcoinImg} />
        </View>
        <View>
          <Text style={styles.currencyCode}>{code}</Text>
          <Text style={styles.currencyName}>{name}</Text>
        </View>
        <View
          style={[
            styles.increaseBox,
            {
              backgroundColor:
                increase < 0 ? theme.colors.danger : theme.colors.success,
            },
          ]}
        >
          <Feather
            name={increase < 0 ? 'arrow-down-left' : 'arrow-up-right'}
            size={14}
            color={theme.colors.white}
          />
          <Text style={styles.rateIncreaseText}>{increase}%</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.portfolio}>
        <View>
          <Text style={styles.portfolioLabel}>Porftolio</Text>
          <Text style={styles.portfolioValue}>${value}</Text>
        </View>
        <Text style={styles.currencyAmount}>
          {amount} {code}
        </Text>
      </View>
    </View>
  );
}
