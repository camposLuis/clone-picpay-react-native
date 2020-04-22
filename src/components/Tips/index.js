import React from 'react';
import {View} from 'react-native';

import {Container, Option, Title, Img} from './styles';

import {items} from './images';

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option bgColor={item.bgColor} key={item.key}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
