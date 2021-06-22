import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProduct } from '../api/api';
import Spinner from '../components/Spinner';
import Product from '../types/product';
import './ProductPage.scss';

interface RouteParams {
    id: string;
}

function ProductPage() {
    const { id } = useParams<RouteParams>();
    const [product, setProduct] = useState<Product>();
    const renderProduct = (product: Product) => {
        if (product) {
            return (
                <>
                    {product
                        ? <>
                            <h2 className="product-name">{product.name}</h2>
                            <div className="product-description">{product.description}</div>
                            <div className="product-image">
                                <img src={product.imageUrl} alt="Bild på produkt" />
                            </div>
                        </>
                        : <Spinner />
                    }
                </>
            );
        }
    };
    useEffect(() => {
        getProduct(id)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => console.error(error));
    }, [id]);
    return (
        <div className="ProductPage">
            {renderProduct(product!)}
        </div>
    );
}

export default ProductPage;
