import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/api";
import { Product } from "../types/product";
import Spinner from "./Spinner";

function ProductList(props: any) {
    const [products, setProducts] = useState<Array<Product>>();
    const renderedProductList = products?.map((product) => {
            return (<li key={product.id}><Link to={`/products/${product.id}`}><div className="product-container"><img src={product.imageUrl} alt="Bild" /><p>{product.name}</p></div></Link></li>);
        });
    useEffect(() => {
        getProducts()
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => console.error(error));
    }, []);
    return (
        <div className="ProductList">
        {products
            ? <ul>{renderedProductList}</ul>
            : <Spinner />
        }
        </div>
    );
}

export default ProductList;