import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interface/interfaces';

interface useProductArgs {
    product:Product;
    onChange?:(args:onChangeArgs)=> void;
    value?:number;
    initialValues?:InitialValues;
}

const useProduct = ({onChange , product , value = 0 , initialValues}:useProductArgs) => {
    
    const [ counter , setCounter ] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    const maxCount = initialValues?.maxCount;

    const increaseBy = (value:number) =>{        
        let NewValue = Math.max( counter + value , 0);
        if(initialValues?.maxCount){
            NewValue = Math.min(NewValue , initialValues?.maxCount);
        }
        
        setCounter(NewValue);
        onChange && onChange({count:NewValue , product});
    }

    const reset = () =>{
        setCounter(initialValues?.count || value);
    }

    useEffect(()=>{
        if(!isMounted.current) return;
        setCounter(value);
    },[value]);

    useEffect(()=>{
       isMounted.current = true;
    },[]);


    return{
        counter,
        maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        increaseBy,
        reset
    }
};

export default useProduct;