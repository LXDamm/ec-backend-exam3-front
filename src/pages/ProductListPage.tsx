import { useState, useEffect } from 'react';
import api from '../api/api';
import ProductFilter from '../components/product/ProductFilter';
import ProductList from '../components/product/ProductList';
import Product from '../types/product';
import './ProductListPage.scss';


function ProductListPage() {
    const [products, setProducts] = useState<Array<Product>>();
    useEffect(() => {
        api.getProducts()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            {products &&
                <div className="ProductListPage">
                    <ProductFilter products={products} />
                    <ProductList products={products} />
                </div>
            }
        </>
    );
}

export default ProductListPage;
