
import { useProduct } from "../hooks/useProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function Datagrid() {
    const { data = [], isLoading, isError } = useProduct();
    const dispatch = useDispatch();

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

    function handleAddItem(item) {
        dispatch(addToCart(item));
    }

    return (
        <div className="w-full p-6">
            <ul className="grid grid-cols-4 gap-8">
                {data.map((product) => (
                    <li
                        key={product._id}
                        className="
                            bg-white
                            rounded-2xl
                            border border-pink-100
                            shadow-md
                            p-5
                            hover:shadow-xl
                            hover:-translate-y-1
                            transition-all duration-300
                            flex flex-col
                            h-[430px]
                        "
                    >
                        {/* Image */}
                        <div
                            className="
                                h-60 w-70
                                mx-auto
                                bg-pink-50
                                rounded-xl
                                overflow-hidden
                                flex justify-center items-center
                                shrink-0
                                shadow-sm
                            "
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="
                                    h-full w-full
                                    object-cover
                                    rounded-xl
                                    hover:scale-105
                                    transition-transform duration-300
                                "
                            />
                        </div>

                        {/* Details */}
                        <div className="mt-4 flex flex-col flex-1">

                            {/* Product name */}
                            <h2 className="
                                text-xl
                                font-bold
                                text-gray-800
                                line-clamp-1
                            ">
                                {product.name}
                            </h2>

                            {/* Description */}
                            <p
                                className="
                                    text-gray-500
                                    text-sm
                                    mt-2
                                    line-clamp-3
                                    leading-5
                                    min-h-[30px]
                                "
                            >
                                {product.describe}
                            </p>

                            {/* Price + Button */}
                            <div
                                className="
                                    flex
                                    justify-between
                                    items-center
                                    pt-4
                                    border-t
                                    border-pink-100
                                "
                            >
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Price
                                    </p>

                                    <span className="
                                        text-xl
                                        font-bold
                                        text-pink-500
                                    ">
                                        ₹{product.price}
                                    </span>
                                </div>

                                <button
                                    onClick={() => handleAddItem(product)}
                                    className="
                                        bg-pink-500
                                        text-white
                                        px-4 py-2
                                        rounded-xl
                                        font-semibold
                                        shadow-sm
                                        hover:bg-pink-600
                                        hover:shadow-md
                                        active:scale-95
                                        transition-all
                                        duration-200
                                    "
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

