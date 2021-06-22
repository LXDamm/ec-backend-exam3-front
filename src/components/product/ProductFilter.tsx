import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product";

function ProductFilter(props: ProductProps) {
    const renderedCategoryList = props.products?.map((product) => {
        return (<li key={product.id}><Link to={`/products/category/${product.category}`}><div className="productCategory-container"><p>{product.category}</p></div></Link></li>);
    });
    return (
        <div className="ProductFilter">
            <ul className="category-list">
                {renderedCategoryList}
            </ul>
        </div>
    );
}

export default ProductFilter;