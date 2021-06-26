import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product";

function ProductFilter(props: ProductProps) {
    const categoriesSet = new Set(props.products.map((product) => product.category));
    const categories = Array.from(categoriesSet);
    const renderedCategoryList = categories.map((product) => {
        return (<li key={product}><Link to={`/products/category/${product}`}><div className="productCategory-container"><p>{product}</p></div></Link></li>);
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