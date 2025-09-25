import { useParams, Link } from "react-router-dom";
import {products} from "../data/index.jsx";


function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Product not found.</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>

            <p className="mt-2">{product.description}</p>
            <Link to="/" className="text-blue-500 mt-4 inline-block">Back to Products</Link>
        </div>
    );
}

export default ProductDetail;
