import {products} from "../data/index.jsx";
import {Link} from "react-router-dom";


function Products (){
 return (
     <div className="p-4">
         <h1 className="text-xl font-bold mb-4">Our Products</h1>
         <ul className="space-y-2">
             {products.map((product) => (
                 <li key={product.id} className="border p-2 rounded">
                     <Link to={`/product/${product.id}`}>
                         {product.name} - ${product.title}
                     </Link>
                 </li>
             ))}
         </ul>
     </div>
 )
}
export default Products;