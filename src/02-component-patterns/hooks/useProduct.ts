import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interface/interfaces';

interface useProductArgs {
    product:Product;
    onChange?:(args:onChangeArgs)=> void;
    value?:number;
}

const useProduct = ({onChange , product , value = 0}:useProductArgs) => {
    const [ counter , setCounter ] = useState(value);
    const isControlled =  useRef(!!onChange);

    const increaseBy = (value:number) =>{

        if(isControlled){
            return onChange!({count:value , product})
        }
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