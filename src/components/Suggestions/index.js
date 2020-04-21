import React from 'react';

import {Container, Option, Img, Label} from './styles';

import {items} from './images';

export default function Suggestions() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}
