import { useProduct } from "../hooks/useProduct";
import {useDispatch} from "react-redux";
import {addToCart} from "../store/cartSlice";
export default function Datagrid() {
    const { data = [], isLoading, isError } = useProduct();
    const dispatch=useDispatch();
    if (isLoading) {
        return (
            <div className="w-full p-6 text-center">
                Loading products...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full p-6 text-center text-red-500">
                Failed to load products.
            </div>
        );
    }
    
    function handleAddItem(item){
        dispatch(addToCart(item));
    }
    return (
        <div className="w-full p-6">
            <ul className="grid grid-cols-3 gap-8">
                {data.map((product) => (
                    <li
                        key={product._id}
                        className="bg-white rounded-2xl shadow-lg p-5
                        hover:shadow-2xl transition duration-300"
                    >
                        {/* Image */}
                        <div
                            className="h-40 bg-pink-100 rounded-xl
                            flex justify-center items-center"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="h-full w-full object-cover rounded-xl"
                            />
                        </div>

                        {/* Details */}
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">
                                {product.name}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Fresh and delicious
                            </p>

                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold text-pink-500">
                                    ₹{product.price}
                                </span>

                                <button
                                    onClick={()=>handleAddItem(product)}
                                    className="bg-pink-500 text-white
                                    px-4 py-2 rounded-lg
                                    hover:bg-pink-600 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}