import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display:'flex',
            }}>
        
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        className="bg-dark text-white"
                        initialValues={{
                            count:4,
                            maxCount: 10,
                        }}
                        >
                            {
                                ({ count, isMaxCountReached , increaseBy,reset}) => (
                                <>
                                 <ProductImage className="custom-image" />
                                 <ProductTitle className="text-bold"/>
                                 <ProductButtons className="custom-buttons"/>
                                 <button onClick={reset}></button>
                                 <button onClick={()=>increaseBy(-2)}>-2</button>
                                 {
                                     (!isMaxCountReached && <button onClick={()=>increaseBy(2)}>+2</button>)
                                 }
                                 
                                 <p>count:{count}</p>
                                 </>   
                                )
                            }
                        
                    </ProductCard>
            
            </div>
        </div> 
    );
};

export default ShoppingPage;