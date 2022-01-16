import { createContext, ReactElement } from 'react';
import useProduct from '../hooks/useProduct';
import { ProductImage , ProductButtons , ProductTitle } from './index';
import { Product, ProductContextProps } from '../interface/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const {Provider} = ProductContext;

export interface Props{
  product:Product,
  children?:ReactElement | ReactElement[],
  className?:string
}


export const ProductCard = ({ children , product , className }:Props) => {

    const { counter ,  increaseBy } = useProduct(0);

    return (
      <Provider
        value={{
          counter, 
          increaseBy, 
          product
        }}
      >
        <div className={`${styles.productCard} ${className}`}>
            {children}
        </div>
      </Provider>
        
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
