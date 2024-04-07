import { useLoaderData} from "react-router-dom";
import Product from "../Product/Product";



const Products = () => {


    const { products } = useLoaderData()

    return (
        <div className="container mx-auto mt-10">
           
           {
            
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
           }
            
        </div>
    );
};

export default Products;