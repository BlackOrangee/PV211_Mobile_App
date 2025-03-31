import {Text, TouchableOpacity, View} from 'react-native';
import api from '../utils/api.ts';
import React, {useState, useEffect} from 'react';
import {removeFromFavorite} from "../store/slices/cartSlice.ts";
import {useDispatch} from "react-redux";

interface FavoriteProps {
  productId: string | number;
}

interface FavoriteProductsState {
  id: number,
  title: string,
}

const ProductFavorite = ({productId}: FavoriteProps) => {
  const [product, setProduct] = useState<FavoriteProductsState>();
  const dispatch = useDispatch();
  useEffect(() => {
    api.getOne('products', productId).then(res => {
      setProduct(res);
    });
  }, [productId]);
  return (
      <View >
        <Text>{product?.title}</Text>
        <View>
          <TouchableOpacity
              onPress={() => {
                dispatch(removeFromFavorite(product?.id as number));
              }}>
            <Text
                style={{
                  color: 'red',
                }}>
              Видалити
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default ProductFavorite;
