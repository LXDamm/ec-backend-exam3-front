import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../api/api';
import Spinner from '../components/Spinner';
import { addCartProduct } from '../redux/accountSlice';
import { useAppDispatch } from '../redux/hooks';
import Product from '../types/product';
import './ProductPage.scss';

interface RouteParams {
    id: string;
}

function ProductPage() {
    const { id } = useParams<RouteParams>();
    const dispatch = useAppDispatch();
    const [product, setProduct] = useState<Product>();
    const addToCart = (productId: string) => {
        dispatch(addCartProduct(product));
    };
    useEffect(() => {
        api.getProduct(id)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => console.error(error));
    }, [id]);
    if (product) return (
        <div className="ProductPage">
            <div>
                <h2 className="product-name">{product.name}</h2>
                <div className="product-description">{product.description}</div>
                <div className="product-image">
                    <img src={product.imageUrl} alt="Bild på produkt" />
                </div>
            </div>
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
    return (<div className="ProductPage"><Spinner></Spinner></div>);
}

export default ProductPage;
