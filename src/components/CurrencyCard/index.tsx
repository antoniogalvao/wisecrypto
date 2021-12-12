import React from 'react';
import { Image, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import BitcoinImg from '../../assets/bitcoin.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  code: string;
  name: string;
  unitValue: string;
  increase: number;
};

export function CurrencyCard({ code, name, unitValue, increase }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={BitcoinImg} />
        </View>
        <View>
          <Text style={styles.code}>{code}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.unitValue}>{unitValue}</Text>
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
    </View>
  );
}
