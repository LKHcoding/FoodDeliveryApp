import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import EachOrder from '../components/EachOrder';
import { Order } from '../slices/order';
import { RootState } from '../store/reducer';

interface Props {}

const Orders = (props: Props) => {
  const orders = useSelector((state: RootState) => state.order.orders);
  return (
    // {/* 스크롤뷰는 지양 하자.(화면에 모든게 렌더링되면 성능 이슈있을수있음) */}
    // {/* FlatList 활용 지향 */}
    <FlatList
      data={orders}
      keyExtractor={item => item.orderId}
      renderItem={({ item }: { item: Order }) => {
        return <EachOrder item={item} />;
      }}
    />
  );
};

export default Orders;
