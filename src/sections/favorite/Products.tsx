import ProductFavorite from '../../components/ProductFavorite.tsx';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {clearFavorites} from '../../store/slices/cartSlice.ts';
import React from 'react';

const FProducts = () => {
  const productsIds = useSelector((state: RootState) => state.cart.favorite);
  const dispatch = useDispatch();
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          color: 'red',
          marginTop: 10,
        }}>
        Список обраних:
      </Text>
      { productsIds.length > 0 &&
        <View>
          <TouchableOpacity
            onPress={() => {
              dispatch(clearFavorites());
            }}>
            <Text
              style={{
                color: 'red',
              }}>
              Очистити обрані
            </Text>
          </TouchableOpacity>
        </View>
      }
      {productsIds.length > 0 &&
        productsIds.map((productId, index) => (
          <ProductFavorite key={index} productId={productId} />
        ))}
    </>
  );
};

export default FProducts;
