import { Link, useParams } from "react-router-dom";
import { Product } from "../../types/product";
import Spinner from "../Spinner";

interface Props {
    products: Array<Product>;
}

interface RouteParams {
    category: string;
}

function ProductList(props: Props) {
    const { category } = useParams<RouteParams>();
    const renderedProductList = props.products?.filter((product) => product.category === category || category === undefined).map((product) => {
        return (<li key={product.id}><Link to={`/products/${product.id}`}><div className="product-container"><img src={product.imageUrl} alt="Bild" /><p>{product.name}</p></div></Link></li>);
    });
    return (
        <div className="ProductList">
            {props.products
                ? <ul>{renderedProductList}</ul>
                : <Spinner />
            }
        </div>
    );
}

export default ProductList;