import React, {useState} from 'react';
import {Switch} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  LabelAction,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [balanceUse, setBalanceUse] = useState(true);

  function handleBanlanceVisible() {
    setBalanceVisible((prevState) => !prevState);
  }

  function handleBanlanceUse() {
    setBalanceUse((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header
        colors={balanceUse ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{balanceVisible ? '0,00' : '----'}</Bold>
            </Value>

            <EyeButton>
              <Feather
                name={balanceVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#fff"
                onPress={handleBanlanceVisible}
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash-usd" size={26} color="#fff" />
              <LabelAction>Adicionar</LabelAction>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <LabelAction>Retirar</LabelAction>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={balanceUse} onValueChange={handleBanlanceUse} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0DB060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0DB060"
            />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
}
