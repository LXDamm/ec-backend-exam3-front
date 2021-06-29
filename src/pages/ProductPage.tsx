import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../api/api';
import Spinner from '../components/Spinner';
import { addCartProduct } from '../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Product from '../types/product';
import './ProductPage.scss';

interface RouteParams {
    productId: string;
}

function ProductPage() {
    const { productId } = useParams<RouteParams>();
    const accountId = useAppSelector((state) => {
        if (state.account) return state.account.id;
        else return null;
    });
    const dispatch = useAppDispatch();
    const [product, setProduct] = useState<Product>();
    const addToCart = (productId: string) => {
        if (accountId) {
            api.putCartProduct(accountId, productId, 1);
            dispatch(addCartProduct(productId));
        }
    };
    useEffect(() => {
        api.getProduct(productId)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((error) => console.error(error));
    }, [productId]);
    if (product) return (
        <div className="ProductPage">
            <div>
                <h2 className="product-name">{product.name}</h2>
                <div className="product-description">{product.description}</div>
                <div className="product-image">
                    <img src={product.imageUrl} alt="Bild på produkt" />
                </div>
            </div>
            {accountId &&
                <button onClick={() => addToCart(product.id)}>Add to cart</button>
            }
        </div>
    );
    return (<div className="ProductPage"><Spinner></Spinner></div>);
}

export default ProductPage;
