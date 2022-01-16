import { ProductButtons, ProductImage, ProductTitle } from "../components";
import {ProductCard} from "../components/ProductCard";

const product = {
    id:1,
    title:'No tengo productos',
    img:'/coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display:'flex',
                
            }}>
            <ProductCard product={product}>
               <ProductCard.Image/>
               <ProductCard.Title/>
               <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product}>
               <ProductImage/>
               <ProductTitle/>
               <ProductButtons/>
            </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;