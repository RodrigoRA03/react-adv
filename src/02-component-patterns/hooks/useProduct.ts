import { useState } from 'react';

const useProduct = (initalNumber:number = 0) => {
    const [ counter , setCounter ] = useState(initalNumber);

    const increaseBy = (value:number) =>{
        setCounter(prev => Math.max( prev + value , 0));
    }

    return{
        counter,
        increaseBy
    }
};

export default useProduct;