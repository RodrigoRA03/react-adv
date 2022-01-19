import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interface/interfaces';

interface useProductArgs {
    product:Product;
    onChange?:(args:onChangeArgs)=> void;
    value?:number;
}

const useProduct = ({onChange , product , value = 0}:useProductArgs) => {
    const [ counter , setCounter ] = useState(value);

    const increaseBy = (value:number) =>{
        const NewValue = Math.max( counter + value , 0);
        setCounter(NewValue);
        onChange && onChange({count:NewValue , product});
    }

    useEffect(()=>{
        setCounter(value);
    },[value]);


    return{
        counter,
        increaseBy
    }
};

export default useProduct;